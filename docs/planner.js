/**
 * planner.js - 2-Round Greedy Study Plan Allocation Engine (Mirroring prioritiser.cpp)
 * Implements:
 * 1. Priority scoring formula: (Freq * 50) + (AvgMarks * 3) + (10 / StudyHours) * Modifiers
 * 2. Prerequisite topological dependency constraint
 * 3. Round 1: Core Target Coverage (65% base time) for top-yield topics
 * 4. Round 2: Adaptive Revision Buffer (15-20%) for weak and complex topics
 */

class StudyPlanEngine {
    constructor() {}

    // Priority formula from C++ Topic::calculatePriority()
    static calculateTopicPriority(topic) {
        const freq = topic.freq || 0;
        const totalMarks = topic.marks || 0;
        const avgMarks = freq > 0 ? (totalMarks / freq) : (totalMarks > 0 ? totalMarks : 10.0);
        const studyHours = Math.max((topic.baseMinutes || 60) / 60.0, 0.5);

        // Core formula
        let score = (freq * 50.0) + (avgMarks * 3.0) + (10.0 / studyHours);

        // Difficulty modifier (1 to 5)
        const diff = topic.difficulty || 3;
        score *= (1.0 + (diff - 1) * 0.05);

        // Quiz diagnostic modifier: Weak topics (< 50%) get +30% boost
        if (topic.quizScore !== undefined && topic.quizScore >= 0) {
            if (topic.quizScore < 50.0) {
                score *= 1.30;
            } else if (topic.quizScore < 70.0) {
                score *= 1.15;
            }
        }

        return parseFloat(score.toFixed(1));
    }

    /**
     * Generates a 2-Round Study Schedule using MaxHeap and PrereqGraph
     * @param {Object} subjectData - The subject dataset from DATASETS
     * @param {number} availableHours - Total hours entered by student
     * @param {Array<string>} completedTopicIds - Topics the student already knows
     * @returns {Object} { planSessions, droppedTopics, totalAllocatedMinutes, bufferMinutes }
     */
    static generatePlan(subjectData, availableHours, completedTopicIds = []) {
        let totalMinutes = Math.round(availableHours * 60);
        const completedSet = new Set(completedTopicIds);

        // 1. Build PrereqGraph to find dependency chain
        const graph = new PrereqGraph();
        (subjectData.prereqs || []).forEach(edge => {
            graph.addEdge(edge.from, edge.to);
        });
        const topologicalOrder = graph.topologicalSort();

        // 2. Compute Priority for all topics and build Max-Heap
        const maxHeap = new MaxHeap();
        const topicMap = {};

        subjectData.topics.forEach(t => {
            const topicCopy = { ...t };
            topicCopy.priority = this.calculateTopicPriority(topicCopy);
            topicCopy.isCompleted = completedSet.has(topicCopy.id);
            topicMap[topicCopy.id] = topicCopy;

            // Only push uncompleted topics into the priority queue
            if (!topicCopy.isCompleted) {
                maxHeap.push(topicCopy);
            }
        });

        // 3. Extract topics in priority order from Max-Heap
        const prioritizedList = [];
        while (!maxHeap.empty()) {
            prioritizedList.push(maxHeap.pop());
        }

        // 4. Round 1: Greedy Core Allocation (65% of base minutes per topic)
        const scheduledSessions = [];
        const droppedTopics = [];
        let allocatedMinutes = 0;
        let sessionOrder = 1;

        for (const topic of prioritizedList) {
            const coreMinutes = Math.round(topic.baseMinutes * 0.65);

            // Check if we have budget for this topic's core coverage
            if (allocatedMinutes + coreMinutes <= totalMinutes) {
                allocatedMinutes += coreMinutes;

                // Check prerequisites
                const missingPrereqs = [];
                (subjectData.prereqs || []).forEach(edge => {
                    if (edge.to === topic.id) {
                        const prereqTopic = topicMap[edge.from];
                        if (prereqTopic && !prereqTopic.isCompleted && !scheduledSessions.some(s => s.id === edge.from)) {
                            missingPrereqs.push(prereqTopic.name || edge.from);
                        }
                    }
                });

                scheduledSessions.push({
                    sessionNumber: sessionOrder++,
                    id: topic.id,
                    name: topic.name,
                    unit: topic.unit,
                    allocatedMinutes: coreMinutes,
                    baseMinutes: topic.baseMinutes,
                    priority: topic.priority,
                    difficulty: topic.difficulty,
                    missingPrereqs: missingPrereqs,
                    isWeak: (topic.quizScore !== undefined && topic.quizScore < 50.0)
                });
            } else {
                droppedTopics.push(topic);
            }
        }

        // 5. Round 2: Revision & Buffer Allocation (Remaining minutes)
        const remainingMinutes = Math.max(0, totalMinutes - allocatedMinutes);
        let bufferMinutes = 0;

        if (remainingMinutes > 15 && scheduledSessions.length > 0) {
            // Distribute remaining minutes as buffer for top-priority sessions
            bufferMinutes = remainingMinutes;
            const extraPerSession = Math.floor(bufferMinutes / scheduledSessions.length);
            scheduledSessions.forEach(s => {
                s.revisionBufferMinutes = extraPerSession;
            });
        }

        return {
            sessions: scheduledSessions,
            droppedTopics: droppedTopics,
            totalAllocatedMinutes: allocatedMinutes,
            bufferMinutes: bufferMinutes,
            totalBudgetMinutes: totalMinutes
        };
    }
}
