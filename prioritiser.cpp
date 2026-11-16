#include <iostream>
#include <fstream>
#include <sstream>
#include <iomanip>
#include <string>
#include <cmath>
#include <cstdlib>
#include <cctype>
#include <ctime>

using namespace std;

// =====================================================================
// SECTION 1B : CUSTOM DYNAMIC ARRAY (DynamicArray)
// Hand-written dynamic array with automatic resizing (No STL containers)
// =====================================================================

template <typename T>
class DynamicArray {
private:
    T* items;
    int capacity;
    int count;

    void grow() {
        int newCapacity = (capacity == 0) ? 4 : capacity * 2;
        T* newItems = new T[newCapacity];

        for (int i = 0; i < count; i++) {
            newItems[i] = items[i];
        }

        delete[] items;
        items = newItems;
        capacity = newCapacity;
    }

public:
    DynamicArray() {
        items = nullptr;
        capacity = 0;
        count = 0;
    }

    DynamicArray(int initialCapacity) {
        capacity = initialCapacity;
        count = initialCapacity;
        if (capacity > 0) {
            items = new T[capacity];
            for (int i = 0; i < capacity; i++) {
                items[i] = T();
            }
        } else {
            items = nullptr;
        }
    }

    DynamicArray(int initialCapacity, const T& defaultValue) {
        capacity = initialCapacity;
        count = initialCapacity;
        if (capacity > 0) {
            items = new T[capacity];
            for (int i = 0; i < capacity; i++) {
                items[i] = defaultValue;
            }
        } else {
            items = nullptr;
        }
    }

    DynamicArray(const DynamicArray& other) {
        capacity = other.capacity;
        count = other.count;
        if (capacity > 0) {
            items = new T[capacity];
            for (int i = 0; i < count; i++) {
                items[i] = other.items[i];
            }
        } else {
            items = nullptr;
        }
    }

    DynamicArray& operator=(const DynamicArray& other) {
        if (this != &other) {
            delete[] items;
            capacity = other.capacity;
            count = other.count;
            if (capacity > 0) {
                items = new T[capacity];
                for (int i = 0; i < count; i++) {
                    items[i] = other.items[i];
                }
            } else {
                items = nullptr;
            }
        }
        return *this;
    }

    ~DynamicArray() {
        delete[] items;
    }

    void push_back(const T& value) {
        if (count == capacity) {
            grow();
        }
        items[count] = value;
        count++;
    }

    void pop_back() {
        if (count > 0) {
            count--;
        }
    }

    T& operator[](int index) {
        return items[index];
    }

    const T& operator[](int index) const {
        return items[index];
    }

    T& back() {
        return items[count - 1];
    }

    const T& back() const {
        return items[count - 1];
    }

    int size() const {
        return count;
    }

    bool empty() const {
        return count == 0;
    }

    void clear() {
        count = 0;
    }

    T* begin() {
        return items;
    }

    const T* begin() const {
        return items;
    }

    T* end() {
        return items + count;
    }

    const T* end() const {
        return items + count;
    }

    void erase(int index) {
        if (index < 0 || index >= count) {
            return;
        }
        for (int i = index; i < count - 1; i++) {
            items[i] = items[i + 1];
        }
        count--;
    }

    void erase(T* it) {
        if (!it || it < items || it >= items + count) {
            return;
        }
        int index = (int)(it - items);
        erase(index);
    }
};



// ===========================================
// SECTION 1 : HELPERS
// ===========================================
const int DEFAULT_BUFFER_PERCENT = 15;

string formatDuration(int totalMinutes) {
    int hours = totalMinutes / 60;
    int minutes = totalMinutes % 60;
    if (hours == 0) {
        return to_string(minutes) + " mins";
    } else if (minutes == 0) {
        return to_string(hours) + " hrs";
    } else {
        return to_string(hours) + " hrs " + to_string(minutes) + " mins";
    }
}

string toUpperCase(string text) {
    for (int i = 0; i < (int)text.size(); i++) {
        text[i] = toupper(text[i]);
    }
    return text;
}

string trimString(string text) {
    int start = 0;
    while (start < (int)text.size() && (text[start] == ' ' || text[start] == '\t' || text[start] == '\r')) {
        start++;
    }
    int end = (int)text.size() - 1;
    while (end >= start && (text[end] == ' ' || text[end] == '\t' || text[end] == '\r')) {
        end--;
    }
    if (start > end) return "";
    return text.substr(start, end - start + 1);
}

DynamicArray<string> splitString(string line, char delimiter) {
    DynamicArray<string> tokens;
    stringstream ss(line);
    string part;
    while (getline(ss, part, delimiter)) {
        tokens.push_back(trimString(part));
    }
    return tokens;
}

void printDivider(char symbol = '-') {
    for (int i = 0; i < 70; i++) {
        cout << symbol;
    }
    cout << "\n";
}

void printTitle(string title) {
    cout << "\n";
    printDivider('=');
    cout << "  " << toUpperCase(title) << "\n";
    printDivider('=');
}

void printSubTitle(string subtitle) {
    cout << "\n" << subtitle << "\n";
    for (int i = 0; i < (int)subtitle.size(); i++) {
        cout << "-";
    }
    cout << "\n";
}

int readNumberInRange(const string& prompt, int minVal, int maxVal) {
    int value;
    while (true) {
        cout << prompt;
        if (cin >> value) {
            if (value >= minVal && value <= maxVal) {
                string extra;
                getline(cin, extra);
                return value;
            } else {
                cout << "  [!] Please enter a number between " << minVal << " and " << maxVal << ".\n";
            }
        } else {
            if (cin.eof()) {
                exit(0);
            }
            cout << "  [!] Invalid input. Please enter a valid number.\n";
            cin.clear();
            cin.ignore(10000, '\n');
        }
    }
}

string readLineString(const string& prompt) {
    cout << prompt;
    string line;
    getline(cin, line);
    return trimString(line);
}

// =====================================================================
// SECTION 2 : BASE MODELS & OOP HIERARCHY 
// =====================================================================
class StudyItem {
public:
    virtual ~StudyItem() {}
    virtual string getId() const = 0;
    virtual string getName() const = 0;
    virtual double getTimeMultiplier() const { return 1.0; }
    virtual double getMarkMultiplier() const { return 1.0; }
};

class Topic : public StudyItem {
public:
    string id;
    string unit;
    string name;
    int baseMinutes;
    int difficulty;
    int frequency;
    double totalMarks;
    double averageMarks;
    double priority;
    double quizScore;
    bool isCompleted;

    Topic() {
        id = "";
        unit = "";
        name = "";
        baseMinutes = 60;
        difficulty = 3;
        frequency = 0;
        totalMarks = 0.0;
        averageMarks = 0.0;
        priority = 0.0;
        quizScore = -1.0;
        isCompleted = false;
    }

    Topic(string topicId, string topicUnit, string topicName, int minutes, int diff) {
        id = topicId;
        unit = topicUnit;
        name = topicName;
        baseMinutes = minutes;
        difficulty = diff;
        frequency = 0;
        totalMarks = 0.0;
        averageMarks = 0.0;
        priority = 0.0;
        quizScore = -1.0;
        isCompleted = false;
    }

    virtual ~Topic() {}

    string getId() const override { return id; }
    string getName() const override { return name; }

    int getEffectiveMinutes() const {
        double multiplier = getTimeMultiplier();
        int minutes = (int)(round(baseMinutes * multiplier));
        return (minutes < 1) ? 1 : minutes;
    }

