/**
 * app.js - Full Interactive Application Controller
 * Manages State, Event Routing, and Live Execution of all 8 Menus.
 */

// Application State
const AppState = {
    currentSubject: 'ds',
    syllabusData: {}, // Copy of DATASETS.topics that can be modified with Undo Stack
    undoStacks: {},   // MyStack per subject
    revisionQueue: new MyQueue(), // MyQueue holding weak topics
    activeSessionTopic: null,
    timerInterval: null,
    timerSecondsLeft: 0
};

// Initialize App State
function initApp() {
    // Clone topics from DATASETS to allow live adding/deleting with MyStack Undo
    for (const key in DATASETS) {
        AppState.syllabusData[key] = JSON.parse(JSON.stringify(DATASETS[key].topics));
        AppState.undoStacks[key] = new MyStack();
    }

    renderSubjectBanner();
    renderActiveView();
    updateRevQueueBadge();
}

// =====================================================================
// SUBJECT SWITCHING & NAVIGATION
// =====================================================================
function switchSubject(subKey) {
    AppState.currentSubject = subKey;
    renderSubjectBanner();
    renderActiveView();
    showToast(`Switched to ${DATASETS[subKey].name}`, 'info');
}

function switchView(viewId) {
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));

    const targetView = document.getElementById(viewId);
    if (targetView) targetView.classList.add('active');

    const navBtn = document.querySelector(`.nav-item[data-view="${viewId}"]`);
    if (navBtn) navBtn.classList.add('active');

    renderActiveView();
}

function renderSubjectBanner() {
    const sub = DATASETS[AppState.currentSubject];
    const pillsContainer = document.getElementById('subjectPills');
    if (!pillsContainer) return;

    pillsContainer.innerHTML = '';
    for (const key in DATASETS) {
        const btn = document.createElement('button');
        btn.className = `sub-pill ${key === AppState.currentSubject ? 'active' : ''}`;
        btn.innerText = DATASETS[key].name.split(' ')[0] + (key === 'ds' ? ' (DS)' : key === 'oops' ? ' (C++)' : '');
        btn.onclick = () => switchSubject(key);
        pillsContainer.appendChild(btn);
    }

    document.getElementById('currentSubjectCode').innerText = sub.code;
    document.getElementById('currentSubjectTitle').innerText = sub.name;
}

function renderActiveView() {
    const activePanel = document.querySelector('.view-panel.active');
    if (!activePanel) return;

    const id = activePanel.id;
    if (id === 'view-pyq') renderPYQView();
    else if (id === 'view-planner') renderPlannerView();
    else if (id === 'view-syllabus') renderSyllabusView();
    else if (id === 'view-analytics') renderAnalyticsView();
    else if (id === 'view-notes') renderNotesView();
    else if (id === 'view-quiz') renderStandaloneQuizView();
    else if (id === 'view-analysis') renderAnalysisView();
    else if (id === 'view-queue') renderQueueView();
}

// =====================================================================
// MENU 1: VIEW ALL PYQs (YEAR, TOPIC, QUESTION TEXT)
// =====================================================================
function renderPYQView() {
    const sub = DATASETS[AppState.currentSubject];
    const pyqs = sub.pyqs || [];
    const container = document.getElementById('pyqListContainer');
    const yearSelect = document.getElementById('pyqYearFilter');
    const topicSelect = document.getElementById('pyqTopicFilter');
    const searchInput = document.getElementById('pyqSearchInput');

    // Populate Year and Topic Filters
    const years = ['ALL', ...new Set(pyqs.map(q => q.year))];
    yearSelect.innerHTML = years.map(y => `<option value="${y}">${y}</option>`).join('');

    const topics = ['ALL', ...new Set(pyqs.map(q => q.topicId))];
    topicSelect.innerHTML = topics.map(t => `<option value="${t}">${t}</option>`).join('');

    filterPYQs();
}

