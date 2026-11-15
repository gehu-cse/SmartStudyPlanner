/**
 * dsa.js - Handwritten Data Structures Implementation (Mirroring TCS302 prioritiser.cpp)
 * Implements:
 * 1. MyStack (Linked List Stack for Syllabus Undo)
 * 2. MyQueue (Linked List Queue for Revision Queue)
 * 3. MaxHeap (Binary Max-Heap Priority Queue for Topic Priority Ranking)
 * 4. TopicBST (Binary Search Tree for O(log N) Keyword Search)
 * 5. PrereqGraph (Directed Acyclic Graph with Kahn's Topological Sort)
 */

// =====================================================================
// 1. HANDWRITTEN STACK ADT (Linked List Implementation)
// =====================================================================
class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MyStack {
    constructor() {
        this.topNode = null;
        this.count = 0;
    }

    push(item) {
        const newNode = new StackNode(item);
        newNode.next = this.topNode;
        this.topNode = newNode;
        this.count++;
    }

    pop() {
        if (this.empty()) return null;
        const temp = this.topNode;
        const val = temp.data;
        this.topNode = this.topNode.next;
        this.count--;
        return val;
    }

    top() {
        return this.empty() ? null : this.topNode.data;
    }

    empty() {
        return this.topNode === null;
    }

    size() {
        return this.count;
    }

    clear() {
        while (!this.empty()) {
            this.pop();
        }
    }
}

// =====================================================================
// 2. HANDWRITTEN QUEUE ADT (Linked List Implementation)
// =====================================================================
class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.frontNode = null;
        this.rearNode = null;
        this.count = 0;
    }

    push(item) {
        const newNode = new QueueNode(item);
        if (this.rearNode === null) {
            this.frontNode = this.rearNode = newNode;
        } else {
            this.rearNode.next = newNode;
            this.rearNode = newNode;
        }
        this.count++;
    }

    pop() {
        if (this.empty()) return null;
        const temp = this.frontNode;
        const val = temp.data;
        this.frontNode = this.frontNode.next;
        if (this.frontNode === null) {
            this.rearNode = null;
        }
        this.count--;
        return val;
    }

    front() {
        return this.empty() ? null : this.frontNode.data;
    }

    empty() {
        return this.frontNode === null;
    }

    size() {
        return this.count;
    }

    clear() {
        while (!this.empty()) {
            this.pop();
        }
    }

    toArray() {
        const items = [];
        let curr = this.frontNode;
        while (curr !== null) {
            items.push(curr.data);
            curr = curr.next;
        }
        return items;
    }
}

// =====================================================================
// 3. BINARY MAX-HEAP (Dynamic Priority Queue for Topics)
// =====================================================================
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Helper functions for binary tree navigation
    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    // Compare topic priorities
    isHigherPriority(t1, t2) {
        return (t1.priority || 0) > (t2.priority || 0);
    }

    siftUp(index) {
        while (index > 0 && this.isHigherPriority(this.heap[index], this.heap[this.parent(index)])) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    siftDown(index) {
        let largest = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < this.heap.length && this.isHigherPriority(this.heap[left], this.heap[largest])) {
            largest = left;
        }
        if (right < this.heap.length && this.isHigherPriority(this.heap[right], this.heap[largest])) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.siftDown(largest);
        }
    }

    push(topic) {
        this.heap.push(topic);
        this.siftUp(this.heap.length - 1);
    }

    pop() {
        if (this.empty()) return null;
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.siftDown(0);
        }
        return top;
    }

    top() {
        return this.empty() ? null : this.heap[0];
    }

    empty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }

    clear() {
        this.heap = [];
    }
}

// =====================================================================
// 4. DIRECTED GRAPH FOR PREREQUISITES (Topological Ordering)
// =====================================================================
class PrereqGraph {
    constructor() {
        this.topicIds = [];
        this.adjList = {};
    }

    clear() {
        this.topicIds = [];
        this.adjList = {};
    }

    addVertex(id) {
        if (!this.adjList[id]) {
            this.topicIds.push(id);
            this.adjList[id] = [];
        }
    }

    addEdge(fromId, toId) {
        this.addVertex(fromId);
        this.addVertex(toId);
        if (!this.adjList[fromId].includes(toId)) {
            this.adjList[fromId].push(toId);
        }
    }

    // Kahn's Algorithm for Topological Sort
    topologicalSort() {
        const inDegree = {};
        this.topicIds.forEach(id => inDegree[id] = 0);

        for (const u of this.topicIds) {
            for (const v of this.adjList[u]) {
                inDegree[v] = (inDegree[v] || 0) + 1;
            }
        }

        const queue = new MyQueue();
        for (const id of this.topicIds) {
            if (inDegree[id] === 0) {
                queue.push(id);
            }
        }

        const sorted = [];
        while (!queue.empty()) {
            const u = queue.pop();
            sorted.push(u);

            for (const v of (this.adjList[u] || [])) {
                inDegree[v]--;
                if (inDegree[v] === 0) {
                    queue.push(v);
                }
            }
        }

        // Cycle check: If cycle detected, return all topics in existing order
        if (sorted.length !== this.topicIds.length) {
            console.warn("[PrereqGraph] Cycle detected in syllabus graph, falling back to priority ordering.");
            return [...this.topicIds];
        }

        return sorted;
    }
}

// =====================================================================
// 5. BINARY SEARCH TREE (TopicBST for Fast O(log N) Topic Search)
// =====================================================================
class BSTNode {
    constructor(key, topicData) {
        this.key = key;
        this.topic = topicData;
        this.left = null;
        this.right = null;
    }
}

class TopicBST {
    constructor() {
        this.root = null;
    }

    insert(key, topicData) {
        this.root = this._insertRec(this.root, key.toUpperCase(), topicData);
    }

    _insertRec(node, key, topicData) {
        if (node === null) return new BSTNode(key, topicData);

        if (key < node.key) {
            node.left = this._insertRec(node.left, key, topicData);
        } else if (key > node.key) {
            node.right = this._insertRec(node.right, key, topicData);
        } else {
            node.topic = topicData; // Update existing
        }
        return node;
    }

    search(key) {
        return this._searchRec(this.root, key.toUpperCase());
    }

    _searchRec(node, key) {
        if (node === null) return null;
        if (key === node.key) return node.topic;

        if (key < node.key) {
            return this._searchRec(node.left, key);
        } else {
            return this._searchRec(node.right, key);
        }
    }

    inOrder() {
        const result = [];
        this._inOrderRec(this.root, result);
        return result;
    }

    _inOrderRec(node, result) {
        if (node !== null) {
            this._inOrderRec(node.left, result);
            result.push(node.topic);
            this._inOrderRec(node.right, result);
        }
    }
}