    double getWeightedMarks() const {
        return totalMarks * getMarkMultiplier();
    }

    double getDensity() const {
        int minutes = getEffectiveMinutes();
        if (minutes <= 0) return 0.0;
        return getWeightedMarks() / (double)minutes;
    }

    double getTimeMultiplier() const override {
        if (quizScore < 0.0) return 1.0;
        if (quizScore >= 80.0) return 1.0;
        if (quizScore >= 50.0) return 1.15;
        return 1.30;
    }

    double getMarkMultiplier() const override {
        if (quizScore < 0.0) return 1.0;
        if (quizScore >= 80.0) return 1.0;
        if (quizScore >= 50.0) return 1.15;
        return 1.35;
    }

    void calculatePriority() {
        if (frequency > 0) {
            averageMarks = totalMarks / frequency;
        } else {
            averageMarks = 0.0;
        }
        double density = getDensity();
        priority = (frequency * 25.0) + (averageMarks * 3.0) + (density * 40.0) + (difficulty * 4.0);

        if (quizScore >= 0.0 && quizScore < 50.0) {
            priority *= 1.30;
        }
    }

    bool operator<(const Topic& other) const {
        return priority < other.priority;
    }

    bool operator==(const Topic& other) const {
        return id == other.id;
    }

    friend ostream& operator<<(ostream& os, const Topic& t) {
        os << left << setw(14) << t.id
           << setw(34) << t.name.substr(0, 32)
           << right << setw(4) << t.baseMinutes << " min  "
           << setw(3) << t.frequency << " hits  "
           << setw(4) << (int)(t.totalMarks) << " marks";
        return os;
    }
};

class RevisionTopic : public Topic {
public:
    string revisionReason;

    RevisionTopic() : Topic(), revisionReason("") {}

    RevisionTopic(const Topic& baseTopic, string reason)
        : Topic(baseTopic), revisionReason(reason) {}

    double getTimeMultiplier() const override { return 1.30; }
    double getMarkMultiplier() const override { return 1.35; }
};

// =====================================================================
// SECTION 3 : CORE DATA STRUCTURES 
// =====================================================================


template <typename T>
class MyStack {
private:
    struct StackNode {
        T data;
        StackNode* next;
        StackNode(T val) : data(val), next(nullptr) {}
    };
    StackNode* topNode;
    int count;

    void copyFrom(const MyStack& other) {
        if (!other.topNode) return;
        DynamicArray<T> temp;
        StackNode* curr = other.topNode;
        while (curr) {
            temp.push_back(curr->data);
            curr = curr->next;
        }
        for (int i = (int)temp.size() - 1; i >= 0; i--) {
            push(temp[i]);
        }
    }

public:
    MyStack() : topNode(nullptr), count(0) {}

    MyStack(const MyStack& other) : topNode(nullptr), count(0) {
        copyFrom(other);
    }

    MyStack& operator=(const MyStack& other) {
        if (this != &other) {
            clear();
            copyFrom(other);
        }
        return *this;
    }

    ~MyStack() {
        clear();
    }

    void push(const T& item) {
        StackNode* newNode = new StackNode(item);
        newNode->next = topNode;
        topNode = newNode;
        count++;
    }

    T pop() {
        if (empty()) return T();
        StackNode* temp = topNode;
        T val = temp->data;
        topNode = topNode->next;
        delete temp;
        count--;
        return val;
    }

    bool pop(T& outItem) {
        if (empty()) return false;
        outItem = pop();
        return true;
    }

    T top() const {
        if (empty()) return T();
        return topNode->data;
    }

    bool empty() const {
        return topNode == nullptr;
    }

    int size() const {
        return count;
    }

    void clear() {
        while (!empty()) {
            pop();
        }
    }
};


template <typename T>
class MyQueue {
private:
    struct QueueNode {
        T data;
        QueueNode* next;
        QueueNode(T val) : data(val), next(nullptr) {}
    };
    QueueNode* frontNode;
    QueueNode* rearNode;
    int count;

    void copyFrom(const MyQueue& other) {
        QueueNode* curr = other.frontNode;
        while (curr) {
            push(curr->data);
            curr = curr->next;
        }
    }

public:
    MyQueue() : frontNode(nullptr), rearNode(nullptr), count(0) {}

    MyQueue(const MyQueue& other) : frontNode(nullptr), rearNode(nullptr), count(0) {
        copyFrom(other);
    }

    MyQueue& operator=(const MyQueue& other) {
        if (this != &other) {
            clear();
            copyFrom(other);
        }
        return *this;
    }

    ~MyQueue() {
        clear();
    }

    void push(const T& item) {
        QueueNode* newNode = new QueueNode(item);
        if (rearNode == nullptr) {
            frontNode = rearNode = newNode;
        } else {
            rearNode->next = newNode;
            rearNode = newNode;
        }
        count++;
    }

    T pop() {
        if (empty()) return T();
        QueueNode* temp = frontNode;
        T val = temp->data;
        frontNode = frontNode->next;
        if (frontNode == nullptr) {
            rearNode = nullptr;
        }
        delete temp;
        count--;
        return val;
    }

    T front() const {
        if (empty()) return T();
        return frontNode->data;
    }

    bool empty() const {
        return frontNode == nullptr;
    }

    int size() const {
        return count;
    }

    void clear() {
        while (!empty()) {
            pop();
        }
    }
};

// ---  BINARY MAX-HEAP (PRIORITY QUEUE) ---
class MaxHeap {
private:
    DynamicArray<Topic> heapArray;