function filterPYQs() {
    const sub = DATASETS[AppState.currentSubject];
    const pyqs = sub.pyqs || [];
    const yearVal = document.getElementById('pyqYearFilter').value;
    const topicVal = document.getElementById('pyqTopicFilter').value;
    const searchVal = (document.getElementById('pyqSearchInput').value || '').toLowerCase();
    const container = document.getElementById('pyqListContainer');

    const filtered = pyqs.filter(q => {
        const matchYear = yearVal === 'ALL' || q.year === yearVal;
        const matchTopic = topicVal === 'ALL' || q.topicId === topicVal;
        const matchSearch = q.text.toLowerCase().includes(searchVal) || q.topicId.toLowerCase().includes(searchVal);
        return matchYear && matchTopic && matchSearch;
    });

    document.getElementById('pyqCountBadge').innerText = `${filtered.length} Questions Found`;

    if (filtered.length === 0) {
        container.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-muted);">No past questions matched the selected filters.</div>';
        return;
    }

    container.innerHTML = filtered.map(q => `
        <div class="card" style="margin-bottom: 0.85rem; padding: 1.15rem; border-left: 3px solid var(--accent);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem; font-size: 0.75rem; color: var(--text-muted);">
                <span><b>Exam Year:</b> ${q.year} &bull; QID: ${q.qid}</span>
                <span style="font-family: monospace; color: var(--accent); font-weight: 700;">${q.topicId}</span>
            </div>
            <div style="font-size: 0.9rem; color: var(--text-primary);">${q.text}</div>
        </div>
    `).join('');
}

// =====================================================================
// MENU 2: START A FULL STUDY SESSION (2-ROUND DYNAMIC PLANNER)
// =====================================================================
function renderPlannerView() {
    const subKey = AppState.currentSubject;
    const topics = AppState.syllabusData[subKey] || [];
    const container = document.getElementById('knownTopicsChecklist');

    container.innerHTML = topics.map(t => `
        <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem; color: var(--text-secondary); cursor: pointer;">
            <input type="checkbox" value="${t.id}" class="known-topic-chk">
            <span>${t.name}</span>
        </label>
    `).join('');
}

function runStudyPlanner() {
    const subKey = AppState.currentSubject;
    const subData = {
        ...DATASETS[subKey],
        topics: AppState.syllabusData[subKey]
    };
    const hours = parseFloat(document.getElementById('studyHoursInput').value) || 6;
    const completedIds = Array.from(document.querySelectorAll('.known-topic-chk:checked')).map(c => c.value);

    // Call 2-Round Greedy Algorithm Engine
    const planResult = StudyPlanEngine.generatePlan(subData, hours, completedIds);

    const planContainer = document.getElementById('generatedPlanContainer');
    document.getElementById('planStatsSummary').innerHTML = `
        <span>Allocated: <b>${planResult.totalAllocatedMinutes} mins</b></span> &bull;
        <span>Buffer / Revision: <b>${planResult.bufferMinutes} mins</b></span> &bull;
        <span>Sessions: <b>${planResult.sessions.length}</b></span>
    `;

    if (planResult.sessions.length === 0) {
        planContainer.innerHTML = '<div style="padding: 2rem; color: var(--text-muted); text-align: center;">No topics could be scheduled within the given hours. Try increasing available hours.</div>';
        return;
    }

    planContainer.innerHTML = planResult.sessions.map(s => `
        <div class="plan-card">
            <div>
                <div class="plan-order">Session #${s.sessionNumber} &bull; Priority: ${s.priority}</div>
                <div class="plan-title">${s.name}</div>
                ${s.missingPrereqs.length > 0 ? `<div style="font-size: 0.72rem; color: var(--accent-rose); margin-bottom: 0.35rem;">⚠️ Prereq Reminder: Study ${s.missingPrereqs.join(', ')} first!</div>` : ''}
            </div>
            <div class="plan-stats">
                <span>Core: <b>${s.allocatedMinutes} mins</b> ${s.revisionBufferMinutes ? `(+${s.revisionBufferMinutes}m buffer)` : ''}</span>
                <button class="btn btn-primary" style="padding: 0.3rem 0.65rem; font-size: 0.75rem;" onclick="launchStudyRoom('${s.id}')">Start Session</button>
            </div>
        </div>
    `).join('');

    showToast(`Generated ${planResult.sessions.length} study sessions using 2-Round Greedy Heap!`, 'success');
}

