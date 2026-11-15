const DATASETS = {
  "ds": {
    "key": "ds",
    "code": "TCS302",
    "name": "Data Structures with C",
    "topics": [
      {
        "id": "ARRAYS",
        "unit": "Unit 1",
        "name": "Arrays, Address Calculation, Sparse Matrices and ADT",
        "baseMinutes": 45,
        "difficulty": 2,
        "freq": 0,
        "marks": 0
      },
      {
        "id": "STACK",
        "unit": "Unit 1",
        "name": "Stacks, Infix/Prefix/Postfix Conversion and Recursion",
        "baseMinutes": 65,
        "difficulty": 3,
        "freq": 2,
        "marks": 20.0
      },
      {
        "id": "QUEUE",
        "unit": "Unit 2",
        "name": "Queues, Circular Queue, Deque and Priority Queue",
        "baseMinutes": 50,
        "difficulty": 3,
        "freq": 0,
        "marks": 0
      },
      {
        "id": "LL",
        "unit": "Unit 2",
        "name": "Linked Lists: singly, doubly, circular, polynomial representation",
        "baseMinutes": 95,
        "difficulty": 4,
        "freq": 3,
        "marks": 100.0
      },
      {
        "id": "TREE_BST",
        "unit": "Unit 3",
        "name": "Binary Trees, Traversals, Expression Trees and Binary Search Tree",
        "baseMinutes": 90,
        "difficulty": 4,
        "freq": 3,
        "marks": 55.0
      },
      {
        "id": "AVL",
        "unit": "Unit 3",
        "name": "AVL Trees, Rotations and Balancing",
        "baseMinutes": 70,
        "difficulty": 5,
        "freq": 3,
        "marks": 25.0
      },
      {
        "id": "HEAP",
        "unit": "Unit 3",
        "name": "Binary Heaps and Heap Operations",
        "baseMinutes": 45,
        "difficulty": 3,
        "freq": 1,
        "marks": 10.0
      },
      {
        "id": "HUFFMAN",
        "unit": "Unit 3",
        "name": "Huffman Coding and Weighted Path Length",
        "baseMinutes": 50,
        "difficulty": 3,
        "freq": 3,
        "marks": 30.0
      },
      {
        "id": "BTREE",
        "unit": "Unit 3",
        "name": "B-Tree, B+ Tree and Multi-way Search Trees",
        "baseMinutes": 60,
        "difficulty": 4,
        "freq": 3,
        "marks": 30.0
      },
      {
        "id": "HASH",
        "unit": "Unit 4",
        "name": "Hashing, Hash Functions and Collision Resolution",
        "baseMinutes": 55,
        "difficulty": 3,
        "freq": 3,
        "marks": 30.0
      },
      {
        "id": "SORTING",
        "unit": "Unit 4",
        "name": "Sorting Algorithms and their Analysis",
        "baseMinutes": 75,
        "difficulty": 3,
        "freq": 3,
        "marks": 30.0
      },
      {
        "id": "GRAPH_REPR",
        "unit": "Unit 5",
        "name": "Graph Terminology and Representations",
        "baseMinutes": 45,
        "difficulty": 3,
        "freq": 2,
        "marks": 20.0
      },
      {
        "id": "GRAPH_TRAV",
        "unit": "Unit 5",
        "name": "BFS, DFS and Disjoint Sets (Union-Find)",
        "baseMinutes": 60,
        "difficulty": 3,
        "freq": 3,
        "marks": 30.0
      },
      {
        "id": "MST",
        "unit": "Unit 5",
        "name": "Minimum Spanning Trees: Kruskal and Prim",
        "baseMinutes": 55,
        "difficulty": 4,
        "freq": 3,
        "marks": 30.0
      },
      {
        "id": "SHORTEST_PATH",
        "unit": "Unit 5",
        "name": "Shortest Paths: Dijkstra, Bellman-Ford, Floyd-Warshall",
        "baseMinutes": 60,
        "difficulty": 4,
        "freq": 2,
        "marks": 20.0
      },
      {
        "id": "FILE_ORG",
        "unit": "Unit 5",
        "name": "File Organization, Indexing and B/B+ Index Files",
        "baseMinutes": 45,
        "difficulty": 3,
        "freq": 2,
        "marks": 20.0
      }
    ],
    "prereqs": [
      {
        "from": "ARRAYS",
        "to": "STACK"
      },
      {
        "from": "ARRAYS",
        "to": "QUEUE"
      },
      {
        "from": "ARRAYS",
        "to": "LL"
      },
      {
        "from": "ARRAYS",
        "to": "HASH"
      },
      {
        "from": "ARRAYS",
        "to": "SORTING"
      },
      {
        "from": "LL",
        "to": "TREE_BST"
      },
      {
        "from": "TREE_BST",
        "to": "AVL"
      },
      {
        "from": "TREE_BST",
        "to": "HEAP"
      },
      {
        "from": "HEAP",
        "to": "HUFFMAN"
      },
      {
        "from": "TREE_BST",
        "to": "BTREE"
      },
      {
        "from": "LL",
        "to": "GRAPH_REPR"
      },
      {
        "from": "GRAPH_REPR",
        "to": "GRAPH_TRAV"
      },
      {
        "from": "GRAPH_TRAV",
        "to": "MST"
      },
      {
        "from": "GRAPH_TRAV",
        "to": "SHORTEST_PATH"
      },
      {
        "from": "BTREE",
        "to": "FILE_ORG"
      }
    ],
    "pyqs": [
      {
        "year": "2025",
        "topicId": "STACK",
        "qid": "a",
        "text": "Evaluate the following postfix expression using stack (show all the steps): 4,3,*,6,4,-,*,5,4,3,2,^,+ (Here comma is used as separator only)."
      },
      {
        "year": "2025",
        "topicId": "LL",
        "qid": "b",
        "text": "Give name and apply the graph traversal technique on the given graph, to find a path from A to J with minimum number of nodes in between. (Show all steps)."
      },
      {
        "year": "2025",
        "topicId": "LL",
        "qid": "c",
        "text": "Assume that you have a single linked list with pointer P pointing to the first node of the linked list. Write a C function to rearrange the list so that all even-positioned nodes are arranged first and then all odd-position nodes. (Maintain relative order). Example: 1\u21922\u21923\u21924\u21925 Output: 1\u21923\u21925\u21922\u21924"
      },
      {
        "year": "2025",
        "topicId": "LL",
        "qid": "a",
        "text": "Consider a single linked list with a pointer pointing to its head. Write a C function to insert two nodes, one before the first node and one before the last node of the linked list."
      },
      {
        "year": "2025",
        "topicId": "HASH",
        "qid": "b",
        "text": "Explain hash collision with an example. Consider a hash table of size (m) 12. Using linear probing technique with remainder division method h(key) = key mod table size, insert following keys: 24, 17, 19, 12, 81, 29, 92, 15, 41 into the hash table."
      },
      {
        "year": "2025",
        "topicId": "AVL",
        "qid": "c",
        "text": "i. Consider following height balance tree. Insert 18 and redraw the tree."
      },
      {
        "year": "2025",
        "topicId": "TREE_BST",
        "qid": "c",
        "text": "ii. Consider following binary search tree and delete 80 and redraw the tree."
      },
      {
        "year": "2025",
        "topicId": "LL",
        "qid": "a",
        "text": "Assume that you have two sorted singly linked lists. Pointers P and Q are pointing to the first nodes of these linked lists respectively. Write a C function to merge the given linked lists by creating third linked list."
      },
      {
        "year": "2025",
        "topicId": "BTREE",
        "qid": "b",
        "text": "Construct a balanced multi-way search tree of order 3. Insert the following keys in the given order: 20, 10, 30, 5, 40, 50, 15, 18, 2, 60, 70."
      },
      {
        "year": "2025",
        "topicId": "LL",
        "qid": "c",
        "text": "Write a C function to split a circular linked list into two halves as per user's choice (User choice is data of a node). Ensure both resulting lists are circular."
      },
      {
        "year": "2025",
        "topicId": "HUFFMAN",
        "qid": "a",
        "text": "Which algorithm would you use to compress following data: eacdefeafbcdbdd. Generate binary code for each character."
      },
      {
        "year": "2025",
        "topicId": "HEAP",
        "qid": "b",
        "text": "Name and apply the algorithm on the following connected weighted graph to find the shortest path from source vertex A to all vertices in the graph. (Show all steps)."
      },
      {
        "year": "2025",
        "topicId": "HEAP",
        "qid": "c",
        "text": "Write a C function to create a min heap with one key at a time. Also give its worst-case complexity."
      },
      {
        "year": "2025",
        "topicId": "LL",
        "qid": "a",
        "text": "Write a C program to create a weighted graph with the help of node pointers and linked list of edges."
      },
      {
        "year": "2025",
        "topicId": "FILE_ORG",
        "qid": "b",
        "text": "You have a weighted graph for the following situation: A telecommunications company needs to lay fiber optic cables to connect multiple offices in a region. The cost of laying a cable between any two offices is assigned as weight of the edge. Name and apply an algorithm to find a network that connects all offices with the minimum total cable cost."
      },
      {
        "year": "2024",
        "topicId": "HEAP",
        "qid": "c",
        "text": "The following list is to be sorted using Merge Sort: 5, 10, 15, 28, 32, 46, 17, 40, 44. Show the sorting process by indicating how the data would appear in intermediate steps (do not write code). End Semester Examination 2024 \u2014 Data Structures with C"
      },
      {
        "year": "2024",
        "topicId": "LL",
        "qid": "a",
        "text": "Assuming that you have single linked list with pointer ptr at first node. Write a C function to delete all the nodes having even information in the linked list."
      },
      {
        "year": "2024",
        "topicId": "AVL",
        "qid": "b",
        "text": "Write advantages of an AVL tree. Draw an AVL tree with following keys: 16, 17, 20, 6, 7, 18, 19, 25, 23, 21."
      },
      {
        "year": "2024",
        "topicId": "TREE_BST",
        "qid": "c",
        "text": "Draw an expression tree using following expression: (A-B*C)+(D%E)-(F+G)-H^M."
      },
      {
        "year": "2024",
        "topicId": "BTREE",
        "qid": "a",
        "text": "Explain B and B+ Trees. Draw a B-tree of order 4, when the keys arrive in the following order: 4, 9, 8, 3, 1, 10, 2, 15, 20, 25, 30, 12, 35."
      },
      {
        "year": "2024",
        "topicId": "HUFFMAN",
        "qid": "b",
        "text": "Apply Huffman's algorithm to find Huffman's tree and code for using following signal: abacdefabcfefcdea, also find the minimum weighted path length."
      },
      {
        "year": "2024",
        "topicId": "HASH",
        "qid": "c",
        "text": "Explain hash collision with an example. Consider a hash table of size (m) 12. Using linear probing technique insert following keys 21, 12, 24, 30, 80, 25, 95, 55, 33, 88 and 39 into the hash table."
      },
      {
        "year": "2024",
        "topicId": "HEAP",
        "qid": "a",
        "text": "Apply Dijkstra's algorithm to find the shortest path from source vertex A to all other vertices in the given weighted graph."
      },
      {
        "year": "2024",
        "topicId": "HEAP",
        "qid": "b",
        "text": "Apply mergesort technique to sort the following sequence: 16, 45, 5, 88, 22, 56, 77, 13, 30, 55, 25, 89. Show the sorting process by indicating how the data would appear in intermediate steps (do not write code)."
      },
      {
        "year": "2024",
        "topicId": "LL",
        "qid": "c",
        "text": "Write an algorithm to delete a node from a binary search tree. Discuss algorithm with an example."
      },
      {
        "year": "2024",
        "topicId": "LL",
        "qid": "a",
        "text": "Give name and apply the graph traversal technique on the given graph, to find a path from M to S with minimum number of nodes in between. (Show all steps)."
      },
      {
        "year": "2024",
        "topicId": "LL",
        "qid": "b",
        "text": "Assume that you have a single linked list with a pointer ptr at first node. Write a C function to print the Nth node from last in the linked list. Example Input: 10\u219220\u219230\u219240\u219250, and N = 2 Output: 40"
      },
      {
        "year": "2024",
        "topicId": "STACK",
        "qid": "c",
        "text": "Convert the following infix expression into the postfix expression using stack (show all the steps): (A^B-C)/(D%E*F)-G^H."
      },
      {
        "year": "2024",
        "topicId": "FILE_ORG",
        "qid": "a",
        "text": "Explain sequential organization and index sequential file organization with examples."
      },
      {
        "year": "2024",
        "topicId": "HEAP",
        "qid": "b",
        "text": "What do you mean by spanning tree? Find minimal spanning tree from the given graph using Kruskal's algorithm (show all steps)."
      },
      {
        "year": "2024",
        "topicId": "LL",
        "qid": "c",
        "text": "Write a C function to create a binary search tree and write another function to count the nodes having same parent in the BST. End Semester Examination 2024 \u2014 Additional Paper"
      },
      {
        "year": "2024",
        "topicId": "LL",
        "qid": "a",
        "text": "Write a C function to insert a node in a circular singly linked list. Consider all the cases."
      },
      {
        "year": "2024",
        "topicId": "FILE_ORG",
        "qid": "b",
        "text": "Using the following traversals, construct the corresponding binary tree. Inorder: H K O B I L E A F C M J G Preorder: A B D H K E I L C F G J M"
      },
      {
        "year": "2024",
        "topicId": "AVL",
        "qid": "c",
        "text": "Write advantages of an AVL tree. Draw an AVL tree with following keys: 6, 7, 8, 9, 10, 1, 2, 3, 4, 5."
      },
      {
        "year": "2024",
        "topicId": "HEAP",
        "qid": "a",
        "text": "The following list is to be sorted using quick sort: 10, 40, 5, 18, 22, 36, 7, 3, 16, 48, 30, 27. Show the sorting process by indicating how the data would appear in intermediate steps (do not write code)."
      },
      {
        "year": "2024",
        "topicId": "TREE_BST",
        "qid": "b",
        "text": "Draw an expression tree using following expression: (G^H-I^J)/(K*R^S)+T^U."
      },
      {
        "year": "2024",
        "topicId": "LL",
        "qid": "c",
        "text": "Give name and apply the graph traversal technique on the given graph, to find a path from A to G with minimum number of nodes in between. (Show all steps)."
      },
      {
        "year": "2024",
        "topicId": "HUFFMAN",
        "qid": "a",
        "text": "Apply Huffman's algorithm to find Huffman's tree and code for a=3, b=2, c=4, d=2, e=4, f=3, g=1. Also find the minimum weighted path length."
      },
      {
        "year": "2024",
        "topicId": "HASH",
        "qid": "b",
        "text": "Explain hash collision with an example. Consider a hash table of size (m) 11. Using linear probing technique insert following keys 11, 17, 19, 22, 81, 21, 92, 15 and 29 into the hash table."
      },
      {
        "year": "2024",
        "topicId": "LL",
        "qid": "c",
        "text": "Assume that you have a sorted single linked list, with a pointer P pointing the first node of the linked list. Write a C function to delete all nodes that have odd information in that linked list."
      },
      {
        "year": "2024",
        "topicId": "FILE_ORG",
        "qid": "a",
        "text": "Explain sequential organization and index sequential file organization with examples."
      },
      {
        "year": "2024",
        "topicId": "HEAP",
        "qid": "b",
        "text": "What do you mean by spanning tree? Find minimal spanning tree from the given graph using Kruskal's algorithm (show all steps)."
      },
      {
        "year": "2024",
        "topicId": "LL",
        "qid": "c",
        "text": "Consider a single linked list with a pointer pointing to its head. Write a C function to insert a node after the last node, in between the list."
      },
      {
        "year": "2024",
        "topicId": "BTREE",
        "qid": "a",
        "text": "Explain B and B+ Tree. Create a B-tree of order 4, when the keys arrive in the following order: a, f, b, k, d, m, j, e, s, i, x, r, y."
      },
      {
        "year": "2024",
        "topicId": "FILE_ORG",
        "qid": "b",
        "text": "What do you mean by a connected graph? Give linked representation and memory representation of the following graph."
      },
      {
        "year": "2024",
        "topicId": "LL",
        "qid": "c",
        "text": "Write a function to merge two single linked lists. The input lists have their elements in sorted order from lowest to highest. The output list should also be sorted from lowest to highest."
      }
    ],
    "quizzes": [
      {
        "topicId": "ARRAYS",
        "question": "For a one dimensional array with base address B and element size w, the address of a[i] is",
        "options": [
          "B plus i times w",
          "B plus w",
          "B plus i",
          "B times i plus w"
        ],
        "correct": 0,
        "explanation": "Address arithmetic is linear in the index."
      },
      {
        "topicId": "ARRAYS",
        "question": "A sparse matrix is one in which",
        "options": [
          "Most elements are non zero",
          "Most elements are zero",
          "All elements are equal",
          "Elements are sorted"
        ],
        "correct": 1,
        "explanation": "Storing only non zero elements saves space."
      },
      {
        "topicId": "ARRAYS",
        "question": "The time to access the i th element of an array randomly is",
        "options": [
          "O of 1",
          "O of n",
          "O of log n",
          "O of n log n"
        ],
        "correct": 0,
        "explanation": "Array access is direct, constant time."
      },
      {
        "topicId": "ARRAYS",
        "question": "In row major order, the address of A of i and j for m rows and n columns is",
        "options": [
          "base plus i plus j times w",
          "base plus i times m plus j times w",
          "base plus i times n plus j times w",
          "base plus j times m plus i times w"
        ],
        "correct": 2,
        "explanation": "Whole rows of n elements precede row i."
      },
      {
        "topicId": "ARRAYS",
        "question": "An abstract data type specifies",
        "options": [
          "The exact memory layout",
          "Only the operations and their behaviour",
          "The machine instructions",
          "The compiler flags"
        ],
        "correct": 1,
        "explanation": "Implementation is deliberately hidden."
      },
      {
        "topicId": "STACK",
        "question": "A stack follows the discipline",
        "options": [
          "FIFO",
          "LIFO",
          "Random",
          "Priority"
        ],
        "correct": 1,
        "explanation": "Last in first out."
      },
      {
        "topicId": "STACK",
        "question": "The postfix form of A plus B times C is",
        "options": [
          "A B C times plus",
          "A B plus C times",
          "plus A B C times",
          "A B C plus times"
        ],
        "correct": 0,
        "explanation": "Multiplication binds tighter, so B C times is done first."
      },
      {
        "topicId": "STACK",
        "question": "Which of these is an application of stack?",
        "options": [
          "Function call and recursion handling",
          "Breadth first search",
          "Printer spooling",
          "Round robin scheduling"
        ],
        "correct": 0,
        "explanation": "Every call frame is pushed on the runtime stack."
      },
      {
        "topicId": "STACK",
        "question": "In an array based stack of capacity MAX, overflow occurs when",
        "options": [
          "top equals minus 1",
          "top equals 0",
          "top equals MAX minus 1",
          "top equals MAX"
        ],
        "correct": 2,
        "explanation": "No free slot remains after top reaches MAX minus 1."
      },
      {
        "topicId": "STACK",
        "question": "The value of the postfix expression 5 3 plus 2 times is",
        "options": [
          "16",
          "13",
          "10",
          "8"
        ],
        "correct": 0,
        "explanation": "5 plus 3 is 8, 8 times 2 is 16."
      },
      {
        "topicId": "QUEUE",
        "question": "A queue follows the discipline",
        "options": [
          "LIFO",
          "FIFO",
          "Priority order",
          "Random order"
        ],
        "correct": 1,
        "explanation": "First in first out."
      },
      {
        "topicId": "QUEUE",
        "question": "In a circular queue of size n, the full condition with one slot kept free is",
        "options": [
          "rear equals n",
          "rear plus 1 modulo n equals front",
          "front equals 0",
          "rear equals front"
        ],
        "correct": 1,
        "explanation": "One slot is sacrificed to distinguish full from empty."
      },
      {
        "topicId": "QUEUE",
        "question": "A deque allows",
        "options": [
          "Insertion at one end only",
          "Deletion at one end only",
          "Insertion and deletion at both ends",
          "Only priority based deletion"
        ],
        "correct": 2,
        "explanation": "Deque means double ended queue."
      },
      {
        "topicId": "QUEUE",
        "question": "A priority queue always deletes",
        "options": [
          "The element with the highest priority",
          "The oldest element",
          "The newest element",
          "A random element"
        ],
        "correct": 0,
        "explanation": "Ordering is by priority, not arrival."
      },
      {
        "topicId": "QUEUE",
        "question": "Which of these is NOT an application of a queue?",
        "options": [
          "CPU process scheduling",
          "Printer spooling",
          "Breadth first search",
          "Returning from a function call"
        ],
        "correct": 3,
        "explanation": "Returning from a call uses the stack."
      },
      {
        "topicId": "LL",
        "question": "In a singly linked list, the next field of the last node contains",
        "options": [
          "The address of the first node",
          "NULL",
          "Its own address",
          "Garbage always"
        ],
        "correct": 1,
        "explanation": "The list ends with a null pointer."
      },
      {
        "topicId": "LL",
        "question": "Insertion at the beginning of a singly linked list takes",
        "options": [
          "O of 1",
          "O of n",
          "O of log n",
          "O of n squared"
        ],
        "correct": 0,
        "explanation": "Only two pointers change."
      },
      {
        "topicId": "LL",
        "question": "Compared with a singly linked list, a doubly linked list needs",
        "options": [
          "Less memory per node",
          "One extra pointer per node",
          "No head pointer",
          "No traversal"
        ],
        "correct": 1,
        "explanation": "The prev pointer doubles the link space."
      },
      {
        "topicId": "LL",
        "question": "The Nth node from the end of a list can be found in one traversal using",
        "options": [
          "Two pointers kept N apart",
          "A stack only",
          "Recursion only",
          "Binary search"
        ],
        "correct": 0,
        "explanation": "Advance one pointer N steps first."
      },
      {
        "topicId": "LL",
        "question": "In a circular linked list, the last node points to",
        "options": [
          "NULL",
          "Itself only",
          "The first node",
          "The middle node"
        ],
        "correct": 2,
        "explanation": "The ring closes back to the head."
      },
      {
        "topicId": "TREE_BST",
        "question": "The inorder traversal of a binary search tree gives",
        "options": [
          "Sorted ascending order",
          "Reverse sorted order",
          "Level order",
          "Random order"
        ],
        "correct": 0,
        "explanation": "Left, node, right visits keys in order."
      },
      {
        "topicId": "TREE_BST",
        "question": "The maximum number of nodes in a binary tree with h levels is",
        "options": [
          "2 to the power h",
          "2 to the power h minus 1",
          "2 to the power h plus 1",
          "h squared"
        ],
        "correct": 1,
        "explanation": "Each level doubles, the sum is 2 to the power h minus 1."
      },
      {
        "topicId": "TREE_BST",
        "question": "The postorder traversal of an expression tree directly yields",
        "options": [
          "Infix",
          "Postfix",
          "Prefix",
          "Level order"
        ],
        "correct": 1,
        "explanation": "Children are evaluated before the operator."
      },
      {
        "topicId": "TREE_BST",
        "question": "Deleting a node with two children from a BST is done by",
        "options": [
          "Simply removing it",
          "Replacing it with its inorder successor or predecessor",
          "Making it a leaf first",
          "Rebuilding the whole tree"
        ],
        "correct": 1,
        "explanation": "The successor keeps the ordering valid."
      },
      {
        "topicId": "TREE_BST",
        "question": "A tree with n nodes has exactly",
        "options": [
          "n edges",
          "n minus 1 edges",
          "n plus 1 edges",
          "2n edges"
        ],
        "correct": 1,
        "explanation": "One edge per node except the root."
      },
      {
        "topicId": "AVL",
        "question": "An AVL tree is",
        "options": [
          "A complete binary tree",
          "A height balanced binary search tree",
          "A heap ordered tree",
          "A multi way tree"
        ],
        "correct": 1,
        "explanation": "Every node keeps balance factor within one."
      },
      {
        "topicId": "AVL",
        "question": "The permitted balance factors of an AVL node are",
        "options": [
          "Minus 2 to plus 2",
          "Minus 1, 0 and plus 1",
          "Only 0",
          "Any integer"
        ],
        "correct": 1,
        "explanation": "Balance is height left minus height right."
      },
      {
        "topicId": "AVL",
        "question": "The left left case is corrected by",
        "options": [
          "One right rotation",
          "One left rotation",
          "A right then left rotation",
          "Rebalancing the whole tree"
        ],
        "correct": 0,
        "explanation": "A single right rotation restores balance."
      },
      {
        "topicId": "AVL",
        "question": "The height of an AVL tree with n nodes is",
        "options": [
          "O of n",
          "O of log n",
          "O of n log n",
          "O of 1"
        ],
        "correct": 1,
        "explanation": "Balancing keeps the height logarithmic."
      },
      {
        "topicId": "AVL",
        "question": "The right left case needs",
        "options": [
          "A left rotation on the child then a right rotation on the node",
          "A right rotation on the right child then a left rotation on the node",
          "Two right rotations",
          "No rotation"
        ],
        "correct": 1,
        "explanation": "The inner subtree is first turned into a right right case."
      },
      {
        "topicId": "HEAP",
        "question": "In a min heap the root always holds",
        "options": [
          "The largest key",
          "The smallest key",
          "The median key",
          "Any key"
        ],
        "correct": 1,
        "explanation": "The heap property puts the minimum at the root."
      },
      {
        "topicId": "HEAP",
        "question": "In a zero indexed array heap, the children of index i are at",
        "options": [
          "i plus 1 and i plus 2",
          "2i and 2i plus 1",
          "2i plus 1 and 2i plus 2",
          "2i minus 1 and 2i"
        ],
        "correct": 2,
        "explanation": "Level order storage gives these indices."
      },
      {
        "topicId": "HEAP",
        "question": "Building a heap from n unordered elements takes",
        "options": [
          "O of n log n",
          "O of log n",
          "O of n",
          "O of n squared"
        ],
        "correct": 2,
        "explanation": "Bottom up heapify is linear in the number of nodes."
      },
      {
        "topicId": "HEAP",
        "question": "Inserting one key into a heap of n keys takes",
        "options": [
          "O of 1",
          "O of log n",
          "O of n",
          "O of n log n"
        ],
        "correct": 1,
        "explanation": "The new key sifts up along one root path."
      },
      {
        "topicId": "HEAP",
        "question": "A heap is always",
        "options": [
          "A complete binary tree",
          "A full binary tree",
          "A binary search tree",
          "An AVL tree"
        ],
        "correct": 0,
        "explanation": "Completeness is what makes array storage possible."
      },
      {
        "topicId": "HUFFMAN",
        "question": "Huffman coding produces codes that",
        "options": [
          "Have minimum weighted external path length",
          "Use fixed length codes",
          "Are always eight bits",
          "Are unique per message"
        ],
        "correct": 0,
        "explanation": "The greedy merge minimises total cost."
      },
      {
        "topicId": "HUFFMAN",
        "question": "The Huffman tree is built by repeatedly",
        "options": [
          "Merging the two least frequent nodes",
          "Splitting the most frequent node",
          "Sorting the alphabet",
          "Deleting the rarest symbol"
        ],
        "correct": 0,
        "explanation": "Each merge creates a new internal node."
      },
      {
        "topicId": "HUFFMAN",
        "question": "In a Huffman code the most frequent character gets",
        "options": [
          "The longest code",
          "The shortest code",
          "A code of length eight",
          "No code"
        ],
        "correct": 1,
        "explanation": "Shorter codes for frequent symbols reduce the average length."
      },
      {
        "topicId": "HUFFMAN",
        "question": "A prefix free code means",
        "options": [
          "No codeword is a prefix of another codeword",
          "Every codeword has equal length",
          "Every codeword starts with zero",
          "Codes may not repeat"
        ],
        "correct": 0,
        "explanation": "Decoding is unambiguous without separators."
      },
      {
        "topicId": "HUFFMAN",
        "question": "Which data structure builds the Huffman tree efficiently?",
        "options": [
          "A stack",
          "A min priority queue",
          "A hash table",
          "A queue"
        ],
        "correct": 1,
        "explanation": "Repeated extraction of the two minima is logarithmic each time."
      },
      {
        "topicId": "BTREE",
        "question": "A B tree of order m has at most",
        "options": [
          "m minus 1 children",
          "m children",
          "m plus 1 children",
          "2m children"
        ],
        "correct": 1,
        "explanation": "Order is the maximum number of children."
      },
      {
        "topicId": "BTREE",
        "question": "In a B plus tree, the actual records are stored",
        "options": [
          "In the internal nodes",
          "Only in the leaf nodes",
          "In the root only",
          "In both leaves and internal nodes"
        ],
        "correct": 1,
        "explanation": "Internal nodes hold only separator keys."
      },
      {
        "topicId": "BTREE",
        "question": "The leaves of a B plus tree are linked together to",
        "options": [
          "Support fast range and sequential access",
          "Save memory",
          "Allow recursion",
          "Avoid rotations"
        ],
        "correct": 0,
        "explanation": "A linked leaf chain gives an ordered scan."
      },
      {
        "topicId": "BTREE",
        "question": "In a B tree, all leaf nodes appear",
        "options": [
          "At different levels",
          "At the same level",
          "Only at the root",
          "Only in the left subtree"
        ],
        "correct": 1,
        "explanation": "The tree is perfectly height balanced."
      },
      {
        "topicId": "BTREE",
        "question": "B and B plus trees are mainly used for",
        "options": [
          "Database and file indexing",
          "Expression evaluation",
          "Sorting integers in memory",
          "Graph traversal"
        ],
        "correct": 0,
        "explanation": "They minimise disk block accesses."
      },
      {
        "topicId": "HASH",
        "question": "A hash function maps a key to",
        "options": [
          "A table index",
          "Another key",
          "A pointer to the record",
          "A priority value"
        ],
        "correct": 0,
        "explanation": "The result is a bucket address."
      },
      {
        "topicId": "HASH",
        "question": "A collision occurs when",
        "options": [
          "Two keys hash to the same index",
          "A key is deleted",
          "The table is empty",
          "The load factor is zero"
        ],
        "correct": 0,
        "explanation": "Distinct keys can share a bucket."
      },
      {
        "topicId": "HASH",
        "question": "Linear probing resolves a collision by",
        "options": [
          "Checking the next slot cyclically",
          "Chaining a list",
          "Rehashing with a new table",
          "Doubling the key"
        ],
        "correct": 0,
        "explanation": "It searches forward for a free slot."
      },
      {
        "topicId": "HASH",
        "question": "For h of k equal to k modulo 12, the key 24 is stored at index",
        "options": [
          "0",
          "1",
          "12",
          "2"
        ],
        "correct": 0,
        "explanation": "24 divided by 12 leaves remainder 0."
      },
      {
        "topicId": "HASH",
        "question": "In separate chaining, each table slot holds",
        "options": [
          "A single record only",
          "A linked list of records",
          "A binary tree",
          "A stack of keys"
        ],
        "correct": 1,
        "explanation": "Overflow records hang off the bucket."
      },
      {
        "topicId": "SORTING",
        "question": "Which sorting algorithm is stable?",
        "options": [
          "Quick sort",
          "Merge sort",
          "Heap sort",
          "Selection sort"
        ],
        "correct": 1,
        "explanation": "Merge sort preserves the order of equal keys."
      },
      {
        "topicId": "SORTING",
        "question": "The worst case time of quick sort is",
        "options": [
          "O of n",
          "O of n log n",
          "O of n squared",
          "O of log n"
        ],
        "correct": 2,
        "explanation": "Already sorted input with a bad pivot degenerates."
      },
      {
        "topicId": "SORTING",
        "question": "Merge sort needs extra space of",
        "options": [
          "O of 1",
          "O of log n",
          "O of n",
          "O of n squared"
        ],
        "correct": 2,
        "explanation": "Merging requires a temporary array."
      },
      {
        "topicId": "SORTING",
        "question": "Heap sort is",
        "options": [
          "In place with O of n log n time",
          "In place with O of n time",
          "Not in place",
          "Stable"
        ],
        "correct": 0,
        "explanation": "It sorts inside the array using heap operations."
      },
      {
        "topicId": "SORTING",
        "question": "The number of comparisons in the worst case of bubble sort is",
        "options": [
          "n",
          "n minus 1",
          "n times n minus 1 divided by 2",
          "n log n"
        ],
        "correct": 2,
        "explanation": "Every pair is compared in the worst case."
      },
      {
        "topicId": "GRAPH_REPR",
        "question": "An adjacency matrix of a graph with V vertices needs space",
        "options": [
          "O of V",
          "O of V squared",
          "O of E",
          "O of V plus E"
        ],
        "correct": 1,
        "explanation": "A V by V table is stored."
      },
      {
        "topicId": "GRAPH_REPR",
        "question": "An adjacency list is preferred over a matrix when the graph is",
        "options": [
          "Complete",
          "Sparse",
          "Undirected only",
          "Weighted only"
        ],
        "correct": 1,
        "explanation": "Only existing edges are stored."
      },
      {
        "topicId": "GRAPH_REPR",
        "question": "The degree of a vertex is",
        "options": [
          "The number of edges incident on it",
          "The number of vertices",
          "Its label",
          "Its weight"
        ],
        "correct": 0,
        "explanation": "Each incident edge adds one to the degree."
      },
      {
        "topicId": "GRAPH_REPR",
        "question": "The adjacency matrix of an undirected graph is always",
        "options": [
          "Diagonal",
          "Symmetric",
          "Sparse",
          "Upper triangular"
        ],
        "correct": 1,
        "explanation": "Edge from u to v implies v to u."
      },
      {
        "topicId": "GRAPH_REPR",
        "question": "The sum of the degrees of all vertices equals",
        "options": [
          "Number of edges",
          "Twice the number of edges",
          "Number of vertices",
          "Twice the number of vertices"
        ],
        "correct": 1,
        "explanation": "Every edge contributes two to the total degree."
      },
      {
        "topicId": "GRAPH_TRAV",
        "question": "Breadth first search uses which data structure?",
        "options": [
          "Stack",
          "Queue",
          "Heap",
          "Tree"
        ],
        "correct": 1,
        "explanation": "Vertices are visited level by level."
      },
      {
        "topicId": "GRAPH_TRAV",
        "question": "Depth first search is naturally implemented with",
        "options": [
          "A queue",
          "A stack or recursion",
          "A hash table",
          "A heap"
        ],
        "correct": 1,
        "explanation": "The deepest vertex is explored first."
      },
      {
        "topicId": "GRAPH_TRAV",
        "question": "To find a path between two vertices with the minimum number of edges you use",
        "options": [
          "DFS",
          "BFS",
          "Kruskal",
          "Dijkstra"
        ],
        "correct": 1,
        "explanation": "BFS explores in order of edge count."
      },
      {
        "topicId": "GRAPH_TRAV",
        "question": "Union find with path compression and union by rank gives an amortised cost of",
        "options": [
          "O of n",
          "O of log n",
          "Nearly constant, the inverse Ackermann factor",
          "O of n squared"
        ],
        "correct": 2,
        "explanation": "The two heuristics together are almost linear."
      },
      {
        "topicId": "GRAPH_TRAV",
        "question": "BFS on an adjacency list takes",
        "options": [
          "O of V squared",
          "O of V plus E",
          "O of E log V",
          "O of V log E"
        ],
        "correct": 1,
        "explanation": "Each vertex and edge is processed once."
      },
      {
        "topicId": "MST",
        "question": "A minimum spanning tree of a graph with V vertices has",
        "options": [
          "V edges",
          "V minus 1 edges",
          "V plus 1 edges",
          "E minus 1 edges"
        ],
        "correct": 1,
        "explanation": "It is a tree on all vertices."
      },
      {
        "topicId": "MST",
        "question": "Kruskal algorithm relies on",
        "options": [
          "Sorting the edges and a union find structure",
          "A priority queue of vertices",
          "BFS from each vertex",
          "Dynamic programming"
        ],
        "correct": 0,
        "explanation": "Cheapest edge that does not form a cycle is added."
      },
      {
        "topicId": "MST",
        "question": "Prim algorithm grows the tree",
        "options": [
          "From a start vertex using a minimum priority queue of cut edges",
          "By sorting all edges first",
          "By removing the heaviest edge repeatedly",
          "Using a stack"
        ],
        "correct": 0,
        "explanation": "It always extends the current tree."
      },
      {
        "topicId": "MST",
        "question": "The running time of Kruskal is dominated by",
        "options": [
          "Edge sorting, O of E log E",
          "Union find, O of V",
          "Building the matrix, O of V squared",
          "The final traversal"
        ],
        "correct": 0,
        "explanation": "Sorting is the costliest step."
      },
      {
        "topicId": "MST",
        "question": "A minimum spanning tree is defined for",
        "options": [
          "Any directed graph",
          "A connected weighted undirected graph",
          "A disconnected graph",
          "A tree only"
        ],
        "correct": 1,
        "explanation": "Connectivity is required to span all vertices."
      },
      {
        "topicId": "SHORTEST_PATH",
        "question": "Dijkstra algorithm fails when the graph has",
        "options": [
          "Too many vertices",
          "Negative edge weights",
          "Cycles",
          "Parallel edges"
        ],
        "correct": 1,
        "explanation": "Greedy finalisation is invalid with negative weights."
      },
      {
        "topicId": "SHORTEST_PATH",
        "question": "Bellman Ford runs in",
        "options": [
          "O of V",
          "O of V times E",
          "O of E log V",
          "O of V cubed"
        ],
        "correct": 1,
        "explanation": "V minus 1 relaxation rounds over all edges."
      },
      {
        "topicId": "SHORTEST_PATH",
        "question": "Floyd Warshall computes",
        "options": [
          "Single source shortest paths",
          "All pairs shortest paths",
          "The minimum spanning tree",
          "Topological order"
        ],
        "correct": 1,
        "explanation": "It builds a distance matrix over all pairs."
      },
      {
        "topicId": "SHORTEST_PATH",
        "question": "Dijkstra with a binary heap runs in",
        "options": [
          "O of V squared",
          "O of V plus E log V",
          "O of V times E",
          "O of E squared"
        ],
        "correct": 1,
        "explanation": "Each edge relaxation may push into the heap."
      },
      {
        "topicId": "SHORTEST_PATH",
        "question": "A graph with negative edges but no negative cycle is best handled by",
        "options": [
          "Dijkstra",
          "Bellman Ford",
          "Prim",
          "Kruskal"
        ],
        "correct": 1,
        "explanation": "It also detects negative cycles."
      },
      {
        "topicId": "FILE_ORG",
        "question": "In sequential file organization, records are stored",
        "options": [
          "In the order of the key field",
          "In hash order",
          "In a binary tree",
          "In random blocks"
        ],
        "correct": 0,
        "explanation": "The file is kept sorted on the key."
      },
      {
        "topicId": "FILE_ORG",
        "question": "An indexed sequential file consists of",
        "options": [
          "A data file ordered by key plus an index file",
          "Only a hash table",
          "Only a linked list",
          "A set of unsorted blocks"
        ],
        "correct": 0,
        "explanation": "The index points into the ordered data file."
      },
      {
        "topicId": "FILE_ORG",
        "question": "A B plus tree is preferred for indexing because it",
        "options": [
          "Supports range queries and sequential scans efficiently",
          "Uses less memory than an array",
          "Needs no rebalancing",
          "Stores data in the root"
        ],
        "correct": 0,
        "explanation": "Linked leaves allow ordered traversal."
      },
      {
        "topicId": "FILE_ORG",
        "question": "The blocking factor of a file is",
        "options": [
          "The number of records stored in one block",
          "The number of blocks on a disk",
          "The size of a record",
          "The number of files"
        ],
        "correct": 0,
        "explanation": "It determines how many records one read fetches."
      },
      {
        "topicId": "FILE_ORG",
        "question": "Direct or hash file organization gives",
        "options": [
          "Fast random access to a record",
          "Sorted sequential access",
          "No access method",
          "Slower access than sequential"
        ],
        "correct": 0,
        "explanation": "The hash of the key locates the block directly."
      }
    ],
    "notes": {
      "ARRAYS": {
        "bullets": [
          "Data: raw values. Data item: smallest unit (elementary) or group item (e.g. name = first + last). Record: collection of related fields. File: collection of records. Entity, attribute, key (field that identifies a record uniquely).",
          "Data structure: a particular way of organising data in memory so that it can be used efficiently. Linear: elements in sequence (array, stack, queue, linked list). Non-linear: hierarchical or network (tree, graph). Static (fixed size, array) vs dynamic (grows at run time, linked list).",
          "Data structure operations: traversing, searching, inserting, deleting, sorting, merging.",
          "Abstract Data Type (ADT): mathematical model of data plus operations, independent of implementation.",
          "Stack ADT: data = ordered list; operations = push, pop, peek, isEmpty, isFull. C implements ADTs using struct and functions.",
          "struct student { int roll; char name[20]; float marks; }; // user-defined type struct student s1 = {1, \"Ved\", 88.5}; struct student *p = &s1; printf(\"%d %s\", s1.roll, p->name); // . for variable, -> for pointer int *a = (int*) malloc(5 * sizeof(int)); // dynamic memory a = (int*) realloc(a, 10 * sizeof(int)); free(a); // malloc, calloc, realloc, free",
          "Algorithm: finite, ordered set of unambiguous steps to solve a problem. Properties: input, output, finiteness, definiteness, effectiveness.",
          "Time complexity: number of basic operations as a function of input size n. Space complexity: memory needed (input + auxiliary). We count operations, not seconds.",
          "Best, average, worst case: e.g. linear search best O(1) (found first), worst O(n) (last or absent).",
          "Asymptotic notations: Big-O f(n) = O(g(n)) if f(n) <= c.g(n) for n >= n0 (upper bound). Omega f(n) >= c.g(n) (lower bound). Theta tight bound (both). Example: 3n2 + 5n + 2 = O(n2); drop constants and lower-order terms.",
          "Growth order: O(1) < O(log n) < O(n) < O(n log n) < O(n2) < O(n3) < O(2n) < O(n!).",
          "Time-space trade-off: using extra space to save time (hash table, precomputed table) or saving space by recomputing (compression). Example: store factorials in array for O(1) lookup.",
          "Analysis tips: single loop to n is O(n); nested loops O(n2); loop that halves/doubles i is O(log n); sequential statements add.",
          "for(i = 1; i <= n; i++) // O(n) for(i = 1; i <= n; i *= 2) // O(log n) for(i = 0; i < n; i++) for(j = 0; j < n; j++) // O(n^2)",
          "An array is a collection of elements of the same type stored in contiguous memory, accessed by index.",
          "Advantages: random access O(1), simple. Disadvantages: fixed size, insertion/deletion O(n) due to shifting.",
          "Operation Method Time Traversal visit each element O(n) Insertion at position k shift elements from k to end right by one O(n) Deletion at position k shift elements after k left by one O(n) Linear search compare one by one O(n) Access by index address calculation O(1) void insert(int a[], int *n, int k, int x){ // insert x at index k for(int i = *n - 1; i >= k; i--) a[i+1] = a[i]; // shift right a[k] = x; (*n)++; } void del(int a[], int *n, int k){ for(int i = k; i < *n - 1; i++) a[i] = a[i+1]; // shift left (*n)--; } Address calculation Array...",
          "Example: 2-D row major A[5][4] (indices from 0), base 2000, w = 2. Loc(A[3][2]) = 2000 + 2 [ 4 x 3 + 2 ] = 2000 + 28 = 2028. Column major: 2000 + 2 [ 5 x 2 + 3 ] = 2026.",
          "Sparse matrix A matrix with most elements zero. Storing all elements wastes memory, so store only non-zero elements. Triplet representation: array of (row, column, value); first row holds (total rows, total columns, number of non-zero).",
          "Linked representation keeps non-zero nodes in lists.",
          "Saves space when non-zero count is small: stores 3(k+1) numbers instead of m x n. Transpose in triplet form: swap row and column, then reorder."
        ],
        "links": [
          {
            "title": "YouTube search: array address calculation sparse matrix",
            "url": "https://www.youtube.com/results?search_query=array+address+calculation+sparse+matrix"
          }
        ]
      },
      "AVL": {
        "bullets": [
          "An AVL tree (Adelson-Velsky and Landis) is a height-balanced BST: for every node, balance factor = height(left) - height(right) is -1, 0 or +1. Because height is always O(log n), search, insert and delete are guaranteed O(log n). After insertion or deletion, if a node becomes unbalanced, restore balance by rotations.",
          "Case Cause (insertion) Fix LL new node in left subtree of left child single right rotation at unbalanced node RR new node in right subtree of right child single left rotation LR new node in right subtree of left child left rotation on left child, then right rotation on node RL new node in left subtree of right child right rotation on right child, then left rotation on node Example: Insert 30, 20, 10 30 -> left 20 -> left 10 gives LL imbalance at 30 (BF = +2). Right rotation makes 20 the root with children 10 and 30.",
          "Example: Insert 10, 30, 20 10 -> right 30 -> left 20 gives RL imbalance at 10. Right rotate 30 (20 becomes parent of 30), then left rotate 10: root 20, children 10 and 30.",
          "Rotations are O(1); at most one rotation (single or double) is needed after an insertion. Minimum nodes in AVL tree of height h: N(h) = N(h-1) + N(h-2) + 1.",
          "Exam tip: Unit 3 exam favourites: tree properties (n0 = n2 + 1); traversals of given tree; tree from inorder + preorder; BST insertion and deletion; AVL rotations with insertion sequence; heap insert/delete and heap sort; Huffman tree and codes; threaded tree; extended binary tree.",
          "Q. Maximum nodes in a binary tree of height 4 (root at level 1)?",
          "A. Its height is at most about 1.44 log n because balance factors stay within -1 to +1."
        ],
        "links": [
          {
            "title": "YouTube search: AVL tree rotations explained",
            "url": "https://www.youtube.com/results?search_query=AVL+tree+rotations+explained"
          }
        ]
      },
      "BTREE": {
        "bullets": [
          "A B-tree of order m is a balanced multiway search tree designed for disks, where one node = one disk block.",
          "Every node has at most m children and m - 1 keys. Every non-root internal node has at least ceil(m/2) children (ceil(m/2) - 1 keys). The root has at least 2 children (if not a leaf). All leaves are at the same level.",
          "Keys in a node are sorted; keys in child i lie between key i-1 and key i.",
          "Search: like BST but multiway; O(log n) block accesses. Insertion: insert in the leaf; if the node overflows (more than m-1 keys) split it around the median and push the median up to the parent (may propagate to the root, increasing height). Deletion: remove key; if a node underflows, borrow from a sibling or merge with it.",
          "Tree grows upwards (height only increases when the root splits), so it stays balanced.",
          "Example: B-tree of order 3 (2-3 tree), insert 10, 20, 30 Insert 10, 20 in one node. Inserting 30 overflows (3 keys > 2): split around median 20; 20 moves up as new root with children [10] and [30].",
          "B+ tree: a variant where all data records (or record pointers) are stored only in leaf nodes, and internal nodes hold only keys as index. Leaves are linked in a list, so range queries and sequential scans are fast. Keys may be repeated in internal nodes. Internal nodes hold more keys (no data pointers), so tree is shallower.",
          "B-tree B+ tree Data in internal and leaf nodes Data only in leaf nodes Leaves not linked Leaves linked for sequential access Search may end at internal node Search always reaches a leaf (uniform time) Better for single key lookup Better for range queries and full scans Used in some file systems Used in databases and file systems (NTFS, indexes)"
        ],
        "links": [
          {
            "title": "YouTube search: B tree and B+ tree insertion",
            "url": "https://www.youtube.com/results?search_query=B+tree+and+B%2B+tree+insertion"
          }
        ]
      },
      "FILE_ORG": {
        "bullets": [
          "A file is a collection of records stored on secondary storage. Data is moved in blocks (pages). Blocking factor bfr = floor(block size / record size). Disk access time = seek + rotational latency + transfer; so organisation aims to minimise block accesses.",
          "Sequential file: records in key order; good for batch processing; search O(n)/binary search on blocks; insertion costly. Direct (hashed) file: record address computed by hash function; fast direct access. Indexed sequential (ISAM): sequential file plus an index. Heap (pile) file: unordered, appended at the end.",
          "An index is a separate structure holding (key, pointer to record/block) pairs, much smaller than the data file, so searching it is fast (like a book index).",
          "Primary index: on the ordering key of a sequentially ordered file; one entry per block (sparse). Clustering index: on a non-key ordering field. Secondary index: on a non-ordering field; dense (entry for every record).",
          "Multilevel index: index on the index, to reduce search to few block accesses; B-trees generalise this.",
          "Dense index: one entry per record. Sparse index: one entry per block."
        ],
        "links": [
          {
            "title": "YouTube search: file organization indexed sequential file",
            "url": "https://www.youtube.com/results?search_query=file+organization+indexed+sequential+file"
          }
        ]
      },
      "GRAPH_REPR": {
        "bullets": [
          "A graph G = (V, E): vertices and edges. Directed (edges have direction) or undirected; weighted (edge cost); simple (no loops/multiple edges); connected; cyclic/acyclic; degree (in-degree and out-degree). Path, cycle, tree (connected acyclic, V-1 edges), complete graph (E = V(V-1)/2 undirected).",
          "Adjacency matrix: V x V matrix, entry 1 (or weight) if edge. Space O(V2), edge test O(1), listing neighbours O(V); good for dense graphs. Adjacency list: array of lists of neighbours. Space O(V + E), neighbours O(degree); good for sparse graphs."
        ],
        "links": [
          {
            "title": "YouTube search: graph representation adjacency matrix list",
            "url": "https://www.youtube.com/results?search_query=graph+representation+adjacency+matrix+list"
          }
        ]
      },
      "GRAPH_TRAV": {
        "bullets": [
          "BFS (Breadth First Search): start at source, visit all neighbours, then their neighbours (level by level) using a queue and a visited array. Finds shortest path in unweighted graph. Time O(V + E) with adjacency list (O(V2) with matrix).",
          "DFS (Depth First Search): go as deep as possible along a path, then backtrack, using a stack or recursion.",
          "Time O(V + E). Applications: cycle detection, topological sort, connected components, solving mazes, finding strongly connected components.",
          "int adj[10][10], vis[10], n; void dfs(int v){ vis[v] = 1; printf(\"%d \", v); for(int u = 0; u < n; u++) if(adj[v][u] && !vis[u]) dfs(u); } void bfs(int s){ int q[20], f = 0, r = 0; vis[s] = 1; q[r++] = s; while(f < r){ int v = q[f++]; printf(\"%d \", v); for(int u = 0; u < n; u++) if(adj[v][u] && !vis[u]){ vis[u] = 1; q[r++] = u; } } }",
          "Maintains a collection of disjoint sets with operations MakeSet(x), Find(x) (representative of the set containing x) and Union(a, b) (merge sets). Each set is a tree with the root as representative; parent[] array stores the tree.",
          "Path compression: during Find, make every visited node point directly to the root; flattens the tree.",
          "Union by rank/size: attach the shorter (smaller) tree under the taller (larger) root to keep trees shallow.",
          "Together they give nearly constant amortised time, O(alpha(n)) per operation where alpha is the inverse Ackermann function. Used in Kruskal's algorithm (cycle check) and connected components.",
          "int p[100], rk[100]; void makeset(int n){ for(int i = 0; i < n; i++){ p[i] = i; rk[i] = 0; } } int find(int x){ return p[x] == x ? x : (p[x] = find(p[x])); } // path compression void unite(int a, int b){ a = find(a); b = find(b); if(a == b) return; if(rk[a] < rk[b]){ int t = a; a = b; b = t; } // union by rank p[b] = a; if(rk[a] == rk[b]) rk[a]++; }"
        ],
        "links": [
          {
            "title": "YouTube search: BFS DFS graph traversal",
            "url": "https://www.youtube.com/results?search_query=BFS+DFS+graph+traversal"
          }
        ]
      },
      "HASH": {
        "bullets": [
          "Hashing maps a key to a table index using a hash function h(k), giving average O(1) search, insert and delete. The table is the hash table of size m.",
          "Good hash function: easy to compute, spreads keys uniformly, minimises collisions. Methods: division h(k) = k mod m (choose m prime); mid-square (square key, take middle digits); folding (split key into parts and add); multiplication method; digit extraction.",
          "Collision: two keys give the same index. Load factor = n / m.",
          "Chaining (open hashing): each slot holds a linked list of all keys that hash there; table can hold more keys than slots; search time O(1 + load factor).",
          "Open addressing (closed hashing): all keys stored in table; on collision probe for another free slot. Linear probing: h(k, i) = (h(k) + i) mod m (primary clustering). Quadratic probing: (h(k) + c1 i + c2 i2) mod m (secondary clustering). Double hashing: (h1(k) + i h2(k)) mod m, fewest clusters. Deletion needs a tombstone marker.",
          "Example: Linear probing, m = 10, keys 25, 35, 15, 22 25 -> 5. 35 -> 5 taken -> 6. 15 -> 5, 6 taken -> 7. 22 -> 2. Table: index 2=22, 5=25, 6=35, 7=15.",
          "int table[10]; // -1 means empty void insertKey(int k){ int i = k % 10; while(table[i] != -1) i = (i + 1) % 10; // linear probing table[i] = k; } Exam tip: Unit 4 exam favourites: sorting comparison table; trace of bubble/insertion/quick/merge/heap on a sample array; quick sort worst case; binary search with trace; hashing methods and collision resolution with an example.",
          "Q. Which sorting algorithm is best for nearly sorted data?",
          "Q. Why is merge sort not preferred for arrays in memory-constrained systems?",
          "A. It needs O(n) extra space; heap sort or quick sort are in-place."
        ],
        "links": [
          {
            "title": "YouTube search: hashing collision resolution linear probing",
            "url": "https://www.youtube.com/results?search_query=hashing+collision+resolution+linear+probing"
          }
        ]
      },
      "HEAP": {
        "bullets": [
          "A complete binary tree with the heap property. Max-heap: every parent >= its children (root is maximum).",
          "Min-heap: every parent <= children (root is minimum). Stored in an array: children of i at 2i and 2i+1.",
          "Insert: place at the next free position (end), then sift up (swap with parent while violating). O(log n). Delete root: replace root with the last element, reduce size, sift down (heapify, swap with larger child in max-heap).",
          "O(log n). Build heap from array: heapify from n/2 down to 1, O(n).",
          "Applications: priority queue, heap sort, k-th largest, scheduling.",
          "Example: Max-heap insertion 10, 20, 15, 30, 40 Insert 10. Insert 20: sift up, root 20, child 10. Insert 15: right child of 20. Insert 30: under 10 (left of 10), sift up past 10 and 20 -> root 30. Insert 40: becomes root; array result 40, 30, 15, 10, 20.",
          "void heapify(int a[], int n, int i){ // max-heap, 0-indexed int l = 2*i + 1, r = 2*i + 2, big = i; if(l < n && a[l] > a[big]) big = l; if(r < n && a[r] > a[big]) big = r; if(big != i){ int t = a[i]; a[i] = a[big]; a[big] = t; heapify(a, n, big); } }"
        ],
        "links": [
          {
            "title": "YouTube search: binary heap insert delete heapify",
            "url": "https://www.youtube.com/results?search_query=binary+heap+insert+delete+heapify"
          }
        ]
      },
      "HUFFMAN": {
        "bullets": [
          "Huffman coding is a greedy lossless compression method that gives shorter prefix-free binary codes to more frequent characters. It builds a Huffman tree (a weighted extended binary tree with minimum weighted path length).",
          "1. Create a leaf node for each character with its frequency and put all in a min-priority queue.",
          "2. Remove the two nodes with smallest frequency; create a new internal node with frequency = their sum, with them as children.",
          "3. Insert the new node back. Repeat until only one node (root) remains.",
          "4. Assign 0 to left edges and 1 to right edges; the code of a character is the path from root to its leaf.",
          "Example: a:45, b:13, c:12, d:16, e:9, f:5 Merge f(5)+e(9)=14; c(12)+b(13)=25; 14+d(16)=30; 25+30=55; a(45)+55=100. Codes: a=0, c=100, b=101, f=1100, e=1101, d=111. Total bits = 45x1 + 12x3 + 13x3 + 5x4 + 9x4 + 16x3 = 224 vs 300 with 3-bit fixed codes."
        ],
        "links": [
          {
            "title": "YouTube search: Huffman coding algorithm example",
            "url": "https://www.youtube.com/results?search_query=Huffman+coding+algorithm+example"
          }
        ]
      },
      "LL": {
        "bullets": [
          "A linked list is a collection of nodes placed anywhere in memory; each node holds data and a pointer to the next node. The pointer head stores the first node's address; last node's next is NULL. Memory is allocated dynamically.",
          "Array Linked list Contiguous memory, fixed size Non-contiguous, grows and shrinks Random access O(1) Sequential access O(n) Insert/delete O(n) (shifting) Insert/delete O(1) if position known No extra pointer memory Extra memory for pointers Memory may be wasted or insufficient Allocated as needed struct node { int data; struct node *next; }; struct node *head = NULL; void insertBeg(int x){ struct node *n = (struct node*)malloc(sizeof(struct node)); n->data = x; n->next = head; head = n; } // O(1) void insertEnd(int x){ struct node *n =...",
          "Header linked list: contains a special header node at the start that stores extra information (e.g. number of nodes); list nodes follow. Grounded (last next = NULL) or circular header list (last points back to header).",
          "Doubly linked list (two-way list): each node has prev, data, next. Traversal in both directions, easy deletion given a node pointer, but extra memory. Two-way header list: doubly linked list with a header node.",
          "Circular linked list: last node points to the first; no NULL; any node can be a starting point; useful for round-robin scheduling.",
          "Linked list in array: arrays INFO[] and LINK[] with integer indexes as pointers; START is the first index; AVAIL is a list of free cells; used in languages without pointers.",
          "struct dnode { struct dnode *prev; int data; struct dnode *next; }; void insertAfterD(struct dnode *p, int x){ struct dnode *n = malloc(sizeof(struct dnode)); n->data = x; n->prev = p; n->next = p->next; if(p->next) p->next->prev = n; p->next = n; } void deleteD(struct dnode *p){ if(p->prev) p->prev->next = p->next; if(p->next) p->next->prev = p->prev; free(p); }",
          "Stack: push = insert at head, pop = delete at head (both O(1), no overflow except memory). Queue: keep front and rear pointers; enqueue at rear (rear->next = n; rear = n;), dequeue from front.",
          "Each term of a polynomial is a node with coefficient, exponent, next, stored in decreasing order of exponent.",
          "Example 5x3 + 4x2 + 2 : (5,3) -> (4,2) -> (2,0).",
          "1. Take pointers p and q at heads of the two polynomials.",
          "2. If exponent(p) > exponent(q): copy p's term to result, move p.",
          "3. If exponent(p) < exponent(q): copy q's term, move q.",
          "4. If equal: add coefficients; if the sum is not zero, add term to result; move both.",
          "5. When one list ends, copy the rest of the other.",
          "Example: Addition (5x^3 + 4x^2 + 2) + (3x^3 + 7x + 1) = 8x^3 + 4x^2 + 7x + 3.",
          "A list whose elements may be atoms or other lists (sublists). Each node has a tag field (atom/list) and data or sublist pointer. Example L = (a, (b, c), d). Used to represent polynomials in many variables, nested structures, LISP lists.",
          "Exam tip: Unit 2 exam favourites: circular queue operations; deque types; priority queue; linked list insert/delete/reverse programs; array vs linked list; doubly and circular lists; polynomial addition; linked list in array; stack/queue using linked list.",
          "Q. Why is a circular queue better than a linear queue?",
          "A. It reuses freed front cells, avoiding false overflow.",
          "Q. How do you detect a loop in a linked list?",
          "A. Floyd's method: two pointers (slow moves 1, fast moves 2); if they meet there is a loop."
        ],
        "links": [
          {
            "title": "YouTube search: linked list operations in C",
            "url": "https://www.youtube.com/results?search_query=linked+list+operations+in+C"
          }
        ]
      },
      "MST": {
        "bullets": [
          "A spanning tree connects all V vertices using V - 1 edges with no cycle. The MST of a weighted connected undirected graph is the spanning tree of minimum total weight. Both algorithms below are greedy.",
          "Kruskal's algorithm: sort all edges by weight; for each edge in order, add it if it does not form a cycle (check with Union-Find); stop when V - 1 edges are chosen. Time O(E log E) (sorting). Good for sparse graphs.",
          "Prim's algorithm: start from any vertex; repeatedly add the minimum-weight edge connecting the tree to a vertex outside it. Time O(V2) with matrix, O(E log V) with heap. Good for dense graphs.",
          "Example: Edges: A-B 4, A-C 3, B-C 1, B-D 2, C-D 4, D-E 2, C-E 6 Kruskal sorted: B-C 1, B-D 2, D-E 2, A-C 3, A-B 4, C-D 4, C-E 6. Take B-C, B-D, D-E, A-C (4 edges for 5 vertices). Total = 1+2+2+3 = 8."
        ],
        "links": [
          {
            "title": "YouTube search: Kruskal and Prim minimum spanning tree",
            "url": "https://www.youtube.com/results?search_query=Kruskal+and+Prim+minimum+spanning+tree"
          }
        ]
      },
      "QUEUE": {
        "bullets": [
          "A queue is a linear structure where insertion is at the rear and deletion at the front: FIFO (First In First Out), like a ticket line. Operations: enqueue, dequeue, front, isEmpty, isFull. Applications: CPU scheduling, printer spooling, BFS, buffers, call centres.",
          "#define MAX 5 int q[MAX], front = -1, rear = -1; void enqueue(int x){ if(rear == MAX - 1){ printf(\"Overflow\"); return; } if(front == -1) front = 0; q[++rear] = x; } int dequeue(){ if(front == -1 // front > rear){ printf(\"Underflow\"); return -1; } return q[front++]; }",
          "Drawback of linear queue: after dequeues the freed front cells cannot be reused, so overflow occurs even when the queue has empty space.",
          "Treat the array as a circle: after the last index comes index 0. Rear moves as rear = (rear + 1) % MAX, front as front = (front + 1) % MAX. Full when (rear + 1) % MAX == front; empty when front == -1. Uses space fully.",
          "void enq(int x){ if((rear + 1) % MAX == front){ printf(\"Full\"); return; } if(front == -1) front = rear = 0; else rear = (rear + 1) % MAX; q[rear] = x; } int deq(){ if(front == -1){ printf(\"Empty\"); return -1; } int x = q[front]; if(front == rear) front = rear = -1; else front = (front + 1) % MAX; return x; }",
          "Deque (double-ended queue): insertion and deletion at both ends. Input-restricted: insert only at rear, delete at both. Output-restricted: delete only at front, insert at both. Can act as both stack and queue.",
          "Priority queue: every element has a priority; the element with highest priority is removed first; equal priorities follow FIFO. Implementations: unsorted array/list (insert O(1), delete O(n)), sorted list (insert O(n), delete O(1)), binary heap (both O(log n)). Applications: OS scheduling, Dijkstra, Huffman coding."
        ],
        "links": [
          {
            "title": "YouTube search: circular queue and priority queue",
            "url": "https://www.youtube.com/results?search_query=circular+queue+and+priority+queue"
          }
        ]
      },
      "SHORTEST_PATH": {
        "bullets": [
          "Algorithm Type Negative edges Time Technique Dijkstra single source No O(V2) or O((V+E) log V) with heap greedy Bellman-Ford single source Yes, detects negative cycles O(V E) relax all edges V-1 times (DP) Floyd-Warshall all pairs Yes (no negative cycle) O(V3) dynamic programming",
          "Dijkstra: dist[source] = 0, others infinity. Repeatedly pick the unvisited vertex u with smallest dist, mark it, and relax its edges: if dist[u] + w(u,v) < dist[v], update dist[v]. Fails with negative edges.",
          "Bellman-Ford: repeat V-1 times: for every edge (u,v,w) relax. A further pass that still relaxes means a negative cycle exists.",
          "Floyd-Warshall: for k, i, j: d[i][j] = min(d[i][j], d[i][k] + d[k][j]) with k as the intermediate vertex.",
          "void floyd(int d[][N], int n){ // d[i][j] initial = weight or INF, d[i][i] = 0 for(int k = 0; k < n; k++) for(int i = 0; i < n; i++) for(int j = 0; j < n; j++) if(d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j]; } void dijkstra(int g[][N], int s, int n){ int dist[N], done[N] = {0}; for(int i = 0; i < n; i++) dist[i] = INF; dist[s] = 0; for(int c = 0; c < n - 1; c++){ int u = -1; for(int i = 0; i < n; i++) if(!done[i] && (u == -1 // dist[i] < dist[u])) u = i; done[u] = 1; for(int v = 0; v < n; v++) if(g[u][v] && !done[v] && dist[u] + g[u][v]...",
          "Exam tip: Unit 5 exam favourites: file organisation types and indexing; B-tree insertion (order given) and B vs B+; adjacency matrix/list; BFS and DFS traces; Union-Find with path compression and rank; Kruskal and Prim on a graph; Dijkstra table; Bellman-Ford vs Dijkstra; Floyd-Warshall.",
          "A. It assumes a finalised vertex has the shortest distance, but a later negative edge could reduce it; Bellman-Ford handles this.",
          "A. Prim grows one tree from a start vertex by adding the cheapest connecting edge; Kruskal picks globally cheapest edges avoiding cycles, merging components."
        ],
        "links": [
          {
            "title": "YouTube search: Dijkstra shortest path example table",
            "url": "https://www.youtube.com/results?search_query=Dijkstra+shortest+path+example+table"
          }
        ]
      },
      "SORTING": {
        "bullets": [
          "Linear (sequential) search: compare the key with each element in turn. Works on unsorted data. Best O(1), average and worst O(n).",
          "Binary search: array must be sorted. Compare key with middle; if equal done; if smaller search left half, else right half. Each step halves the range: worst/average O(log n), best O(1). Needs random access (array), not suited to linked lists.",
          "int linear(int a[], int n, int k){ for(int i = 0; i < n; i++) if(a[i] == k) return i; return -1; } int binary(int a[], int n, int k){ int low = 0, high = n - 1; while(low <= high){ int mid = (low + high) / 2; if(a[mid] == k) return mid; else if(k < a[mid]) high = mid - 1; else low = mid + 1; } return -1; } Example: Binary search for 23 in 2, 5, 8, 12, 16, 23, 38, 56 low=0, high=7, mid=3 (12) < 23 so low=4. mid=5 (23) found at index 5 in 2 comparisons.",
          "Point Linear Binary Data any order sorted only Time (worst) O(n) O(log n) Structure array or list array Simplicity simplest needs sorting first",
          "Sorting arranges data in ascending/descending order. Internal sort: data fits in memory (bubble, insertion, quick, merge, heap). External sort: data on disk (external merge sort).",
          "Stable: equal keys keep original relative order. In-place: uses O(1) extra memory. Adaptive: faster on nearly sorted input. Comparison-based sorts need at least O(n log n) comparisons in worst case.",
          "Bubble sort: repeatedly compare adjacent elements and swap if out of order; after pass i the i-th largest is at its place. n-1 passes. With a swapped flag the best case (sorted) is O(n). Best O(n), average and worst O(n2), stable, in-place.",
          "void bubble(int a[], int n){ for(int i = 0; i < n - 1; i++){ int sw = 0; for(int j = 0; j < n - 1 - i; j++) if(a[j] > a[j+1]){ int t = a[j]; a[j] = a[j+1]; a[j+1] = t; sw = 1; } if(!sw) break; } } Example: Bubble sort 5 3 8 1 Pass 1: 3 5 1 8. Pass 2: 3 1 5 8. Pass 3: 1 3 5 8 sorted.",
          "Insertion sort: take each element and insert it at the correct position in the already sorted left part by shifting larger elements right. Best O(n) (sorted), average/worst O(n2), stable, in-place, good for small or nearly sorted data and online sorting.",
          "void insertion(int a[], int n){ for(int i = 1; i < n; i++){ int key = a[i], j = i - 1; while(j >= 0 && a[j] > key){ a[j+1] = a[j]; j--; } a[j+1] = key; } }",
          "Divide and conquer: choose a pivot, partition so elements smaller than pivot go left and larger go right (pivot lands in its final place), then sort both parts recursively. Average O(n log n); worst O(n2) when pivot is always smallest/largest (e.g. already sorted input with first/last pivot); space O(log n) stack; not stable, in-place. Random or median-of-three pivot avoids the worst case.",
          "int partition(int a[], int lo, int hi){ int pivot = a[hi], i = lo - 1; for(int j = lo; j < hi; j++) if(a[j] <= pivot){ i++; int t = a[i]; a[i] = a[j]; a[j] = t; } int t = a[i+1]; a[i+1] = a[hi]; a[hi] = t; return i + 1; } void quick(int a[], int lo, int hi){ if(lo < hi){ int p = partition(a, lo, hi); quick(a, lo, p-1); quick(a, p+1, hi); } } Example: Quick sort 10 80 30 90 40 50 70 (pivot = last = 70) After partition: 10 30 40 50 70 90 80 -> pivot 70 in place at index 4; sort left (10 30 40 50) and right (90 80) recursively.",
          "Divide and conquer: split array into two halves, sort each recursively, merge two sorted halves into one using a temporary array. Always O(n log n) (best, average, worst), needs O(n) extra space, stable. Two-way merge uses two sorted lists; good for linked lists and external sorting.",
          "void merge(int a[], int l, int m, int r){ int t[100], i = l, j = m + 1, k = 0; while(i <= m && j <= r) t[k++] = (a[i] <= a[j]) ? a[i++] : a[j++]; while(i <= m) t[k++] = a[i++]; while(j <= r) t[k++] = a[j++]; for(i = 0; i < k; i++) a[l + i] = t[i]; } void msort(int a[], int l, int r){ if(l < r){ int m = (l + r) / 2; msort(a, l, m); msort(a, m+1, r); merge(a, l, m, r); } } Recurrence: T(n) = 2T(n/2) + O(n) which gives O(n log n).",
          "Build a max-heap from the array (O(n)); then repeatedly swap the root (largest) with the last element of the heap, reduce heap size by one and heapify the root (O(log n)). Total O(n log n) in all cases, in-place O(1) space, not stable.",
          "void heapsort(int a[], int n){ for(int i = n/2 - 1; i >= 0; i--) heapify(a, n, i); // build max-heap for(int i = n - 1; i > 0; i--){ int t = a[0]; a[0] = a[i]; a[i] = t; heapify(a, i, 0); } }",
          "Algorithm Best Average Worst Space Stable Technique Bubble O(n) O(n2) O(n2) O(1) Yes exchange Insertion O(n) O(n2) O(n2) O(1) Yes insertion Quick O(n log n) O(n log n) O(n2) O(log n) No divide and conquer Merge O(n log n) O(n log n) O(n log n) O(n) Yes divide and conquer Heap O(n log n) O(n log n) O(n log n) O(1) No selection with heap"
        ],
        "links": [
          {
            "title": "YouTube search: sorting algorithms comparison table",
            "url": "https://www.youtube.com/results?search_query=sorting+algorithms+comparison+table"
          }
        ]
      },
      "STACK": {
        "bullets": [
          "A stack is a linear structure in which insertion and deletion happen only at one end, the top. It follows LIFO (Last In First Out), like a pile of plates.",
          "Operations: push (insert at top), pop (remove top), peek/top (read top), isEmpty, isFull. Overflow: push on full stack. Underflow: pop on empty stack. All operations O(1).",
          "#define MAX 100 int s[MAX], top = -1; void push(int x){ if(top == MAX - 1) printf(\"Overflow\\n\"); else s[++top] = x; } int pop(){ if(top == -1){ printf(\"Underflow\\n\"); return -1; } return s[top--]; } int peek(){ return top == -1 ? -1 : s[top]; }",
          "Applications: expression conversion and evaluation, function call management (call stack), recursion, parenthesis matching, undo/redo, backtracking, DFS, reversing a string.",
          "Notation Operator position Example for a + b Infix between operands a + b Prefix (Polish) before operands + a b Postfix (reverse Polish) after operands a b +",
          "Prefix and postfix need no brackets and no precedence rules, so they are easy for a computer to evaluate.",
          "Precedence: ^ (highest, right to left) > * / % > + - (left to right).",
          "Algorithm: infix to postfix 1. Scan the infix expression left to right.",
          "4. Operator: while stack top is an operator with higher or equal precedence (for ^ only higher), pop it to output; then push the scanned operator.",
          "6. At the end pop all remaining operators to output.",
          "Example: A + B * C - D Scan A: out=A. + push. B: out=AB. * (higher than +) push. C: out=ABC. - : pop * (higher), pop + (equal) -> out=ABC*+, push -. D: out=ABC*+D. End: pop - -> ABC*+D-.",
          "Example: (A + B) * (C - D) / E ( push; A out; + push; B out; ) pops + -> AB+. * push. ( push; C; - push; D; ) pops - -> AB+CD-. / (same precedence as *) pops * -> AB+CD-*, push /. E out. End pop / -> AB+CD-*E/.",
          "Example: A ^ B ^ C (right associative) ^ does not pop an equal ^, so result is ABC^^.",
          "Infix to prefix Reverse the infix expression, swap ( with ), convert to postfix with one change: pop an operator from the stack only if it has strictly higher precedence than the scanned one (for ^ pop on higher or equal), then reverse the result. Example A+B*C: reverse C*B+A, postfix CB*A+, reverse +A*BC.",
          "3. Operator: pop two operands (first popped is the right operand b, second is left a), compute a op b, push result.",
          "Example: 6 2 3 + - 3 8 2 / + * 2 ^ 3 + Push 6,2,3; + gives 5 -> stack 6,5; - gives 1; push 3,8,2; / gives 4 -> 1,3,4; + gives 7 -> 1,7; * gives 7; push 2; ^ gives 49; push 3; + gives 52.",
          "int evalPostfix(char *e){ // single digit operands for(int i = 0; e[i]; i++){ if(isdigit(e[i])) push(e[i] - '0'); else { int b = pop(), a = pop(); switch(e[i]){ case '+': push(a+b); break; case '-': push(a-b); break; case '*': push(a*b); break; case '/': push(a/b); break; } } } return pop(); }",
          "A function that calls itself to solve smaller instances. Needs a base case (stops recursion) and a recursive case. The system uses a stack of activation records for calls.",
          "Types: direct (f calls f), indirect (f calls g, g calls f), tail (recursive call is last statement, can be optimised to loop), linear (one recursive call, e.g. factorial), binary/tree (two calls, e.g. Fibonacci), nested (argument is a recursive call, e.g. Ackermann).",
          "Recursion vs iteration: recursion is shorter and natural for trees/divide and conquer but uses more memory (stack) and may be slower; iteration is faster and uses constant stack.",
          "int fact(int n){ return n == 0 ? 1 : n * fact(n - 1); } // O(n) time, O(n) stack int fib(int n){ return n < 2 ? n : fib(n-1) + fib(n-2); } // O(2^n) void hanoi(int n, char a, char b, char c){ // move n disks a->c using b if(n == 0) return; hanoi(n-1, a, c, b); printf(\"Move disk %d from %c to %c\\n\", n, a, c); hanoi(n-1, b, a, c); } Tower of Hanoi needs 2n - 1 moves for n disks (3 disks: 7 moves).",
          "Exam tip: Unit 1 exam favourites: Big-O/Omega/Theta; address calculation numericals; sparse matrix triplet; stack operations code; infix to postfix/prefix with table trace; postfix evaluation; recursion types, factorial/Fibonacci/Hanoi.",
          "A. No parentheses or precedence rules are needed; a single left-to-right scan with a stack evaluates it.",
          "A. Pushing onto a full stack (array stack) or exhausting call stack memory due to infinite or very deep recursion."
        ],
        "links": [
          {
            "title": "YouTube search: infix to postfix using stack",
            "url": "https://www.youtube.com/results?search_query=infix+to+postfix+using+stack"
          }
        ]
      },
      "TREE_BST": {
        "bullets": [
          "Binary tree: each node has at most two children (left, right). Strict (full): each node has 0 or 2 children.",
          "Complete: all levels filled except possibly the last, which is filled left to right. Perfect: all leaves at same level, all internal nodes have 2 children. Skewed: all nodes only left or only right.",
          "Properties (root at level 1): max nodes at level i = 2i-1. Max nodes in tree of height h = 2h - 1. Minimum height with n nodes = ceil(log2(n+1)). For any non-empty binary tree: n0 = n2 + 1 (leaves = nodes with two children + 1). Total nodes = n0 + n1 + n2; edges = n - 1.",
          "Array representation (index from 1): root at 1, left child of i at 2i, right child at 2i+1, parent at floor(i/2). Good for complete trees (no waste), poor for skewed. Linked representation: node {left, data, right}, 2n - (n-1) = n + 1 NULL pointers.",
          "struct tnode { int data; struct tnode *left, *right; }; struct tnode* newNode(int x){ struct tnode *t = malloc(sizeof(struct tnode)); t->data = x; t->left = t->right = NULL; return t; } int height(struct tnode *t){ if(!t) return 0; int l = height(t->left), r = height(t->right); return 1 + (l > r ? l : r); } int count(struct tnode *t){ return t ? 1 + count(t->left) + count(t->right) : 0; }",
          "Traversal Order Remember Preorder Root, Left, Right N L R Inorder Left, Root, Right L N R Postorder Left, Right, Root L R N Level order level by level using a queue BFS void preorder(struct tnode *t){ if(t){ printf(\"%d \", t->data); preorder(t->left); preorder(t->right); } } void inorder(struct tnode *t){ if(t){ inorder(t->left); printf(\"%d \", t->data); inorder(t->right); } } void postorder(struct tnode *t){ if(t){ postorder(t->left); postorder(t->right); printf(\"%d \", t->data); } } Example: Tree: A root; left B (children D, E); right C (right child...",
          "Construction: inorder + preorder (or inorder + postorder) gives a unique tree: the first preorder (last postorder) element is root; elements left of root in inorder form left subtree, right ones form right subtree; recurse. Preorder + postorder alone is not enough.",
          "Expression tree: leaves are operands, internal nodes operators. Inorder gives infix, preorder prefix, postorder postfix.",
          "Non-recursive inorder uses a stack: go left pushing nodes; pop, visit, go right.",
          "In a binary tree with n nodes, n + 1 pointers are NULL. A threaded binary tree uses these NULL pointers to store threads: a NULL right pointer points to the inorder successor, a NULL left pointer to the inorder predecessor.",
          "A flag bit tells whether a pointer is a child link or thread. Types: single-threaded (right only) and double-threaded.",
          "Advantage: inorder traversal without recursion or stack, faster, saves space.",
          "Replace every NULL pointer of a binary tree by a special external node. Every internal node then has exactly 2 children. If I = internal path length, E = external path length, n = internal nodes: E = I + 2n. Useful for Huffman coding and analysing search trees.",
          "For every node: all keys in left subtree < node < all keys in right subtree. Inorder traversal gives sorted order. Search, insert, delete take O(h): O(log n) for balanced tree, O(n) for skewed tree.",
          "Search: compare with root; go left if smaller, right if larger. Insert: search for the key's place and attach as a new leaf (inserting 50, 30, 70, 20, 40 builds root 50 with children 30 and 70; 20, 40 under 30).",
          "Delete cases: (1) leaf: remove it. (2) one child: replace node with its child. (3) two children: replace with inorder successor (minimum of right subtree) or inorder predecessor, then delete that node.",
          "Path length: internal path length is the sum of levels of all nodes; average search cost is path length / n. A smaller path length means a better (more balanced) tree.",
          "struct tnode* insert(struct tnode *t, int x){ if(!t) return newNode(x); if(x < t->data) t->left = insert(t->left, x); else if(x > t->data) t->right = insert(t->right, x); return t; } struct tnode* minNode(struct tnode *t){ while(t->left) t = t->left; return t; } struct tnode* del(struct tnode *t, int x){ if(!t) return NULL; if(x < t->data) t->left = del(t->left, x); else if(x > t->data) t->right = del(t->right, x); else { if(!t->left){ struct tnode *r = t->right; free(t); return r; } if(!t->right){ struct tnode *l = t->left; free(t); return l; }..."
        ],
        "links": [
          {
            "title": "YouTube search: binary search tree insertion deletion",
            "url": "https://www.youtube.com/results?search_query=binary+search+tree+insertion+deletion"
          }
        ]
      }
    }
  },
  "oops": {
    "key": "oops",
    "code": "TCS301",
    "name": "Object-Oriented Programming (C++)",
    "topics": [
      {
        "id": "OOP_BASICS",
        "unit": "Unit 1",
        "name": "OOP Paradigms, Features of OOP, Procedural vs Object Oriented",
        "baseMinutes": 50,
        "difficulty": 2,
        "freq": 2,
        "marks": 20.0
      },
      {
        "id": "NAMESPACE",
        "unit": "Unit 1",
        "name": "Namespaces, Header Files and Program Structure",
        "baseMinutes": 35,
        "difficulty": 2,
        "freq": 1,
        "marks": 10.0
      },
      {
        "id": "ARR_STR",
        "unit": "Unit 1",
        "name": "Arrays, Strings, Pointers and User Defined Functions",
        "baseMinutes": 55,
        "difficulty": 2,
        "freq": 2,
        "marks": 20.0
      },
      {
        "id": "CLASS_OBJ",
        "unit": "Unit 2",
        "name": "Classes, Objects, Constructors, Destructors and Data Hiding",
        "baseMinutes": 75,
        "difficulty": 3,
        "freq": 2,
        "marks": 40.0
      },
      {
        "id": "STATIC",
        "unit": "Unit 2",
        "name": "Static Data Members and Static Member Functions",
        "baseMinutes": 30,
        "difficulty": 2,
        "freq": 1,
        "marks": 10.0
      },
      {
        "id": "FRIEND",
        "unit": "Unit 2",
        "name": "Friend Functions and Friendship Rules",
        "baseMinutes": 35,
        "difficulty": 3,
        "freq": 1,
        "marks": 10.0
      },
      {
        "id": "COPY_THIS",
        "unit": "Unit 2",
        "name": "Copy Constructor, Deep vs Shallow Copy and this Pointer",
        "baseMinutes": 45,
        "difficulty": 4,
        "freq": 1,
        "marks": 10.0
      },
      {
        "id": "OPOVL",
        "unit": "Unit 2",
        "name": "Operator Overloading: unary, binary, << and >>",
        "baseMinutes": 80,
        "difficulty": 4,
        "freq": 2,
        "marks": 30.0
      },
      {
        "id": "INHERIT",
        "unit": "Unit 3",
        "name": "Inheritance Types, Access Modes, Virtual Base Class and Diamond Problem",
        "baseMinutes": 90,
        "difficulty": 4,
        "freq": 2,
        "marks": 50.0
      },
      {
        "id": "VIRTUAL",
        "unit": "Unit 4",
        "name": "Polymorphism, Virtual Functions, Abstract Classes and Virtual Destructors",
        "baseMinutes": 85,
        "difficulty": 5,
        "freq": 2,
        "marks": 40.0
      },
      {
        "id": "FILE_IO",
        "unit": "Unit 5",
        "name": "C++ Stream Classes and File Handling",
        "baseMinutes": 60,
        "difficulty": 3,
        "freq": 2,
        "marks": 20.0
      },
      {
        "id": "EXCEPT",
        "unit": "Unit 5",
        "name": "Exception Handling, Re-throwing and Custom Exceptions",
        "baseMinutes": 55,
        "difficulty": 3,
        "freq": 2,
        "marks": 20.0
      },
      {
        "id": "TEMPLATE_STL",
        "unit": "Unit 5",
        "name": "Function Templates and Standard Template Library",
        "baseMinutes": 60,
        "difficulty": 3,
        "freq": 2,
        "marks": 20.0
      }
    ],
    "prereqs": [
      {
        "from": "OOP_BASICS",
        "to": "CLASS_OBJ"
      },
      {
        "from": "OOP_BASICS",
        "to": "NAMESPACE"
      },
      {
        "from": "OOP_BASICS",
        "to": "ARR_STR"
      },
      {
        "from": "CLASS_OBJ",
        "to": "STATIC"
      },
      {
        "from": "CLASS_OBJ",
        "to": "FRIEND"
      },
      {
        "from": "CLASS_OBJ",
        "to": "COPY_THIS"
      },
      {
        "from": "CLASS_OBJ",
        "to": "OPOVL"
      },
      {
        "from": "CLASS_OBJ",
        "to": "INHERIT"
      },
      {
        "from": "INHERIT",
        "to": "VIRTUAL"
      },
      {
        "from": "CLASS_OBJ",
        "to": "FILE_IO"
      },
      {
        "from": "CLASS_OBJ",
        "to": "EXCEPT"
      },
      {
        "from": "CLASS_OBJ",
        "to": "TEMPLATE_STL"
      }
    ],
    "pyqs": [
      {
        "year": "2025",
        "topicId": "ARR_STR",
        "qid": "a",
        "text": "Construct a C++ program to create a class called Test with the following members: Data Member: string str Member Functions: void inputVal(string) \u2014 This member function will store value into str. void showVal() \u2014 This member function will print value of str. void checkVal() \u2014 This member function will check whether first and second last character of str string is equal or not. In the main() function create object of class Test and perform the above task."
      },
      {
        "year": "2025",
        "topicId": "CLASS_OBJ",
        "qid": "b",
        "text": "Compare and contrast Procedural, Structured, and Object-Oriented Programming paradigms. Highlight core features, typical use cases, and program design differences with suitable C++ examples where applicable."
      },
      {
        "year": "2025",
        "topicId": "ARR_STR",
        "qid": "c",
        "text": "Implement a C++ program to input an array of n integers and: Find the maximum element. Find the minimum element. Display the difference between maximum and minimum element."
      },
      {
        "year": "2025",
        "topicId": "FRIEND",
        "qid": "a",
        "text": "With respect to C++, justify the statement \u201cFriendship is granted not taken\u201d in your own words with proper examples."
      },
      {
        "year": "2025",
        "topicId": "COPY_THIS",
        "qid": "b",
        "text": "Differentiate between deep copy and shallow copy with the help of proper C++ code. Implement a C++ program to return an object using this pointer only."
      },
      {
        "year": "2025",
        "topicId": "CLASS_OBJ",
        "qid": "c",
        "text": "Implement by creating a class called Distance that has two integer data members: feet and inches. Implement the following in the class: A member function to read the values of feet and inches from the user. A member function to add two Distance objects and return the resulting distance. A member function to display the distance in the format \u201cX feet Y inches\u201d. Ensure that if inches exceed 12, it is automatically converted into feet appropriately. Design a C++ program to create two Distance objects, add them, and display the result."
      },
      {
        "year": "2025",
        "topicId": "INHERIT",
        "qid": "a",
        "text": "Discuss Diamond Problem in inheritance with the help of proper C++ code. What is the proper solution to Diamond Problem? Explain with proper C++ program."
      },
      {
        "year": "2025",
        "topicId": "OPOVL",
        "qid": "b",
        "text": "Implement a C++ program to overload stream extraction >> and stream insertion << operators."
      },
      {
        "year": "2025",
        "topicId": "OPOVL",
        "qid": "c",
        "text": "With the help of C++ program, implement post-increment operator overloading of unary ++ using friend function only."
      },
      {
        "year": "2025",
        "topicId": "INHERIT",
        "qid": "a",
        "text": "Discuss ambiguity in multiple inheritance. How is it resolved? Explain with the help of a C++ program how to resolve Diamond Problem in inheritance."
      },
      {
        "year": "2025",
        "topicId": "FILE_IO",
        "qid": "b",
        "text": "Assume a file source.txt contains some string \u201chello C++ program\u201d. i. Read the contents of this file and display it on the console. ii. Write your own content to the same file source.txt, such that the old data that is present in the file should persist (no overwriting)."
      },
      {
        "year": "2025",
        "topicId": "CLASS_OBJ",
        "qid": "c",
        "text": "Imagine a tollbooth with a class called TollBooth. The two data items are of type unsigned int and double to hold the total number of cars and total amount of money collected. A constructor initializes both of these data members to 0. A member function called payingCar() increments the car total and adds 50 to the cash total. Another function called nonPayCar() increments the car total but adds nothing to the cash total. Finally, a member function called display() shows the two totals. Include a program to test this class. This program should allow the user to push one key to count a paying car and another to count a non-paying car. Pushing the ESCAPE key should cause the program to print out the total number of cars and total cash and then exit."
      },
      {
        "year": "2025",
        "topicId": "VIRTUAL",
        "qid": "a",
        "text": "What is the necessity of creating an abstract class in C++? Design a C++ code to justify how virtual function or pure virtual function preserves the property of method overriding in C++."
      },
      {
        "year": "2025",
        "topicId": "EXCEPT",
        "qid": "b",
        "text": "Explain Exception in C++. How is it handled in C++? Implement a C++ program that demonstrates the concept of custom exception."
      },
      {
        "year": "2024",
        "topicId": "FILE_IO",
        "qid": "c",
        "text": "Illustrate the class hierarchy of C++ stream classes with a well-labelled diagram that shows the relationship among different stream classes. Briefly explain the role of each of these classes in handling console and file input/output operations. Emphasize the need of STL in modern software development, particularly in reducing development time and avoiding low-level memory management issues with proper justification. \ud83d\udcd5 OOP with C++ \u2014 End Term December 2024"
      },
      {
        "year": "2024",
        "topicId": "CLASS_OBJ",
        "qid": "a",
        "text": "List and explain the features of Object-Oriented Programming."
      },
      {
        "year": "2024",
        "topicId": "ARR_STR",
        "qid": "b",
        "text": "Write a C++ program to reverse each word of input string."
      },
      {
        "year": "2024",
        "topicId": "NAMESPACE",
        "qid": "c",
        "text": "Discuss namespace and its advantages. Create two namespaces, myspace1 and myspace2. Both namespaces have a void calculate(int) method. In myspace1, the calculate() method calculates and shows the table of any provided number. In myspace2, the calculate() method calculates and shows the square of any provided number. A programmer wishes to use both versions of calculate() functions in the same program. Write a code to help the programmer such that he/she can be saved from any ambiguity."
      },
      {
        "year": "2024",
        "topicId": "STATIC",
        "qid": "a",
        "text": "Explain the importance of static variables. Also write a program to count the number of objects created for a class."
      },
      {
        "year": "2024",
        "topicId": "OPOVL",
        "qid": "b",
        "text": "Explain operator overloading and its limitations. Also design a class date with private data members day, month, and year. Overload the extraction (>>) and insertion (<<) operators to enable input and output of date objects. The overloaded << operator should display the date in the format \u201cdd/mm/yyyy\u201d. The overloaded >> operator should allow the user to input values to initialize a date object. Write a program to demonstrate the input and output functionality of date objects using these overloaded operators."
      },
      {
        "year": "2024",
        "topicId": "ARR_STR",
        "qid": "c",
        "text": "Students are having various details like name, roll number, department, and university name. Create a class with proper setter and getter methods for each property such that data hiding should be maintained. Also provide a function findByDepartment(string) to find the total number of students who belong to the provided department. Also write a code to use this class for n number of students, where n >= 2."
      },
      {
        "year": "2024",
        "topicId": "CLASS_OBJ",
        "qid": "a",
        "text": "Assume that a bank maintains two kinds of accounts for customers, one called a savings account and the other a current account. The savings account provides compound interest and withdrawal facilities but not cheque-book facilities. The current account provides a cheque-book facility but no interest. Current account holders should also maintain a minimum balance, and if the balance falls below this level, a service charge is imposed. Create a class Account that stores the customer name, account number, and opening balance. From this, derive the classes Current and Saving to make them more specific to their requirements. Include necessary member functions in order to achieve the following tasks: Deposit an amount for a customer and update the balance. Display the account details. Compute and deposit interest. Withdraw amount for a customer after checking the balance and update the balance. Check for the minimum balance for current account holders, impose penalty if necessary, and update the balance."
      },
      {
        "year": "2024",
        "topicId": "INHERIT",
        "qid": "b",
        "text": "Diamond's problem is very common in multiple inheritances. Discuss this problem with the support of a neat and clean diagram and code. Also write a program to resolve it."
      },
      {
        "year": "2024",
        "topicId": "CLASS_OBJ",
        "qid": "c",
        "text": "Discuss constructors and destructors with suitable codes. Also write a program where the child's class constructor calls the parent class constructor to initialize the parent's class attributes."
      },
      {
        "year": "2024",
        "topicId": "INHERIT",
        "qid": "a",
        "text": "Discuss early and late binding. Create a base class called shape; use this class to store two double type values that could be used to compute the area of figures. Derive two specific classes called triangle and rectangle from base shape. Add to the base class: A member function getData() to initialize base class data members. Another member function displayArea() to compute and display the area of figures. Make displayArea() a virtual function and redefine this function in the derived class to suit their requirements. Using these three classes, design a program that will accept dimensions of a triangle or a rectangle interactively and display the area. The two values given as input will be treated as lengths of two sides in the case of rectangles and as base and height in the case of triangle. Use: Area of rectangle = x * y Area of triangle = (0.5) * x * y"
      },
      {
        "year": "2024",
        "topicId": "INHERIT",
        "qid": "b",
        "text": "Discuss the importance of abstract classes. Also create a base class called calculateArea (Abstract class). Use this class to store float type values that could be used to compute the volume of figures. Derive three specific classes called: cone hemisphere cylinder from the base class calculateArea. Add to the base class: A member function getdata() to initialize base class data members. Another member function display_volume() to compute and display the volume of figures. Make display_volume() a pure virtual function and redefine this function in the derived classes to suit their requirements. Using these four classes, design a program that will accept dimensions of a cone, cylinder and hemisphere interactively and display the volumes. Use: Volume of cone = (1/3)\u03c0r\u00b2h Volume of hemisphere = (2/3)\u03c0r\u00b3 Volume of cylinder = \u03c0r\u00b2h"
      },
      {
        "year": "2024",
        "topicId": "CLASS_OBJ",
        "qid": "c",
        "text": "Suppose you have a class with private instance variables and no member functions. Discuss the way to access these variables outside the class with suitable code."
      },
      {
        "year": "2024",
        "topicId": "EXCEPT",
        "qid": "a",
        "text": "Discuss the term exception and its consequences if not handled properly. Consider a voting system that verifies the age of any voter before casting the vote. If the age is < 18, then it throws an exception \"ageException\". Create an ageException and write a program that allows this exception to occur and also handles it."
      },
      {
        "year": "2024",
        "topicId": "FILE_IO",
        "qid": "b",
        "text": "List the different file opening modes with their descriptions. Also write a program that searches any string in an existing file."
      },
      {
        "year": "2023",
        "topicId": "TEMPLATE_STL",
        "qid": "c",
        "text": "Discuss the different components of STL. Create a list with initial elements: {20, 5, 25} Insert 10 at the first position. Insert 60 at the last position. Remove the first element and last element from the updated list. Sort the list. Remove 25 from the list. Reverse the list. Use an iterator to show the contents. 2023"
      },
      {
        "year": "2023",
        "topicId": "NAMESPACE",
        "qid": "1a",
        "text": "Discuss the importance of namespaces. How does it help to resolve the conflict of similar classes, functions or variables when using in a same namespace? Discuss with example."
      },
      {
        "year": "2023",
        "topicId": "ARR_STR",
        "qid": "1b",
        "text": "Print a given matrix in spiral form using C++ program. Example: Sample Input: {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}, {13, 14, 15, 16}} Sample Output: 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10"
      },
      {
        "year": "2023",
        "topicId": "CLASS_OBJ",
        "qid": "1c",
        "text": "Why do we prefer object-oriented programming instead of procedural programming? Discuss various concepts of OOPs with proper example."
      },
      {
        "year": "2023",
        "topicId": "STATIC",
        "qid": "2a",
        "text": "Discuss the importance of constructors and destructors with codes. Also discuss dynamic objects. How are they different from static objects?"
      },
      {
        "year": "2023",
        "topicId": "OPOVL",
        "qid": "2b",
        "text": "Discuss the requirement of operator overloading. Write a program to overload greater than operator (>) using friend function to compare two objects having one integer instance variable."
      },
      {
        "year": "2023",
        "topicId": "TEMPLATE_STL",
        "qid": "2c",
        "text": "Write a C++ program to create a vector with five elements and perform the following operations: Add a new element at end and show the capacity. Remove from end and show the size. Add element at start and 3rd position. Remove all elements and then show the capacity again."
      },
      {
        "year": "2023",
        "topicId": "INHERIT",
        "qid": "3a",
        "text": "\u201cInheritance can be used to promote reusability of the code.\u201d Explain this statement with the help of a real-world example along with appropriate C++ code. Also explain multiple inheritance, and the ambiguity that might arise with it. Also discuss the solution for this ambiguity."
      },
      {
        "year": "2023",
        "topicId": "INHERIT",
        "qid": "3b",
        "text": "Discuss the Diamond Problem with the help of a real-world example. Explain the solution for this problem, highlighting the advantages and potential drawbacks as well. Use appropriate code wherever required."
      },
      {
        "year": "2023",
        "topicId": "INHERIT",
        "qid": "3c",
        "text": "Explain public, private, and protected modes of inheriting a class. Explain how inheritance causes tight dependency between classes, which causes problems in code maintenance."
      },
      {
        "year": "2023",
        "topicId": "VIRTUAL",
        "qid": "4a",
        "text": "Discuss the following with suitable code: Virtual functions Pure virtual functions Abstract classes Function overriding"
      },
      {
        "year": "2023",
        "topicId": "VIRTUAL",
        "qid": "4b",
        "text": "State the major differences between normal and virtual destructors using suitable code. Along with that, explain the need for choosing to use a virtual destructor instead of normal destructors in run-time polymorphism."
      },
      {
        "year": "2023",
        "topicId": "VIRTUAL",
        "qid": "4c",
        "text": "Solve the following problem by using Runtime Polymorphism: The following table outlines the major credit cards you might want to validate, along with their allowed prefixes and lengths. Major Credit Cards, Their Prefixes, and Lengths Card Type Prefixes Length MasterCard 51\u201355 16 Visa 4 13, 16 American Express 34, 37 15 Validate credit card numbers and display whether they are Valid Card or Invalid Card. Sample Valid Credit Card Numbers Card Type Sample Number Output MasterCard 5500 0000 0000 0004 Valid Card Visa 4111 1111 1111 1111 Valid Card American Express 3400 0000 0000 009 Valid Card Sample Invalid Credit Card Numbers Card Type Sample Number Output MasterCard 5800 0000 0000 0004 Invalid Card Visa 7111 1111 1111 1111 Invalid Card American Express 1900 0000 0000 009 Invalid Card"
      },
      {
        "year": "2023",
        "topicId": "TEMPLATE_STL",
        "qid": "5a",
        "text": "Discuss the advantages of function templates. Create a function called swaps() which interchanges the values of the two arguments provided to it. Make the function into a template, so it can be used with various data types like: char int float Write a main() program to exercise the function with various data types."
      },
      {
        "year": "2023",
        "topicId": "EXCEPT",
        "qid": "5b",
        "text": "Create a user-defined exception for the following scenario: Many people use banks. The clients have a name, account number, and balance, among other details. The deposit() and withdrawal() functions let clients make deposits and withdrawals from their accounts, respectively. In the event that a client requests a larger withdrawal from their account than what is available, a LowBalance Exception will take place. If the client tries to withdraw 2000 INR, then the output is: Low balance exception."
      },
      {
        "year": "2023",
        "topicId": "FILE_IO",
        "qid": "5c",
        "text": "Discuss the various file opening modes that are defined in C++. Also write a program to: Read text from the keyboard. Write it to a text file such as \"Abc.txt\". Read this content. Write it back to the console."
      }
    ],
    "quizzes": [
      {
        "topicId": "OOP_BASICS",
        "question": "Which OOP principle binds data and the functions that operate on it into one unit?",
        "options": [
          "Data hiding",
          "Encapsulation",
          "Inheritance",
          "Overloading"
        ],
        "correct": 1,
        "explanation": "Encapsulation wraps data and methods into a single class unit."
      },
      {
        "topicId": "OOP_BASICS",
        "question": "C++ was designed and developed by",
        "options": [
          "Dennis Ritchie",
          "Bjarne Stroustrup",
          "James Gosling",
          "Guido van Rossum"
        ],
        "correct": 1,
        "explanation": "Stroustrup developed C++ at Bell Labs in the early 1980s."
      },
      {
        "topicId": "OOP_BASICS",
        "question": "Which of these is NOT a feature of object oriented programming?",
        "options": [
          "Data hiding",
          "Inheritance",
          "Top down design",
          "Polymorphism"
        ],
        "correct": 2,
        "explanation": "Top down design is the classic procedure oriented approach."
      },
      {
        "topicId": "OOP_BASICS",
        "question": "Procedure oriented programming organises a program around",
        "options": [
          "Objects",
          "Functions",
          "Classes",
          "Interfaces"
        ],
        "correct": 1,
        "explanation": "It is function driven, data is shared globally."
      },
      {
        "topicId": "OOP_BASICS",
        "question": "A class is best described as",
        "options": [
          "A runtime entity",
          "A blueprint or template for objects",
          "A memory location",
          "A preprocessor directive"
        ],
        "correct": 1,
        "explanation": "The class defines the structure, objects are instances of it."
      },
      {
        "topicId": "NAMESPACE",
        "question": "The main purpose of a namespace in C++ is to",
        "options": [
          "Speed up the program",
          "Avoid name collisions",
          "Allocate heap memory",
          "Define macros"
        ],
        "correct": 1,
        "explanation": "Namespaces create separate scopes for identical names."
      },
      {
        "topicId": "NAMESPACE",
        "question": "Which operator is used to access a name declared inside a namespace?",
        "options": [
          "Dot operator",
          "Arrow operator",
          "Scope resolution operator",
          "Double colon colon"
        ],
        "correct": 2,
        "explanation": "The :: operator qualifies the name with its namespace."
      },
      {
        "topicId": "NAMESPACE",
        "question": "Can two different namespaces contain functions with the same name?",
        "options": [
          "Yes, because they are separate scopes",
          "No, it is a redeclaration error",
          "Only if both are static",
          "Only if both are declared friend"
        ],
        "correct": 0,
        "explanation": "Each namespace is an independent scope."
      },
      {
        "topicId": "NAMESPACE",
        "question": "Writing using namespace std; at global scope",
        "options": [
          "Is compulsory in every C++ program",
          "Is illegal",
          "Is a syntax error",
          "Is optional and brings std names into scope"
        ],
        "correct": 3,
        "explanation": "It is optional, just convenient."
      },
      {
        "topicId": "NAMESPACE",
        "question": "Header files are included in a C++ program to",
        "options": [
          "Provide declarations of library entities",
          "Increase the binary size deliberately",
          "Replace the main function",
          "Declare only global variables"
        ],
        "correct": 0,
        "explanation": "Headers carry declarations, not usually definitions."
      },
      {
        "topicId": "ARR_STR",
        "question": "If an int occupies 4 bytes, sizeof of an int array of 10 elements is",
        "options": [
          "10 bytes",
          "40 bytes",
          "4 bytes",
          "14 bytes"
        ],
        "correct": 1,
        "explanation": "10 elements times 4 bytes."
      },
      {
        "topicId": "ARR_STR",
        "question": "Every C style string is terminated by",
        "options": [
          "The null character",
          "A newline character",
          "A semicolon",
          "A space"
        ],
        "correct": 0,
        "explanation": "The null character marks the end of the string."
      },
      {
        "topicId": "ARR_STR",
        "question": "Which header provides strlen and strcpy?",
        "options": [
          "iostream",
          "string",
          "cstring",
          "fstream"
        ],
        "correct": 2,
        "explanation": "The cstring header declares the C string functions."
      },
      {
        "topicId": "ARR_STR",
        "question": "When an array is passed to a function it is actually passed",
        "options": [
          "By value as a full copy",
          "By address, it decays to a pointer",
          "By reference to all elements",
          "As a constant literal"
        ],
        "correct": 1,
        "explanation": "The array name decays to a pointer to its first element."
      },
      {
        "topicId": "ARR_STR",
        "question": "For a one dimensional array a, the expression a[i] is equivalent to",
        "options": [
          "i[a]",
          "(a+i)",
          "Both a[i] and i[a]",
          "Neither"
        ],
        "correct": 2,
        "explanation": "Array subscripting is commutative, so both work."
      },
      {
        "topicId": "CLASS_OBJ",
        "question": "The default access specifier for members of a class is",
        "options": [
          "private",
          "public",
          "protected",
          "friend"
        ],
        "correct": 0,
        "explanation": "In a class everything is private until stated otherwise."
      },
      {
        "topicId": "CLASS_OBJ",
        "question": "A constructor",
        "options": [
          "Has a return type of void",
          "Has no return type at all",
          "Must return an int",
          "Can be virtual"
        ],
        "correct": 1,
        "explanation": "Constructors never specify a return type."
      },
      {
        "topicId": "CLASS_OBJ",
        "question": "A destructor is invoked",
        "options": [
          "When the object is created",
          "Only when delete is written",
          "Automatically when the object goes out of scope or is destroyed",
          "Never automatically"
        ],
        "correct": 2,
        "explanation": "Scope exit or delete triggers it."
      },
      {
        "topicId": "CLASS_OBJ",
        "question": "Copying an object by value uses",
        "options": [
          "The default constructor",
          "The copy constructor",
          "The destructor",
          "The friend function"
        ],
        "correct": 1,
        "explanation": "Pass by value and initialisation from another object invoke it."
      },
      {
        "topicId": "CLASS_OBJ",
        "question": "A constructor can be",
        "options": [
          "virtual",
          "static",
          "overloaded",
          "inherited"
        ],
        "correct": 2,
        "explanation": "Constructors may be overloaded but not virtual, static or inherited."
      },
      {
        "topicId": "STATIC",
        "question": "A static data member of a class is",
        "options": [
          "A separate copy for every object",
          "Shared by all objects of the class",
          "Stored inside each member function",
          "Illegal in C++"
        ],
        "correct": 1,
        "explanation": "It belongs to the class, not to individual objects."
      },
      {
        "topicId": "STATIC",
        "question": "A static member function can directly access",
        "options": [
          "All data members",
          "Only private data members",
          "Only static members of the class",
          "Only global variables"
        ],
        "correct": 2,
        "explanation": "It has no this pointer, so non static members are unreachable."
      },
      {
        "topicId": "STATIC",
        "question": "A static data member must be",
        "options": [
          "Defined once outside the class",
          "Declared inside main",
          "Initialised inside every constructor",
          "Made const always"
        ],
        "correct": 0,
        "explanation": "The in-class declaration needs one out-of-class definition."
      },
      {
        "topicId": "STATIC",
        "question": "A static member function is called using",
        "options": [
          "An object name only",
          "The class name with the scope resolution operator",
          "The this pointer",
          "The destructor"
        ],
        "correct": 1,
        "explanation": "It can also be called through an object, but class name is normal."
      },
      {
        "topicId": "STATIC",
        "question": "To count how many objects of a class were created, the usual trick is",
        "options": [
          "A static data member incremented in the constructor",
          "A local variable in main",
          "A global array",
          "A friend class"
        ],
        "correct": 0,
        "explanation": "Every constructor call increments the shared counter."
      },
      {
        "topicId": "FRIEND",
        "question": "A friend function of a class",
        "options": [
          "Is a member of that class",
          "Can access private members but is not a member",
          "Cannot access private members",
          "Must be static"
        ],
        "correct": 1,
        "explanation": "Friendship grants access without membership."
      },
      {
        "topicId": "FRIEND",
        "question": "Friendship in C++ is",
        "options": [
          "Mutual and inherited",
          "Inherited but not mutual",
          "Neither mutual nor inherited",
          "Mutual but not inherited"
        ],
        "correct": 2,
        "explanation": "If A is a friend of B, B need not be a friend of A, and derived classes do not inherit it."
      },
      {
        "topicId": "FRIEND",
        "question": "A friend function is declared inside the class using the keyword",
        "options": [
          "friend",
          "virtual",
          "static",
          "inline"
        ],
        "correct": 0,
        "explanation": "The friend keyword appears in the class declaration."
      },
      {
        "topicId": "FRIEND",
        "question": "A friend function is normally used to",
        "options": [
          "Access private data of two different classes",
          "Replace constructors",
          "Make a class abstract",
          "Override a virtual function"
        ],
        "correct": 0,
        "explanation": "It is the classic way to overload binary operators for two classes."
      },
      {
        "topicId": "FRIEND",
        "question": "Which statement about friend functions is correct?",
        "options": [
          "They are called using the object dot operator as members",
          "They are called like ordinary functions with objects as arguments",
          "They cannot be declared in a class body",
          "They are inherited by derived classes"
        ],
        "correct": 1,
        "explanation": "The call is an ordinary function call."
      },
      {
        "topicId": "COPY_THIS",
        "question": "A shallow copy copies",
        "options": [
          "Only the pointer addresses, not the pointed data",
          "The complete pointed data",
          "Nothing at all",
          "Only static members"
        ],
        "correct": 0,
        "explanation": "Two objects then share the same heap memory."
      },
      {
        "topicId": "COPY_THIS",
        "question": "A deep copy needs",
        "options": [
          "Only the default constructor",
          "A destructor only",
          "A user defined copy constructor that allocates new memory",
          "A static member function"
        ],
        "correct": 2,
        "explanation": "The copy must allocate its own buffer."
      },
      {
        "topicId": "COPY_THIS",
        "question": "The this pointer inside a member function holds",
        "options": [
          "The address of the current object",
          "The address of the class",
          "A copy of the object",
          "The address of the caller"
        ],
        "correct": 0,
        "explanation": "It points to the object on which the method was invoked."
      },
      {
        "topicId": "COPY_THIS",
        "question": "Inside class Test, the type of this is",
        "options": [
          "Test",
          "Test and",
          "Test star",
          "void star"
        ],
        "correct": 2,
        "explanation": "It is a pointer to Test, that is Test pointer."
      },
      {
        "topicId": "COPY_THIS",
        "question": "The usual signature of a copy constructor is",
        "options": [
          "Test(Test)",
          "Test(Test and)",
          "Test(const Test and)",
          "Test(void)"
        ],
        "correct": 2,
        "explanation": "A const reference avoids infinite recursion and allows temporaries."
      },
      {
        "topicId": "OPOVL",
        "question": "Which operator cannot be overloaded in C++?",
        "options": [
          "The plus operator",
          "The scope resolution operator",
          "The insertion operator",
          "The equality operator"
        ],
        "correct": 1,
        "explanation": "Only a few operators are banned, and scope resolution is one of them."
      },
      {
        "topicId": "OPOVL",
        "question": "The insertion operator for output is usually overloaded as",
        "options": [
          "A static member",
          "A unary member function",
          "A friend or free function taking ostream and the class",
          "A constructor"
        ],
        "correct": 2,
        "explanation": "The left operand is the stream, so it cannot be a member of the class."
      },
      {
        "topicId": "OPOVL",
        "question": "A unary operator overloaded as a member function takes",
        "options": [
          "No explicit argument",
          "One argument",
          "Two arguments",
          "Three arguments"
        ],
        "correct": 0,
        "explanation": "The single operand is the object itself."
      },
      {
        "topicId": "OPOVL",
        "question": "Post increment is distinguished from pre increment by",
        "options": [
          "A different operator name",
          "A dummy int parameter",
          "A const qualifier",
          "A friend declaration"
        ],
        "correct": 1,
        "explanation": "operator++(int) is the postfix form."
      },
      {
        "topicId": "OPOVL",
        "question": "The assignment operator must be overloaded as",
        "options": [
          "A non static member function",
          "A friend function",
          "A static member",
          "A global function"
        ],
        "correct": 0,
        "explanation": "It cannot be a friend or a static function."
      },
      {
        "topicId": "INHERIT",
        "question": "Which inheritance leads to the diamond problem?",
        "options": [
          "Single",
          "Multiple or hybrid",
          "Hierarchical only",
          "Multilevel only"
        ],
        "correct": 1,
        "explanation": "Two paths to a common base create duplicate copies."
      },
      {
        "topicId": "INHERIT",
        "question": "The diamond problem is solved by",
        "options": [
          "Making the base class abstract",
          "Declaring the base constructor private",
          "Making the common base a virtual base class",
          "Overloading the constructor"
        ],
        "correct": 2,
        "explanation": "A virtual base keeps only one shared copy."
      },
      {
        "topicId": "INHERIT",
        "question": "The default mode of inheritance for a class is",
        "options": [
          "private",
          "public",
          "protected",
          "virtual"
        ],
        "correct": 0,
        "explanation": "For a struct it is public, for a class it is private."
      },
      {
        "topicId": "INHERIT",
        "question": "In private inheritance, public members of the base become",
        "options": [
          "Public in the derived class",
          "Protected in the derived class",
          "Private in the derived class",
          "Unchanged"
        ],
        "correct": 2,
        "explanation": "The access level is downgraded to the most restrictive mode."
      },
      {
        "topicId": "INHERIT",
        "question": "In single inheritance the constructor execution order is",
        "options": [
          "Derived then base",
          "Base then derived",
          "Only the base constructor runs",
          "Only the derived constructor runs"
        ],
        "correct": 1,
        "explanation": "Bases are constructed first, destructors run in reverse."
      },
      {
        "topicId": "VIRTUAL",
        "question": "Virtual functions are the mechanism behind",
        "options": [
          "Compile time polymorphism",
          "Run time polymorphism",
          "Operator overloading",
          "Function templates"
        ],
        "correct": 1,
        "explanation": "The call is bound at run time through the vtable."
      },
      {
        "topicId": "VIRTUAL",
        "question": "A class with at least one pure virtual function is",
        "options": [
          "A concrete class",
          "A friend class",
          "An abstract class",
          "A template class"
        ],
        "correct": 2,
        "explanation": "It cannot be instantiated."
      },
      {
        "topicId": "VIRTUAL",
        "question": "A virtual destructor is essential when",
        "options": [
          "No pointers are used",
          "An object is destroyed through a base class pointer",
          "A class has only static members",
          "The class is a template"
        ],
        "correct": 1,
        "explanation": "Without it the derived destructor is skipped, causing a leak."
      },
      {
        "topicId": "VIRTUAL",
        "question": "Run time binding of a virtual call is implemented using",
        "options": [
          "A vtable and vptr",
          "A macro",
          "The preprocessor",
          "The linker only"
        ],
        "correct": 0,
        "explanation": "Each polymorphic class gets a table of function addresses."
      },
      {
        "topicId": "VIRTUAL",
        "question": "Overriding differs from overloading because overriding",
        "options": [
          "Uses the same name and same signature in a derived class",
          "Uses the same name with a different signature in the same class",
          "Needs the friend keyword",
          "Works only with operators"
        ],
        "correct": 0,
        "explanation": "Overloading keeps signatures different within one scope."
      },
      {
        "topicId": "FILE_IO",
        "question": "Which header must be included for file streams?",
        "options": [
          "iostream",
          "iomanip",
          "fstream",
          "cstdio"
        ],
        "correct": 2,
        "explanation": "fstream declares ifstream, ofstream and fstream."
      },
      {
        "topicId": "FILE_IO",
        "question": "To add data to the end of an existing file you open it with",
        "options": [
          "ios trunc",
          "ios binary only",
          "ios app",
          "ios ate only"
        ],
        "correct": 2,
        "explanation": "The app mode seeks to the end before every write."
      },
      {
        "topicId": "FILE_IO",
        "question": "The class used for writing to a file is",
        "options": [
          "ofstream",
          "ifstream",
          "fstream only",
          "strstream"
        ],
        "correct": 0,
        "explanation": "o stands for output."
      },
      {
        "topicId": "FILE_IO",
        "question": "To check whether a file was opened successfully you call",
        "options": [
          "is open",
          "good",
          "fail",
          "eof"
        ],
        "correct": 0,
        "explanation": "The member function is_open returns a bool."
      },
      {
        "topicId": "FILE_IO",
        "question": "The eof function returns true",
        "options": [
          "When the end of file has been reached",
          "After every read",
          "When the file is missing",
          "When the mode is binary"
        ],
        "correct": 0,
        "explanation": "It reports the end of file condition."
      },
      {
        "topicId": "EXCEPT",
        "question": "The keyword used to raise an exception is",
        "options": [
          "catch",
          "throw",
          "try",
          "raise"
        ],
        "correct": 1,
        "explanation": "throw transfers control to a matching handler."
      },
      {
        "topicId": "EXCEPT",
        "question": "catch with three dots catches",
        "options": [
          "Nothing",
          "Only integers",
          "Every type of exception",
          "Only standard exceptions"
        ],
        "correct": 2,
        "explanation": "It is the catch all handler."
      },
      {
        "topicId": "EXCEPT",
        "question": "A custom exception class should preferably be derived from",
        "options": [
          "string",
          "std exception",
          "ostream",
          "vector"
        ],
        "correct": 1,
        "explanation": "Deriving from exception allows a uniform interface."
      },
      {
        "topicId": "EXCEPT",
        "question": "If no matching handler is found for a thrown exception, the program",
        "options": [
          "Continues normally",
          "Ignores the exception",
          "Calls terminate",
          "Skips the try block"
        ],
        "correct": 2,
        "explanation": "Unhandled exceptions terminate the program."
      },
      {
        "topicId": "EXCEPT",
        "question": "Re-throwing an exception inside a catch block is done with",
        "options": [
          "throw new",
          "throw",
          "rethrow",
          "catch throw"
        ],
        "correct": 1,
        "explanation": "A bare throw re-throws the current exception."
      },
      {
        "topicId": "TEMPLATE_STL",
        "question": "Templates in C++ support",
        "options": [
          "Generic programming",
          "Automatic memory management",
          "Multiple inheritance only",
          "Exception handling"
        ],
        "correct": 0,
        "explanation": "One piece of code works for many types."
      },
      {
        "topicId": "TEMPLATE_STL",
        "question": "A function template template with type T and parameters a b is called as",
        "options": [
          "max 3 4 only",
          "max int 3 4",
          "max of 3 and 4 without any type",
          "max int angle 3 comma 4"
        ],
        "correct": 1,
        "explanation": "Explicit specialisation uses max with int in angle brackets."
      },
      {
        "topicId": "TEMPLATE_STL",
        "question": "Which STL container stores key value pairs?",
        "options": [
          "vector",
          "map",
          "stack",
          "queue"
        ],
        "correct": 1,
        "explanation": "A map holds unique keys mapped to values."
      },
      {
        "topicId": "TEMPLATE_STL",
        "question": "A vector in the STL is",
        "options": [
          "A linked list",
          "A dynamic array",
          "A balanced tree",
          "A hash table"
        ],
        "correct": 1,
        "explanation": "It grows by reallocating contiguous storage."
      },
      {
        "topicId": "TEMPLATE_STL",
        "question": "Which header declares the vector container?",
        "options": [
          "vector",
          "array",
          "list",
          "deque"
        ],
        "correct": 0,
        "explanation": "The vector header is needed for std vector."
      }
    ],
    "notes": {
      "ARR_STR": {
        "bullets": [
          "Variable: named memory location. Must be declared before use (int a = 5;). C++ allows declaration anywhere in a block. Constant: const int MAX = 100;. Reference variable: alias of another variable, int &r = a;, must be initialised, cannot be re-seated.",
          "Operators: arithmetic + - * / %, relational < > <= >= == !=, logical && // !, bitwise & / ^ ~ << >>, assignment = += -= *= /=, increment/decrement ++ --, conditional ?:, sizeof, scope ::, new, delete, member access . and ->.",
          "Precedence (high to low): () [] -> ., then unary ! ++ -- sizeof, then * / %, then + -, then relational, then equality, then &&, then //, then ?:, then assignment, then comma.",
          "Type conversion: implicit (int to float automatically) and explicit casting: (float)a or static_cast<float>(a).",
          "Expressions are combinations of operands and operators that yield a value. Statements end with ; and include declaration, expression, selection (if, switch), iteration (for, while, do-while) and jump (break, continue, goto, return).",
          "int a[5] = {1, 2, 3, 4, 5}; // 1-D array, index 0..4 int m[2][3] = {{1,2,3},{4,5,6}}; // 2-D array char s1[] = \"Hello\"; // C-string, ends with '\\0', size 6 string s2 = \"World\"; // string class s2 += \"!\"; cout << s2.length() << s2.substr(0,3); // 6 Wor",
          "Array name is the address of the first element. Out-of-range access is not checked by C++ (undefined behaviour).",
          "C-string functions (<cstring>): strlen, strcpy, strcat, strcmp. string class: +, ==, length(), size(), substr(), find(), append(), compare().",
          "A pointer stores the address of a variable: int a = 5; int *p = &a; Here &a is address-of, *p is dereference (value at address), p holds address.",
          "Pointer arithmetic: p+1 moves by sizeof(int) bytes. Array and pointer: a[i] is same as *(a+i).",
          "Null pointer: int *p = nullptr; (or NULL). void pointer can hold any address but must be cast before dereference. Pointer to pointer: int **pp = &p;",
          "const with pointers: const int *p (value cannot change), int *const p (address cannot change), const int *const p (neither).",
          "Dynamic memory: new allocates on heap, delete frees. int *p = new int(5); delete p; int *arr = new int[10]; delete[] arr; Forgetting delete causes memory leak.",
          "int a = 10, b = 20; int *p = &a; *p = 15; // a becomes 15 int arr[3] = {1, 2, 3}, *q = arr; cout << *(q + 2); // 3",
          "Function prototype (declaration) tells compiler name, return type and parameters: int add(int, int);.",
          "Argument passing: call by value (copy, original unchanged), call by address (pointer, original changed), call by reference (alias, original changed, no pointer syntax).",
          "Default arguments supplied from right to left: float area(float r, float pi = 3.14); Call area(2) uses default pi.",
          "Function overloading: same name, different parameter list (number, type or order). Return type alone is not enough. Resolved at compile time.",
          "Inline function: inline int sq(int x){return x*x;} The compiler replaces the call by the body, removing call overhead. Better than macros because it does type checking and avoids side effects like SQ(a++). Not suitable for large functions or loops. Declared before use. Compiler may refuse.",
          "Recursion: function calling itself. Must have base case. Each call uses stack memory. Examples: factorial, Fibonacci, power, GCD, Tower of Hanoi. Recursion vs iteration: recursion is shorter but slower and uses more memory.",
          "// call by value / address / reference void v(int x){ x = 5; } void ad(int *x){ *x = 5; } void rf(int &x){ x = 5; } int a = 1; v(a); /*a=1*/ ad(&a); /*a=5*/ rf(a); /*a=5*/ int fact(int n){ return n <= 1 ? 1 : n * fact(n - 1); } // recursion int gcd(int a, int b){ return b == 0 ? a : gcd(b, a % b); } void fib(int n){ int a = 0, b = 1; for(int i = 0; i < n; i++){ cout << a << \" \"; int c = a + b; a = b; b = c; } } Example: Overloading int area(int s){return s*s;} int area(int l,int b){return l*b;} double area(double r){return 3.14*r*r;} - area(4) calls...",
          "Exam tip: Unit 1 exam favourites: POP vs OOP table, features of OOP, structure of C++ program, call by value/reference with swap program, inline function vs macro, function overloading program, recursion (factorial/Fibonacci), pointer basics and new/delete."
        ],
        "links": [
          {
            "title": "YouTube search: arrays strings pointers C++ functions",
            "url": "https://www.youtube.com/results?search_query=arrays+strings+pointers+C%2B%2B+functions"
          }
        ]
      },
      "CLASS_OBJ": {
        "bullets": [
          "class Student { private: // data members: hidden int roll; char name[20]; public: // member functions: interface void getdata(); // declared inside void putdata() { cout << roll << \" \" << name << endl; } // defined inside (inline by default) }; void Student::getdata() { // defined outside using :: cout << \"Enter roll and name: \"; cin >> roll >> name; } int main() { Student s1, s2; s1.getdata(); s1.putdata(); Student *p = &s1; p->putdata(); }",
          "Access specifiers: private (default in class; accessible only inside the class and by friends), protected (class, friends, derived classes), public (everywhere). In a struct the default is public.",
          "Member functions can be defined inside the class (implicitly inline) or outside using the scope resolution operator ::. :: is also used for the global variable when a local variable has same name (::x).",
          "Object members are accessed with . (object) or -> (pointer to object). Each object has its own copy of data members but all share the member functions. sizeof(object) includes data members only.",
          "Data hiding in action: s1.roll = 5; from main is an error since roll is private.",
          "A constructor is a special member function with the same name as the class, no return type (not even void), called automatically when an object is created, used to initialise data members. It can be overloaded, is normally public, and cannot be virtual or static.",
          "class Box { int l, b; public: Box() { l = b = 0; } // default constructor Box(int x) { l = b = x; } // parameterized (one arg) Box(int x, int y) : l(x), b(y) {} // parameterized with initializer list Box(const Box &o) { l = o.l; b = o.b; } // copy constructor void show() { cout << l << \"x\" << b << endl; } }; Box b1; Box b2(5); Box b3(2, 3); Box b4 = b3; Box b5(b3); // b4,b5 use copy ctor",
          "Default constructor: no arguments. If you define no constructor, the compiler supplies one (it does nothing for built-in types). Parameterized: takes arguments to initialise with given values. Copy constructor: ClassName(const ClassName &obj), creates a new object from an existing one; the argument must be passed by reference (by value would recurse infinitely).",
          "Copy constructor is called when: (1) an object is initialised from another (Box b4 = b3;), (2) an object is passed by value to a function, (3) an object is returned by value.",
          "Shallow copy vs deep copy: the compiler's default copy constructor copies pointer values only (shallow), so two objects point to the same memory and both destructors free it (double free). A user-defined copy constructor that allocates new memory and copies content is a deep copy.",
          "Constructor overloading: several constructors with different parameters. Initializer list : l(x), b(y) initialises members before body runs; required for const and reference members.",
          "Dynamic initialisation: values supplied at run time (Box b(a, c); with variables).",
          "class Str { char *p; public: Str(const char *s){ p = new char[strlen(s)+1]; strcpy(p, s); } Str(const Str &o){ p = new char[strlen(o.p)+1]; strcpy(p, o.p); } // deep copy ~Str(){ delete[] p; } };",
          "Special member function ~ClassName(), no arguments, no return type, cannot be overloaded, one per class. Called automatically when the object goes out of scope or delete is used, to release resources (memory, files).",
          "Objects are destroyed in the reverse order of creation. Global objects are destroyed after main ends.",
          "class T { public: T(){ cout << \"C \"; } ~T(){ cout << \"D \"; } }; int main(){ T a; { T b; } cout << \"/ \"; } // output: C C D / D"
        ],
        "links": [
          {
            "title": "YouTube search: classes objects constructors C++",
            "url": "https://www.youtube.com/results?search_query=classes+objects+constructors+C%2B%2B"
          }
        ]
      },
      "COPY_THIS": {
        "bullets": [
          "this is an implicit pointer to the object that called the member function: type ClassName *const. Used to return the object itself (return *this; for chaining), to compare addresses, and when a parameter has the same name as a member (this->x = x;). Not available in static functions or friend functions.",
          "Passing objects: by value (copy ctor runs), by reference (no copy, can modify), by pointer. Returning objects: by value (copy) or by reference. Array of objects: Student s[3]; needs default constructor, access s[i].show(). Pointers to objects: Student *p = &s1; or new Student. Dynamic objects: Student *p = new Student(10); delete p; (constructor runs at new, destructor at delete).",
          "class Complex { public: float re, im; Complex add(Complex c){ Complex t; t.re = re + c.re; t.im = im + c.im; return t; } // object as arg and return Complex& setre(float r){ re = r; return *this; } }; // chaining: c.setre(1).setre(2)"
        ],
        "links": [
          {
            "title": "YouTube search: deep copy shallow copy this pointer C++",
            "url": "https://www.youtube.com/results?search_query=deep+copy+shallow+copy+this+pointer+C%2B%2B"
          }
        ]
      },
      "EXCEPT": {
        "bullets": [
          "An exception is a run-time error (divide by zero, array out of bounds, file not found, memory not available). C++ separates normal code from error handling using three keywords: try (block that may cause exception), throw (raises exception, any type), catch (handler, selected by type).",
          "double divide(int a, int b){ if(b == 0) throw \"Division by zero\"; return (double)a / b; } int main(){ try { cout << divide(10, 0); } catch (const char *msg) { cout << \"Error: \" << msg; } catch (int e) { cout << \"int exception\"; } catch (...) { cout << \"any other exception\"; } // catch-all }",
          "Control jumps from throw to the first matching catch; code after throw in try is skipped; if no handler matches, terminate() ends the program. Several catch blocks can follow one try; catch(...) must be last.",
          "Re-throwing: inside a catch block, throw; passes the same exception to the outer handler. Nested try blocks are allowed. Functions may specify exceptions (old style throw(int)). Standard exceptions in <exception>: bad_alloc, out_of_range, invalid_argument, exception::what().",
          "try { try { throw 5; } catch(int x){ cout << \"inner \"; throw; } } // rethrow catch(int x){ cout << \"outer \" << x; } // inner outer 5"
        ],
        "links": [
          {
            "title": "YouTube search: exception handling C++ custom exception",
            "url": "https://www.youtube.com/results?search_query=exception+handling+C%2B%2B+custom+exception"
          }
        ]
      },
      "FILE_IO": {
        "bullets": [
          "ios / \\ istream ostream ifstream : input from file (derived from istream) \\ / ofstream : output to file (derived from ostream) iostream fstream : both (derived from iostream)",
          "cin is object of istream, cout of ostream, cerr unbuffered error stream, clog buffered log. Formatting functions: width(), precision(), fill(), setf().",
          "Manipulators (<iomanip>): endl, ends, flush, setw(n) (field width), setfill(c), setprecision(n), fixed, scientific, left, right, hex, dec, oct, boolalpha.",
          "cout << setw(8) << setfill('*') << 42 << endl; // ******42 cout << fixed << setprecision(2) << 3.14159 << endl; // 3.14",
          "Files provide permanent storage. Steps: (1) include <fstream>, (2) create stream object, (3) open file, (4) read/write, (5) close. Opening: ofstream fout(\"a.txt\"); or fout.open(\"a.txt\", mode); Mode Meaning ios::in open for reading (default for ifstream) ios::out open for writing, truncates existing file (default for ofstream) ios::app append, writes always at end ios::ate open and move to end, can write anywhere ios::trunc delete contents if file exists ios::binary binary mode #include <fstream> int main(){ ofstream fout(\"data.txt\"); fout << \"Ved...",
          "Checks: is_open(), fail(), eof(), good(). Reading chars: get(), put(), getline().",
          "File pointers: seekg(pos, dir) and tellg() for get (read) pointer; seekp() and tellp() for put (write) pointer. Directions: ios::beg, ios::cur, ios::end. Enables random access.",
          "Binary files: write((char*)&obj, sizeof(obj)); and read((char*)&obj, sizeof(obj)); store whole objects.",
          "class Stu { public: int roll; char name[20]; }; Stu s = {1, \"Ved\"}; ofstream o(\"s.dat\", ios::binary); o.write((char*)&s, sizeof(s)); o.close(); ifstream i(\"s.dat\", ios::binary); Stu t; i.read((char*)&t, sizeof(t)); cout << t.roll << t.name; i.seekg(0, ios::end); cout << i.tellg(); // file size in bytes"
        ],
        "links": [
          {
            "title": "YouTube search: file handling in C++ ifstream ofstream",
            "url": "https://www.youtube.com/results?search_query=file+handling+in+C%2B%2B+ifstream+ofstream"
          }
        ]
      },
      "FRIEND": {
        "bullets": [
          "A friend function is a non-member function allowed to access the private and protected members of a class.",
          "Declared inside the class using friend, defined outside without Class::.",
          "Properties: not in class scope, not called with object (f(obj)), has no this, must access members through an object (obj.x), can be friend of more than one class (useful to operate on two classes), declaration can be placed in any section (public/private).",
          "Friend class: friend class B; inside A lets all member functions of B access A's private members.",
          "Friendship is not mutual, not inherited, not transitive.",
          "class B; // forward declaration class A { int x; public: A(int v){x=v;} friend int sum(A, B); }; class B { int y; public: B(int v){y=v;} friend int sum(A, B); }; int sum(A a, B b){ return a.x + b.y; } // accesses private members of both"
        ],
        "links": [
          {
            "title": "YouTube search: friend function in C++",
            "url": "https://www.youtube.com/results?search_query=friend+function+in+C%2B%2B"
          }
        ]
      },
      "INHERIT": {
        "bullets": [
          "Inheritance lets a new class (derived / child / sub class) reuse and extend the members of an existing class (base / parent / super class). It models the 'is-a' relationship (a Car is a Vehicle). Advantages: code reuse, less development time, easy extension, supports polymorphism, hierarchical classification. Syntax: class Derived : access_specifier Base { ... };",
          "Type Structure Example Single A -> B class B : public A Multiple A, B -> C class C : public A, public B Multilevel A -> B -> C class C : public B (B : public A) Hierarchical A -> B, A -> C class B : public A; class C : public A Hybrid combination (e.g. hierarchical + multiple) needs virtual base class to avoid ambiguity class Person { protected: string name; int age; public: void getP(){ cin >> name >> age; } }; class Employee : public Person { float sal; public: void getE(){ getP(); cin >> sal; } // single inheritance void show(){ cout << name <<...",
          "Base class member public inheritance protected inheritance private inheritance public public protected private protected protected protected private private not inherited (inaccessible) not inherited not inherited",
          "Private members of base are present in the derived object but not directly accessible; use public/protected base functions. protected exists to give derived classes access while hiding from outside. Default inheritance mode for class is private, for struct is public.",
          "Public inheritance keeps the is-a relation (most common). Private/protected inheritance hide the base interface from users of the derived class.",
          "Order of construction: base class constructor first, then derived class constructor. For multiple inheritance, base constructors run in the order of their declaration in the derived class header. Destruction is in the reverse order (derived destructor first, then base).",
          "Passing parameters to base class constructor: use the initializer list of the derived constructor: Derived(int a, int b) : Base(a) { ... }. If the base has a default constructor it is called automatically; if the base has only parameterised constructors the derived must call one explicitly.",
          "class A { public: A(int x){ cout << \"A(\" << x << \") \"; } ~A(){ cout << \"~A \"; } }; class B { public: B(){ cout << \"B \"; } ~B(){ cout << \"~B \"; } }; class C : public A, public B { public: C(int x, int y) : A(x) { cout << \"C(\" << y << \") \"; } ~C(){ cout << \"~C \"; } }; int main(){ C c(1, 2); } // output: A(1) B C(2) ~C ~B ~A",
          "In multiple inheritance, if both bases have a member with the same name, the call obj.f() is ambiguous; resolve with obj.A::f();. In hybrid inheritance (diamond): B and C inherit from A, and D inherits from B and C. D then contains two copies of A's members, so d.x is ambiguous and memory is wasted. Declaring the common base as virtual makes only one shared copy of A.",
          "class A { public: int x; A(){ x = 10; } }; class B : virtual public A { }; class C : virtual public A { }; class D : public B, public C { }; // A int main(){ D d; cout << d.x; } // / \\ one copy of A, no ambiguity -> 10 // B C // \\ / // D",
          "With a virtual base class, the constructor of the virtual base is called first, and by the most derived class (D), not by B or C.",
          "Other points: constructors/destructors/assignment operator/friends are not inherited. A derived class can override (redefine) a base function; the base version is hidden (use Base::f() to call it). Composition ('has-a') is an alternative to inheritance (an object as a member of another).",
          "Exam tip: Unit 3 exam favourites: types of inheritance with diagrams and programs; access table; order of constructor/destructor calls with output; passing arguments to base ctor; diamond problem and virtual base class program.",
          "A. It lets derived classes access base members while still hiding them from the rest of the program.",
          "Q. Is private base data present in derived object?",
          "A. Yes, it occupies memory but cannot be accessed directly by derived members."
        ],
        "links": [
          {
            "title": "YouTube search: inheritance types and virtual base class C++",
            "url": "https://www.youtube.com/results?search_query=inheritance+types+and+virtual+base+class+C%2B%2B"
          }
        ]
      },
      "NAMESPACE": {
        "bullets": [
          "// 1. Documentation (comments) #include <iostream> // 2. Header files (preprocessor directive) using namespace std; // 3. Namespace declaration class Student { // 4. Class declaration / definitions int roll; public: void set(int r) { roll = r; } void show() { cout << \"Roll = \" << roll << endl; } }; int main() { // 5. main(): execution begins here Student s; // object creation s.set(10); s.show(); return 0; // 0 = successful termination }",
          "#include <iostream> brings declarations of cout, cin, cerr. cout << x uses the insertion operator <<, cin >> x uses the extraction operator >>; endl inserts newline and flushes buffer.",
          "Header files: <iostream> (I/O), <cmath> (math), <cstring> (C strings), <string> (string class), <fstream> (files), <iomanip> (manipulators), <vector>, <map>, <algorithm> (STL). Modern C++ uses <cmath> not <math.h>.",
          "Namespace: a named scope that prevents name clashes. std holds the standard library. You can write std::cout or use using namespace std;. You can also create your own namespace.",
          "namespace A { int x = 10; void f() { cout << \"A::f\"; } } namespace B { int x = 20; } int main() { cout << A::x << \" \" << B::x; A::f(); } // 10 20 A::f"
        ],
        "links": [
          {
            "title": "YouTube search: namespaces in C++ explained",
            "url": "https://www.youtube.com/results?search_query=namespaces+in+C%2B%2B+explained"
          }
        ]
      },
      "OOP_BASICS": {
        "bullets": [
          "Early programs were written in the procedural style (C, Pascal, FORTRAN): a program is a list of instructions grouped into functions, and data is kept in global or shared variables. As programs grow, this style creates problems: any function can change global data, so a bug in one place breaks others; code is hard to reuse; and the program does not model real-world things naturally. OOP solves these by putting data and the functions that work on it into one unit (object) and by controlling who can touch the data.",
          "Security: data hiding stops accidental or unauthorised change.",
          "Reusability: inheritance and templates let existing code be reused instead of rewritten.",
          "Maintainability: change inside a class does not affect other parts if the interface is the same.",
          "Real-world modelling: objects such as Student, Account, Car map directly to program entities.",
          "Extensibility: new features are added by creating new classes, not editing old ones.",
          "Basis POP OOP Main idea Program = functions + data Program = objects that communicate Design approach Top-down Bottom-up Data Global data shared by all functions, little protection Data hidden inside object, accessed through member functions Importance Functions (what to do) Data (who does it) Reuse Copy and modify functions Inheritance, composition, templates Overloading Not supported Function and operator overloading Real-world modelling Difficult Easy Access control No access specifiers private, protected, public Examples C, Pascal, COBOL C++,...",
          "Object: a run-time entity with state (data members), behaviour (member functions) and identity. Example: a Student object with roll, name and function display().",
          "Class: a user-defined data type that is the blueprint of objects. It describes members but occupies no memory until an object is created.",
          "Encapsulation: wrapping data and functions into a single unit (the class). It is the mechanism that supports data hiding.",
          "Data hiding: keeping data members private so they can be accessed only through public member functions.",
          "Abstraction: showing only essential features and hiding implementation details. We use cout without knowing how it works inside. In C++ abstraction is achieved with classes and access specifiers (and abstract classes).",
          "Inheritance: process by which one class (derived) acquires properties of another (base). Supports reuse and hierarchical classification.",
          "Polymorphism: 'many forms': the same function name or operator behaves differently in different contexts (overloading, overriding, virtual functions).",
          "Dynamic binding: the code executed for a call is decided at run time (virtual functions).",
          "Message passing: objects communicate by calling each other's member functions, e.g. s1.display();.",
          "Developed by Bjarne Stroustrup at AT&T Bell Labs, started in 1979 as 'C with Classes', renamed C++ in 1983. Standardised by ISO (C++98, C++11, C++14, C++17, C++20).",
          "C++ is a superset of C (almost all C code works), supports procedural, object-oriented and generic programming, and gives low-level control with high-level features.",
          "Features: classes and objects, inheritance, polymorphism, templates, exceptions, namespaces, references, STL, operator overloading, inline functions, default arguments."
        ],
        "links": [
          {
            "title": "YouTube search: POP vs OOP in C++",
            "url": "https://www.youtube.com/results?search_query=POP+vs+OOP+in+C%2B%2B"
          }
        ]
      },
      "OPOVL": {
        "bullets": [
          "Operator overloading gives an existing operator an extra meaning for user-defined types using a special function operator@. It improves readability: c3 = c1 + c2; instead of c3 = c1.add(c2);.",
          "Rules: only existing operators can be overloaded (cannot create new ones like **); at least one operand must be a user-defined type; precedence, associativity and number of operands cannot change; cannot overload: :: (scope), . (member access), .*, ?:, sizeof, typeid. =, [], (), -> must be member functions; << and >> must be friend (or non-member).",
          "Member form: the left operand is the calling object. Unary operator takes 0 arguments, binary takes 1. Friend form: unary takes 1, binary takes 2 arguments.",
          "Pre vs post increment: operator++() is prefix, operator++(int) is postfix (the int is a dummy).",
          "Operator Member function Friend function Unary (-a, ++a) ret operator-() friend ret operator-(X) Operator Member function Friend function Binary (a+b) ret operator+(X b) [a is *this] friend ret operator+(X a, X b) Stream (cout<<a) not possible friend ostream& operator<<(ostream&, X) a = b X& operator=(const X&) must be member not allowed class Complex { float re, im; public: Complex(float r = 0, float i = 0) : re(r), im(i) {} Complex operator+(const Complex &c) { return Complex(re + c.re, im + c.im); } // binary + Complex operator-(const Complex &c)...",
          "Overloading + for strings (concatenation) and == for comparison are common exam programs. Assignment operator should be overloaded when class has pointer members (deep copy), with self-assignment check if(this != &o).",
          "Type conversion: constructor with one argument converts basic type to class (Distance d = 5;); conversion operator operator float() converts class to basic type.",
          "Exam tip: Unit 2 exam favourites: constructor types with program, copy constructor (3 situations), destructor order, static member program, friend function accessing two classes, this pointer, operator overloading programs (unary -, ++, binary +, <<), rules of operator overloading, member vs friend.",
          "Q. Why is the copy constructor argument a reference?",
          "A. If passed by value, making the copy would call the copy constructor again, causing infinite recursion. A reference avoids the copy.",
          "Q. Can a constructor be virtual or have a return type?",
          "A. No. It has no return type and cannot be virtual because the object does not yet exist (no vptr).",
          "Q. Difference between a member function and a friend function?",
          "A. A member function belongs to the class, is called through an object and has this. A friend function is outside the class, called like a normal function with objects as arguments, but can access private members.",
          "A. The left operand is cout (an ostream), not an object of our class, so it cannot be a member of our class."
        ],
        "links": [
          {
            "title": "YouTube search: operator overloading C++ plus plus and stream operators",
            "url": "https://www.youtube.com/results?search_query=operator+overloading+C%2B%2B+plus+plus+and+stream+operators"
          }
        ]
      },
      "STATIC": {
        "bullets": [
          "Static data member: only one copy shared by all objects. Declared with static inside class and defined outside with scope operator: int Counter::count = 0; Initialised to 0 by default. Exists even if no object is created. Used for counting objects.",
          "Static member function: can access only static members, has no this pointer, called using class name Counter::show();.",
          "class Counter { static int count; public: Counter(){ count++; } static void show(){ cout << count; } }; int Counter::count = 0; int main(){ Counter a, b, c; Counter::show(); } // prints 3"
        ],
        "links": [
          {
            "title": "YouTube search: static data members and functions C++",
            "url": "https://www.youtube.com/results?search_query=static+data+members+and+functions+C%2B%2B"
          }
        ]
      },
      "TEMPLATE_STL": {
        "bullets": [
          "Generic programming: write code once for any data type. Function template: one function definition works for many types, compiler generates the right version (instantiation). Class template: a class with type parameter.",
          "template <class T> T maxv(T a, T b){ return a > b ? a : b; } cout << maxv(3, 7) << maxv(2.5, 1.5) << maxv('a', 'z'); // int, double, char versions template <class T> class Stack { T a[50]; int top; public: Stack(){ top = -1; } void push(T x){ a[++top] = x; } T pop(){ return a[top--]; } }; Stack<int> s1; Stack<string> s2; // class template objects",
          "template <class T, class U> allows multiple type parameters. A function template can be overloaded and a specific type can have template specialisation. Templates are resolved at compile time and give compile-time polymorphism.",
          "STL is a collection of generic classes and functions with three main parts: containers (store data), iterators (generalised pointers to traverse), algorithms (operate on containers). Also function objects and adaptors.",
          "Category Containers Notes Sequence vector, list, deque, array vector: dynamic array, O(1) random access, push_back; list: doubly linked, O(1) insert/erase; deque: both ends Category Containers Notes Associative set, multiset, map, multimap sorted (balanced tree), search O(log n); set unique keys, map key-value pairs Unordered unordered_set, unordered_map hash based, average O(1) Adaptors stack, queue, priority_queue built on other containers, restricted interface #include <vector> #include <list> #include <map> #include <algorithm> vector<int> v =...",
          "Iterator types: input, output, forward, bidirectional, random access. begin() points to first element, end() one past last. Algorithms: sort, binary_search, find, count, reverse, copy, min_element, max_element, accumulate.",
          "Advantages: reusability, tested efficient code, type-safe through templates, consistent interface.",
          "Exam tip: Unit 5 exam favourites: file modes and read/write program; binary file with objects; function and class templates; try-throw-catch program with multiple catch; rethrow; STL components with vector/map program; iterator use."
        ],
        "links": [
          {
            "title": "YouTube search: STL containers and templates C++",
            "url": "https://www.youtube.com/results?search_query=STL+containers+and+templates+C%2B%2B"
          }
        ]
      },
      "VIRTUAL": {
        "bullets": [
          "Polymorphism means 'many forms': one interface, many implementations. C++ supports two kinds.",
          "Compile-time (static) polymorphism Run-time (dynamic) polymorphism Function overloading, operator overloading, templates Function overriding with virtual functions Early binding: call linked at compile time Late binding: call decided at run time by object type Faster, less flexible Slight overhead (vtable lookup), very flexible Function overloading Function overriding Same name, different parameters Same name AND same signature Same class (or same scope) Base class and derived class Resolved at compile time Resolved at run time if base function is...",
          "A virtual function is a base class member function declared with virtual, expected to be overridden. When called through a base class pointer or reference, the version of the object actually pointed to runs (late binding). Without virtual, the pointer type decides (early binding).",
          "Rules: must be a member function; cannot be static; can be friend of another class; accessed through pointer/reference to get run-time effect; prototype must match in derived class; if not overridden, base version is used; constructors cannot be virtual but destructors can.",
          "Implementation: every class with virtual functions has a vtable (table of function addresses). Each object stores a hidden vptr pointing to its class's vtable. A virtual call goes ptr -> vptr -> vtable -> function.",
          "class Base { public: void show() { cout << \"Base show\\n\"; } // non-virtual virtual void print(){ cout << \"Base print\\n\"; } }; // virtual class Derived : public Base { public: void show() { cout << \"Derived show\\n\"; } void print() { cout << \"Derived print\\n\"; } }; int main(){ Base *p; Derived d; p = &d; p->show(); // Base show (early binding, pointer type) p->print(); // Derived print (late binding, object type) }",
          "Pure virtual function: virtual void area() = 0; has no definition in base. A class having at least one pure virtual function is an abstract class: objects cannot be created, but pointers and references to it can.",
          "Any derived class must override all pure virtual functions, otherwise it is also abstract.",
          "Abstract classes define an interface/contract for derived classes (e.g. Shape with area(); Circle, Rectangle implement).",
          "class Shape { public: virtual float area() = 0; virtual ~Shape() {} }; class Circle : public Shape { float r; public: Circle(float x):r(x){} float area(){ return 3.14f*r*r; } }; class Rect : public Shape { float l,b; public: Rect(float x,float y):l(x),b(y){} float area(){ return l*b; } }; int main(){ Shape *s[2] = { new Circle(2), new Rect(3,4) }; for(int i = 0; i < 2; i++){ cout << s[i]->area() << endl; delete s[i]; } } // 12.56 12",
          "If a derived object is deleted through a base pointer and the base destructor is not virtual, only the base destructor runs and the derived part is not cleaned (memory leak, undefined behaviour). Make the base destructor virtual so destructors run derived first, then base.",
          "class B { public: virtual ~B(){ cout << \"~B \"; } }; class D : public B { public: ~D(){ cout << \"~D \"; } }; int main(){ B *p = new D; delete p; } // with virtual: ~D ~B without: ~B only",
          "Early (static) binding Late (dynamic) binding Function call resolved at compile time Resolved at run time Normal functions, overloaded functions Virtual functions through pointer/reference Faster Uses vtable, slightly slower Exam tip: Unit 4 exam favourites: overloading vs overriding; virtual function program showing base pointer to derived object; pure virtual and abstract class with Shape program; virtual destructor; early vs late binding; vtable concept.",
          "Q. Can we create an object of an abstract class?",
          "A. No, but we can create pointers and references to it, which is how run-time polymorphism is used.",
          "A. No, because the vptr is set up by the constructor itself, so the object type is not available before construction."
        ],
        "links": [
          {
            "title": "YouTube search: virtual functions pure virtual abstract class C++",
            "url": "https://www.youtube.com/results?search_query=virtual+functions+pure+virtual+abstract+class+C%2B%2B"
          }
        ]
      }
    }
  },
  "python": {
    "key": "python",
    "code": "PCS305",
    "name": "Python Programming",
    "topics": [
      {
        "id": "PY_BASIC",
        "unit": "Unit 1",
        "name": "Python basics, data types and operators",
        "baseMinutes": 50,
        "difficulty": 2,
        "freq": 2,
        "marks": 20.0
      },
      {
        "id": "PY_FUNC",
        "unit": "Unit 1",
        "name": "Functions, parameters, lambda and modules",
        "baseMinutes": 60,
        "difficulty": 3,
        "freq": 3,
        "marks": 30.0
      },
      {
        "id": "PY_COLLECTION",
        "unit": "Unit 2",
        "name": "Lists, tuples, dictionaries and strings",
        "baseMinutes": 70,
        "difficulty": 4,
        "freq": 4,
        "marks": 40.0
      },
      {
        "id": "PY_FILE",
        "unit": "Unit 2",
        "name": "Files, regular expressions and exceptions",
        "baseMinutes": 80,
        "difficulty": 2,
        "freq": 4,
        "marks": 40.0
      },
      {
        "id": "PY_OOP",
        "unit": "Unit 3",
        "name": "Python classes, inheritance and polymorphism",
        "baseMinutes": 50,
        "difficulty": 3,
        "freq": 6,
        "marks": 60.0
      },
      {
        "id": "PY_NUMPY",
        "unit": "Unit 4",
        "name": "NumPy and numerical computing",
        "baseMinutes": 60,
        "difficulty": 4,
        "freq": 2,
        "marks": 20.0
      },
      {
        "id": "PY_PANDAS",
        "unit": "Unit 4",
        "name": "Pandas and DataFrames",
        "baseMinutes": 70,
        "difficulty": 2,
        "freq": 3,
        "marks": 30.0
      },
      {
        "id": "PY_EDA",
        "unit": "Unit 5",
        "name": "Data cleaning, statistics and visualization",
        "baseMinutes": 80,
        "difficulty": 3,
        "freq": 6,
        "marks": 60.0
      }
    ],
    "prereqs": [
      {
        "from": "PY_BASIC",
        "to": "PY_FUNC"
      },
      {
        "from": "PY_FUNC",
        "to": "PY_COLLECTION"
      },
      {
        "from": "PY_COLLECTION",
        "to": "PY_FILE"
      },
      {
        "from": "PY_FILE",
        "to": "PY_OOP"
      },
      {
        "from": "PY_OOP",
        "to": "PY_NUMPY"
      },
      {
        "from": "PY_NUMPY",
        "to": "PY_PANDAS"
      },
      {
        "from": "PY_PANDAS",
        "to": "PY_EDA"
      }
    ],
    "pyqs": [
      {
        "year": "2025",
        "topicId": "PY_FILE",
        "qid": "a",
        "text": "Create a Python module named \"mathops.py\" containing functions for: 1. \"isprime()\" \u2014 which can check whether given number is prime or not. 2. \"generate_fibo()\" \u2014 for generating Fibonacci series. Import this module in another Python file and call all functions. Also include exception handling for invalid inputs. (CO2)"
      },
      {
        "year": "2025",
        "topicId": "PY_FUNC",
        "qid": "b",
        "text": "Explain different types of function parameters (positional, keyword, default, variable-length) with examples. Also describe the concept of return values. (CO2)"
      },
      {
        "year": "2025",
        "topicId": "PY_BASIC",
        "qid": "c",
        "text": "i) Explain different primitive data-types supported in Python. ii) Write a Python program that reads a sentence from the user and performs the following operations: - Count the number of vowels - Count digits and special characters - Convert sentence into title case"
      },
      {
        "year": "2025",
        "topicId": "PY_COLLECTION",
        "qid": "a",
        "text": "Explain lists, tuples, and dictionaries in Python with suitable examples. Compare their mutability, performance, and common use cases. Also, provide two built-in methods for each data type. (CO3)"
      },
      {
        "year": "2025",
        "topicId": "PY_FILE",
        "qid": "b",
        "text": "Write a program to read a text file and: 1. Count the frequency of each word and store them using a dictionary. 2. Write the result to another text file. Also explain file handling functions such as \"open()\", \"read()\", \"write()\" and \"close()\". (CO3)"
      },
      {
        "year": "2025",
        "topicId": "PY_COLLECTION",
        "qid": "c",
        "text": "Write a Python program that: 1. Takes a list of integers from the user. 2. Removes duplicates. 3. Sorts the list in descending order. 4. Prints even and odd numbers in separate lists."
      },
      {
        "year": "2025",
        "topicId": "PY_OOP",
        "qid": "a",
        "text": "Explain encapsulation in Python. How are private and public members declared and accessed? Write a suitable example demonstrating accessibility of private attributes. (CO4)"
      },
      {
        "year": "2025",
        "topicId": "PY_OOP",
        "qid": "b",
        "text": "Create a program for a vehicle rental company. Implement a base class \"Vehicle\" with attributes: - \"brand\" \u2014 Name of the vehicle company - \"model\" \u2014 Model name - \"rent_per_day\" \u2014 Base rental cost per day Define a method \"calculate_rent(days)\" that returns the rental amount for the given number of days. Create subclasses \"Car\" and \"Truck\", each overriding \"calculate_rent(days)\" to apply different pricing formulas as follows: 1. Cars have an additional insurance charge of \u20b9300 per day. 2. Trucks include a load tax of \u20b9500 per day. Demonstrate polymorphism by calling \"calculate_rent()\" using different vehicle objects. (CO4)"
      },
      {
        "year": "2025",
        "topicId": "PY_OOP",
        "qid": "c",
        "text": "A bank wants to create a program to manage different customer accounts using inheritance. Base Class \u2014 \"Account\" Attributes: \"account_number\", \"holder_name\", \"balance\" Methods: - \"deposit(amount)\" \u2014 Add money to the account - \"withdraw(amount)\" \u2014 Deduct money if balance is sufficient - \"show_balance()\" \u2014 Display current account balance Derived Class \u2014 \"SavingsAccount\" Additional Attribute: \"interest_rate\" Method: - \"add_interest()\" \u2014 Calculate interest using \"interest_rate\" and add it to the balance Write a Python program that: 1. Creates an object of \"SavingsAccount\". 2. Performs deposit and withdrawal operations. 3. Adds interest using the method in \"SavingsAccount\". 4. Displays the updated balance after each operation."
      },
      {
        "year": "2025",
        "topicId": "PY_NUMPY",
        "qid": "a",
        "text": "Using NumPy, develop a Python program that: 1. Creates a 2-D array. 2. Prints its shape, size and dimension. 3. Performs slicing. 4. Computes row-wise and column-wise sum and mean. 5. Reshapes the array to a 1-D array."
      },
      {
        "year": "2025",
        "topicId": "PY_PANDAS",
        "qid": "b",
        "text": "Write Python program using Pandas to: 1. Create a dataset having details of four employees with columns \"EmployeeID\", \"Department\" and \"Salary\". 2. Find the total number of employees. 3. Find the average salary of employees in each department. 4. Merge this DataFrame with another DataFrame containing \"EmployeeID\" and \"PerformanceScore\"."
      },
      {
        "year": "2025",
        "topicId": "PY_PANDAS",
        "qid": "c",
        "text": "Predict output of the code snippets given below. (i) nums = [5, 4, 9] nums.append([-1, -2]) nums.extend([8, 0]) print(nums) (ii) data = (50, 60, 70, 80, 90, 100) print(data[1:4]) print(data[-5:-2]) print(data[::-2]) (iii) import numpy as np arr = np.array([5, 15, 25, 35, 45]) print(arr * 2) print(arr[2:5]) (iv) import pandas as pd df = pd.DataFrame([5, 7, 1, 2, 3]) fun = lambda x: x + 2 print(fun(df)) (CO3, CO5)"
      },
      {
        "year": "2025",
        "topicId": "PY_EDA",
        "qid": "a",
        "text": "What is Exploratory Data Analysis? Explain its need and steps in detail. Describe how histograms and scatter plots help in identifying distribution and correlation. (CO6)"
      },
      {
        "year": "2025",
        "topicId": "PY_EDA",
        "qid": "b",
        "text": "With the help of a diagram, explain the key parts of a boxplot. How does a boxplot help in identifying outliers? (CO6)"
      },
      {
        "year": "2024",
        "topicId": "PY_BASIC",
        "qid": "c",
        "text": "Assume you are working with a customer dataset containing \"CustomerID\", \"Age\", \"AnnualIncome\", and \"SpendingScore\". Some values are missing or duplicated. Write Python program to: 1. Handle missing values (mean imputation for Age). 2. Remove duplicate rows. 3. Perform correlation analysis between \"AnnualIncome\" and \"SpendingScore\" and interpret the result. 4. Print data records where \"Age\" is greater than 25 (CO6) End Term (Odd) Semester Examination \u2014 December 2024 Program: B.Tech CSE (AI/ML Specialization), III Name of the Paper: Python Programming Paper Code: TCS-346 Time: 3 hours Maximum Marks: 100 Note: 1. All the questions are compulsory. 2. Answer any two sub questions from a, b and c in each main question. 3. Total marks for each question are 20 (twenty). Each sub-question carries 10 marks."
      },
      {
        "year": "2024",
        "topicId": "PY_FUNC",
        "qid": "a",
        "text": "What are various data types in Python? Explain the following inbuilt functions of Python with a piece of code: 1. \"print()\" 2. \"input()\" 3. \"type()\" 4. \"id()\" 5. \"len()\" Also explain membership and identity operators in Python along with an example."
      },
      {
        "year": "2024",
        "topicId": "PY_FUNC",
        "qid": "b",
        "text": "Write a program in Python which contains two functions with the following criteria: 1. First function accepts any number of positional arguments. 2. Second function accepts any number of keyword arguments. Write a Python program to calculate the sum of digits of a number. Additionally, explain lambda function."
      },
      {
        "year": "2024",
        "topicId": "PY_FILE",
        "qid": "c",
        "text": "i) What do you mean by exception handling in Python? Explain the role of the following keywords through \"ZeroDivisionError\": - \"try\" - \"except\" - \"finally\" - \"assert\" ii) Write a Python program to create a calculator module named \"calculator.py\" that performs the following operations: - Addition - Subtraction - Multiplication - Division - Exponentiation - Square root Then, write a main program to import and use this module."
      },
      {
        "year": "2024",
        "topicId": "PY_COLLECTION",
        "qid": "a",
        "text": "What do you mean by lists in Python? Explain slicing in brief with reference to lists with an example. Create a list by taking input from user and perform the following operations: 1. Reverse the created list 2. Delete the last element of the list 3. Add an element in the list at a specified index 4. Sort the list 5. Delete all the elements of list"
      },
      {
        "year": "2024",
        "topicId": "PY_COLLECTION",
        "qid": "b",
        "text": "i) Write a Python program to show the usage of \"for\" loop to retrieve the elements of a dictionary. ii) Also write a piece of Python code to check whether a key exists in the dictionary or not. iii) Draw a comparative table stating five differences between tuples and dictionaries. (CO3)"
      },
      {
        "year": "2024",
        "topicId": "PY_FILE",
        "qid": "c",
        "text": "What is the difference between the following modes of opening a file: \"r\", \"w\", and \"a\"? Explain with an example. What happens if you try to open a file in write mode (\"w\") but the file does not exist? Write a Python program to create a file, write into the same file and then print the file's content. (CO3)"
      },
      {
        "year": "2024",
        "topicId": "PY_OOP",
        "qid": "a",
        "text": "What are the main pillars of OOPS? State the significance of creation of objects and also state the consequence if we do not create an object of a class. Create a class \"student\" with the following attributes and methods: Attributes: - \"name\" - \"roll_num\" - \"marks\" Methods: - \"set()\" for assigning the values - \"get()\" for printing the values Also create an object and call the created methods through object."
      },
      {
        "year": "2024",
        "topicId": "PY_OOP",
        "qid": "b",
        "text": "What do you mean by method overriding? How can we overcome it? Also explain operator overloading through \"+\" & \"len()\". State and explain types of inheritance with example."
      },
      {
        "year": "2024",
        "topicId": "PY_OOP",
        "qid": "c",
        "text": "i) Write a Python program that demonstrates the use of an interface to define a common structure for different classes. Implement an interface to represent a shape, and create two classes: \"Circle\" and \"Rectangle\" that implement the interface. Each class should have a method \"area()\" to compute the area of the shape. ii) Describe encapsulation. What role do the access specifiers play in data hiding? Explain with supportive examples."
      },
      {
        "year": "2024",
        "topicId": "PY_NUMPY",
        "qid": "a",
        "text": "What is the NumPy library and how does it differ from Python lists? Create a NumPy array of shape \"(3, 4)\", filled with random integers between 0 and 100. Explain how NumPy handles missing data using \"NaN\". Provide an example."
      },
      {
        "year": "2024",
        "topicId": "PY_PANDAS",
        "qid": "b",
        "text": "How does Pandas simplify data manipulation? What is a Pandas DataFrame, and how is it different from a Pandas Series? Explain how to merge two DataFrames using \"merge()\" and \"concat()\". Demonstrate with examples."
      },
      {
        "year": "2024",
        "topicId": "PY_EDA",
        "qid": "c",
        "text": "State the significance of the following AI/ML libraries with respect to their features: 1. Matplotlib 2. Seaborn"
      },
      {
        "year": "2024",
        "topicId": "PY_EDA",
        "qid": "a",
        "text": "What do you mean by Data Science? Explain the significance of data cleaning. Additionally explain few techniques to clean data. (CO5)"
      },
      {
        "year": "2024",
        "topicId": "PY_EDA",
        "qid": "b",
        "text": "Explain (with help of example) various methods to find the summary of data sets using statistics. (CO6)"
      },
      {
        "year": "2024",
        "topicId": "PY_EDA",
        "qid": "c",
        "text": "What is meant by data visualization? Explain any two visualization techniques. (CO6)"
      }
    ],
    "quizzes": [
      {
        "topicId": "PY_BASIC",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Python basics, data types and operators",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "PY_BASIC",
        "question": "Which subject includes Python basics, data types and operators?",
        "options": [
          "Python Programming",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Python Programming."
      },
      {
        "topicId": "PY_FUNC",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Functions, parameters, lambda and modules",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "PY_FUNC",
        "question": "Which subject includes Functions, parameters, lambda and modules?",
        "options": [
          "Python Programming",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Python Programming."
      },
      {
        "topicId": "PY_COLLECTION",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Lists, tuples, dictionaries and strings",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "PY_COLLECTION",
        "question": "Which subject includes Lists, tuples, dictionaries and strings?",
        "options": [
          "Python Programming",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Python Programming."
      },
      {
        "topicId": "PY_FILE",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Files, regular expressions and exceptions",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "PY_FILE",
        "question": "Which subject includes Files, regular expressions and exceptions?",
        "options": [
          "Python Programming",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Python Programming."
      },
      {
        "topicId": "PY_OOP",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Python classes, inheritance and polymorphism",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "PY_OOP",
        "question": "Which subject includes Python classes, inheritance and polymorphism?",
        "options": [
          "Python Programming",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Python Programming."
      },
      {
        "topicId": "PY_NUMPY",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "NumPy and numerical computing",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "PY_NUMPY",
        "question": "Which subject includes NumPy and numerical computing?",
        "options": [
          "Python Programming",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Python Programming."
      },
      {
        "topicId": "PY_PANDAS",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Pandas and DataFrames",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "PY_PANDAS",
        "question": "Which subject includes Pandas and DataFrames?",
        "options": [
          "Python Programming",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Python Programming."
      },
      {
        "topicId": "PY_EDA",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Data cleaning, statistics and visualization",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "PY_EDA",
        "question": "Which subject includes Data cleaning, statistics and visualization?",
        "options": [
          "Python Programming",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Python Programming."
      }
    ],
    "notes": {
      "PY_FUNC": {
        "bullets": [
          "Syllabus map: Unit 1 Basics and Functions / Unit 2 Data Structures, Regex, File Handling / Unit 3 OOP in Python",
          "created by Guido van Rossum (1991). Code is executed line by line by the interpreter (CPython compiles to",
          "supports procedural, OOP and functional styles, automatic memory management (garbage collection), huge",
          "bound to an object. x = 5 then x = 'hi' is legal. Check with type(x).",
          "case-sensitive; no keywords (if, for, class, def...).",
          "len(s); s[0]; s[-1]; s[0:5]; s[::-1]; s[::2] # 13 H n Hello nohtyP ,olH...",
          "s.split(\", \") # ['Hello', 'Python'] \",\".join(['a', 'b']) -> 'a,b'",
          "f\"Name: {name:>10} Score: {score:.2f}\" # f-string formatting",
          "+ - * / (true division, always float) // (floor division) % ** (power)",
          "Example: 2 + 3 * 4 ** 2 = 50; 7 // 2 = 3, -7 // 2 = -4, 7 % 3 = 1.",
          "x, y = map(int, input().split()) # read two integers in one line",
          "print(f\"{3.14159:.2f}\") print(\"%d %s\" % (5, \"a\")) print(\"{} {}\".format(1, 2))",
          "else: print(\"runs only if loop not broken\") # loop-else",
          "loop runs when no break occurred. Nested loops for patterns and tables.",
          "area(5); area(5, 4); area(b=2, l=3) # positional, keyword",
          "def info(**kw): return kw # **kwargs -> dict of extra keyword args",
          "def minmax(a): return min(a), max(a) # returns a tuple (multiple values)",
          "list(map(lambda x: x*2, [1,2,3])); list(filter(lambda x: x % 2, [1,2,3,4]))",
          "unless declared global x (or nonlocal x for enclosing function).",
          "def fib(n): return n if n < 2 else fib(n-1) + fib(n-2)",
          "import math, import math as m, from math import sqrt, pi, from math import * (avoid).",
          "module must be in the same folder or on sys.path. if __name__ == '__main__': guards code that",
          "except ZeroDivisionError: print(\"Cannot divide by zero\")",
          "class NegativeError(Exception): pass # user-defined exception",
          "NameError, FileNotFoundError, ImportError, AttributeError. assert cond, msg for debugging",
          "Exam tip: Unit 1 exam favourites: features of Python; dynamic typing; operators (// % ); string slicing and",
          "creating and importing modules; try/except/else/finally.",
          "A. A small anonymous function defined with the lambda keyword, limited to one expression."
        ],
        "links": []
      },
      "PY_BASIC": {
        "bullets": [
          "/ Unit 4 NumPy, Pandas, Matplotlib, Seaborn / Unit 5 Data Cleaning and EDA",
          "bytecode, then the Python Virtual Machine runs it).",
          "ecosystem (NumPy, Pandas, Django, TensorFlow).",
          "line, triple quotes for docstring or multi-line text. Identifiers: letters, digits, underscore; cannot start with digit;",
          "assignment: a, b = 1, 2; swap a, b = b, a; x = y = 0.",
          "s.upper(); s.lower(); s.title(); s.strip(); s.replace(\"Python\", \"World\")",
          "s.find(\"Py\"); s.count(\"l\"); s.startswith(\"He\"); s.isdigit(); s.isalpha()",
          "* repetition, in membership. Escape sequences: \\n, \\t, \\\\, raw string r'\\d'.",
          "Precedence (high to low): **, unary + - ~, * / // %, + -, shifts, &, ^, /, comparisons, not, and, or.",
          "name = input(\"Enter name: \") # input() always returns a string",
          "print(\"Hi\", name, sep=\"-\", end=\"!\\n\") # sep and end parameters",
          "for i in range(1, 10, 2): print(i) # 1 3 5 7 9 range(start, stop, step)",
          "x = \"even\" if n % 2 == 0 else \"odd\" # conditional expression",
          "n = 29; is_prime = n > 1 and all(n % i for i in range(2, int(n**0.5) + 1)); print(is_prime) gives True.",
          "def total(*nums): return sum(nums) # *args -> tuple of extra positional args",
          "total(1, 2, 3); info(a=1, b=2) # 6 {'a': 1, 'b': 2}",
          "sq = lambda x: x * x # lambda: anonymous one-line function",
          "like def f(a=[]). Arguments are passed by object reference: mutating a list inside a function changes the",
          "def fact(n): return 1 if n <= 1 else n * fact(n - 1)",
          "def gcd(a, b): return a if b == 0 else gcd(b, a % b)",
          "datetime, os, sys, time, statistics, re, json, collections.",
          "should run only when the file is executed directly, not when imported. Install third-party packages with pip",
          "except (ValueError, TypeError) as e: print(\"Bad input:\", e)",
          "if n < 0: raise NegativeError(\"negative not allowed\") # raise manually",
          "checks. Syntax errors are caught before running; exceptions occur at run time.",
          "methods; control flow programs (prime, factorial, Fibonacci, patterns); *args and kwargs; LEGB scope;",
          "A. == compares values; is checks whether both names refer to the same object in memory."
        ],
        "links": []
      },
      "PY_COLLECTION": {
        "bullets": [
          "UNIT 2: DATA STRUCTURES, REGULAR EXPRESSIONS AND FILE HANDLING",
          "a.remove(20); a.pop(); a.pop(0); del a[1] # remove",
          "a.index(30); a.count(10); len(a); min(a); max(a); sum(a)",
          "b = a.copy(); c = a[:]; d = list(a) # shallow copies",
          "matrix = [[1, 2], [3, 4]]; matrix[1][0] # nested list",
          "2). Faster and safer than list; usable as dictionary keys; used for fixed records and multiple return values.",
          "d[\"city\"] = \"Dehradun\"; d[\"age\"] = 21 # add / update",
          "d.pop(\"age\"); d.update({\"a\": 1}); del d[\"a\"]; \"name\" in d # membership checks keys",
          "Insertion-ordered (3.7+). Lookup average O(1) (hash table). d[key] raises KeyError if missing; get() does",
          "a.add(9); a.remove(1); a.discard(100); a.issubset(b); set([1, 1, 2]) # {1, 2}",
          "A regular expression (regex) is a pattern describing a set of strings, used for searching, validating and",
          "re.findall(r\"\\d+\", \"a12 b345\") # ['12', '345']",
          "m.group(0), m.group(1), m.group(2) # 'ved@gmail.com', 'ved', 'gmail'",
          "bool(re.match(r\"^[\\w.+-]+@[\\w-]+\\.[\\w.]+$\", \"a.b@x.co\")) # simple email check",
          "f.write(\"line1\\n\"); f.writelines([\"a\\n\", \"b\\n\"])",
          "for line in f: print(line.strip()) # memory friendly, line by line",
          "with open(\"pic.jpg\", \"rb\") as src, open(\"copy.jpg\", \"wb\") as dst: dst.write(src.read()) #",
          "FileNotFoundError. Pickle (import pickle; pickle.dump(obj, f)) and json store objects.",
          "Exam tip: Unit 2 exam favourites: list/tuple/set/dict comparison; list methods and slicing; dict operations; set",
          "A. It guarantees the file is closed automatically even if an exception occurs.",
          "A. match checks only at the start of the string; search scans the whole string for the first match."
        ],
        "links": []
      },
      "PY_FILE": {
        "bullets": [
          "a.append(50); a.insert(1, 15); a.extend([60, 70]) # add",
          "a.sort(); a.sort(reverse=True); a.reverse(); sorted(a) # sort in place / new list",
          "a[1:3]; a[::-1]; a[-1] # slicing, negative index",
          "[x**2 for x in range(10) if x % 2 == 0] # list comprehension",
          "copy() for a copy. append adds one item, extend adds each element of an iterable. sort() returns None.",
          "Methods: count, index. Can contain mutable items (a list inside).",
          "d.get(\"x\", \"none\"); d.keys(); d.values(); d.items()",
          "{x: x**2 for x in range(4)} # dict comprehension -> {0:0, 1:1, 2:4,",
          "a / b; a & b; a - b; a ^ b # union, intersection, difference, symmetric difference",
          "fast membership testing. frozenset is immutable. Empty set is set() (not {} which is a dict).",
          "digit, non-digit, word char, non-word, whitespace, non-space",
          "m = re.search(r\"(\\w+)@(\\w+)\\.com\", \"mail ved@gmail.com now\")",
          "bool(re.match(r\"^[6-9]\\d{9}$\", \"9876543210\")) # Indian mobile number check -> True",
          "with open(\"notes.txt\", \"w\") as f: # 'with' closes the file automatically",
          "print(f.read()) # whole file as one string f.read(5) reads 5 characters",
          "f.seek(0); f.readline(); f.readlines() # readlines() -> list of lines",
          "import os; os.path.exists(\"a.txt\"); os.remove(\"a.txt\"); os.listdir(\".\")",
          "with open('a.txt') as f: words = f.read().split(); print(len(words)); from collections import Counter;",
          "operations; regex functions and metacharacters with email/phone validation; file modes and read/write programs;",
          "Q. What does re.match do differently from re.search?"
        ],
        "links": []
      },
      "PY_OOP": {
        "bullets": [
          "UNIT 3: OBJECT-ORIENTED PROGRAMMING USING PYTHON",
          "college = \"GEHU\" # class attribute (shared by all objects)",
          "def __init__(self, name, roll): # constructor, runs when object is created",
          "self.name = name # instance attributes (per object)",
          "def show(self): # instance method, first parameter is self",
          "def total(cls): return cls.count # class method gets the class (cls)",
          "def __str__(self): return f\"{self.name}({self.roll})\" # print(obj)",
          "s1 = Student(\"Ved\", 1); s1.show(); print(s1); Student.total(); Student.hello()",
          "Instance attributes belong to one object; class attributes are shared.",
          "def speak(self): return f\"{self.name} speaks\"",
          "super().__init__(name); self.roll = roll # call parent constructor",
          "def speak(self): return super().speak() + \" as student\" # method overriding",
          "class TA(Student, Employee): pass # multiple inheritance",
          "print(TA.__mro__) # method resolution order (C3 linearisation)",
          "isinstance(s1, Person); issubclass(Student, Person)",
          "called in multiple inheritance (left to right, depth first with C3 rules). super() calls the next class in MRO.",
          "walks like a duck' - any object with the needed method works, regardless of class. Operator overloading with",
          "dunder methods. Built-in polymorphism: len() works on str, list, dict; + adds numbers and concatenates",
          "for a in (Dog(), Cat()): print(a.sound()) # same call, different results",
          "def __init__(self, x, y): self.x, self.y = x, y",
          "def __add__(self, o): return Vec(self.x + o.x, self.y + o.y)",
          "def __str__(self): return f\"({self.x}, {self.y})\"",
          "_name protected (convention only), __name private via name mangling to _Class__name. Provide access",
          "with getters/setters or the @property decorator.",
          "@abstractmethods and cannot be instantiated; subclasses must implement them.",
          "def __init__(self, r): self.__r = r # private",
          "def area(self): return 3.14159 * self.__r ** 2",
          "c = Circle(2); c.radius = 3; print(c.area()); # Shape() -> TypeError (abstract)",
          "Exam tip: Unit 3 exam favourites: class and object with __init__; instance vs class attributes; inheritance types",
          "with super() and MRO; polymorphism (overriding, duck typing, operator overloading); encapsulation (private",
          "A. It refers to the current instance so methods can access and modify that object's attributes.",
          "A. Not directly; defining the same name again replaces the earlier one. Use default arguments or *args instead."
        ],
        "links": []
      },
      "PY_PANDAS": {
        "bullets": [
          "UNIT 4: PYTHON LIBRARIES FOR NUMERICAL COMPUTING AND VISUALIZATION",
          "memory. It is much faster than lists because of C implementation and vectorised operations (no explicit Python",
          "m.shape, m.ndim, m.size, m.dtype # (2, 3) 2 6 int64",
          "np.arange(0, 10, 2); np.linspace(0, 1, 5); np.random.rand(2, 3); np.random.randint(1, 10, 5)",
          "m = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])",
          "a + b; a * b; a ** 2; a + 5; np.sqrt(a); np.exp(a) # element-wise, no loops",
          "m.sum(axis=0) # column sums m.sum(axis=1) # row sums (axis 0 = down rows, 1 = across",
          "vector to each row of a matrix, or a scalar to the whole array). Rule: compare shapes from the right; dimensions",
          "A @ B; np.dot(A, B) # matrix multiplication (not A * B which is element-wise)",
          "vals, vecs = np.linalg.eig(A) # eigenvalues and eigenvectors",
          "np.vstack([a, b]); np.hstack([a, b]); np.concatenate([a, b])",
          "Pandas provides labelled data structures for tabular data: Series (1-D labelled array) and DataFrame (2-D table",
          "s = pd.Series([10, 20, 30], index=[\"a\", \"b\", \"c\"])",
          "df = pd.read_csv(\"data.csv\"); df.to_csv(\"out.csv\", index=False) # also read_excel,",
          "df.loc[0, \"name\"]; df.loc[1:2, [\"name\", \"sal\"]] # label based (end INCLUSIVE)",
          "df[df[\"sal\"] > 55]; df[(df.dept == \"CS\") & (df.sal > 50)] # boolean filtering (use & / ~)",
          "a = pd.DataFrame({\"id\": [1, 2, 3], \"name\": [\"A\", \"B\", \"C\"]})",
          "pd.merge(a, b, on=\"id\", how=\"inner\") # ids 1,2 how = inner / left / right / outer",
          "df.groupby(\"dept\")[\"sal\"].mean() # CS 55.0 EE 60.0",
          "df[\"dept\"].value_counts(); pd.pivot_table(df, values=\"sal\", index=\"dept\", aggfunc=\"sum\")",
          "Matplotlib is the basic plotting library. A Figure is the whole canvas; Axes is one plot inside it (with x-axis, y-axis,",
          "plt.plot(x, y, color=\"red\", marker=\"o\", linestyle=\"--\", label=\"growth\") # line plot",
          "plt.bar([\"A\", \"B\"], [30, 50]); plt.barh(...); plt.scatter(x, y); plt.pie([40, 60],",
          "axes[0].plot(x, y); axes[1].bar([\"A\", \"B\"], [3, 5]); fig.savefig(\"plot.png\")",
          "DataFrames and applies themes (sns.set_theme()).",
          "sns.boxplot(x=\"dept\", y=\"sal\", data=df) # spread and outliers per category",
          "sns.barplot(x=\"dept\", y=\"sal\", data=df) # mean with confidence interval",
          "sns.pairplot(df); sns.countplot(x=\"dept\", data=df); sns.violinplot(...)",
          "algebra functions; Pandas Series vs DataFrame, loc vs iloc, merge types, groupby; Matplotlib figure/axes and",
          "A. It stores same-type data contiguously, implements operations in C and uses vectorisation, avoiding Python"
        ],
        "links": []
      },
      "PY_NUMPY": {
        "bullets": [
          "NumPy (Numerical Python) provides the ndarray: a fast, fixed-type, n-dimensional array stored in contiguous",
          "a = np.array([1, 2, 3]); m = np.array([[1, 2, 3], [4, 5, 6]])",
          "np.zeros((2, 3)); np.ones((2, 2)); np.eye(3); np.full((2, 2), 7)",
          "m.reshape(3, 2); m.flatten(); m.T # reshape, 1-D copy, transpose",
          "a = np.array([1, 2, 3, 4]); b = np.array([10, 20, 30, 40])",
          "a.sum(); a.mean(); np.median(a); a.std(); a.var(); a.min(); a.max(); a.argmax(); np.cumsum(a)",
          "np.percentile(a, 90); np.corrcoef(a, b); np.sort(a); np.unique([1, 1, 2])",
          "A = np.array([[2, 1], [1, 3]]); B = np.array([[1, 0], [4, 1]])",
          "A.T; np.linalg.det(A); np.linalg.inv(A); np.trace(A); np.linalg.matrix_rank(A)",
          "x = np.linalg.solve(A, np.array([5, 7])) # solve A x = b -> [1.6, 1.8]",
          "x = np.array([10, 20, 30]); z = (x - x.mean()) / x.std() gives array([-1.22, 0, 1.22]); no loop needed.",
          "of rows and columns, each column a Series of its own type).",
          "df = pd.DataFrame({\"name\": [\"A\", \"B\", \"C\", \"D\"], \"dept\": [\"CS\", \"CS\", \"EE\", \"EE\"], \"sal\": [50,",
          "df.head(); df.tail(3); df.shape; df.columns; df.dtypes; df.info(); df.describe()",
          "df.iloc[0, 0]; df.iloc[0:2, 0:2] # position based (end exclusive)",
          "df[\"bonus\"] = df[\"sal\"] * 0.1; df.drop(\"bonus\", axis=1); df.sort_values(\"sal\",",
          "b = pd.DataFrame({\"id\": [1, 2, 4], \"mark\": [80, 90, 70]})",
          "pd.concat([a, a], axis=0) # stack rows (axis=1 side by side)",
          "df.groupby(\"dept\").agg({\"sal\": [\"mean\", \"max\"]})",
          "split-apply-combine: split data into groups, apply a function (mean, sum, count) and combine results.",
          "title, labels). pyplot (plt) offers a MATLAB-like interface.",
          "plt.title(\"Growth\"); plt.xlabel(\"x\"); plt.ylabel(\"y\"); plt.legend(); plt.grid(True); plt.show()",
          "fig, axes = plt.subplots(1, 2, figsize=(8, 3)) # several axes in one figure",
          "Seaborn is built on Matplotlib and gives attractive statistical plots with less code; it works directly with",
          "sns.histplot(df[\"sal\"], kde=True) # distribution with density curve",
          "sns.scatterplot(x=\"age\", y=\"sal\", hue=\"dept\", data=df)",
          "sns.heatmap(df.corr(numeric_only=True), annot=True, cmap=\"coolwarm\") # correlation matrix",
          "Exam tip: Unit 4 exam favourites: NumPy array creation, indexing, slicing, broadcasting, statistical and linear",
          "basic plots; Seaborn plots and when to use each.",
          "A. merge joins on keys like SQL; concat stacks objects along an axis without matching on keys."
        ],
        "links": []
      },
      "PY_EDA": {
        "bullets": [
          "UNIT 5: DATA CLEANING AND EXPLORATORY DATA ANALYSIS",
          "Real data is messy. Data cleaning (preprocessing) detects and fixes errors so analysis is reliable (garbage in,",
          "garbage out). Typical problems: missing values, duplicates, wrong data types, inconsistent text, outliers, wrong",
          "df.dropna(); df.dropna(subset=[\"age\"]); df.dropna(axis=1) # remove rows / columns",
          "df[\"age\"].fillna(df[\"age\"].mean(), inplace=False) # fill with mean (or",
          "df[\"city\"].fillna(\"Unknown\"); df.fillna(method=\"ffill\") # constant / forward fill",
          "df.duplicated().sum(); df.drop_duplicates() # duplicates",
          "df[\"age\"] = df[\"age\"].astype(int); pd.to_datetime(df[\"date\"]); pd.to_numeric(df[\"x\"],",
          "df[\"name\"] = df[\"name\"].str.strip().str.title(); df[\"city\"].str.lower().replace({\"nyc\": \"new",
          "df.rename(columns={\"sal\": \"salary\"}); df[df[\"age\"].between(0, 100)] # drop impossible values",
          "median (skewed data), mode (categorical), forward/backward fill (time series), or model-based imputation.",
          "Choice depends on how much is missing and why (random or not).",
          "(pd.get_dummies), scale numeric features (min-max, standardisation), validate ranges.",
          "q1, q3 = df[\"x\"].quantile([0.25, 0.75]); iqr = q3 - q1",
          "outliers = df[(df[\"x\"] < lo) / (df[\"x\"] > hi)]",
          "clean = df[df[\"x\"].between(lo, hi)]; df[\"x\"] = df[\"x\"].clip(lo, hi) # cap values",
          "z = (df[\"x\"] - df[\"x\"].mean()) / df[\"x\"].std(); df[abs(z) > 3]",
          "Data: 2, 4, 5, 6, 7, 8, 40. Q1 = 4, Q3 = 8, IQR = 4. Limits: 4 - 6 = -2 and 8 + 6 = 14. The value 40 > 14, so 40 is an",
          "EDA (introduced by John Tukey) is the process of summarising and visualising a dataset to understand its",
          "structure, patterns, anomalies and relationships before modelling. It helps choose cleaning steps, features",
          "1. Understand the data: head(), shape, info(), dtypes, describe().",
          "2. Check quality: missing values, duplicates, wrong types, outliers.",
          "3. Univariate analysis: one variable at a time - summary statistics, histogram, box plot, value_counts() for",
          "4. Bivariate analysis: pairs of variables - scatter plot, correlation, grouped box plots, cross-tabs",
          "5. Multivariate analysis: heatmap of correlations, pair plots, groupby.",
          "6. Summarise insights and decide features and next steps.",
          "for all). If mean > median the data is usually right (positively) skewed.",
          "none, -1 perfect negative. df.corr() (Pearson default; also Spearman, Kendall). /r/ above 0.7 is strong, 0.3",
          "Multicollinearity: strongly correlated input features.",
          "median, quartiles, whiskers (1.5 IQR) and outliers shown as dots; compare groups. Heatmap: correlation",
          "matrix. Bar/count plot: categorical frequencies. Pair plot: all pairwise scatter plots.",
          "df.describe(); df.corr(numeric_only=True); df[\"dept\"].value_counts(normalize=True)",
          "sns.histplot(df[\"sal\"], bins=10); sns.boxplot(y=df[\"sal\"]); sns.scatterplot(x=\"exp\", y=\"sal\",",
          "sns.heatmap(df.corr(numeric_only=True), annot=True); pd.crosstab(df[\"dept\"], df[\"gender\"])",
          "Exam tip: Unit 5 exam favourites: data cleaning steps and Pandas code (isna, fillna, dropna, drop_duplicates,",
          "astype); outlier detection by IQR and Z-score with numerical; EDA steps; summary statistics; correlation meaning",
          "and heatmap; choosing histogram, box plot, scatter plot.",
          "Q. When to use median instead of mean to fill missing values?",
          "A. When data is skewed or has outliers, because the median is robust to extreme values.",
          "A. Median, first and third quartiles, whiskers up to 1.5 IQR and outliers beyond them.",
          "A. Interpreted, dynamically typed, object-oriented, simple syntax, extensive libraries, portable, automatic memory",
          "A. List is mutable with []; tuple is immutable with (), faster and usable as dictionary key.",
          "A. A collection of unique hashable keys mapped to values, written {key: value}.",
          "A. *args collects extra positional arguments in a tuple; **kwargs collects extra keyword arguments in a dict.",
          "A. A module is a .py file of definitions; a package is a folder of modules with __init__.py.",
          "A. A pattern that describes a set of strings, used with the re module for searching and validation.",
          "A. A class acquiring attributes and methods of another class using class Child(Parent).",
          "A. A fast, fixed-type, n-dimensional array supporting vectorised operations.",
          "A. Series is 1-D labelled data; DataFrame is a 2-D table of columns, each a Series.",
          "A. Exploring and visualising data to understand its structure, patterns and problems before modelling.",
          "1. Explain the features of Python and dynamic typing. Write programs for prime numbers, Fibonacci, factorial",
          "2. Explain string methods and slicing with examples.",
          "3. Explain function arguments: positional, keyword, default, *args, **kwargs. Explain LEGB scope.",
          "4. How do you create and use your own module? Explain built-in modules like math and random.",
          "5. Explain exception handling with try, except, else, finally and raise. Create a user-defined exception.",
          "6. Compare list, tuple, set and dictionary. Write the important methods of each.",
          "7. Explain regular expressions with metacharacters and re functions. Validate an email and a phone number.",
          "8. Explain file handling modes and write programs to read, write, append and copy files.",
          "9. Explain classes, objects, constructors and class vs instance attributes with an example.",
          "10. Explain types of inheritance and MRO with programs.",
          "11. Explain polymorphism, encapsulation and abstraction in Python with examples.",
          "12. Explain NumPy: array creation, indexing, slicing, reshaping, statistics, linear algebra operations.",
          "13. Explain Pandas DataFrame operations: indexing with loc/iloc, filtering, merging, groupby.",
          "14. Explain Matplotlib figures and axes and the common plots. How is Seaborn different?",
          "15. Describe the data cleaning steps and how to handle missing values and outliers.",
          "16. Explain EDA with its steps, summary statistics, correlation and visualisation techniques."
        ],
        "links": []
      }
    }
  },
  "logic": {
    "key": "logic",
    "code": "TCS307",
    "name": "Logic Design and Computer Organization",
    "topics": [
      {
        "id": "LD_BOOL",
        "unit": "Unit 1",
        "name": "Boolean algebra, K-maps and Quine McCluskey",
        "baseMinutes": 50,
        "difficulty": 2,
        "freq": 9,
        "marks": 90.0
      },
      {
        "id": "LD_COMB",
        "unit": "Unit 1",
        "name": "Adders, subtractors, multiplexers and decoders",
        "baseMinutes": 60,
        "difficulty": 3,
        "freq": 10,
        "marks": 100.0
      },
      {
        "id": "LD_FF",
        "unit": "Unit 2",
        "name": "Flip-flops and sequential circuits",
        "baseMinutes": 70,
        "difficulty": 4,
        "freq": 6,
        "marks": 60.0
      },
      {
        "id": "LD_REG",
        "unit": "Unit 2",
        "name": "Registers and shift registers",
        "baseMinutes": 80,
        "difficulty": 2,
        "freq": 2,
        "marks": 20.0
      },
      {
        "id": "LD_COUNTER",
        "unit": "Unit 3",
        "name": "Counters and state machines",
        "baseMinutes": 50,
        "difficulty": 3,
        "freq": 6,
        "marks": 60.0
      },
      {
        "id": "LD_ARCH",
        "unit": "Unit 4",
        "name": "Computer architecture, RISC and CISC",
        "baseMinutes": 60,
        "difficulty": 4,
        "freq": 2,
        "marks": 20.0
      },
      {
        "id": "LD_ARITH",
        "unit": "Unit 4",
        "name": "Booth algorithm and floating point arithmetic",
        "baseMinutes": 70,
        "difficulty": 2,
        "freq": 4,
        "marks": 40.0
      },
      {
        "id": "LD_MEMORY",
        "unit": "Unit 5",
        "name": "Memory hierarchy and cache mapping",
        "baseMinutes": 80,
        "difficulty": 3,
        "freq": 4,
        "marks": 40.0
      },
      {
        "id": "LD_IO",
        "unit": "Unit 5",
        "name": "I/O, interrupts and DMA",
        "baseMinutes": 50,
        "difficulty": 4,
        "freq": 2,
        "marks": 20.0
      }
    ],
    "prereqs": [
      {
        "from": "LD_BOOL",
        "to": "LD_COMB"
      },
      {
        "from": "LD_COMB",
        "to": "LD_FF"
      },
      {
        "from": "LD_FF",
        "to": "LD_REG"
      },
      {
        "from": "LD_REG",
        "to": "LD_COUNTER"
      },
      {
        "from": "LD_COUNTER",
        "to": "LD_ARCH"
      },
      {
        "from": "LD_ARCH",
        "to": "LD_ARITH"
      },
      {
        "from": "LD_ARITH",
        "to": "LD_MEMORY"
      },
      {
        "from": "LD_MEMORY",
        "to": "LD_IO"
      }
    ],
    "pyqs": [
      {
        "year": "2023",
        "topicId": "LD_BOOL",
        "qid": "a",
        "text": "(A + B/overline{C} + /overline{A}C). Implement this logic expression using NAND-NAND logic gates and NOR-NOR logic gates only."
      },
      {
        "year": "2023",
        "topicId": "LD_BOOL",
        "qid": "b",
        "text": "Simplify: [ F(A,B,C,D,E)=/Sigma m(0,1,6,7,8,10,11,14,15,30,31)+/Sigma d(23,28,29) ] using K-map and implement the final output with NAND gates only."
      },
      {
        "year": "2023",
        "topicId": "LD_BOOL",
        "qid": "c",
        "text": "Find the minimal sum of products for the Boolean expression: [ F(A,B,C,D)=/Sigma m(1,2,3,7,8,9,10,11,14,15) ] using Quine-McCluskey method."
      },
      {
        "year": "2023",
        "topicId": "LD_BOOL",
        "qid": "a",
        "text": "Design a 3-bit binary to Gray code converter and also draw its logic diagram."
      },
      {
        "year": "2023",
        "topicId": "LD_COMB",
        "qid": "b",
        "text": "Design a BCD to 7-segment display decoder using unused BCD combinations of BCD as don't care condition."
      },
      {
        "year": "2023",
        "topicId": "LD_COMB",
        "qid": "c",
        "text": "An 8 \u00d7 1 multiplexer has inputs A, B and C connected to selection inputs of (S_2,S_1,S_0) respectively. The data inputs (I_0) through (I_7) are as follows: [ I_1=I_2=0 ] [ I_3=I_7=1 ] [ I_4=I_5=D ] and [ I_0=I_6=/overline{D} ]"
      },
      {
        "year": "2023",
        "topicId": "LD_COMB",
        "qid": "a",
        "text": "Implement a full adder with decoder and NAND gates. The adder inputs are A, B and C. The adder produces the outputs S and (C_0)."
      },
      {
        "year": "2023",
        "topicId": "LD_COMB",
        "qid": "b",
        "text": "Implement the following two given Boolean functions with a PLA: [ F_1(A,B,C)=/Sigma(0,1,2,4) ] [ F_2(A,B,C)=/Sigma(0,5,6,7) ]"
      },
      {
        "year": "2023",
        "topicId": "LD_COUNTER",
        "qid": "c",
        "text": "Design a synchronous Mod-6 counter, also using J-K flip-flops, and draw its logic diagram."
      },
      {
        "year": "2023",
        "topicId": "LD_COUNTER",
        "qid": "a",
        "text": "Explain the working of Johnson Counter and Universal Shift Register."
      },
      {
        "year": "2023",
        "topicId": "LD_FF",
        "qid": "b",
        "text": "A sequential circuit has one positive edge-triggered DFF and one full adder with two inputs x and y and one output S. Carry output of Full Adder is connected to D input of DFF and Q output of DFF is acting as third input to Full Adder. Draw the state table and state transition diagram."
      },
      {
        "year": "2023",
        "topicId": "LD_REG",
        "qid": "c",
        "text": "The contents of four bit register are initially 1011. The register is shifted six times to the right with the serial input 101111. What are the contents of the register after each shift? Illustrate with timing diagram."
      },
      {
        "year": "2023",
        "topicId": "LD_MEMORY",
        "qid": "a",
        "text": "Explain the following with support of flow chart: 1. Programmed I/O 2. Interrupt driven I/O 3. Direct memory access"
      },
      {
        "year": "2023",
        "topicId": "LD_ARITH",
        "qid": "b",
        "text": "Explain the floating point arithmetic operations with the help of flowchart."
      },
      {
        "year": "2024",
        "topicId": "LD_COMB",
        "qid": "c",
        "text": "Explain various types of addressing modes. END SEMESTER EXAMINATION \u2014 DECEMBER 2024"
      },
      {
        "year": "2024",
        "topicId": "LD_BOOL",
        "qid": "a",
        "text": "For the given Boolean function: [ f(w,x,y,z)=/Sigma(0,5,7,8,9,10,14,15) ] find the prime implicants and essential prime implicants using Quine-McClusky method."
      },
      {
        "year": "2024",
        "topicId": "LD_BOOL",
        "qid": "b",
        "text": "Design a combinational circuit that compares two 4-bit numbers, A and B, to check if they are equal. The circuit has one output Y, so that: [ Y=1 /text{ if } A=B ] and [ Y=0 /text{ if } A/neq B ]"
      },
      {
        "year": "2024",
        "topicId": "LD_BOOL",
        "qid": "c",
        "text": "Design a 2-bit magnitude comparator and draw its logic diagram."
      },
      {
        "year": "2024",
        "topicId": "LD_FF",
        "qid": "a",
        "text": "Perform the following flip-flop conversions: 1. D to SR 2. T to JK"
      },
      {
        "year": "2024",
        "topicId": "LD_REG",
        "qid": "b",
        "text": "Design and explain Universal Shift Register."
      },
      {
        "year": "2024",
        "topicId": "LD_COMB",
        "qid": "c",
        "text": "Design and explain 4-bit Binary Adder-Subtractor."
      },
      {
        "year": "2024",
        "topicId": "LD_FF",
        "qid": "a",
        "text": "A clocked sequential circuit with two D flip-flops A and B, an input x and output y. The next state equations for a sequential circuit are given as: [ A(t+1)=Ax+Bx ] [ B(t+1)=A'x' ] and the present state output are given as, [ y=(A+B)x' ] If x is an external input to the sequential circuit: 1. Draw the circuit diagram of the sequential circuit. 2. Obtain state diagram of the sequential circuit."
      },
      {
        "year": "2024",
        "topicId": "LD_COUNTER",
        "qid": "b",
        "text": "Design mod-10 synchronous counter using JK flip-flop."
      },
      {
        "year": "2024",
        "topicId": "LD_COUNTER",
        "qid": "c",
        "text": "Draw and explain 4-bit Binary ripple Up-Down Counter."
      },
      {
        "year": "2024",
        "topicId": "LD_ARCH",
        "qid": "a",
        "text": "Differentiate between: 1. RISC and CISC processors 2. Von Neumann and Harvard Architecture"
      },
      {
        "year": "2024",
        "topicId": "LD_ARITH",
        "qid": "b",
        "text": "Discuss Booth algorithm for multiplication with flowchart."
      },
      {
        "year": "2024",
        "topicId": "LD_ARITH",
        "qid": "c",
        "text": "Explain floating point arithmetic operations \u2014 addition and subtraction with flowcharts. Also discuss its hardware implementation."
      },
      {
        "year": "2024",
        "topicId": "LD_IO",
        "qid": "a",
        "text": "Explain the following with flow chart approach: 1. Interrupt driven I/O 2. Programmed I/O"
      },
      {
        "year": "2024",
        "topicId": "LD_MEMORY",
        "qid": "b",
        "text": "Discuss memory hierarchy design and its characteristics."
      },
      {
        "year": "2025",
        "topicId": "LD_IO",
        "qid": "c",
        "text": "What is DMA? How it works? Explain. END TERM (ODD) SEMESTER EXAMINATION \u2014 NOVEMBER 2025"
      },
      {
        "year": "2025",
        "topicId": "LD_BOOL",
        "qid": "a",
        "text": "Minimize the 5-variable function: [ F(A,B,C,D,E)=/Sigma m(1,3,7,11,15,16,17,19,23,27,31) +d/Sigma(2,6,10,14) ] using K-maps."
      },
      {
        "year": "2025",
        "topicId": "LD_COMB",
        "qid": "b",
        "text": "Design a BCD adder."
      },
      {
        "year": "2025",
        "topicId": "LD_BOOL",
        "qid": "c",
        "text": "Design the Boolean expression: [ F(A,B,C)=/Sigma m(1,3,6,7) ] by using 4\u00d71 MUX and 2\u00d71 MUX."
      },
      {
        "year": "2025",
        "topicId": "LD_FF",
        "qid": "a",
        "text": "Determine the characteristic equation and excitation table of JK and SR flip-flop."
      },
      {
        "year": "2025",
        "topicId": "LD_COMB",
        "qid": "b",
        "text": "Draw and explain the circuit of 5-bit SISO."
      },
      {
        "year": "2025",
        "topicId": "LD_FF",
        "qid": "c",
        "text": "Convert JK flip-flop into D flip-flop."
      },
      {
        "year": "2025",
        "topicId": "LD_COUNTER",
        "qid": "a",
        "text": "Draw and explain the circuit of MOD-12 asynchronous counter using T flip-flop."
      },
      {
        "year": "2025",
        "topicId": "LD_FF",
        "qid": "b",
        "text": "Analyze the sequential circuit whose excitation equations are shown below (assume two D flip-flops, (Q_1) and (Q_0)): [ D_1=Q'_0 ] [ D_0=Q_1 ] 1. Derive the state table and state diagram. 2. Verify by showing the sequence of outputs for clock pulses."
      },
      {
        "year": "2025",
        "topicId": "LD_COUNTER",
        "qid": "c",
        "text": "Design a synchronous counter (using T flip-flop) for a count sequence of: [ 1,3,6,7,1 ]"
      },
      {
        "year": "2025",
        "topicId": "LD_ARITH",
        "qid": "a",
        "text": "Draw the flowchart of Booth's algorithm. Perform the following signed number multiplication operation: [ -6/times4 ]"
      },
      {
        "year": "2025",
        "topicId": "LD_COMB",
        "qid": "b",
        "text": "Explain Amdahl's Law and Little's Law with suitable examples."
      },
      {
        "year": "2025",
        "topicId": "LD_ARCH",
        "qid": "c",
        "text": "Explain the difference between Von-Neumann and Non-Von-Neumann architecture."
      },
      {
        "year": "2025",
        "topicId": "LD_MEMORY",
        "qid": "a",
        "text": "Discuss the various Cache Mapping techniques."
      },
      {
        "year": "2025",
        "topicId": "LD_COMB",
        "qid": "b",
        "text": "Explain Flynn's taxonomy with suitable examples."
      },
      {
        "year": "2025",
        "topicId": "LD_MEMORY",
        "qid": "c",
        "text": "Describe memory hierarchy based on parameters like speed, size, complexity, and cost."
      }
    ],
    "quizzes": [
      {
        "topicId": "LD_BOOL",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Boolean algebra, K-maps and Quine McCluskey",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "LD_BOOL",
        "question": "Which subject includes Boolean algebra, K-maps and Quine McCluskey?",
        "options": [
          "Logic Design and Computer Organization",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Logic Design and Computer Organization."
      },
      {
        "topicId": "LD_COMB",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Adders, subtractors, multiplexers and decoders",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "LD_COMB",
        "question": "Which subject includes Adders, subtractors, multiplexers and decoders?",
        "options": [
          "Logic Design and Computer Organization",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Logic Design and Computer Organization."
      },
      {
        "topicId": "LD_FF",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Flip-flops and sequential circuits",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "LD_FF",
        "question": "Which subject includes Flip-flops and sequential circuits?",
        "options": [
          "Logic Design and Computer Organization",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Logic Design and Computer Organization."
      },
      {
        "topicId": "LD_REG",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Registers and shift registers",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "LD_REG",
        "question": "Which subject includes Registers and shift registers?",
        "options": [
          "Logic Design and Computer Organization",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Logic Design and Computer Organization."
      },
      {
        "topicId": "LD_COUNTER",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Counters and state machines",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "LD_COUNTER",
        "question": "Which subject includes Counters and state machines?",
        "options": [
          "Logic Design and Computer Organization",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Logic Design and Computer Organization."
      },
      {
        "topicId": "LD_ARCH",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Computer architecture, RISC and CISC",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "LD_ARCH",
        "question": "Which subject includes Computer architecture, RISC and CISC?",
        "options": [
          "Logic Design and Computer Organization",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Logic Design and Computer Organization."
      },
      {
        "topicId": "LD_ARITH",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Booth algorithm and floating point arithmetic",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "LD_ARITH",
        "question": "Which subject includes Booth algorithm and floating point arithmetic?",
        "options": [
          "Logic Design and Computer Organization",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Logic Design and Computer Organization."
      },
      {
        "topicId": "LD_MEMORY",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Memory hierarchy and cache mapping",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "LD_MEMORY",
        "question": "Which subject includes Memory hierarchy and cache mapping?",
        "options": [
          "Logic Design and Computer Organization",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Logic Design and Computer Organization."
      },
      {
        "topicId": "LD_IO",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "I/O, interrupts and DMA",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "LD_IO",
        "question": "Which subject includes I/O, interrupts and DMA?",
        "options": [
          "Logic Design and Computer Organization",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Logic Design and Computer Organization."
      }
    ],
    "notes": {
      "LD_COMB": {
        "bullets": [
          "Logic Design & Computer Organization (TCS308)",
          "and FSM / Unit 4 Computer organization and architecture / Unit 5 Memory, I/O and alternative architectures",
          "(fraction). Group 3 bits for octal, 4 bits for hex.",
          "ASCII (7-bit characters), parity bit for error detection.",
          "POS = AND of maxterms where F = 0, written Pi M(...). Mi = mi'. Number of minterms for n variables = 2n.",
          "A + A'B = A + B; then A + B + AB' = A + B (A + AB' = A). Y = A + B.",
          "code order so adjacent cells differ in one variable (also wrap-around edges). A 2-variable map has 4 cells,",
          "1. Fill the map: put 1 in the cell of each minterm (and X for don't cares).",
          "3. Make groups as large as possible and use the fewest groups that cover all 1s. Include don't-care cells (X)",
          "changing variables vanish. A group of 2k cells eliminates k variables.",
          "sense (variable kept as complemented if it is 1).",
          "Groups: m0, m1, m8, m9 (B'C'), m0, m2, m8, m10 (B'D'), m1, m5 (A'C'D). Minimal F = B'C' + B'D' + A'C'D.",
          "Group m3, m7, m11, m15 = CD; group m1, m3, m5(X), m7 = A'D. F = CD + A'D.",
          "An algorithmic method that works for any number of variables and is suitable for computers. It finds all prime",
          "2. Compare each group with the next; if two terms differ in exactly one bit, combine them and replace that bit",
          "4. Build a prime implicant chart (rows = prime implicants, columns = minterms; don't cares are not listed).",
          "5. Cover remaining minterms with the fewest extra prime implicants (Petrick's method if needed). OR the",
          "(-10), 5-7 (1-1), 6-7 (11-). No further combining, so all six are prime implicants. Every minterm is covered by two",
          "1.5 Universal gates and NAND/NOR implementation",
          "POS with only NOR (NOR-NOR) similarly. Procedure: draw AND-OR, replace all gates by NAND (or NOR),",
          "Y = ((AB)' . (CD)')' : two NAND gates for AB and CD, whose outputs feed a third NAND gate.",
          "write the Boolean expressions and truth table. Design: from specification make truth table, simplify (K-map) and",
          "D = A xor B xor Bin; Bout = A'B + A'Bin + B.Bin",
          "= AB and propagate P = A xor B: Ci+1 = Gi + PiCi.",
          "adders). Magnitude comparator: 1-bit: A>B = AB', A=B = A xnor B, A<B = A'B. 4-bit comparator compares",
          "input = i. Any function can be built with a decoder + OR gate. Larger decoders from smaller ones",
          "D3 + D5 + D7. Priority encoder gives the code of the highest-priority active input and a valid bit.",
          "Routes one input to one of 2n outputs chosen by select lines (1:4 has 2 select lines); DEMUX with",
          "inputs. Higher MUX from smaller: 16:1 from five 4:1 MUXes.",
          "Example: Implement F(A,B,C) = Sigma m(1, 2, 6, 7) with 4:1 MUX (select = A, B)",
          "G3 = 1; G2 = 1 xor 0 = 1; G1 = 0 xor 1 = 1; G0 = 1 xor 1 = 0. Gray = 1110.",
          "module half_adder(input a, b, output sum, carry); // dataflow style",
          "half_adder h1(a, b, s1, c1); half_adder h2(s1, cin, sum, c2); or o1(cout, c1, c2);",
          "always @(*) case(s) 2'b00: y = i[0]; 2'b01: y = i[1]; 2'b10: y = i[2]; default: y = i[3];",
          "NAND/NOR realisation; full adder/subtractor design; BCD adder; MUX/DEMUX/decoder/encoder and",
          "Q. Why are NAND and NOR called universal gates?",
          "A. An input combination that never occurs or whose output is irrelevant; it can be treated as 0 or 1 to get a simpler"
        ],
        "links": []
      },
      "LD_BOOL": {
        "bullets": [
          "Syllabus map: Unit 1 Boolean simplification and combinational logic / Unit 2 Sequential logic / Unit 3 Counters",
          "UNIT 1: BOOLEAN SIMPLIFICATION AND COMBINATIONAL LOGIC",
          "2's complement of B (discard end carry). Range of n-bit 2's complement: -2n-1 to 2n-1 - 1.",
          "of minterms where F = 1, written Sigma m(...). Maxterm Mi = OR of all variables (complemented if bit is 1).",
          "By consensus theorem, BC is redundant: Y = AB + A'C.",
          "A K-map is a graphical method to simplify Boolean functions up to 5 or 6 variables. Cells are arranged in Gray",
          "3-variable 8, 4-variable 16, 5-variable 32 (two 4-variable maps stacked).",
          "2. Form groups of 1s in sizes of powers of two (1, 2, 4, 8, 16): rectangular, may wrap around edges and",
          "4. Each group gives a product term: variables that stay constant in the group are kept (complemented if 0);",
          "5. OR all product terms to get the minimal SOP. For POS group the 0s and write sum terms with complemented",
          "Example: 4-variable: F(A,B,C,D) = Sigma m(0, 1, 2, 5, 8, 9, 10)",
          "Example: With don't care: F = Sigma m(1, 3, 7, 11, 15) + d(0, 2, 5)",
          "covering a 1 that no other group covers; it must be in the answer.",
          "1. List all minterms (and don't cares) in binary, grouped by the number of 1s.",
          "3. Repeat on the combined list until no more combining is possible. Terms never ticked are prime implicants.",
          "Select essential prime implicants (the only cover of some minterm).",
          "Group by ones: 0 (000); 1, 2 (001, 010); 5, 6 (101, 110); 7 (111). First pass: 0-1 (00-), 0-2 (0-0), 1-5 (-01), 2-6",
          "PIs: a minimal cover is 00- + -10 + 1-1 = A'B' + BC' + AC (also 0-0 + -01 + 11-). Result: F = A'B' + BC' + AC.",
          "= NAND followed by NAND-as-NOT. OR from NAND: (A'.B')' = A + B.",
          "add inverters on single-input paths if needed.",
          "A combinational circuit has outputs that depend only on present inputs (no memory). Analysis: from circuit",
          "S = A xor B xor Cin; Cout = AB + Cin(A xor B) (= AB + BCin +",
          "ripples from LSB to MSB; delay grows with n. Carry look-ahead computes carries in parallel using generate G",
          "is produced, add 6 (0110) to correct. Correction logic: K = carry + S3.S2 + S3.S1.",
          "Converts n-bit code into one of 2n outputs; each output is a minterm; has Enable. 3-to-8: Yi = 1 for",
          "Inverse of decoder. 8-to-3 encoder: A2 = D4 + D5 + D6 + D7, A1 = D2 + D3 + D6 + D7, A0 = D1 +",
          "Selects one of 2n data inputs using n select lines (data selector). 4:1 MUX: Y = S1'S0' I0 + S1'S0",
          "0/1 to data inputs) or with a 2n-1:1 MUX using the remaining variable (or its complement, 0, 1) on the data",
          "BCD to Excess-3: add 3 (0011). Design with truth table and K-map for each output.",
          "For AB = 00: F = C (m1) so I0 = C; AB = 01: F = C' (m2) so I1 = C'; AB = 10: F = 0 (m4, m5 not in function) so I2 =",
          "Styles: structural (gate instances), dataflow (assign), behavioural (always blocks).",
          "module full_adder(input a, b, cin, output sum, cout); // structural: two half adders + OR",
          "module mux4(input [3:0] i, input [1:0] s, output reg y); // behavioural",
          "Exam tip: Unit 1 exam favourites: K-map minimisation (4 variables with don't cares); Quine-McCluskey;",
          "implementing functions; Gray code conversion; HDL for adder.",
          "A. Any Boolean function can be built using only NAND gates or only NOR gates."
        ],
        "links": []
      },
      "LD_FF": {
        "bullets": [
          "memory elements fed back. Block: combinational logic + storage elements (flip-flops) + feedback.",
          "falling edge). Edge-triggered devices avoid the race-around problem.",
          "active-low (S' R'), invalid at 00. Gated (clocked) SR latch adds an enable. D latch: Q follows D when enable =",
          "The second table is the excitation table: the inputs needed for a desired present-to-next state transition. It is",
          "time clock is high (if clock pulse width > propagation delay). Solutions: master-slave JK flip-flop, edge",
          "falling edge. Preset (PR) and clear (CLR) asynchronous inputs set or reset the FF regardless of clock.",
          "(serial in parallel out, serial-to-parallel conversion), PISO (parallel in serial out), PIPO. Left or right shift. Delay",
          "Example: 4-bit SISO, data 1011 applied serially",
          "Exam tip: Unit 2 exam favourites: SR/JK/D/T characteristic and excitation tables; race-around and master-slave;",
          "Q. What is the difference between a latch and a flip-flop?",
          "A. The output changes to its complement on each clock pulse (J = K = 1 in JK, T = 1 in T flip-flop)."
        ],
        "links": []
      },
      "LD_REG": {
        "bullets": [
          "change on input changes (faster, prone to hazards and races).",
          "= 0 holds, S = R = 1 forbidden/invalid (both outputs 0, unpredictable after release). With NAND gates it is",
          "00 hold, 01 reset (0), 10 set (1), 11 invalid",
          "used in the design of counters and state machines (the first is the characteristic table, used for analysis).",
          "triggering, or making clock pulse shorter than delay.",
          "Method: write the excitation table of the required FF with the available FF's inputs as outputs, minimise with",
          "parallel load. Each stage has a 4:1 MUX before its D flip-flop, with serial inputs for left/right shift and parallel",
          "After 4 clock pulses the register holds 1011 (first bit entered reaches the last stage). Output serial: the bits come",
          "flip-flop conversions; shift register types; universal shift register operation.",
          "A. A latch is level-sensitive; a flip-flop is edge-triggered and changes only at the clock edge."
        ],
        "links": []
      },
      "LD_COUNTER": {
        "bullets": [
          "A counter is a sequential circuit that goes through a prescribed sequence of states when clock pulses are",
          "applied. Modulus (mod-N) = number of states. A mod-N counter needs n flip-flops where 2n >= N, i.e. n =",
          "only first FF gets clock; each FF clocks the next",
          "previous. Down counter: clock from Q'. Up/down with control. Frequency division: each stage divides by 2",
          "(e.g. mod-6: reset when count = 6 = 110; mod-10 decade counter resets at 1010).",
          "state diagram -> state table -> excitation table of chosen FF -> K-map for each FF input -> circuit. For",
          "synchronous binary up counter with JK/T: Ji = Ki = Qi-1 Qi-2 ... Q0 (AND of all lower bits).",
          "Example: Design synchronous mod-4 counter with T FFs",
          "States 00, 01, 10, 11, 00. T0 = 1 (toggles every clock); T1 = Q0 (toggles when Q0 = 1). Two T flip-flops with T0 =",
          "4-bit: 0000, 1000, 1100, 1110, 1111, 0111, 0011, 0001",
          "A finite state machine (FSM) is a sequential circuit with a finite number of states. Two models differ in how",
          "Output depends on present state and present input",
          "Output written inside the state circle (state/output)",
          "Output written on the transition arrow (input/output)",
          "Output changes only at clock edge; glitch-free",
          "Output can change as soon as input changes (async to clock)",
          "Design steps for a synchronous sequential circuit",
          "1. Understand the problem; draw the state diagram (states, transitions, outputs).",
          "2. Make the state table (present state, input, next state, output). Reduce states (state minimisation: merge",
          "3. State assignment: give binary codes to states (n FFs for up to 2n states).",
          "4. Choose flip-flop type; derive FF input equations using the excitation table.",
          "5. Simplify next-state, FF input and output equations with K-maps.",
          "7. Analysis is the reverse: from circuit get FF input equations, state table, state diagram.",
          "Example: Sequence detector for 101 (Mealy, overlapping)",
          "States: S0 (start), S1 (seen 1), S2 (seen 10). S0 -0/0-> S0, S0 -1/0-> S1, S1 -0/0-> S2, S1 -1/0-> S1, S2 -1/1->",
          "S1 (output 1, overlap keeps last 1), S2 -0/0-> S0. Three states need 2 flip-flops.",
          "Exam tip: Unit 3 exam favourites: ripple vs synchronous counter; mod-N counter design; ring and Johnson",
          "counters; Mealy vs Moore; state diagram/table for sequence detector with FF design; counter timing.",
          "Q. How many flip-flops are needed for a mod-12 counter?",
          "Q. What is the frequency of the output of the last stage of a 4-bit ripple counter with 16 kHz clock?"
        ],
        "links": []
      },
      "LD_ARITH": {
        "bullets": [
          "UNIT 4: COMPUTER ORGANIZATION AND ARCHITECTURE",
          "is realised in hardware: control signals, interfaces, memory technology, bus structure. Example: whether a",
          "MDR/MBR (memory data register), ACC (accumulator), flags/status register.",
          "Separate buses; can fetch instruction and data",
          "Stored-program concept (John von Neumann, 1945)",
          "Instructions can operate directly on memory operands",
          "Many addressing modes; pipelining harder; CPI > 1",
          "The overall speedup from improving only a fraction f of the execution time by a factor S is limited by the part that",
          "f = 0.8 sped up 4 times: Speedup = 1 / (0.2 + 0.8/4) = 1 / 0.4 = 2.5. Even with infinite speedup max = 1 / 0.2 = 5.",
          "times the average time an item spends in the system. Example: 10 requests/s with 0.5 s average time gives 5",
          "the same sign gives a result of opposite sign (carry into MSB differs from carry out of MSB). Subtraction: A - B",
          "01 -> add multiplicand then shift, 10 -> subtract multiplicand then shift (arithmetic right shift). Reduces additions",
          "Multiplier 0111 (= 7) has a run of three 1s. Booth sees it as +8 - 1: subtract the multiplicand at the first 1 (pair 10)",
          "zero; E = all 1s with M = 0 gives infinity; E = all 1s with M != 0 is NaN.",
          "12.5 = 1100.1 = 1.1001 x 2^3. Sign 0. Exponent = 3 + 127 = 130 = 10000010. Mantissa =",
          "4.6 Processor operation and instruction cycle",
          "enabled the CPU checks for an interrupt after each instruction (interrupt cycle).",
          "Pipelining overlaps the execution of several instructions by dividing the instruction cycle into stages (e.g. IF, ID,",
          "= n k / (k + n - 1), tends to k for large n. Ideal CPI = 1.",
          "Harvard memories), data (dependency: RAW read-after-write, WAR, WAW; fix by forwarding/bypassing,",
          "5-stage pipeline, 100 instructions: pipelined = 5 + 100 - 1 = 104 cycles; non-pipelined = 500 cycles; speedup =",
          "Control signals stored as microinstructions in control",
          "microinstructions (routine). Control address register, control memory, control data register and a",
          "Exam tip: Unit 4 exam favourites: Von Neumann vs Harvard; RISC vs CISC; CPU time and MIPS numericals;",
          "speedup and hazards; hardwired vs microprogrammed.",
          "A. Situations that prevent the next instruction from executing in its clock cycle: structural, data and control"
        ],
        "links": []
      },
      "LD_ARCH": {
        "bullets": [
          "types, addressing modes, number of registers, I/O mechanism. Computer organization: how the architecture",
          "multiply instruction exists is architecture; whether it is done by a multiply unit or repeated addition is",
          "Single bus; instruction and data fetch cannot overlap (Von",
          "DSPs, microcontrollers (8051, AVR); split L1 I-cache and",
          "Mostly load/store architecture; operations on registers",
          "Few addressing modes; pipelining is easy; CPI about 1",
          "A program has 2 x 10^9 instructions, CPI = 1.5, clock = 2 GHz. Time = 2e9 x 1.5 / 2e9 = 1.5 s. MIPS = 2000 / 1.5",
          "Speedupoverall = 1 / [ (1 - f) + f / S ]. Maximum possible speedup (S -> infinity) = 1 / (1 - f).",
          "Little's law (queueing): L = lambda x W, the average number of items in a system equals the average arrival rate",
          "complement (single zero, simplest hardware; range -2n-1 to +2n-1 - 1; sign extension by replicating the sign",
          "multiplies signed 2's complement numbers by examining pairs of multiplier bits (Q0, Q-1): 00 or 11 -> shift only,",
          "division (no restore; add or subtract in next step depending on sign), n steps for n-bit quotient.",
          "and add 8 x multiplicand after the run (pair 01), so only 2 add/subtract operations are needed instead of 3.",
          "normalise result, (4) round, check overflow/underflow. Multiplication: add exponents (subtract bias), multiply",
          "Binary 1 10000010 01000000...: sign 1 (negative), exponent 130 - 127 = 3, mantissa 1.01 = 1.25. Value = -1.25 x",
          "interprets opcode) -> Execute (ALU operation, memory or I/O access) -> Store/write back. If interrupts are",
          "register, register indirect, indexed, base-register, relative, stack.",
          "EX, MEM, WB), like an assembly line. Each stage works on a different instruction each clock.",
          "processor pipeline (multiple processors working on a data stream in sequence).",
          "stalls/bubbles, compiler scheduling), control (branches; fix by branch prediction, delayed branch, flushing).",
          "Control signals from fixed logic circuits (gates, decoders, state",
          "Slower, but flexible, easy to modify and extend; suits CISC",
          "sequencer (next-address logic) form the microprogrammed control unit.",
          "Amdahl's law numerical; 2's complement and Booth's algorithm; IEEE 754 conversion; instruction cycle; pipelining",
          "A. Instructions and data share one memory and bus, so the CPU cannot fetch both at the same time, limiting"
        ],
        "links": []
      },
      "LD_MEMORY": {
        "bullets": [
          "UNIT 5: MEMORY, I/O AND ALTERNATIVE ARCHITECTURES",
          "storage -> tertiary. Going down: capacity increases, cost per bit decreases, access time increases. The",
          "e.g. loop variables) and spatial locality (items near a recently used one are likely to be used soon, e.g. array",
          "lowest address (x86). Example: 0x12345678 stored at address 100: big-endian 100=12, 101=34, 102=56,",
          "Cache is a small, fast memory (SRAM) between CPU and main memory holding copies of frequently used blocks.",
          "model: EAT = Tc + (1 - H) x Tm, or H x Tc + (1 - H)(Tc + Tm) (same thing). Miss penalty = time to bring block",
          "Block j maps to exactly one line: line = j mod N (N lines).",
          "Cache divided into S sets of k lines; block j goes to set j",
          "Main memory 64 KB (16-bit address), cache 1 KB, block 16 bytes. Offset = 4 bits, lines = 1024/16 = 64, index = 6",
          "only to cache, mark dirty bit, write memory when block is replaced; faster). Write allocate vs no-write allocate",
          "timing, status, error detection. External devices: human-readable (keyboard, display), machine-readable",
          "normal load/store) vs isolated (I/O-mapped) I/O (separate address space, special IN/OUT instructions).",
          "register until device is ready, then transfers each word",
          "interrupt when ready; CPU runs the interrupt service routine",
          "directly without CPU; CPU gives address, count, direction; DMA",
          "count, control. DMA uses signals HOLD/HLDA (bus request/grant).",
          "polls devices by address counter), independent request (each device has its own request and grant line;",
          "Single Instruction stream, Single Data stream: one processor,",
          "Multiple instructions on a single data stream (rare)",
          "Exam tip: Unit 5 exam favourites: memory hierarchy and locality; cache mapping with address split numericals;",
          "Q. Why is DMA better than interrupt-driven I/O for disks?",
          "A. A bit in a write-back cache line indicating the line was modified and must be written to memory when replaced.",
          "A. A combinational circuit that selects one of 2^n inputs using n select lines and passes it to a single output.",
          "Q. How many flip-flops are needed for a mod-60 counter?",
          "Q. Name the three methods of I/O data transfer.",
          "1. Simplify given 4-variable function with don't cares using a K-map and realise with NAND gates.",
          "3. Design a full adder and full subtractor. Design a BCD adder.",
          "5. Explain SR, JK, D, T flip-flops with truth tables, characteristic and excitation tables.",
          "7. Explain shift registers (SISO, SIPO, PISO, PIPO) and the universal shift register.",
          "9. Explain ring and Johnson counters with state sequences.",
          "11. Compare Von Neumann and Harvard architectures, RISC and CISC.",
          "13. Explain Booth's multiplication, and restoring and non-restoring division.",
          "15. Explain the instruction cycle and pipelining with hazards and their solutions.",
          "17. Explain memory hierarchy and locality of reference. Explain cache mapping techniques with numericals.",
          "19. Explain programmed I/O, interrupt-driven I/O and DMA. Explain bus arbitration schemes."
        ],
        "links": []
      },
      "LD_IO": {
        "bullets": [
          "needs refresh, cheaper, used for main memory), ROM (non-volatile; PROM, EPROM, EEPROM, Flash).",
          "hierarchy gives the illusion of a large fast memory.",
          "memory with a-bit address has 2a locations; capacity = 2a x word size (e.g. 16-bit address, 8-bit word = 64 KB).",
          "103=78; little-endian 100=78, 101=56, 102=34, 103=12. Matters for network (big-endian) and file formats.",
          "On each access the CPU checks the cache first: hit (found) or miss (not found, block fetched from main memory,",
          "T_c = 10 ns, T_m = 100 ns, H = 0.9: EAT = 0.9 x 10 + 0.1 x 100 = 9 + 10 = 19 ns (simple model). With",
          "Block can go in any line; all tags compared in parallel",
          "mod S, any line in the set. Address: tag / set / offset",
          "practice), FIFO, LFU (least frequently used), random. Direct mapping needs none.",
          "I/D cache. Types of misses: compulsory (first access), capacity, conflict.",
          "(disk), communication. Addressing I/O: memory-mapped I/O (devices share the memory address space, use",
          "CPU issues command and polls (busy-waits) the status",
          "CPU starts I/O and continues other work; device raises an",
          "DMA controller transfers a block between device and memory",
          "one cycle at a time), transparent (uses bus only when CPU does not). DMA registers: address register, word",
          "passes serially through devices; position decides priority; simple, but fixed priority and slow), polling (controller",
          "5.4 Alternative architectures: Flynn's taxonomy",
          "One instruction operates on multiple data in lockstep",
          "Multiple processors execute different instructions on different",
          "EAT numerical; replacement and write policies; programmed vs interrupt vs DMA; bus arbitration; Flynn's",
          "A. DMA moves a whole block without CPU involvement per word, reducing interrupts and CPU overhead.",
          "A. A product term that cannot be combined with another to eliminate a variable; a largest possible group on a",
          "A. Repeated toggling of a level-triggered JK flip-flop when J = K = 1 and the clock stays high longer than the",
          "A. Moore output depends only on the state; Mealy output depends on state and input.",
          "A. Programmed I/O, interrupt-driven I/O, DMA.",
          "2. Minimise a function using the Quine-McCluskey method.",
          "4. Design a 3-to-8 decoder, 8-to-3 priority encoder, 4:1 MUX; implement a function using MUX.",
          "6. Explain race-around condition and master-slave JK flip-flop. Convert JK to D and T.",
          "8. Design a synchronous mod-N counter using JK/T flip-flops. Compare ripple and synchronous counters.",
          "10. Compare Mealy and Moore models. Design a sequence detector with a state diagram.",
          "12. Explain performance measures; solve CPU time, MIPS and Amdahl's law problems.",
          "14. Explain IEEE 754 formats; convert a given number to single precision.",
          "16. Compare hardwired and microprogrammed control units.",
          "18. Explain cache replacement algorithms and write policies. Compute effective access time.",
          "20. Explain Flynn's classification of computer architectures."
        ],
        "links": []
      }
    }
  },
  "crypto": {
    "key": "crypto",
    "code": "TCS308",
    "name": "Cryptography and Network Security",
    "topics": [
      {
        "id": "CR_INTRO",
        "unit": "Unit 1",
        "name": "Security attacks, services and OSI architecture",
        "baseMinutes": 50,
        "difficulty": 2,
        "freq": 12,
        "marks": 120.0
      },
      {
        "id": "CR_CLASSIC",
        "unit": "Unit 1",
        "name": "Classical ciphers and cryptanalysis",
        "baseMinutes": 60,
        "difficulty": 3,
        "freq": 1,
        "marks": 10.0
      },
      {
        "id": "CR_DES",
        "unit": "Unit 2",
        "name": "DES, S-DES and block ciphers",
        "baseMinutes": 70,
        "difficulty": 4,
        "freq": 5,
        "marks": 50.0
      },
      {
        "id": "CR_STREAM",
        "unit": "Unit 2",
        "name": "Stream ciphers and RC4",
        "baseMinutes": 80,
        "difficulty": 2,
        "freq": 1,
        "marks": 10.0
      },
      {
        "id": "CR_MATH",
        "unit": "Unit 3",
        "name": "Modular arithmetic and Euclidean algorithm",
        "baseMinutes": 50,
        "difficulty": 3,
        "freq": 3,
        "marks": 30.0
      },
      {
        "id": "CR_KEY",
        "unit": "Unit 3",
        "name": "Key distribution and random numbers",
        "baseMinutes": 60,
        "difficulty": 4,
        "freq": 5,
        "marks": 50.0
      },
      {
        "id": "CR_RSA",
        "unit": "Unit 4",
        "name": "RSA and public key cryptography",
        "baseMinutes": 70,
        "difficulty": 2,
        "freq": 4,
        "marks": 40.0
      },
      {
        "id": "CR_MAC",
        "unit": "Unit 4",
        "name": "Message authentication, MAC and signatures",
        "baseMinutes": 80,
        "difficulty": 3,
        "freq": 5,
        "marks": 50.0
      },
      {
        "id": "CR_NETWORK",
        "unit": "Unit 5",
        "name": "Firewalls, IDS, malware and DDoS",
        "baseMinutes": 50,
        "difficulty": 4,
        "freq": 7,
        "marks": 70.0
      },
      {
        "id": "CR_LAW",
        "unit": "Unit 5",
        "name": "Cybercrime and intellectual property",
        "baseMinutes": 60,
        "difficulty": 2,
        "freq": 2,
        "marks": 20.0
      }
    ],
    "prereqs": [
      {
        "from": "CR_INTRO",
        "to": "CR_CLASSIC"
      },
      {
        "from": "CR_CLASSIC",
        "to": "CR_DES"
      },
      {
        "from": "CR_DES",
        "to": "CR_STREAM"
      },
      {
        "from": "CR_STREAM",
        "to": "CR_MATH"
      },
      {
        "from": "CR_MATH",
        "to": "CR_KEY"
      },
      {
        "from": "CR_KEY",
        "to": "CR_RSA"
      },
      {
        "from": "CR_RSA",
        "to": "CR_MAC"
      },
      {
        "from": "CR_MAC",
        "to": "CR_NETWORK"
      },
      {
        "from": "CR_NETWORK",
        "to": "CR_LAW"
      }
    ],
    "pyqs": [
      {
        "year": "2023",
        "topicId": "CR_INTRO",
        "qid": "a",
        "text": "What do you mean by network security model? Explain the key components with suitable block diagram."
      },
      {
        "year": "2023",
        "topicId": "CR_INTRO",
        "qid": "b",
        "text": "Write about the security services and mechanisms used in implementing security in any organization. State the relationship between them."
      },
      {
        "year": "2023",
        "topicId": "CR_INTRO",
        "qid": "c",
        "text": "What do you mean by authentication and authorization? Write and explain how authentication and authorization is important in network and web security."
      },
      {
        "year": "2023",
        "topicId": "CR_DES",
        "qid": "a",
        "text": "With the help of a diagram briefly discuss the functions performed in a single round in SDES. Also draw the block diagram of double and triple DES."
      },
      {
        "year": "2023",
        "topicId": "CR_KEY",
        "qid": "b",
        "text": "State how a stream cipher differs from a block cipher. Explain the importance of pseudorandom generator."
      },
      {
        "year": "2023",
        "topicId": "CR_DES",
        "qid": "c",
        "text": "State how modern block ciphers convert a plain text into cipher text. State how cryptographic strength is increased in a modern block cipher."
      },
      {
        "year": "2023",
        "topicId": "CR_INTRO",
        "qid": "a",
        "text": "Calculate the values of the following (show the steps): (i) (2^{51} /mod 17) (ii) (2^{245} /mod 11)"
      },
      {
        "year": "2023",
        "topicId": "CR_KEY",
        "qid": "b",
        "text": "Explain with suitable diagram the various key distribution techniques available in symmetric key distribution."
      },
      {
        "year": "2023",
        "topicId": "CR_RSA",
        "qid": "c",
        "text": "State the various ways public key is distributed in an asymmetric encryption."
      },
      {
        "year": "2023",
        "topicId": "CR_MAC",
        "qid": "a",
        "text": "Explain with the help of suitable block diagram how confidentiality, authentication and integrity is achieved in message authentication using Message Authentication Code (MAC)."
      },
      {
        "year": "2023",
        "topicId": "CR_MAC",
        "qid": "b",
        "text": "Explain about digital signature with the help of a block diagram. Also state how message authentication and public key cryptography is used in a digital signature."
      },
      {
        "year": "2023",
        "topicId": "CR_RSA",
        "qid": "c",
        "text": "Calculate the value of private and public key pair using RSA algorithm, given that: [ p=1,/quad q=13 ] Also show the encryption and decryption steps using the plain text value of: [ M=5 ] Write all the steps involved."
      },
      {
        "year": "2023",
        "topicId": "CR_NETWORK",
        "qid": "a",
        "text": "What do you mean by firewall? Write about the different types of firewalls available. State how a firewall is different from Intrusion Detection System (IDS)."
      },
      {
        "year": "2023",
        "topicId": "CR_NETWORK",
        "qid": "b",
        "text": "Explain the following terms: (i) Intrusion Detection System (ii) Packet Filter Firewall (iii) Distributed Denial of Service Attack (DDoS) (iv) Intellectual Property"
      },
      {
        "year": "2024",
        "topicId": "CR_NETWORK",
        "qid": "c",
        "text": "What do you mean by malware? Write about five types of malware attacks along with their solutions and precautions. END TERM (ODD) SEMESTER EXAMINATION \u2014 DECEMBER 2024"
      },
      {
        "year": "2024",
        "topicId": "CR_INTRO",
        "qid": "a",
        "text": "What is the OSI security architecture? List and briefly define categories of passive and active security attacks."
      },
      {
        "year": "2024",
        "topicId": "CR_INTRO",
        "qid": "b",
        "text": "State the differences between diffusion and confusion with examples. State its role in increasing the cryptographic strength of an algorithm."
      },
      {
        "year": "2024",
        "topicId": "CR_MAC",
        "qid": "c",
        "text": "Explain with the help of suitable block diagram how Confidentiality, Authentication and Integrity is achieved in Message Authentication using Message Encryption."
      },
      {
        "year": "2024",
        "topicId": "CR_DES",
        "qid": "a",
        "text": "Show the result of 3-bit circular left shift and circular right shift on the word: [ (10011011)_2 ] Explain, with the help of neat and clean diagram, the working of a single round of DES with key generation."
      },
      {
        "year": "2024",
        "topicId": "CR_DES",
        "qid": "b",
        "text": "Calculate the round keys (sub keys) (K_1,K_2) from the key: [ K=101010101 ] using S-DES algorithm. Given: [ P10={3,5,2,7,4,10,1,9,8,6} ] and [ P8={6,3,7,4,8,5,10,9} ]"
      },
      {
        "year": "2024",
        "topicId": "CR_STREAM",
        "qid": "c",
        "text": "Explain the steps of Key scheduling, stream generation, Encryption and Decryption of RC4."
      },
      {
        "year": "2024",
        "topicId": "CR_INTRO",
        "qid": "a",
        "text": "In Symmetric Key Cryptography, how a KDC can create a session key (K_{AB}) between Alice and Bob (Simple protocol). Find the Euler's totient function (/phi(n)) of: [ /phi(21) ] and [ /phi(35) ]"
      },
      {
        "year": "2024",
        "topicId": "CR_MATH",
        "qid": "b",
        "text": "State the facts of Euclidean algorithm. Find the greatest common divisor of: [ (3486,10292) ] and [ (2740,1760) ] using Euclidean algorithm."
      },
      {
        "year": "2024",
        "topicId": "CR_MATH",
        "qid": "c",
        "text": "Find the multiplicative inverse of: [ (3 /mod 5) ] and [ (11 /mod 26) ] using extended Euclidean algorithm."
      },
      {
        "year": "2024",
        "topicId": "CR_RSA",
        "qid": "a",
        "text": "Explain the Key generation, Encryption and Decryption steps of RSA. In RSA, given: [ p=19,/quad q=23,/quad e=3 ] find: [ n,/quad /phi(n),/quad d ]"
      },
      {
        "year": "2024",
        "topicId": "CR_MAC",
        "qid": "b",
        "text": "What is message authentication? Explain the four possible ways in which a hash code is used to provide message authentication."
      },
      {
        "year": "2024",
        "topicId": "CR_INTRO",
        "qid": "c",
        "text": "Explain, with the help of diagram, the working of MD5 with compression function."
      },
      {
        "year": "2024",
        "topicId": "CR_NETWORK",
        "qid": "a",
        "text": "What is the difference between statistical anomaly detection and rule-based intrusion detection? What is a honeypot?"
      },
      {
        "year": "2024",
        "topicId": "CR_NETWORK",
        "qid": "b",
        "text": "What is a DDoS? List four techniques used by firewalls to control access and enforce a security policy."
      },
      {
        "year": "2025",
        "topicId": "CR_LAW",
        "qid": "c",
        "text": "Define three types of intellectual property. Describe a classification of computer crime based on the role that the computer plays in the criminal activity. END TERM (ODD) SEMESTER EXAMINATION \u2014 DECEMBER 2025"
      },
      {
        "year": "2025",
        "topicId": "CR_INTRO",
        "qid": "a",
        "text": "With the help of a neat and clearly labelled diagram, illustrate the OSI Security Architecture and explain the role of each component in detail."
      },
      {
        "year": "2025",
        "topicId": "CR_CLASSIC",
        "qid": "b",
        "text": "Critically examine the strengths and weaknesses of Classical Ciphers against modern cryptanalysis techniques."
      },
      {
        "year": "2025",
        "topicId": "CR_INTRO",
        "qid": "c",
        "text": "Explain the principles of symmetric encryption with suitable block diagram."
      },
      {
        "year": "2025",
        "topicId": "CR_INTRO",
        "qid": "a",
        "text": "Perform frequency analysis on the ciphertext: \"7OI SSP\" and attempt its decryption using a monoalphabetic substitution technique. Show all intermediate steps."
      },
      {
        "year": "2025",
        "topicId": "CR_DES",
        "qid": "b",
        "text": "Encrypt the plaintext: \"1101 0110\" using a single round of Simplified DES (S-DES). Show all steps."
      },
      {
        "year": "2025",
        "topicId": "CR_KEY",
        "qid": "c",
        "text": "Discuss the necessity of Random Numbers and Pseudorandom Numbers in cryptographic systems. Provide suitable real-world applications for each."
      },
      {
        "year": "2025",
        "topicId": "CR_MATH",
        "qid": "a",
        "text": "Explain the importance of mathematical background in cryptography. Discuss with reference to prime numbers and modular arithmetic."
      },
      {
        "year": "2025",
        "topicId": "CR_KEY",
        "qid": "b",
        "text": "A company aims to reduce the frequency of rekeying operations for secure communication channels. Recommend an appropriate key distribution mechanism and justify your selection."
      },
      {
        "year": "2025",
        "topicId": "CR_MAC",
        "qid": "c",
        "text": "Critically examine the role of Message Authentication Codes (MACs) in ensuring integrity."
      },
      {
        "year": "2025",
        "topicId": "CR_RSA",
        "qid": "a",
        "text": "Given (p=11), choose a public exponent (e=7). (i) Compute the public key ((n,e)) and the private exponent (d). (ii) Encrypt the message (M=8). (iii) Decrypt the resulting ciphertext to recover (M)."
      },
      {
        "year": "2025",
        "topicId": "CR_INTRO",
        "qid": "b",
        "text": "Compare Symmetric Encryption, Asymmetric Encryption, and Hybrid Encryption. Recommend an optimal strategy for secure mobile banking communication and justify your choice."
      },
      {
        "year": "2025",
        "topicId": "CR_KEY",
        "qid": "c",
        "text": "Discuss the challenges associated with Key Distribution in large-scale networks and suggest practical solutions to overcome these issues."
      },
      {
        "year": "2025",
        "topicId": "CR_LAW",
        "qid": "a",
        "text": "Discuss in detail the ethical and legal aspects of cybercrime, focusing on Intellectual Property Rights and Privacy."
      },
      {
        "year": "2025",
        "topicId": "CR_NETWORK",
        "qid": "b",
        "text": "A company's network is under frequent intrusion attempts. Design a basic intrusion detection strategy for them."
      },
      {
        "year": "2025",
        "topicId": "CR_NETWORK",
        "qid": "c",
        "text": "Propose a complete Network Plan for an organization facing frequent malware infections. Discuss measures at: 1. OS level 2. Network level 3. Application level 4. User training level"
      }
    ],
    "quizzes": [
      {
        "topicId": "CR_INTRO",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Security attacks, services and OSI architecture",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "CR_INTRO",
        "question": "Which subject includes Security attacks, services and OSI architecture?",
        "options": [
          "Introduction to Cryptography",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Introduction to Cryptography."
      },
      {
        "topicId": "CR_CLASSIC",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Classical ciphers and cryptanalysis",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "CR_CLASSIC",
        "question": "Which subject includes Classical ciphers and cryptanalysis?",
        "options": [
          "Introduction to Cryptography",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Introduction to Cryptography."
      },
      {
        "topicId": "CR_DES",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "DES, S-DES and block ciphers",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "CR_DES",
        "question": "Which subject includes DES, S-DES and block ciphers?",
        "options": [
          "Introduction to Cryptography",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Introduction to Cryptography."
      },
      {
        "topicId": "CR_STREAM",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Stream ciphers and RC4",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "CR_STREAM",
        "question": "Which subject includes Stream ciphers and RC4?",
        "options": [
          "Introduction to Cryptography",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Introduction to Cryptography."
      },
      {
        "topicId": "CR_MATH",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Modular arithmetic and Euclidean algorithm",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "CR_MATH",
        "question": "Which subject includes Modular arithmetic and Euclidean algorithm?",
        "options": [
          "Introduction to Cryptography",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Introduction to Cryptography."
      },
      {
        "topicId": "CR_KEY",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Key distribution and random numbers",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "CR_KEY",
        "question": "Which subject includes Key distribution and random numbers?",
        "options": [
          "Introduction to Cryptography",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Introduction to Cryptography."
      },
      {
        "topicId": "CR_RSA",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "RSA and public key cryptography",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "CR_RSA",
        "question": "Which subject includes RSA and public key cryptography?",
        "options": [
          "Introduction to Cryptography",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Introduction to Cryptography."
      },
      {
        "topicId": "CR_MAC",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Message authentication, MAC and signatures",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "CR_MAC",
        "question": "Which subject includes Message authentication, MAC and signatures?",
        "options": [
          "Introduction to Cryptography",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Introduction to Cryptography."
      },
      {
        "topicId": "CR_NETWORK",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Firewalls, IDS, malware and DDoS",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "CR_NETWORK",
        "question": "Which subject includes Firewalls, IDS, malware and DDoS?",
        "options": [
          "Introduction to Cryptography",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Introduction to Cryptography."
      },
      {
        "topicId": "CR_LAW",
        "question": "Which of the following is covered by this topic?",
        "options": [
          "Cybercrime and intellectual property",
          "Organic synthesis",
          "Fluid mechanics",
          "Thermodynamics"
        ],
        "correct": 0,
        "explanation": "This topic is listed in the supplied semester III notes."
      },
      {
        "topicId": "CR_LAW",
        "question": "Which subject includes Cybercrime and intellectual property?",
        "options": [
          "Introduction to Cryptography",
          "Engineering drawing",
          "Mechanics",
          "Environmental studies"
        ],
        "correct": 0,
        "explanation": "The syllabus places it under Introduction to Cryptography."
      }
    ],
    "notes": {
      "CR_CLASSIC": {
        "bullets": [
          "Syllabus map: Unit 1 Introduction / Unit 2 Modern Cryptography / Unit 3 Symmetric Key Distribution and",
          "information system resources. Confidentiality: only authorised parties read data. Integrity: data and systems",
          "added: authenticity (genuine, verifiable source) and accountability (actions traced to an entity).",
          "ITU-T Recommendation X.800 defines a systematic way to assess security with three aspects:",
          "modify data stream, create false stream or disrupt",
          "masquerade (one entity pretends to be another),",
          "assures the communicating entity is who it claims (peer entity authentication) and that the data",
          "prevents unauthorised use of a resource (who can access, under what conditions)",
          "assures data received is exactly as sent (no modification, insertion, deletion, replay); with or without",
          "resource is accessible and usable on demand by authorised entity",
          "detection, security audit trail, security recovery.",
          "(encryption, adding a code such as a signature) is applied to the message, using secret information (key)",
          "disputes). Four tasks: (1) design the algorithm that is secure, (2) generate secret information (keys), (3) develop",
          "(hacker) may attack through the channel. For network access security (viruses, intruders) a gatekeeper",
          "1.4 Cryptography fundamentals and terminology",
          "secret value used by the algorithm; keyspace = number of possible keys",
          "processes blocks of bits / one bit or byte at a time",
          "Computational security: cost of breaking exceeds the value of the data or time exceeds useful lifetime.",
          "Substitution replaces plaintext letters with other letters/symbols (changes identity, keeps position).",
          "26. With k = 3: A->D, B->E, ... Z->C. Only 25 useful keys, so brute force is trivial. Plaintext HELLO with k = 3",
          "caesar(\"HELLO\", 3) # KHOOR caesar(\"KHOOR\", -3) # HELLO",
          "impossible, but the letter frequency of the language survives (E, T, A, O most common in English), so",
          "1. Build a 5x5 key matrix: write the keyword (without repeated letters), then the rest of alphabet; I and J share",
          "3. For each pair: same row -> replace each letter by the one to its right (wrap around). Same column -> letter",
          "Matrix: M O N A R / C H Y B D / E F G I/J K / L P Q S T / U V W X Z. Plaintext 'ar' -> same row -> 'RM'. 'mu' ->",
          "(A=0...Z=25); key is an invertible m x m matrix K. C = K.P mod 26, P = K-1 C mod 26. Key matrix must have",
          "K = [[3, 3],[2, 5]], plaintext 'HI' = (7, 8). C = (3x7 + 3x8, 2x7 + 5x8) mod 26 = (45, 54) mod 26 = (19, 2) = TC. det K",
          "maps to different ciphertext letters, flattening frequencies. Broken by Kasiski examination (find key length)",
          "key as long as message, used once; unbreakable but key distribution is impractical.",
          "row 1 M E M A T R, row 2 E T E F E -> MEMATRETEFE.",
          "character marking, pin punctures, typewriter correction ribbon; digital: LSB (least significant bit)",
          "hide few bits; useless once discovered unless also encrypted. Advantage: no obvious ciphertext to attract",
          "mechanisms; network security model; Caesar, Playfair, Hill, Vigenere numericals; rail fence; monoalphabetic and",
          "A. It has only 25 possible keys, so an attacker can try them all (brute force) and it preserves letter frequencies.",
          "A. A threat is a potential danger; an attack is the actual attempt to exploit a vulnerability."
        ],
        "links": []
      },
      "CR_INTRO": {
        "bullets": [
          "Mathematics / Unit 4 Public Key Cryptography and Message Authentication / Unit 5 System Security, Legal and",
          "are not altered without authorisation. Availability: systems and data are accessible when needed. Often",
          "countermeasure, asset (hardware, software, data, communication lines).",
          "learn or use information, no change to data or",
          "traffic analysis (patterns, frequency, length of",
          "replay (capture and retransmit), modification of",
          "origin is as claimed (data origin authentication)",
          "protects data from unauthorised disclosure (connection, connectionless, selective field, traffic flow",
          "prevents sender or receiver from denying a transmitted message (digital signatures)",
          "exchange, traffic padding, routing control, notarization. Pervasive - trusted functionality, security label, event",
          "Message from source to destination over an insecure channel (internet). A security-related transformation",
          "shared by sender and receiver, possibly with the help of a trusted third party (to distribute secrets or arbitrate",
          "methods to distribute and share secrets, (4) specify the protocol using the algorithm and secrets. The opponent",
          "function (password login, firewall) and internal controls (monitors) are used.",
          "plaintext -> ciphertext; Decryption: ciphertext -> plaintext",
          "science of designing ciphers; Cryptanalysis: breaking ciphers without knowing key;",
          "key of n bits has 2n keys (56-bit DES: 7.2 x 1016 keys; 128-bit: 3.4 x 1038).",
          "1.5 Substitution and transposition techniques",
          "Transposition rearranges positions of letters (keeps identity). Modern ciphers combine both (product cipher).",
          "out += chr((ord(ch) - 65 + k) % 26 + 65) if ch.isalpha() else ch",
          "Any permutation of the alphabet (26! about 4 x 1026 keys) maps plaintext to cipher letters. Brute force is",
          "frequency analysis breaks it. Defence: hide frequency (polyalphabetic, digraph ciphers).",
          "2. Split plaintext into digraphs (pairs); if a pair has same letters insert X between (e.g. BALLOON -> BA LX LO",
          "below. Rectangle -> each letter replaced by the one in its own row, other letter's column.",
          "same column -> 'CM'. 'hs' -> rectangle -> 'BP'. 'ea' -> rectangle -> 'IM' (or JM).",
          "determinant coprime with 26. Hides single-letter frequencies, but is weak against known-plaintext attack",
          "= 15 - 6 = 9, gcd(9, 26) = 1 so K is invertible mod 26.",
          "then frequency analysis. Autokey variant uses plaintext itself as key stream. One-time pad (Vernam): random",
          "Plaintext ATTACK, key LEMON (repeated L E M O N L): A+L = L, T+E = X, T+M = F, A+O = O, C+N = P, K+L =",
          "Can be repeated (double transposition) for more strength. Keeps the letter frequency of the language, so",
          "substitution in images/audio, hiding in unused space, text with extra spaces. Drawbacks: large overhead to",
          "Exam tip: Unit 1 exam favourites: CIA and OSI architecture; active vs passive attacks; security services and",
          "frequency analysis; steganography vs cryptography.",
          "Q. Difference between a threat and an attack?"
        ],
        "links": []
      },
      "CR_DES": {
        "bullets": [
          "ingredients: plaintext, encryption algorithm, secret key, ciphertext, decryption algorithm. Requirements:",
          "and sender/receiver must obtain the key securely and keep it secret.",
          "substitution) and diffusion (spread plaintext statistics over ciphertext - permutation). Avalanche effect: small",
          "A framework (Horst Feistel, IBM) used by DES and many ciphers. It alternates substitution and permutation",
          "reverses), even if the round function F is not invertible.",
          "2. For each round i = 1..n: Li = Ri-1; Ri = Li-1 xor F(Ri-1, Ki), where Ki is the subkey of round i derived from the",
          "4. Decryption: use the same structure with subkeys applied in reverse order Kn, ..., K1.",
          "more rounds = more security, slower (16 in DES)",
          "parity bits), 16 rounds, Feistel network, 48-bit subkeys per round.",
          "maps 6 bits to 4 bits, giving 32 bits - the only non-linear step), then P-permutation; result XORed with L;",
          "round left-circular shift (1 or 2 positions) -> PC-2 selects 48 bits.",
          "S-boxes S0 and S1 (each 4x4, 4 bits -> 2 bits), P4 permutation, XOR with left half) -> SW (swap halves) -> fK2",
          "double DES is only slightly stronger than single DES. Requires large memory (256 entries).",
          "generator seeded by the key. Decryption is the same XOR. Keystream must never repeat or be reused with",
          "256-byte state array S (a permutation of 0..255). Used in WEP, SSL/TLS (now banned, weak biases).",
          "for i in 0..255: j = (j + S[i] + K_expanded[i]) mod 256; swap(S[i], S[j])",
          "t = (S[i] + S[j]) mod 256; k = S[t] # keystream byte k, ciphertext =",
          "timing); non-deterministic, not reproducible, slow. PRNG (pseudorandom number generator): deterministic",
          "for simulation, not secure for crypto. Cryptographically secure PRNG (CSPRNG) (e.g. based on block",
          "Exam tip: Unit 2 exam favourites: symmetric encryption model; Feistel structure with equations; DES steps (block",
          "A. Decryption uses the same circuit as encryption with reversed subkeys, and F need not be invertible.",
          "A. A small change in plaintext or key causes a large change (about half the bits) in the ciphertext."
        ],
        "links": []
      },
      "CR_STREAM": {
        "bullets": [
          "strong algorithm (opponent knowing algorithm and some ciphertext-plaintext pairs cannot find key or plaintext),",
          "operation (ECB, CBC, CFB, OFB, CTR) for longer messages. Stream cipher: encrypts bit/byte at a time by",
          "change in input/key changes about half of output bits.",
          "over multiple rounds and allows the same algorithm for encryption and decryption (only the subkey order",
          "1. Split the plaintext block into left half L0 and right half R0.",
          "3. After the last round swap halves and join them to form the ciphertext.",
          "larger = more secure but slower (64 -> 128 bits)",
          "greater complexity makes cryptanalysis harder",
          "in F, R is expanded from 32 to 48 bits (E table), XORed with 48-bit subkey, passed through 8 S-boxes (each",
          "halves swap. (4) After round 16 swap L and R. (5) Final permutation (IP-1).",
          "cracker 1998 in days; today in hours). Replaced by Triple DES and AES (128-bit block; 128, 192, 256-bit",
          "and store; compute X = D(K2, C) for all 256 K2 and look for matches. Total work about 257 instead of 2112, so",
          "K3, effective ~80 bits). Backward compatible with DES if K1 = K2 = K3. Slow, so replaced by AES.",
          "the same key (key reuse reveals P1 xor P2). Fast, no padding, suited to real-time data; weak error propagation",
          "for i in 0..255: S[i] = i; K_expanded[i] = key[i mod keylen]",
          "loop: i = (i + 1) mod 256; j = (j + S[i]) mod 256; swap(S[i], S[j])",
          "properties: uniform distribution and independence (unpredictability: forward and backward).",
          "algorithm from a seed (reproducible, fast, e.g. linear congruential generator Xn+1 = (a Xn + c) mod m); fine",
          "cipher, hash, Blum Blum Shub) resists prediction.",
          "64, key 56, 16 rounds, S-box 6 to 4); S-DES key generation; double DES meet-in-the-middle; RC4 KSA/PRGA;",
          "A. Its 56-bit key can be exhausted by brute force with modern hardware."
        ],
        "links": []
      },
      "CR_KEY": {
        "bullets": [
          "UNIT 3: SYMMETRIC KEY DISTRIBUTION AND MATHEMATICS",
          "Two parties need a shared secret key known only to them, changed frequently (to limit data exposed if a key is",
          "delivers it to B. (2) A third party selects and delivers. (3) If they had a previous key, one sends a new key",
          "(permanent key shared between each user/end system and the Key Distribution Center (KDC), used to",
          "Ka containing: the one-time session key Ks, the original request and N1 (to match), and a part encrypted",
          "it. (4) B decrypts, now knows Ks and that it came from KDC. Handshake: B sends nonce N2 encrypted with Ks;",
          "of distribution. Connection-oriented protocols: new session key for each connection; for very long",
          "change key either for each exchange or after a fixed period / number of transactions.",
          "transparent to users. Steps: host sends packet requesting connection; SSM asks the Key Distribution",
          "encrypt/decrypt the data in packets. Advantages: users unaware, key management centralised.",
          "N1; B selects Ks and replies encrypted with the shared master key MKab including Ks, ID, f(N1) and a nonce",
          "encryption). Limiting use reduces damage if exposed. Method: control vector associated with each key (as in",
          "control vector (Km xor CV) so it decrypts correctly only with the matching control vector - stops misuse such",
          "factorisation (fundamental theorem of arithmetic). Coprime (relatively prime): gcd(a, b) = 1. Modular",
          "Based on gcd(a, b) = gcd(b, a mod b), with gcd(a, 0) = a. Repeat division until remainder 0; the last non-zero",
          "26 = 1x16 + 10; 16 = 1x10 + 6; 10 = 1x6 + 4; 6 = 1x4 + 2; 4 = 2x2 + 0. gcd = 2.",
          "the multiplicative inverse of a mod n (a-1). The inverse exists only if gcd(a, n) = 1. Used to compute the",
          "3x26 - 7x11. So 11-1 = -7 = 19 (mod 26). Check 11 x 19 = 209 = 8x26 + 1.",
          "int egcd(int a, int b, int *x, int *y){ // returns g with a*x + b*y = g",
          "long modpow(long b, long e, long m){ long r = 1; b %= m; // fast exponentiation",
          "p - 1; for prime power: phi(pk) = pk - pk-1; if gcd(m, n) = 1: phi(mn) = phi(m) phi(n), so for primes p, q: phi(pq) =",
          "then aphi(n) = 1 (mod n). These prove RSA correctness and allow reducing exponents: ak mod n = ak mod phi(n)",
          "Exam tip: Unit 3 exam favourites: key distribution scenario with KDC and steps; session key lifetime; transparent",
          "Q. Why use a session key instead of the master key for data?",
          "Q. When does the multiplicative inverse of a mod n exist?"
        ],
        "links": []
      },
      "CR_MATH": {
        "bullets": [
          "3.1 Symmetric key distribution using symmetric encryption",
          "compromised). Key distribution is the weakest link. Options for A and B: (1) A selects key and physically",
          "encrypted with the old key. (4) A trusted third party (KDC) delivers keys over encrypted links to A and B.",
          "includes identities of A and B and a nonce N1. (2) KDC responds with a message encrypted with master key",
          "with Kb (Ks and A's identity IDA) for B. (3) A stores Ks and forwards the Kb-encrypted part to B; only B can read",
          "A replies with f(N2) encrypted with Ks to prevent replay and confirm.",
          "connections change periodically. Connectionless protocols (transaction oriented): no connection to close, so",
          "each end system that performs end-to-end encryption and obtains session keys on behalf of hosts,",
          "Center for a session key (authenticated with master keys); KDC distributes to both SSMs; SSMs then",
          "needs n(n-1)/2 master keys for n end systems. A requests a session key from B: A sends request with nonce",
          "N2; A confirms with f(N2). Avoids dependence on (and compromise of) a single KDC but is practical only for",
          "IBM CCA): a bit field specifying uses and restrictions; the key is encrypted with a value derived from the",
          "as using a key-encrypting key as a data key. Tags/key usage flags in the key header offer a simpler",
          "arithmetic: a mod n = remainder; a = b (mod n) if n divides (a - b). Properties: (a + b) mod n = ((a mod n) + (b",
          "1970 = 1x1066 + 904; 1066 = 1x904 + 162; 904 = 5x162 + 94; 162 = 1x94 + 68; 94 = 1x68 + 26; 68 = 2x26 + 16;",
          "Extended Euclidean algorithm and multiplicative inverse",
          "26 = 2x11 + 4; 11 = 2x4 + 3; 4 = 1x3 + 1. Back-substitute: 1 = 4 - 3 = 4 - (11 - 2x4) = 3x4 - 11 = 3(26 - 2x11) - 11 =",
          "int gcd(int a, int b){ return b == 0 ? a : gcd(b, a % b); }",
          "int modinv(int a, int n){ int x, y; int g = egcd(a, n, &x, &y); return g == 1 ? (x % n + n) % n",
          "while(e > 0){ if(e & 1) r = r * b % m; b = b * b % m; e >>= 1; } return r; }",
          "(p - 1)(q - 1). Example phi(21) = phi(3) phi(7) = 2 x 6 = 12; phi(36) = 36 (1 - 1/2)(1 - 1/3) = 12.",
          "p = 13, phi = 12. 100 mod 12 = 4. So 7100 = 74 mod 13. 72 = 49 = 10, 74 = 100 = 9 (mod 13). Answer 9.",
          "and decentralized key control; control vector; Euclid and extended Euclid numericals (inverse mod n); totient",
          "A. Using the master key for data would expose it to cryptanalysis; session keys are short-lived so little data is"
        ],
        "links": []
      },
      "CR_RSA": {
        "bullets": [
          "UNIT 4: PUBLIC KEY CRYPTOGRAPHY AND MESSAGE AUTHENTICATION",
          "solves the key distribution problem (no shared secret needed) and enables digital signatures.",
          "exchange and signatures while symmetric ciphers encrypt bulk data - hybrid approach).",
          "sender encrypts message with the receiver's public key; only receiver's private key decrypts",
          "sender's public key (authentication, integrity, nonrepudiation)",
          "1. Computationally easy for B to generate a key pair (public PUb, private PRb).",
          "3. Easy for receiver B to decrypt: M = D(PRb, C).",
          "5. Infeasible for an opponent, knowing PUb and C, to recover M.",
          "7. Based on a trapdoor one-way function: easy to compute in one direction, infeasible to invert without secret",
          "where plaintext and ciphertext are integers between 0 and n - 1. Security rests on the difficulty of factoring the",
          "1. Select two large primes p and q (p != q), kept secret.",
          "5. Compute d = e-1 mod phi(n) (so e d = 1 mod phi(n)) using extended Euclid.",
          "Encryption: C = Me mod n (requires M < n). Decryption: M = Cd mod n. Why it works: Cd = Med = M1 + k phi(n) =",
          "= 5929 mod 187 = 132; 887 = 884 x 882 x 88 = 132 x 77 x 88 mod 187 = 11. Decrypt: 1123 mod 187 = 88 (M < n",
          "31); 57 = 54 x 52 x 5 = 31 x 25 x 5 mod 33: 31 x 25 = 775 mod 33 = 16; 16 x 5 = 80 mod 33 = 14. Decrypt: 143 =",
          "chosen-ciphertext attacks (use OAEP padding). Plain (textbook) RSA is deterministic, so padding is required in",
          "Message authentication verifies that a received message is authentic: it comes from the claimed source, has",
          "Only sender and receiver share the key; a message that decrypts to meaningful data",
          "code (FCS/checksum) before encryption (internal) or after (external); without",
          "Message stays in clear; an authentication tag is appended. Used when",
          "Tag = MAC = C(K, M): fixed-size block computed from message and secret key K",
          "authentication and integrity (not nonrepudiation). Example: HMAC, CBC-MAC.",
          "symmetric key, or with sender's private key = digital signature, or use a shared",
          "infeasible to find y != x with H(y) = H(x); collision resistant (strong): infeasible to find any x != y with H(x) =",
          "MD5 (Ron Rivest, 1992) takes a message of arbitrary length and produces a 128-bit message digest,",
          "1. Append padding bits: add a single 1 bit then 0 bits so that the length becomes 448 mod 512 (padding is",
          "3. Initialise MD buffer: four 32-bit registers A, B, C, D (128 bits) with fixed constants (A = 01234567, B =",
          "4. Process each 512-bit block (16 words of 32 bits) through the compression function with 4 rounds, each of",
          "or (not X and Z); H = X xor Y xor Z). Each step uses one message word, a constant T[i] from a sine-derived",
          "5. Output: after the last block, the contents of A // B // C // D (128 bits) form the digest.",
          "SHA-256 (256-bit) or SHA-3. SHA-1 has 160-bit output and 80 steps.",
          "numerical with small primes; RSA signature; symmetric vs asymmetric; message authentication approaches",
          "Q. Which key does the sender use to create a digital signature?",
          "Q. Why is a message authentication code not a digital signature?",
          "Q. What is the length of MD5 digest and block?"
        ],
        "links": []
      },
      "CR_MAC": {
        "bullets": [
          "everyone) and a private key (kept secret by the owner). What one key encrypts, only the other can decrypt. It",
          "cryptanalytic work), and it does not make symmetric encryption obsolete (it is far slower, so used for key",
          "Confidentiality, authentication, signatures, key exchange",
          "sender signs (encrypts hash of message) with own private key; anyone verifies with the",
          "two sides cooperate to establish a session key (Diffie-Hellman, or encrypting session key with",
          "2. Easy for sender A to encrypt: C = E(PUb, M).",
          "4. Infeasible for an opponent, knowing PUb, to determine PRb.",
          "6. Either key can be used for encryption with the other for decryption: M = D(PRb, E(PUb, M)) = D(PUb, E(PRb,",
          "Developed by Rivest, Shamir and Adleman (1977). The most widely used public-key algorithm. Block cipher",
          "product of two large primes (n typically 2048 bits or more).",
          "4. Choose e with 1 < e < phi(n) and gcd(e, phi(n)) = 1 (e.g. 3, 17, 65537).",
          "6. Public key PU = {e, n}, private key PR = {d, n} (p, q, phi(n) are discarded or kept secret).",
          "n = 187, phi = 160. d = 23 since 7 x 23 = 161 = 1 mod 160. C = 887 mod 187: 882 = 7744 mod 187 = 77; 884 = 772",
          "n = 33, phi = 20, d = 3 (7 x 3 = 21 = 1 mod 20). C = 57 mod 33: 52 = 25; 54 = 625 mod 33 = 31 (625 - 18 x 33 =",
          "Signer computes S = H(M)d mod n using the private key; verifier computes Se mod n and compares with H(M).",
          "practice. RSA is about 1000 times slower than AES, used for key exchange and signatures.",
          "not been modified (content, sequence, timing). Encryption alone protects confidentiality, not necessarily",
          "must come from sender. To detect modification, add a structure, error-detecting",
          "redundancy any random ciphertext may decrypt to plausible-looking text.",
          "confidentiality is not needed, for broadcast, heavy loads, or to authenticate program",
          "shared by sender and receiver; receiver recomputes and compares. Provides",
          "H(M): fixed-length message digest, no key. Digest must be protected (encrypt with",
          "resistant): given h, infeasible to find x with H(x) = h; second-preimage (weak collision) resistant: given x,",
          "H(y). Birthday paradox: collisions found in about 2m/2 tries for an m-bit hash.",
          "processing the input in 512-bit blocks. Structure (Merkle-Damgard):",
          "2. Append length: add the 64-bit representation of the original length, making total length an exact multiple of",
          "89ABCDEF, C = FEDCBA98, D = 76543210 in hex, little-endian).",
          "16 steps (64 steps total). Each round uses a different nonlinear function: F, G, H, I (e.g. F(X,Y,Z) = (X and Y)",
          "table, and a circular left shift. The output of the block is added (mod 232) to the input chaining value.",
          "collisions have been found (2004), so MD5 is no longer secure for signatures; still used for checksums. Use",
          "Exam tip: Unit 4 exam favourites: public-key structure, applications and requirements; RSA key generation and",
          "(encryption, MAC, hash); hash requirements; MD5 steps and parameters (128-bit digest, 512-bit blocks, 64",
          "A. The sender's private key; the receiver verifies with the sender's public key.",
          "A. A MAC uses a shared secret key, so either party could have produced it; it gives no nonrepudiation.",
          "A. Digest 128 bits; block 512 bits; padded length is 448 mod 512 followed by a 64-bit length field."
        ],
        "links": []
      },
      "CR_NETWORK": {
        "bullets": [
          "UNIT 5: SYSTEM SECURITY, LEGAL AND ETHICAL ASPECTS",
          "masquerader (outsider who penetrates access controls to use a legitimate user's account), misfeasor",
          "an insider), clandestine user (seizes supervisory control and evades auditing and access controls, or",
          "Trojan horses, shoulder surfing, sniffing, phishing), exploit software vulnerabilities (buffer overflow), brute",
          "Selection strategies: user education, computer-generated passwords, reactive checking (cracking own",
          "complexity rules, multi-factor authentication.",
          "collect information to improve prevention. Types: host-based (HIDS) and network-based (NIDS);",
          "of user activity, e.g. login frequency, session time, resource use).",
          "records (collects only the information the IDS needs; format includes subject, action, object, exception",
          "code that attaches to a host program or file, replicates when the host is executed, spreads by",
          "without user action (Morris worm 1988, Code Red, Slammer, WannaCry)",
          "code embedded in legitimate program that triggers on a condition (date, event) to damage",
          "collects user information / shows unwanted ads",
          "hides malware presence with admin-level access",
          "itself into other programs/areas), triggering (activated by a system event to perform its function), execution",
          "stealth (hides from antivirus), polymorphic (mutates its signature/encryption each infection), metamorphic",
          "caution with attachments), detection (determine that infection occurred and locate), identification (identify the",
          "checks, checksums), third activity traps (memory-resident, identify actions), fourth full-featured protection",
          "login. Phases like a virus: dormant, propagation (search for targets, connect, copy), triggering, execution.",
          "network (internet) that filters traffic according to a security policy. Design goals: all traffic in and out must",
          "employee), infected devices/files brought inside (laptops, USB), or attacks through allowed services.",
          "IP, ports, protocol) against rules (ACL); permit or drop;",
          "allows packets belonging to established connections",
          "SMTP); inspects application data; user authenticates",
          "subnet with a DMZ (demilitarised zone) containing public servers (web, mail) between external and internal",
          "cyberstalking, child exploitation material, software piracy, cyber terrorism. Classified by computer as target",
          "harassment). Law in India: Information Technology Act, 2000 (amended 2008); international: Budapest",
          "works - software, text, music, 60 years in India), trademarks (brand names, logos), trade secrets, industrial",
          "websites (cookies), data breaches, profiling, social media. Protection: GDPR (EU), Digital Personal Data",
          "confidentiality, responsible disclosure of vulnerabilities, ethical hacking (with permission) vs malicious",
          "of access. Ethical principle examples: do no harm, respect privacy, honour confidentiality, avoid conflicts of",
          "management and salt; malware types; virus phases, types and countermeasures; worm vs virus; firewall types",
          "A. A virus needs a host file and user action to spread; a worm is standalone and spreads itself over networks.",
          "A. A separate network segment between external and internal firewalls hosting public-facing servers so the",
          "A. Preventing sender or receiver from denying that a message was sent or received; achieved by digital",
          "A. Substitution replaces letters with other letters; transposition rearranges the positions of letters.",
          "Q. What is the key size and block size of DES?",
          "A. An attack on double encryption that matches the encryption of the plaintext with the decryption of the",
          "Q. What are the public and private keys in RSA?",
          "Q. What is a hash function? Give two properties.",
          "A. Dormant, propagation, triggering, execution.",
          "1. Explain the OSI security architecture: attacks, services and mechanisms. Differentiate active and passive",
          "3. Explain Caesar, monoalphabetic, Playfair, Hill and Vigenere ciphers with examples; solve encryption",
          "5. Explain symmetric encryption principles and Feistel cipher structure.",
          "7. What is double DES? Explain the meet-in-the-middle attack and why triple DES is used.",
          "9. Explain a key distribution scenario with a KDC, session key lifetime, transparent and decentralized key",
          "11. Explain public-key cryptosystem structure, applications and requirements.",
          "13. Explain approaches to message authentication (encryption, MAC, hash functions).",
          "15. Describe intruders, intrusion detection techniques and password management.",
          "17. Explain firewall design principles and types of firewalls with limitations."
        ],
        "links": []
      },
      "CR_LAW": {
        "bullets": [
          "An intruder (hacker, cracker) gains unauthorised access to a system or exceeds privileges. Classes:",
          "(legitimate user who accesses data, programs or resources beyond authorisation, or misuses privileges - usually",
          "suppresses audit collection; insider or outsider).",
          "precomputed (rainbow table) attacks and makes identical passwords hash differently; shadow password file.",
          "passwords), proactive checking (reject weak passwords by rules/dictionary/Bloom filter), length and",
          "intruder behaviour differs measurably from legitimate user behaviour. Aims: detect quickly, act as deterrent,",
          "if current behaviour is legitimate. Threshold detection (count of events over time) and profile-based (profile",
          "identification (expert-system approach with rules to identify suspicious behaviour/known attack signatures).",
          "condition, resource usage, timestamp). Honeypots lure attackers to decoy systems.",
          "standalone, self-replicating program that spreads across a network by exploiting vulnerabilities,",
          "useful-looking program with hidden malicious function; does not replicate",
          "secret entry point bypassing normal authentication",
          "encrypts files and demands payment for decryption",
          "compromised computer controlled remotely; used for DDoS and spam",
          "(performs the payload - harmless message or destructive data loss).",
          "(rewrites itself completely), macro virus (embedded in documents using Word/Excel macros - platform",
          "specific virus), removal (remove from infected programs and restore the system; if not possible, delete and",
          "(combined scanning, activity traps, access control).",
          "Defence: patching, firewalls, network monitoring.",
          "pass through it; only authorised traffic (defined by policy) is allowed; the firewall itself must be immune to",
          "examines each IP packet header (source/destination",
          "keeps a connection (state) table (TCP session);",
          "acts as a relay for specific applications (HTTP, FTP,",
          "relays TCP connections without inspecting content;",
          "and unauthorised access, data theft, identity theft, financial fraud, malware distribution, denial-of-service,",
          "(unauthorised access, DoS), computer as storage (illegal files), computer as communication tool (fraud,",
          "Convention on Cybercrime. Challenges: jurisdiction, anonymity, rapid technology change, evidence collection",
          "designs. Issues: software piracy, digital rights management (DRM), plagiarism, open-source licences",
          "Protection Act, 2023 (India), data minimisation, consent, anonymisation, encryption.",
          "hacking, misuse of privileged access, balancing security vs privacy vs freedom, social responsibility, equity",
          "Exam tip: Unit 5 exam favourites: intruder classes; IDS types (statistical anomaly, rule-based); password",
          "with pros and cons, DMZ; cybercrime, IP, privacy and ethics.",
          "A. A random value added to the password before hashing, so identical passwords produce different hashes and",
          "A. Passive attacks only observe data (eavesdropping, traffic analysis); active attacks alter or create data",
          "Q. Differentiate substitution and transposition.",
          "A. C = (P + k) mod 26 and P = (C - k) mod 26.",
          "A. Key 56 bits (64 with parity), block 64 bits.",
          "A. phi(n) is the number of positive integers less than n that are coprime to n; phi(p) = p - 1, phi(pq) = (p-1)(q-1).",
          "A. Public key (e, n); private key (d, n), with e d = 1 mod phi(n).",
          "A. A function giving fixed-size digest of arbitrary input; one-way and collision resistant.",
          "A. A device or software that filters traffic between a trusted and an untrusted network according to security rules.",
          "2. Explain the network security model with a diagram.",
          "4. Explain rail fence and columnar transposition ciphers. What is steganography?",
          "6. Explain DES in detail (initial permutation, rounds, S-boxes, key schedule). What is S-DES?",
          "8. Explain RC4 key scheduling and keystream generation. Compare TRNG and PRNG.",
          "10. Find gcd with the Euclidean algorithm and multiplicative inverse with the extended Euclidean algorithm;",
          "12. Explain the RSA algorithm; encrypt and decrypt for given small primes. How is RSA used for signatures?",
          "14. Explain the MD5 algorithm with steps and a diagram of one block processing.",
          "16. Describe types of malicious software; explain virus phases, types and countermeasures; compare virus and",
          "18. Discuss cybercrime, intellectual property, privacy and ethical issues in computer security."
        ],
        "links": []
      }
    }
  }
};