    void heapifyUp(int index) {
        while (index > 0) {
            int parentIndex = (index - 1) / 2;
            if (heapArray[parentIndex] < heapArray[index]) {
                swap(heapArray[parentIndex], heapArray[index]);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    void heapifyDown(int index) {
        int totalSize = (int)heapArray.size();
        while (true) {
            int leftChild = 2 * index + 1;
            int rightChild = 2 * index + 2;
            int largest = index;

            if (leftChild < totalSize && heapArray[largest] < heapArray[leftChild]) {
                largest = leftChild;
            }
            if (rightChild < totalSize && heapArray[largest] < heapArray[rightChild]) {
                largest = rightChild;
            }
            if (largest != index) {
                swap(heapArray[index], heapArray[largest]);
                index = largest;
            } else {
                break;
            }
        }
    }

public:
    void push(Topic item) {
        heapArray.push_back(item);
        heapifyUp((int)heapArray.size() - 1);
    }

    Topic pop() {
        if (heapArray.empty()) return Topic();
        Topic rootItem = heapArray[0];
        heapArray[0] = heapArray.back();
        heapArray.pop_back();
        if (!heapArray.empty()) {
            heapifyDown(0);
        }
        return rootItem;
    }

    bool empty() const { return heapArray.empty(); }
    int size() const { return (int)heapArray.size(); }
    void clear() { heapArray.clear(); }
};

// --- BINARY SEARCH TREE  ---
struct BSTNode {
    string key;
    Topic topicData;
    BSTNode* left;
    BSTNode* right;

    BSTNode(Topic t) : key(toUpperCase(t.id)), topicData(t), left(nullptr), right(nullptr) {}
};

class TopicBST {
private:
    BSTNode* root;
    int nodeCount;

    void insertNode(BSTNode*& node, Topic item) {
        if (!node) {
            node = new BSTNode(item);
            nodeCount++;
            return;
        }
        string itemKey = toUpperCase(item.id);
        if (itemKey < node->key) {
            insertNode(node->left, item);
        } else {
            insertNode(node->right, item);
        }
    }

    Topic* searchById(BSTNode* node, const string& searchKey) const {
        if (!node) return nullptr;
        if (node->key == searchKey) return const_cast<Topic*>(&(node->topicData));
        if (searchKey < node->key) return searchById(node->left, searchKey);
        return searchById(node->right, searchKey);
    }

    Topic* searchByName(BSTNode* node, const string& keyword) const {
        if (!node) return nullptr;
        string nameUpper = toUpperCase(node->topicData.name);
        if (nameUpper.find(keyword) != string::npos) {
            return const_cast<Topic*>(&(node->topicData));
        }
        Topic* leftMatch = searchByName(node->left, keyword);
        if (leftMatch) return leftMatch;
        return searchByName(node->right, keyword);
    }

    void inorderTraversal(BSTNode* node, DynamicArray<Topic>& resultList) const {
        if (!node) return;
        inorderTraversal(node->left, resultList);
        resultList.push_back(node->topicData);
        inorderTraversal(node->right, resultList);
    }

    int getHeight(BSTNode* node) const {
        if (!node) return 0;
        int leftH = getHeight(node->left);
        int rightH = getHeight(node->right);
        return 1 + max(leftH, rightH);
    }

    void clearTree(BSTNode* node) {
        if (!node) return;
        clearTree(node->left);
        clearTree(node->right);
        delete node;
    }

public:
    TopicBST() : root(nullptr), nodeCount(0) {}
    ~TopicBST() { clearTree(root); }

    void clear() {
        clearTree(root);
        root = nullptr;
        nodeCount = 0;
    }

    void insert(Topic item) { insertNode(root, item); }

    Topic* search(const string& query) const {
        string cleanQuery = toUpperCase(trimString(query));
        if (cleanQuery.empty()) return nullptr;
        Topic* res = searchById(root, cleanQuery);
        if (res) return res;
        return searchByName(root, cleanQuery);
    }

    void getInorder(DynamicArray<Topic>& resultList) const { inorderTraversal(root, resultList); }
    int size() const { return nodeCount; }
    int height() const { return getHeight(root); }

    void rebuild(const DynamicArray<Topic*>& topicPointers) {
        clear();
        for (int i = 0; i < (int)topicPointers.size(); i++) {
            if (topicPointers[i]) {
                insert(*(topicPointers[i]));
            }
        }
    }
};

// ---  DIRECTED GRAPH FOR PREREQUISITES (PrereqGraph) ---
class PrereqGraph {
private:
    DynamicArray<string> topicIds;
    DynamicArray<DynamicArray<int>> adjacencyList;

public:
    void clear() {
        topicIds.clear();
        adjacencyList.clear();
    }

    int findTopicIndex(const string& id) const {
        for (int i = 0; i < (int)topicIds.size(); i++) {
            if (topicIds[i] == id) return i;
        }
        return -1;
    }

    int addVertex(const string& id) {
        int index = findTopicIndex(id);
        if (index != -1) return index;
        index = (int)topicIds.size();
        topicIds.push_back(id);
        adjacencyList.push_back(DynamicArray<int>());
        return index;
    }

    void addEdge(const string& fromId, const string& toId) {
        int u = addVertex(fromId);
        int v = addVertex(toId);
        if (u == v) return;
        for (int i = 0; i < (int)adjacencyList[u].size(); i++) {
            if (adjacencyList[u][i] == v) return;
        }
        adjacencyList[u].push_back(v);
    }

    int vertexCount() const { return (int)topicIds.size(); }

    int edgeCount() const {
        int edges = 0;
        for (int i = 0; i < (int)adjacencyList.size(); i++) {
            edges += (int)adjacencyList[i].size();
        }
        return edges;
    }

    DynamicArray<string> topologicalSort() const {
        int n = (int)topicIds.size();
        DynamicArray<int> inDegree(n, 0);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < (int)adjacencyList[i].size(); j++) {
                int neighbor = adjacencyList[i][j];
                inDegree[neighbor]++;
            }
        }

        MyQueue<int> readyQueue;
        for (int i = 0; i < n; i++) {
            if (inDegree[i] == 0) {
                readyQueue.push(i);
            }
        }

        DynamicArray<string> sortedList;
        while (!readyQueue.empty()) {
            int current = readyQueue.front();
            readyQueue.pop();
            sortedList.push_back(topicIds[current]);

            for (int j = 0; j < (int)adjacencyList[current].size(); j++) {
                int neighbor = adjacencyList[current][j];
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    readyQueue.push(neighbor);
                }
            }
        }
        return sortedList;
    }

    DynamicArray<string> breadthFirstSearch(const string& startId) const {
        DynamicArray<string> visitedOrder;
        int startIndex = findTopicIndex(startId);
        if (startIndex == -1) return visitedOrder;

        DynamicArray<bool> visited(topicIds.size(), false);
        MyQueue<int> q;

        visited[startIndex] = true;
        q.push(startIndex);

        while (!q.empty()) {
            int current = q.front();
            q.pop();
            visitedOrder.push_back(topicIds[current]);

            for (int i = 0; i < (int)adjacencyList[current].size(); i++) {
                int neighbor = adjacencyList[current][i];
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.push(neighbor);
                }
            }
        }
        return visitedOrder;
    }

    DynamicArray<string> depthFirstSearch(const string& startId) const {
        DynamicArray<string> visitedOrder;
        int startIndex = findTopicIndex(startId);
        if (startIndex == -1) return visitedOrder;

        DynamicArray<bool> visited(topicIds.size(), false);
        MyStack<int> s;

        s.push(startIndex);

        while (!s.empty()) {
            int current = s.top();
            s.pop();

            if (!visited[current]) {
                visited[current] = true;
                visitedOrder.push_back(topicIds[current]);

                for (int i = (int)adjacencyList[current].size() - 1; i >= 0; i--) {
                    int neighbor = adjacencyList[current][i];
                    if (!visited[neighbor]) {
                        s.push(neighbor);
                    }
                }
            }
        }
        return visitedOrder;
    }
};

// ---  SINGLY LINKED LIST (PlanList) ---
struct PlanNode {
    int sessionOrder;
    string topicId;
    string topicName;
    int minutes;
    double marks;
    PlanNode* next;

    PlanNode(int order, string id, string name, int min, double mk)
        : sessionOrder(order), topicId(id), topicName(name), minutes(min), marks(mk), next(nullptr) {}
};

class PlanList {
private:
    PlanNode* head;
    PlanNode* tail;
    int totalCount;

public:
    PlanList() : head(nullptr), tail(nullptr), totalCount(0) {}
    ~PlanList() { clear(); }

    void append(int order, string id, string name, int minutes, double marks) {
        PlanNode* newNode = new PlanNode(order, id, name, minutes, marks);
        if (!head) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            tail = newNode;
        }
        totalCount++;
    }

    void clear() {
        PlanNode* current = head;
        while (current) {
            PlanNode* nextNode = current->next;
            delete current;
            current = nextNode;
        }
        head = tail = nullptr;
        totalCount = 0;
    }

    int size() const { return totalCount; }
    PlanNode* getHead() const { return head; }

    int getTotalMinutes() const {
        int sum = 0;
        PlanNode* current = head;
        while (current) {
            sum += current->minutes;
            current = current->next;
        }
        return sum;
    }

    double getTotalMarks() const {
        double sum = 0.0;
        PlanNode* current = head;
        while (current) {
            sum += current->marks;
            current = current->next;
        }
        return sum;
    }
};