// Interactive Study Room Modal
function launchStudyRoom(topicId) {
    const sub = DATASETS[AppState.currentSubject];
    const topic = (AppState.syllabusData[AppState.currentSubject] || []).find(t => t.id === topicId) || { name: topicId };
    AppState.activeSessionTopic = topicId;

    document.getElementById('modalTopicTitle').innerText = topic.name;
    document.getElementById('modalTopicCode').innerText = topicId;

    // Load actual Notes & Links
    const notesData = (sub.notes || {})[topicId] || { bullets: ["Review core textbook chapters and past paper problems."], links: [] };
    const notesContainer = document.getElementById('modalNotesContainer');
    notesContainer.innerHTML = `
        <div style="margin-bottom: 1rem;">
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--accent); margin-bottom: 0.4rem;">Key Examination Notes:</div>
            <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
                ${notesData.bullets.map(b => `<li style="margin-bottom: 0.4rem;">${b}</li>`).join('')}
            </ul>
        </div>
        ${notesData.links.length > 0 ? `
            <div>
                <div style="font-weight: 700; font-size: 0.85rem; color: var(--accent-indigo); margin-bottom: 0.4rem;">Recommended Video Lectures:</div>
                ${notesData.links.map(l => `<a href="${l.url}" target="_blank" style="display: block; font-size: 0.82rem; color: var(--accent); text-decoration: none; margin-bottom: 0.25rem;">🔗 ${l.title}</a>`).join('')}
            </div>
        ` : ''}
    `;

    // Start 15 minute timer
    startTimer(15 * 60);

    // Open Modal
    document.getElementById('studyModal').classList.add('active');
}