// =====================================================================
// SECTION 4 :  (QUIZ, NOTES, PYQ, SUBJECT)
// =====================================================================
struct QuizQuestion {
    string topicId;
    string text;
    DynamicArray<string> options;
    int correctOption;
    string explanation;
};

class QuizBank {
public:
    DynamicArray<QuizQuestion> questions;

    void load(const string& filename) {
        questions.clear();
        ifstream file(filename);
        if (!file.is_open()) return;

        string line;
        while (getline(file, line)) {
            line = trimString(line);
            if (line.empty() || line[0] == '#') continue;
            DynamicArray<string> parts = splitString(line, '|');
            if (parts.size() >= 6 && parts[0] == "Q") {
                QuizQuestion q;
                q.topicId = parts[1];
                q.text = parts[2];
                q.options = splitString(parts[3], ';');
                q.correctOption = atoi(parts[4].c_str());
                q.explanation = parts[5];
                questions.push_back(q);
            }
        }
        file.close();
    }

    DynamicArray<QuizQuestion> getQuestionsForTopic(const string& topicId) const {
        DynamicArray<QuizQuestion> result;
        for (int i = 0; i < (int)questions.size(); i++) {
            if (questions[i].topicId == topicId) {
                result.push_back(questions[i]);
            }
        }
        return result;
    }
};

class NotesStore {
public:
    DynamicArray<pair<string, string>> notesList;
    DynamicArray<pair<string, pair<string, string>>> linksList;

    void load(const string& filename) {
        notesList.clear();
        linksList.clear();
        ifstream file(filename);
        if (!file.is_open()) return;

        string line;
        while (getline(file, line)) {
            line = trimString(line);
            if (line.empty() || line[0] == '#') continue;
            DynamicArray<string> parts = splitString(line, '|');
            if (parts[0] == "NOTE" && parts.size() >= 3) {
                notesList.push_back(make_pair(parts[1], parts[2]));
            } else if (parts[0] == "LINK" && parts.size() >= 4) {
                linksList.push_back(make_pair(parts[1], make_pair(parts[2], parts[3])));
            }
        }
        file.close();
    }

    void printNotes(const string& topicId, const string& topicName) const {
        printTitle("Notes: " + topicName + " [" + topicId + "]");
        bool found = false;
        int count = 1;
        for (int i = 0; i < (int)notesList.size(); i++) {
            if (notesList[i].first == topicId) {
                cout << "  " << count++ << ". " << notesList[i].second << "\n";
                found = true;
            }
        }
        if (!found) {
            cout << "  No notes available for this topic.\n";
        }

        cout << "\n  Video References:\n";
        bool linkFound = false;
        for (int i = 0; i < (int)linksList.size(); i++) {
            if (linksList[i].first == topicId) {
                cout << "    - " << linksList[i].second.first << "\n      " << linksList[i].second.second << "\n";
                linkFound = true;
            }
        }
        if (!linkFound) {
            cout << "    None available.\n";
        }
    }
};

struct PYQHit {
    string paperId;
    string topicId;
    double marks;
};

class Subject {
public:
    string code;
    string name;
    string courseCode;
    DynamicArray<Topic*> topics;
    DynamicArray<pair<string, string>> prereqPairs;
    PrereqGraph graph;
    TopicBST bst;

    Subject() {}
    ~Subject() { clearTopics(); }

    void clearTopics() {
        for (int i = 0; i < (int)topics.size(); i++) {
            delete topics[i];
        }
        topics.clear();
    }

    Topic* findTopic(const string& topicId) {
        for (int i = 0; i < (int)topics.size(); i++) {
            if (topics[i]->id == topicId) return topics[i];
        }
        return nullptr;
    }

    void rebuildStructures() {
        graph.clear();
        for (int i = 0; i < (int)topics.size(); i++) {
            graph.addVertex(topics[i]->id);
        }
        for (int i = 0; i < (int)prereqPairs.size(); i++) {
            graph.addEdge(prereqPairs[i].first, prereqPairs[i].second);
        }
        bst.rebuild(topics);
    }
};

// =====================================================================
// SECTION 5 : MAIN APPLICATION CLASS
// =====================================================================
class App {
private:
    string dataDir;
    Subject subjects[5];
    QuizBank quizBanks[5];
    NotesStore notesStores[5];
    MyStack<string> syllabusUndo[5];
    MyQueue<RevisionTopic> revisionQueue;

    string syllabusFiles[5];
    string pyqFiles[5];
    string quizFiles[5];
    string notesFiles[5];

public:
    App(const string& dir) : dataDir(dir) {
        syllabusFiles[0] = dataDir + "syllabus_oops.txt";
        syllabusFiles[1] = dataDir + "syllabus_ds.txt";

        pyqFiles[0] = dataDir + "pyq_oops.txt";
        pyqFiles[1] = dataDir + "pyq_ds.txt";

        quizFiles[0] = dataDir + "quiz_oops.txt";
        quizFiles[1] = dataDir + "quiz_ds.txt";

        notesFiles[0] = dataDir + "notes_oops.txt";
        notesFiles[1] = dataDir + "notes_ds.txt";

        const string extra[3] = {"python", "logic", "crypto"};
        for (int i = 0; i < 3; i++) {
            syllabusFiles[i+2] = dataDir + "syllabus_" + extra[i] + ".txt";
            pyqFiles[i+2] = dataDir + "pyq_" + extra[i] + ".txt";
            quizFiles[i+2] = dataDir + "quiz_" + extra[i] + ".txt";
            notesFiles[i+2] = dataDir + "notes_" + extra[i] + ".txt";
        }
        loadAllData();
    }

    void loadAllData() {
        for (int s = 0; s < 5; s++) {
            loadSyllabus(s);
            loadPYQ(s);
            quizBanks[s].load(quizFiles[s]);
            notesStores[s].load(notesFiles[s]);
            calculateSubjectPriorities(s);
        }
    }

    void loadSyllabus(int s) {
        Subject& sub = subjects[s];
        sub.clearTopics();
        sub.prereqPairs.clear();

        ifstream file(syllabusFiles[s]);
        if (!file.is_open()) return;

        string line;
        while (getline(file, line)) {
            line = trimString(line);
            if (line.empty() || line[0] == '#') continue;
            DynamicArray<string> parts = splitString(line, '|');
            if (parts[0] == "SUBJECT" && parts.size() >= 5) {
                sub.code = parts[1];
                sub.name = parts[2];
                sub.courseCode = parts[3];
            } else if (parts[0] == "TOPIC" && parts.size() >= 6) {
                Topic* t = new Topic(parts[1], parts[2], parts[3], atoi(parts[4].c_str()), atoi(parts[5].c_str()));
                sub.topics.push_back(t);
            } else if (parts[0] == "PREREQ" && parts.size() >= 3) {
                sub.prereqPairs.push_back(make_pair(parts[1], parts[2]));
            }
        }
        file.close();
        sub.rebuildStructures();
    }

    void loadPYQ(int s) {
        Subject& sub = subjects[s];
        for (int i = 0; i < (int)sub.topics.size(); i++) {
            sub.topics[i]->frequency = 0;
            sub.topics[i]->totalMarks = 0.0;
        }

        ifstream file(pyqFiles[s]);
        if (!file.is_open()) return;

        string line;
        while (getline(file, line)) {
            line = trimString(line);
            if (line.empty() || line[0] == '#') continue;
            DynamicArray<string> parts = splitString(line, '|');
            if (parts[0] == "HIT" && parts.size() >= 4) {
                string topicId = parts[2];
                double marks = atof(parts[3].c_str());
                Topic* t = sub.findTopic(topicId);
                if (t) {
                    t->frequency += 1;
                    t->totalMarks += marks;
                }
            }
        }
        file.close();
    }

    void calculateSubjectPriorities(int s) {
        Subject& sub = subjects[s];
        for (int i = 0; i < (int)sub.topics.size(); i++) {
            sub.topics[i]->calculatePriority();
        }
        sub.rebuildStructures();
    }

    int chooseSubject() {
        cout << "\n  Select Subject:\n";
        for (int i = 0; i < 5; i++) {
            cout << "    " << i+1 << ". " << subjects[i].name
                 << " (" << subjects[i].courseCode << ")\n";
        }
        int choice = readNumberInRange("  Enter subject (1-5): ", 1, 5);
        return choice - 1;
    }

    // -------------------------------------------------------------
    // MENU 1: START A STUDY SESSION 
    // -------------------------------------------------------------
    void startStudySession() {
        printTitle("Study Session Planner");
        int hours = readNumberInRange("  How many hours do you have to study? (e.g. 6): ", 1, 100);
        int totalMinutes = hours * 60;

        cout << "\n  It's good to keep a small buffer  for short breaks\n"
             << "  or tough topics, so your schedule doesn't feel rushed.\n";
        int bufferPct = readNumberInRange("  Enter buffer percentage (0 to 50, default is 15%): ", 0, 50);
        int bufferMinutes = totalMinutes * bufferPct / 100;
        int usableMinutes = totalMinutes - bufferMinutes;

        int s = chooseSubject();
        Subject& sub = subjects[s];

        printTitle(sub.name + " (" + sub.courseCode + ")");
        cout << "  Topics in syllabus : " << sub.topics.size() << "\n";
        cout << "  Allocated study time: " << hours << " h (" << formatDuration(usableMinutes) 
             << " usable, " << formatDuration(bufferMinutes) << " buffer)\n";

        for (int i = 0; i < (int)sub.topics.size(); i++) {
            sub.topics[i]->isCompleted = false;
        }

        string alreadyDoneChoice = readLineString("\n  Have you already prepared/studied any topics beforehand? (y/n, default n): ");
        if (!alreadyDoneChoice.empty() && (alreadyDoneChoice[0] == 'y' || alreadyDoneChoice[0] == 'Y')) {
            cout << "\n  Select topics you have ALREADY completed (they will be skipped from this session):\n";
            for (int i = 0; i < (int)sub.topics.size(); i++) {
                cout << "    " << (i + 1) << ". " << sub.topics[i]->name
                     << " [" << sub.topics[i]->id << "]\n";
            }
            string doneInput = readLineString("  Enter topic numbers to exclude (e.g. 1 2 or 1,2, or Enter to skip): ");
            for (int i = 0; i < (int)doneInput.size(); i++) {
                if (doneInput[i] == ',') doneInput[i] = ' ';
            }
            stringstream ss(doneInput);
            int topicNum;
            int markedCount = 0;
            while (ss >> topicNum) {
                if (topicNum >= 1 && topicNum <= (int)sub.topics.size()) {
                    sub.topics[topicNum - 1]->isCompleted = true;
                    markedCount++;
                }
            }
            if (markedCount > 0) {
                cout << "  [✓] " << markedCount << " topic(s) marked as prepared and excluded from today's plan.\n";
            }
        }

        MaxHeap pq;
        int activeCount = 0;
        for (int i = 0; i < (int)sub.topics.size(); i++) {
            if (!sub.topics[i]->isCompleted) {
                pq.push(*(sub.topics[i]));
                activeCount++;
            }
        }

        if (activeCount == 0) {
            cout << "\n  [★] You have already prepared all topics in " << sub.name << "!\n";
            cout << "  No remaining topics to schedule. Excellent job with your exam preparation!\n";
            return;
        }

        PlanList studyPlan;
        DynamicArray<Topic> droppedTopics;
        int remainingMinutes = usableMinutes;
        int sessionOrder = 1;

        while (!pq.empty()) {
            Topic t = pq.pop();
            int neededMinutes = t.getEffectiveMinutes();
            if (neededMinutes <= remainingMinutes) {
                studyPlan.append(sessionOrder++, t.id, t.name, neededMinutes, t.getWeightedMarks());
                remainingMinutes -= neededMinutes;
            } else {
                droppedTopics.push_back(t);
            }
        }

        printTitle("STUDY PLAN (GREEDY PRIORITY QUEUE)");
        if (studyPlan.size() == 0) {
            cout << "  No topics fit in the available time. Please allocate more study hours.\n";
            return;
        }

        cout << left << setw(4) << "#"
             << setw(15) << "Topic ID"
             << setw(35) << "Topic Name"
             << setw(18) << "Duration"
             << "Marks\n";
        printDivider('-');

        PlanNode* curr = studyPlan.getHead();
        int cumulativeMinutes = 0;
        while (curr) {
            cumulativeMinutes += curr->minutes;
            cout << left << setw(4) << curr->sessionOrder
                 << setw(15) << curr->topicId
                 << setw(35) << curr->topicName.substr(0, 33)
                 << setw(18) << formatDuration(curr->minutes)
                 << fixed << setprecision(1) << curr->marks << "\n";
            curr = curr->next;
        }
        printDivider('-');
        cout << "  Topics Scheduled : " << studyPlan.size() << " of " << activeCount;
        int completedCount = (int)sub.topics.size() - activeCount;
        if (completedCount > 0) {
            cout << " (" << completedCount << " already completed)";
        }
        cout << "\n";
        cout << "  Time Scheduled   : " << formatDuration(studyPlan.getTotalMinutes()) << " of " << formatDuration(usableMinutes) << "\n";
        cout << "  Expected Marks   : " << fixed << setprecision(1) << studyPlan.getTotalMarks() << "\n";

        if (!droppedTopics.empty()) {
            printSubTitle("Topics not included in this session");
            for (int i = 0; i < (int)droppedTopics.size(); i++) {
                cout << "  - " << left << setw(14) << droppedTopics[i].id
                     << right << setw(4) << droppedTopics[i].getEffectiveMinutes() << " min : Needs "
                     << droppedTopics[i].getEffectiveMinutes() << " min, but only " << remainingMinutes << " min left\n";
            }
            cout << "  (Note: Topics exceeding remaining time were skipped to prevent incomplete study)\n";
        }

        cout << "\n";
        printDivider('=');
        cout << "  STUDY MATERIAL\n";
        printDivider('=');
        cout << "  Would you like to review notes and reference videos for these topics?\n";
        cout << "    1. View Notes & Links now\n";
        cout << "    2. Skip to Evaluation Quiz\n";
        int matChoice = readNumberInRange("  Enter 1 or 2: ", 1, 2);

        if (matChoice == 1) {
            curr = studyPlan.getHead();
            while (curr) {
                notesStores[s].printNotes(curr->topicId, curr->topicName);
                curr = curr->next;
                if (curr) {
                    readLineString("\n  -- Press Enter for next topic --");
                }
            }
        }

        printTitle("TOPIC EVALUATION QUIZ (5 QUESTIONS PER TOPIC)");
        curr = studyPlan.getHead();
        int totalScore = 0;
        int totalQuestions = 0;
        int weakTopicsCount = 0;

        while (curr) {
            DynamicArray<QuizQuestion> questions = quizBanks[s].getQuestionsForTopic(curr->topicId);
            if (!questions.empty()) {
                cout << "\n  Quiz for Topic: " << curr->topicName << " (" << curr->topicId << ")\n";
                int topicScore = 0;
                int count = min((int)questions.size(), 5);

                for (int q = 0; q < count; q++) {
                    cout << "\n  Q" << (q + 1) << ". " << questions[q].text << "\n";
                    for (int opt = 0; opt < (int)questions[q].options.size(); opt++) {
                        cout << "     " << (opt + 1) << ") " << questions[q].options[opt] << "\n";
                    }
                    int ans = readNumberInRange("  Your choice (1-4): ", 1, 4);
                    if (ans == questions[q].correctOption) {
                        cout << "  [Correct!]\n";
                        topicScore++;
                    } else {
                        cout << "  [Incorrect] Correct answer: " << questions[q].correctOption << ") "
                             << questions[q].options[questions[q].correctOption - 1] << "\n";
                    }
                    cout << "  Explanation: " << questions[q].explanation << "\n";
                }

                double topicPct = (count > 0) ? (100.0 * topicScore / count) : 0.0;
                totalScore += topicScore;
                totalQuestions += count;

                Topic* topicPtr = sub.findTopic(curr->topicId);
                if (topicPtr) {
                    topicPtr->quizScore = topicPct;
                    topicPtr->calculatePriority();
                }

                if (topicPct < 50.0) {
                    weakTopicsCount++;
                    revisionQueue.push(RevisionTopic(*topicPtr, "Low quiz score (" + to_string(topicScore) + "/" + to_string(count) + ")"));
                }
            }
            curr = curr->next;
        }

        printTitle("EXAM READINESS REPORT");
        double overallPct = (totalQuestions > 0) ? (100.0 * totalScore / totalQuestions) : 0.0;
        cout << "  Total Quiz Score: " << totalScore << " / " << totalQuestions
             << " (" << fixed << setprecision(1) << overallPct << "%)\n";

        if (weakTopicsCount == 0 && overallPct >= 70.0) {
            cout << "  Status: PREPARED\n";
            cout << "  All studied topics met or exceeded the passing threshold.\n";
        } else {
            cout << "  Status: NEEDS REVISION\n";
            cout << "  " << weakTopicsCount << " topic(s) scored below threshold and were added to your revision queue.\n";
        }
        printDivider('=');
    }