function startTimer(seconds) {
    clearInterval(AppState.timerInterval);
    AppState.timerSecondsLeft = seconds;
    updateTimerDisplay();

    AppState.timerInterval = setInterval(() => {
        if (AppState.timerSecondsLeft > 0) {
            AppState.timerSecondsLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(AppState.timerInterval);
            showToast("Study session completed! Proceed to evaluation quiz.", 'info');
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(AppState.timerSecondsLeft / 60);
    const s = AppState.timerSecondsLeft % 60;
    const str = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    document.getElementById('sessionTimer').innerText = str;
}

function closeStudyModal() {
    clearInterval(AppState.timerInterval);
    document.getElementById('studyModal').classList.remove('active');
}

function completeSessionAndQuiz() {
    closeStudyModal();
    const tid = AppState.activeSessionTopic;
    switchView('view-quiz');
    // Launch quiz filtered for this topic
    startTopicQuiz(tid);
}

// =====================================================================
// MENU 3: MODIFY SYLLABUS (WITH MyStack UNDO ENGINE)
// =====================================================================
function renderSyllabusView() {
    const subKey = AppState.currentSubject;
    const topics = AppState.syllabusData[subKey] || [];
    const tbody = document.getElementById('syllabusTableBody');
    const undoBtn = document.getElementById('syllabusUndoBtn');

    // Update Undo button state based on MyStack.empty()
    const stack = AppState.undoStacks[subKey];
    undoBtn.disabled = stack.empty();
    undoBtn.innerText = stack.empty() ? '↺ Undo (Empty Stack)' : `↺ Undo (${stack.size()} in MyStack)`;

    tbody.innerHTML = topics.map((t, index) => `
        <tr>
            <td style="font-weight: 700; color: var(--accent); font-family: monospace;">${t.id}</td>
            <td>${t.unit}</td>
            <td style="font-weight: 600; color: var(--text-primary);">${t.name}</td>
            <td>${t.baseMinutes} mins</td>
            <td>${'★'.repeat(t.difficulty)}${'☆'.repeat(5 - t.difficulty)}</td>
            <td>
                <button class="btn btn-danger" style="padding: 0.25rem 0.55rem; font-size: 0.72rem;" onclick="deleteTopicFromSyllabus(${index})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function openAddTopicModal() {
    document.getElementById('addTopicModal').classList.add('active');
}

function closeAddTopicModal() {
    document.getElementById('addTopicModal').classList.remove('active');
}

function submitNewTopic() {
    const subKey = AppState.currentSubject;
    const id = document.getElementById('newTopicId').value.trim().toUpperCase();
    const unit = document.getElementById('newTopicUnit').value.trim();
    const name = document.getElementById('newTopicName').value.trim();
    const minutes = parseInt(document.getElementById('newTopicMinutes').value) || 60;
    const diff = parseInt(document.getElementById('newTopicDiff').value) || 3;

    if (!id || !name) {
        alert("Please enter a valid Topic ID and Name.");
        return;
    }

    // 1. Push previous state to MyStack for Undo
    const stack = AppState.undoStacks[subKey];
    stack.push({
        action: 'ADD',
        previousList: JSON.parse(JSON.stringify(AppState.syllabusData[subKey])),
        topicName: name
    });

    // 2. Add topic to active syllabus
    AppState.syllabusData[subKey].push({
        id: id,
        unit: unit,
        name: name,
        baseMinutes: minutes,
        difficulty: diff,
        freq: 1,
        marks: 10
    });

    closeAddTopicModal();
    renderSyllabusView();
    showToast(`Added '${name}' to syllabus. Pushed to MyStack!`, 'success');
}

function deleteTopicFromSyllabus(index) {
    const subKey = AppState.currentSubject;
    const topicToDelete = AppState.syllabusData[subKey][index];

    // 1. Push previous state to MyStack for Undo
    const stack = AppState.undoStacks[subKey];
    stack.push({
        action: 'DELETE',
        previousList: JSON.parse(JSON.stringify(AppState.syllabusData[subKey])),
        topicName: topicToDelete.name
    });

    // 2. Remove topic
    AppState.syllabusData[subKey].splice(index, 1);

    renderSyllabusView();
    showToast(`Deleted '${topicToDelete.name}'. Action pushed to MyStack.`, 'warning');
}

function undoSyllabusChange() {
    const subKey = AppState.currentSubject;
    const stack = AppState.undoStacks[subKey];

    if (stack.empty()) {
        showToast("Undo Stack is empty!", 'warning');
        return;
    }

    // Pop from handwritten MyStack
    const lastAction = stack.pop();
    AppState.syllabusData[subKey] = lastAction.previousList;

    renderSyllabusView();
    showToast(`Popped from MyStack: Reverted ${lastAction.action} on '${lastAction.topicName}'!`, 'info');
}

// =====================================================================
// MENU 4: VIEW STORED DATA (MAX-HEAP, BST SEARCH, GRAPH TOPOLOGY)
// =====================================================================
function renderAnalyticsView() {
    const subKey = AppState.currentSubject;
    const subData = DATASETS[subKey];
    const topics = AppState.syllabusData[subKey] || [];

    // 1. Max-Heap Priority Rankings
    const maxHeap = new MaxHeap();
    topics.forEach(t => {
        const copy = { ...t };
        copy.priority = StudyPlanEngine.calculateTopicPriority(copy);
        maxHeap.push(copy);
    });

    const heapTbody = document.getElementById('heapRankingTbody');
    heapTbody.innerHTML = '';
    let rank = 1;

    while (!maxHeap.empty()) {
        const t = maxHeap.pop();
        const tr = document.createElement('tr');
        const badgeClass = rank === 1 ? 'rank-gold' : rank === 2 ? 'rank-silver' : rank === 3 ? 'rank-bronze' : 'rank-def';
        tr.innerHTML = `
            <td><span class="rank-pill ${badgeClass}">${rank++}</span></td>
            <td style="font-weight: 700; color: var(--accent); font-family: monospace;">${t.id}</td>
            <td style="font-weight: 600; color: var(--text-primary);">${t.name}</td>
            <td>${t.freq || 1} past exams</td>
            <td>${((t.marks || 10) / (t.freq || 1)).toFixed(1)} marks</td>
            <td>${t.baseMinutes} mins</td>
            <td><span class="score-badge">${t.priority}</span></td>
        `;
        heapTbody.appendChild(tr);
    }

    // 2. PrereqGraph Topological Ordering
    const graph = new PrereqGraph();
    (subData.prereqs || []).forEach(e => graph.addEdge(e.from, e.to));
    const topo = graph.topologicalSort();
    const topoContainer = document.getElementById('topoOrderFlow');
    topoContainer.innerHTML = topo.map((id, idx) => `
        <span style="display: inline-flex; align-items: center; gap: 0.4rem; background: var(--bg-card); border: 1px solid var(--border); padding: 0.35rem 0.65rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700; color: var(--accent);">
            #${idx + 1} ${id}
        </span>
    `).join(' <span style="color: var(--text-muted);">&rarr;</span> ');

    // 3. Build TopicBST for O(log N) lookup
    const bst = new TopicBST();
    topics.forEach(t => bst.insert(t.id, t));
    window.currentBST = bst;
}

function searchTopicBST() {
    const key = document.getElementById('bstSearchInput').value.trim();
    const resultBox = document.getElementById('bstSearchResult');
    if (!key || !window.currentBST) {
        resultBox.innerHTML = '';
        return;
    }

    // O(log N) BST Search
    const found = window.currentBST.search(key);
    if (found) {
        resultBox.innerHTML = `
            <div style="background: rgba(56, 189, 248, 0.1); border: 1px solid var(--accent); padding: 0.85rem; border-radius: 8px; margin-top: 0.5rem;">
                <div style="font-weight: 700; color: var(--accent);">${found.name} (${found.id})</div>
                <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
                    Unit: ${found.unit} &bull; Time: ${found.baseMinutes} mins &bull; Difficulty: ${found.difficulty}/5
                </div>
            </div>
        `;
    } else {
        resultBox.innerHTML = `<div style="font-size: 0.8rem; color: var(--accent-rose); margin-top: 0.5rem;">No exact match found in Binary Search Tree for '${key}'.</div>`;
    }
}

// =====================================================================
// MENU 5: STUDY NOTES AND VIDEO LINKS
// =====================================================================
function renderNotesView() {
    const sub = DATASETS[AppState.currentSubject];
    const notesData = sub.notes || {};
    const select = document.getElementById('notesTopicSelect');
    const container = document.getElementById('notesContentContainer');

    const topicIds = Object.keys(notesData);
    select.innerHTML = topicIds.map(tid => `<option value="${tid}">${tid}</option>`).join('');

    if (topicIds.length > 0) {
        displayTopicNotes(topicIds[0]);
    } else {
        container.innerHTML = '<div style="color: var(--text-muted);">No notes available for this subject.</div>';
    }
}

function displayTopicNotes(topicId) {
    const sub = DATASETS[AppState.currentSubject];
    const data = (sub.notes || {})[topicId];
    const container = document.getElementById('notesContentContainer');
    if (!data) return;

    container.innerHTML = `
        <div class="card" style="border-left: 4px solid var(--accent);">
            <div style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">
                Comprehensive Exam Notes: <span style="color: var(--accent); font-family: monospace;">${topicId}</span>
            </div>
            <ul style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.25rem;">
                ${data.bullets.map(b => `<li style="margin-bottom: 0.5rem;">${b}</li>`).join('')}
            </ul>
            ${data.links && data.links.length > 0 ? `
                <div style="border-top: 1px solid var(--border); padding-top: 0.85rem;">
                    <div style="font-size: 0.85rem; font-weight: 700; color: var(--accent-indigo); margin-bottom: 0.4rem;">Recommended Video Resources:</div>
                    ${data.links.map(l => `<a href="${l.url}" target="_blank" style="display: block; font-size: 0.82rem; color: var(--accent); text-decoration: none; margin-bottom: 0.35rem;">🔗 ${l.title}</a>`).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

// =====================================================================
// MENU 6: STANDALONE EVALUATION TEST (PRACTICE MCQS)
// =====================================================================
let currentTestQuestions = [];
let testAnswers = {};

function renderStandaloneQuizView() {
    const sub = DATASETS[AppState.currentSubject];
    const allQuizzes = sub.quizzes || [];

    // Pick 5 random questions for a complete evaluation test
    currentTestQuestions = [...allQuizzes].sort(() => 0.5 - Math.random()).slice(0, 5);
    testAnswers = {};

    const container = document.getElementById('quizQuestionsContainer');
    document.getElementById('quizResultCard').style.display = 'none';

    container.innerHTML = currentTestQuestions.map((q, idx) => `
        <div class="card" style="margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.75rem; color: var(--text-muted);">
                <span>Question #${idx + 1}</span>
                <span style="font-family: monospace; color: var(--accent);">${q.topicId}</span>
            </div>
            <div style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.85rem;">${q.question}</div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                ${q.options.map((opt, optIdx) => `
                    <label style="display: flex; align-items: center; gap: 0.65rem; background: var(--bg-card); padding: 0.65rem 0.85rem; border-radius: 8px; border: 1px solid var(--border); cursor: pointer; font-size: 0.85rem; color: var(--text-secondary);">
                        <input type="radio" name="test_q_${idx}" value="${optIdx}" onchange="recordTestAnswer(${idx}, ${optIdx})">
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function startTopicQuiz(topicId) {
    const sub = DATASETS[AppState.currentSubject];
    const allQuizzes = (sub.quizzes || []).filter(q => q.topicId === topicId);
    currentTestQuestions = allQuizzes.length > 0 ? allQuizzes.slice(0, 3) : sub.quizzes.slice(0, 3);
    testAnswers = {};

    document.getElementById('quizQuestionsContainer').innerHTML = currentTestQuestions.map((q, idx) => `
        <div class="card" style="margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.75rem; color: var(--text-muted);">
                <span>Diagnostic Check #${idx + 1}</span>
                <span style="font-family: monospace; color: var(--accent);">${q.topicId}</span>
            </div>
            <div style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.85rem;">${q.question}</div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                ${q.options.map((opt, optIdx) => `
                    <label style="display: flex; align-items: center; gap: 0.65rem; background: var(--bg-card); padding: 0.65rem 0.85rem; border-radius: 8px; border: 1px solid var(--border); cursor: pointer; font-size: 0.85rem; color: var(--text-secondary);">
                        <input type="radio" name="test_q_${idx}" value="${optIdx}" onchange="recordTestAnswer(${idx}, ${optIdx})">
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function recordTestAnswer(qIdx, optIdx) {
    testAnswers[qIdx] = optIdx;
}

function submitEvaluationTest() {
    let correctCount = 0;
    const weakTopics = [];

    currentTestQuestions.forEach((q, idx) => {
        const chosen = testAnswers[idx];
        if (chosen === q.correct) {
            correctCount++;
        } else {
            weakTopics.push(q.topicId);
        }
    });

    const scorePct = Math.round((correctCount / currentTestQuestions.length) * 100);
    const resultCard = document.getElementById('quizResultCard');
    resultCard.style.display = 'block';

    document.getElementById('quizScorePct').innerText = `${scorePct}%`;
    document.getElementById('quizScoreDetails').innerText = `You answered ${correctCount} out of ${currentTestQuestions.length} correctly.`;

    // Enqueue weak topics into MyQueue
    weakTopics.forEach(tid => {
        AppState.revisionQueue.push({
            topicId: tid,
            subject: AppState.currentSubject,
            score: scorePct,
            timestamp: new Date().toLocaleTimeString()
        });
    });

    updateRevQueueBadge();

    if (scorePct < 50) {
        showToast(`Score < 50%: ${weakTopics.length} weak topics added to MyQueue Revision Queue!`, 'warning');
    } else {
        showToast(`Diagnostic Passed! Score: ${scorePct}%`, 'success');
    }
}

// =====================================================================
// MENU 7: POST-EXAM ANALYSIS
// =====================================================================
function renderAnalysisView() {
    // Just reset inputs
}

function computePostExamVariance() {
    const expected = parseFloat(document.getElementById('examExpectedMarks').value) || 75;
    const actual = parseFloat(document.getElementById('examActualMarks').value) || 70;

    const diff = actual - expected;
    const variancePct = Math.abs((diff / expected) * 100).toFixed(1);
    const resultBox = document.getElementById('examVarianceResult');

    resultBox.style.display = 'block';
    resultBox.innerHTML = `
        <div style="font-size: 1.1rem; font-weight: 700; color: ${diff >= 0 ? 'var(--accent-emerald)' : 'var(--accent-amber)'}; margin-bottom: 0.35rem;">
            ${diff >= 0 ? 'Exceeded Forecast!' : 'Exam Variance Calculated'}
        </div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
            Expected Weightage: <b>${expected} marks</b> &bull; Actual Marks: <b>${actual} marks</b><br>
            Variance: <b>${variancePct}%</b>. The predictive PYQ frequency model maintained a <b>${(100 - variancePct).toFixed(1)}% accuracy</b> against official evaluation papers.
        </p>
    `;
}

// =====================================================================
// MENU 8: REVISION QUEUE (MyQueue FIFO DISCIPLINE)
// =====================================================================
function renderQueueView() {
    const container = document.getElementById('revisionQueueContainer');
    const items = AppState.revisionQueue.toArray();

    if (items.length === 0) {
        container.innerHTML = '<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">The Revision Queue is currently empty. Great job!</div>';
        return;
    }

    container.innerHTML = items.map((item, idx) => `
        <div class="card" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.25rem; margin-bottom: 0.75rem; border-left: 4px solid var(--accent-rose);">
            <div>
                <span style="font-size: 0.7rem; font-weight: 800; color: var(--accent-rose); text-transform: uppercase;">FIFO Queue Position #${idx + 1}</span>
                <div style="font-size: 1rem; font-weight: 700; color: var(--text-primary);">${item.topicId} (${item.subject.toUpperCase()})</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Enqueued at ${item.timestamp} &bull; Diagnostic Score: ${item.score}%</div>
            </div>
            ${idx === 0 ? `
                <button class="btn btn-primary" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" onclick="dequeueRevisionTopic()">Mark Revised & Dequeue (pop)</button>
            ` : `
                <span style="font-size: 0.75rem; color: var(--text-muted);">Waiting in MyQueue</span>
            `}
        </div>
    `).join('');
}

function dequeueRevisionTopic() {
    const popped = AppState.revisionQueue.pop();
    if (popped) {
        showToast(`Popped '${popped.topicId}' from MyQueue! Topic marked revised.`, 'success');
        updateRevQueueBadge();
        renderQueueView();
    }
}

function updateRevQueueBadge() {
    const badge = document.getElementById('navQueueBadge');
    const size = AppState.revisionQueue.size();
    if (badge) badge.innerText = size;
}

// =====================================================================
// TOAST NOTIFICATIONS
// =====================================================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerText = message;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 250);
    }, 3200);
}

// Bootstrap on DOM load
document.addEventListener('DOMContentLoaded', initApp);