    // -------------------------------------------------------------
    // MENU 2: MODIFY SYLLABUS (WITH UNDO STACK)
    // -------------------------------------------------------------
    void modifySyllabus() {
        int s = chooseSubject();
        Subject& sub = subjects[s];
        bool back = false;

        while (!back) {
            cout << "\n  Syllabus Management: " << sub.name << " (" << sub.topics.size() << " topics)\n";
            cout << "    1. List all topics\n";
            cout << "    2. Add new topic\n";
            cout << "    3. Edit topic minutes\n";
            cout << "    4. Delete topic\n";
            cout << "    5. Undo last modification (" << syllabusUndo[s].size() << " available)\n";
            cout << "    6. Back to main menu\n";
            int choice = readNumberInRange("  Enter your choice (1-6): ", 1, 6);

            if (choice == 1) {
                printTitle("Topics in " + sub.name);
                cout << left << setw(15) << "Topic ID" << setw(10) << "Unit" << setw(35) << "Topic Name" << "Time\n";
                printDivider('-');
                for (int i = 0; i < (int)sub.topics.size(); i++) {
                    cout << left << setw(15) << sub.topics[i]->id
                         << setw(10) << sub.topics[i]->unit
                         << setw(35) << sub.topics[i]->name.substr(0, 33)
                         << sub.topics[i]->baseMinutes << " min\n";
                }
            } else if (choice == 2) {
                string id = toUpperCase(readLineString("  Enter Topic ID (e.g. TEMPLATES): "));
                if (id.empty() || sub.findTopic(id)) {
                    cout << "  [!] Invalid or duplicate topic ID.\n";
                    continue;
                }
                string unit = readLineString("  Enter Unit (e.g. Unit 4): ");
                string name = readLineString("  Enter Topic Name: ");
                int minutes = readNumberInRange("  Estimated study minutes (10 to 300): ", 10, 300);
                int diff = readNumberInRange("  Difficulty (1 Easy to 5 Hard): ", 1, 5);

                syllabusUndo[s].push("DELETE|" + id);
                Topic* newTopic = new Topic(id, unit, name, minutes, diff);
                newTopic->calculatePriority();
                sub.topics.push_back(newTopic);
                sub.rebuildStructures();
                cout << "  Topic added successfully.\n";
            } else if (choice == 3) {
                string id = toUpperCase(readLineString("  Enter Topic ID to edit: "));
                Topic* t = sub.findTopic(id);
                if (!t) {
                    cout << "  [!] Topic not found.\n";
                    continue;
                }
                syllabusUndo[s].push("EDIT|" + id + "|" + to_string(t->baseMinutes));
                int newMin = readNumberInRange("  Enter new study minutes: ", 10, 300);
                t->baseMinutes = newMin;
                t->calculatePriority();
                cout << "  Study minutes updated.\n";
            } else if (choice == 4) {
                string id = toUpperCase(readLineString("  Enter Topic ID to delete: "));
                Topic* t = sub.findTopic(id);
                if (!t) {
                    cout << "  [!] Topic not found.\n";
                    continue;
                }
                syllabusUndo[s].push("ADD|" + t->id + "|" + t->unit + "|" + t->name + "|" + to_string(t->baseMinutes) + "|" + to_string(t->difficulty));
                for (int i = 0; i < (int)sub.topics.size(); i++) {
                    if (sub.topics[i]->id == id) {
                        delete sub.topics[i];
                        sub.topics.erase(sub.topics.begin() + i);
                        break;
                    }
                }
                sub.rebuildStructures();
                cout << "  Topic deleted.\n";
            } else if (choice == 5) {
                string undoAction;
                if (!syllabusUndo[s].pop(undoAction)) {
                    cout << "  Nothing to undo.\n";
                    continue;
                }
                DynamicArray<string> parts = splitString(undoAction, '|');
                if (parts[0] == "DELETE") {
                    for (int i = 0; i < (int)sub.topics.size(); i++) {
                        if (sub.topics[i]->id == parts[1]) {
                            delete sub.topics[i];
                            sub.topics.erase(sub.topics.begin() + i);
                            break;
                        }
                    }
                } else if (parts[0] == "EDIT") {
                    Topic* t = sub.findTopic(parts[1]);
                    if (t) t->baseMinutes = atoi(parts[2].c_str());
                } else if (parts[0] == "ADD") {
                    Topic* t = new Topic(parts[1], parts[2], parts[3], atoi(parts[4].c_str()), atoi(parts[5].c_str()));
                    sub.topics.push_back(t);
                }
                sub.rebuildStructures();
                cout << "  Last syllabus change undone.\n";
            } else if (choice == 6) {
                back = true;
            }
        }
    }

    // -------------------------------------------------------------
    // MENU 3: VIEW STORED DATA
    // -------------------------------------------------------------
    void viewStoredData() {
        int s = chooseSubject();
        Subject& sub = subjects[s];

        cout << "\n  Select Data View:\n";
        cout << "    1. View Topics Ranked by Priority (Phase 2 Array / Heap PQ)\n";
        cout << "    2. View Raw PYQ Summary (Phase 2 Appearances & Avg Marks)\n";
        cout << "    3. Search Topic using Binary Search Tree (TopicBST)\n";
        cout << "    4. View Prerequisite Graph (Topological Sort, BFS, DFS)\n";
        int choice = readNumberInRange("  Enter your choice (1-4): ", 1, 4);

        if (choice == 1) {
            MaxHeap pq;
            for (int i = 0; i < (int)sub.topics.size(); i++) {
                pq.push(*(sub.topics[i]));
            }

            printTitle("TOPICS RANKED BY EXAM PRIORITY (MAX-HEAP PQ)");
            cout << left << setw(6) << "Rank"
                 << setw(15) << "Topic ID"
                 << setw(32) << "Topic Name"
                 << setw(8) << "Hits"
                 << setw(10) << "Marks"
                 << "Priority\n";
            printDivider('-');

            int rank = 1;
            while (!pq.empty()) {
                Topic topTopic = pq.pop();
                cout << left << setw(6) << rank++
                 << setw(15) << topTopic.id
                 << setw(32) << topTopic.name.substr(0, 30)
                 << setw(8) << topTopic.frequency
                 << fixed << setprecision(1) << setw(10) << topTopic.totalMarks
                 << fixed << setprecision(2) << topTopic.priority << "\n";
            }
            printDivider('=');
        } else if (choice == 2) {
            printTitle("RAW PYQ SUMMARY (DATABASE)");
            cout << left << setw(15) << "Topic ID"
                 << setw(35) << "Topic Name"
                 << setw(12) << "Appearances"
                 << setw(12) << "Total Marks"
                 << "Avg Marks\n";
            printDivider('-');

            for (int i = 0; i < (int)sub.topics.size(); i++) {
                cout << left << setw(15) << sub.topics[i]->id
                     << setw(35) << sub.topics[i]->name.substr(0, 33)
                     << setw(12) << sub.topics[i]->frequency
                     << fixed << setprecision(1) << setw(12) << sub.topics[i]->totalMarks
                     << fixed << setprecision(2) << sub.topics[i]->averageMarks << "\n";
            }
            printDivider('=');
        } else if (choice == 3) {
            string searchInput = readLineString("  Enter Topic ID (e.g. STACK, LL, ARRAYS) or Name to search: ");
            Topic* foundTopic = sub.bst.search(searchInput);
            if (foundTopic) {
                cout << "\n  [Topic Found via BST Lookup]\n";
                cout << "  ID        : " << foundTopic->id << "\n";
                cout << "  Name      : " << foundTopic->name << "\n";
                cout << "  Unit      : " << foundTopic->unit << "\n";
                cout << "  Duration  : " << foundTopic->baseMinutes << " minutes\n";
                cout << "  PYQ Marks : " << foundTopic->totalMarks << " marks (" << foundTopic->frequency << " hits)\n";
                cout << "  Priority  : " << fixed << setprecision(2) << foundTopic->priority << "\n";
            } else {
                cout << "  [!] No topic found matching: " << searchInput << "\n";
            }
        } else if (choice == 4) {
            printTitle("PREREQUISITE DIRECTED GRAPH");
            cout << "  Total Vertices : " << sub.graph.vertexCount() << "\n";
            cout << "  Total Edges    : " << sub.graph.edgeCount() << "\n";

            cout << "\n  Topological Sort (Logical Sequence of Study):\n   ";
            DynamicArray<string> topoOrder = sub.graph.topologicalSort();
            for (int i = 0; i < (int)topoOrder.size(); i++) {
                cout << topoOrder[i];
                if (i + 1 < (int)topoOrder.size()) cout << " -> ";
            }
            cout << "\n";

            if (sub.topics.size() > 0) {
                string startId = sub.topics[0]->id;
                cout << "\n  BFS from " << startId << ": ";
                DynamicArray<string> bfs = sub.graph.breadthFirstSearch(startId);
                for (int i = 0; i < (int)bfs.size(); i++) cout << bfs[i] << " ";

                cout << "\n  DFS from " << startId << ": ";
                DynamicArray<string> dfs = sub.graph.depthFirstSearch(startId);
                for (int i = 0; i < (int)dfs.size(); i++) cout << dfs[i] << " ";
                cout << "\n";
            }
            printDivider('=');
        }
    }

    // -------------------------------------------------------------
    // MENU 4: STUDY NOTES & VIDEO LINKS
    // -------------------------------------------------------------
    void viewNotesAndLinks() {
        int s = chooseSubject();
        Subject& sub = subjects[s];
        printTitle("Study Notes & Video References");
        for (int i = 0; i < (int)sub.topics.size(); i++) {
            cout << "  " << (i + 1) << ". " << sub.topics[i]->name << " [" << sub.topics[i]->id << "]\n";
        }
        int pick = readNumberInRange("  Select topic number to read: ", 1, (int)sub.topics.size());
        Topic* selected = sub.topics[pick - 1];
        notesStores[s].printNotes(selected->id, selected->name);
    }

    // -------------------------------------------------------------
    // MENU 5:  EVALUATION TEST
    // -------------------------------------------------------------
    void runStandaloneTest() {
        int s = chooseSubject();
        Subject& sub = subjects[s];
        printTitle("Select Topic for Evaluation Test");
        for (int i = 0; i < (int)sub.topics.size(); i++) {
            cout << "  " << (i + 1) << ". " << sub.topics[i]->name << " [" << sub.topics[i]->id << "]\n";
        }
        int pick = readNumberInRange("  Enter topic number (1-" + to_string(sub.topics.size()) + "): ", 1, (int)sub.topics.size());
        Topic* selected = sub.topics[pick - 1];

        DynamicArray<QuizQuestion> questions = quizBanks[s].getQuestionsForTopic(selected->id);
        if (questions.empty()) {
            cout << "  [!] No questions found in question bank for this topic.\n";
            return;
        }

        printTitle("Quiz: " + selected->name);
        int score = 0;
        int count = min((int)questions.size(), 5);

        for (int q = 0; q < count; q++) {
            cout << "\n  Q" << (q + 1) << ". " << questions[q].text << "\n";
            for (int opt = 0; opt < (int)questions[q].options.size(); opt++) {
                cout << "     " << (opt + 1) << ") " << questions[q].options[opt] << "\n";
            }
            int ans = readNumberInRange("  Your choice (1-4): ", 1, 4);
            if (ans == questions[q].correctOption) {
                cout << "  [Correct!]\n";
                score++;
            } else {
                cout << "  [Incorrect] Correct: " << questions[q].correctOption << ") "
                     << questions[q].options[questions[q].correctOption - 1] << "\n";
            }
            cout << "  Explanation: " << questions[q].explanation << "\n";
        }

        double pct = (count > 0) ? (100.0 * score / count) : 0.0;
        selected->quizScore = pct;
        selected->calculatePriority();

        cout << "\n  Final Score: " << score << " / " << count << " (" << fixed << setprecision(1) << pct << "%)\n";
        if (pct >= 80.0) {
            cout << "  Result: Mastered (" << selected->id << ")\n";
        } else if (pct >= 50.0) {
            cout << "  Result: Needs Practice (" << selected->id << ") - Queued for revision.\n";
            revisionQueue.push(RevisionTopic(*selected, "Practice needed (" + to_string(score) + "/" + to_string(count) + ")"));
        } else {
            cout << "  Result: Weak Area (" << selected->id << ") - Priority boosted by 30%.\n";
            revisionQueue.push(RevisionTopic(*selected, "Score below 50%"));
        }
    }

    // -------------------------------------------------------------
    // MENU 6: POST-EXAM ANALYSIS
    // -------------------------------------------------------------
    void postExamAnalysis() {
        int s = chooseSubject();
        Subject& sub = subjects[s];
        printTitle("Post-Exam Score Comparison -- " + sub.name);
        cout << "  Enter marks scored per topic to compare against PYQ predictions.\n";

        double totalPredicted = 0.0;
        double totalActual = 0.0;
        int count = 0;
        int limit = min((int)sub.topics.size(), 5);

        for (int i = 0; i < limit; i++) {
            Topic* t = sub.topics[i];
            cout << "\n  Topic: " << t->name << " (" << t->id << ")\n";
            cout << "  Predicted Marks: " << fixed << setprecision(1) << t->totalMarks << "\n";
            int actual = readNumberInRange("  Actual Marks Scored (0-50): ", 0, 50);

            totalPredicted += t->totalMarks;
            totalActual += actual;
            count++;
        }

        if (count > 0) {
            printTitle("RECALIBRATION REPORT");
            cout << "  Total Predicted Marks : " << fixed << setprecision(1) << totalPredicted << "\n";
            cout << "  Total Actual Marks    : " << fixed << setprecision(1) << totalActual << "\n";
            double diff = fabs(totalActual - totalPredicted);
            double accuracy = (totalPredicted > 0) ? max(0.0, 100.0 - (diff / totalPredicted * 100.0)) : 100.0;
            cout << "  Prediction Accuracy   : " << fixed << setprecision(1) << accuracy << " %\n";
            printDivider('=');
        }
    }

    // -------------------------------------------------------------
    // MENU 7: REVISION QUEUE
    // -------------------------------------------------------------
    void showRevisionQueue() {
        printTitle("Active Revision Queue (Weak Topics)");
        if (revisionQueue.empty()) {
            cout << "  No topics in revision queue. Great job!\n";
            return;
        }

        MyQueue<RevisionTopic> temp = revisionQueue;
        int rank = 1;
        cout << left << setw(6) << "#"
             << setw(15) << "Topic ID"
             << setw(35) << "Topic Name"
             << "Reason\n";
        printDivider('-');

        while (!temp.empty()) {
            RevisionTopic rt = temp.front();
            temp.pop();
            cout << left << setw(6) << rank++
                 << setw(15) << rt.id
                 << setw(35) << rt.name.substr(0, 33)
                 << rt.revisionReason << "\n";
        }
        printDivider('=');
    }

    void viewAllPYQs() {
        printTitle("Previous Year Questions - Year and Topic");
        cout << "\n  Select Subject:\n";
        for (int i = 0; i < 5; i++) {
            cout << "    " << (i + 1) << ". " << subjects[i].name
                 << " (" << subjects[i].courseCode << ")\n";
        }
        cout << "    6. All subjects\n\n";
        int selected = readNumberInRange("  Your choice (1-6): ", 1, 6);
        int first = selected == 6 ? 0 : selected - 1;
        int last = selected == 6 ? 5 : selected;
        const string names[5] = {"oops", "ds", "python", "logic", "crypto"};
        int total = 0;
        bool quitEarly = false;

        for (int i = first; i < last && !quitEarly; i++) {
            ifstream file(dataDir + "questions_" + names[i] + ".txt");
            printSubTitle(subjects[i].name);
            if (!file) { cout << "  Question file missing.\n"; continue; }
            string line;
            int count = 0;
            while (getline(file, line)) {
                DynamicArray<string> parts = splitString(line, '|');
                if (parts.size() < 5 || parts[0] != "QUESTION") continue;
                Topic* topic = subjects[i].findTopic(parts[2]);
                count++;
                cout << "\n  " << count << ". [" << parts[1] << "] "
                     << "[" << parts[3] << "] "
                     << "Topic: " << (topic ? topic->name : parts[2]) << "\n";
                cout << "     " << parts[4] << "\n";

                if (count % 10 == 0) {
                    cout << "\n  [Showing 10 questions at a time. Press Enter for next 10, or 'q' to stop]: ";
                    string pauseInput;
                    getline(cin, pauseInput);
                    if (!pauseInput.empty() && (pauseInput[0] == 'q' || pauseInput[0] == 'Q')) {
                        quitEarly = true;
                        break;
                    }
                }
            }
            cout << "\n  Total questions in " << subjects[i].name << ": " << count << "\n";
            total += count;

            if (!quitEarly && selected == 6 && i + 1 < last) {
                cout << "\n  [Press Enter to continue to next subject, or 'q' to stop]: ";
                string pauseInput;
                getline(cin, pauseInput);
                if (!pauseInput.empty() && (pauseInput[0] == 'q' || pauseInput[0] == 'Q')) {
                    quitEarly = true;
                }
            }
        }
        cout << "\n  Total questions displayed: " << total << "\n";
        cout << "  Press Enter to return to the main menu...";
        string pause; getline(cin, pause);
    }

    // -------------------------------------------------------------
    // MAIN EVENT LOOP
    // -------------------------------------------------------------
    void run() {
        int choice = 0;
        do {
            cout << "\n";
            printDivider('=');
            cout << "   S M A R T   S T U D Y   P R I O R I T I S E R\n";
            cout << "   B.Tech CSE Sem III  |  5 subjects\n";
            printDivider('=');
            cout << "   1. View all PYQs (year, question, related topic)\n";
            cout << "   2. Start a study session (hours, plan, notes, quiz)\n";
            cout << "   3. Modify syllabus (add / edit / delete with undo)\n";
            cout << "   4. View stored data\n";
            cout << "   5. Study notes and video links\n";
            cout << "   6. Evaluation test (practice MCQs)\n";
            cout << "   7. Post exam analysis (actual vs predicted marks)\n";
            cout << "   8. Show revision queue (weak topics)\n";
            cout << "   9. Exit\n";
            printDivider('-');

            choice = readNumberInRange("  Enter your choice (1-9): ", 1, 9);

            switch (choice) {
                case 1: viewAllPYQs(); break;
                case 2: startStudySession(); break;
                case 3: modifySyllabus(); break;
                case 4: viewStoredData(); break;
                case 5: viewNotesAndLinks(); break;
                case 6: runStandaloneTest(); break;
                case 7: postExamAnalysis(); break;
                case 8: showRevisionQueue(); break;
                case 9:
                    cout << "\n  All progress saved. Exiting program. Good luck with exams!\n\n";
                    break;
                default: break;
            }
        } while (choice != 9);
    }
};

// =====================================================================
// SECTION 6 : MAIN FUNCTION
// =====================================================================
int main(int argc, char** argv) {
    string dir = "./data/";
    if (argc > 1) {
        dir = argv[1];
        if (!dir.empty() && dir.back() != '/' && dir.back() != '\\') {
            dir += "/";
        }
    } else {
        ifstream check("./data/syllabus_ds.txt");
        if (!check.is_open()) {
            dir = "./";
        }
    }

    cout << "\n======================================================================\n";
    cout << "           WELCOME TO SMART STUDY PRIORITISER                         \n";
    cout << "======================================================================\n";

    App app(dir);
    app.run();

    return 0;
}
