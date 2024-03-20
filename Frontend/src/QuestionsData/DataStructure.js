const dataStructureQuestions = [
    {
      question: "What is a data structure?",
      options: [
        "A way of organizing and storing data",
        "A programming language",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A way of organizing and storing data"
    },
    {
      question: "What is an array?",
      options: [
        "A linear data structure",
        "A type of tree",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A linear data structure"
    },
    {
      question: "What is a linked list?",
      options: [
        "A linear data structure",
        "A type of tree",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A linear data structure"
    },
    {
      question: "What is a stack?",
      options: [
        "A data structure that follows Last In, First Out (LIFO) principle",
        "A type of tree",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A data structure that follows Last In, First Out (LIFO) principle"
    },
    {
      question: "What is a queue?",
      options: [
        "A data structure that follows First In, First Out (FIFO) principle",
        "A type of tree",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A data structure that follows First In, First Out (FIFO) principle"
    },
    {
      question: "What is a tree?",
      options: [
        "A hierarchical data structure",
        "A linear data structure",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A hierarchical data structure"
    },
    {
      question: "What is a binary tree?",
      options: [
        "A tree in which each node can have at most two children",
        "A type of tree",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A tree in which each node can have at most two children"
    },
    {
      question: "What is a binary search tree (BST)?",
      options: [
        "A binary tree with the property that the left subtree of a node contains only nodes with keys less than the node's key",
        "A type of tree",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A binary tree with the property that the left subtree of a node contains only nodes with keys less than the node's key"
    },
    {
      question: "What is a heap?",
      options: [
        "A specialized tree-based data structure",
        "A linear data structure",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A specialized tree-based data structure"
    },
    {
      question: "What is a hash table?",
      options: [
        "A data structure that stores key-value pairs",
        "A type of tree",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A data structure that stores key-value pairs"
    },
    {
      question: "What is a graph?",
      options: [
        "A data structure that consists of a set of vertices and a set of edges",
        "A linear data structure",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A data structure that consists of a set of vertices and a set of edges"
    },
    {
      question: "What is a graph traversal?",
      options: [
        "A process of visiting all the vertices of a graph",
        "A type of tree traversal",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A process of visiting all the vertices of a graph"
    },
    {
      question: "What is depth-first search (DFS)?",
      options: [
        "A graph traversal algorithm",
        "A type of tree traversal",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A graph traversal algorithm"
    },
    {
      question: "What is breadth-first search (BFS)?",
      options: [
        "A graph traversal algorithm",
        "A type of tree traversal",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A graph traversal algorithm"
    },
    {
      question: "What is dynamic programming?",
      options: [
        "A method for solving complex problems by breaking them down into simpler subproblems",
        "A type of data structure",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A method for solving complex problems by breaking them down into simpler subproblems"
    },
    {
      question: "What is a trie?",
      options: [
        "A tree data structure used for storing strings",
        "A type of graph",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A tree data structure used for storing strings"
    },
    {
      question: "What is a suffix array?",
      options: [
        "A data structure that stores all the suffixes of a string in sorted order",
        "A type of tree",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A data structure that stores all the suffixes of a string in sorted order"
    },
    {
      question: "What is an AVL tree?",
      options: [
        "A self-balancing binary search tree",
        "A type of tree",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A self-balancing binary search tree"
    },
    {
      question: "What is a B-tree?",
      options: [
        "A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.",
        "A type of tree",
        "A sorting algorithm",
        "A database management system"
      ],
      answer: "A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time."
    },
    {
        question: "What is a red-black tree?",
        options: [
          "A type of self-balancing binary search tree",
          "A type of heap",
          "A sorting algorithm",
          "A database management system"
        ],
        answer: "A type of self-balancing binary search tree"
      },
      {
        question: "What is a trie?",
        options: [
          "A tree data structure used for storing strings",
          "A type of graph",
          "A sorting algorithm",
          "A database management system"
        ],
        answer: "A tree data structure used for storing strings"
      },
      {
        question: "What is a suffix array?",
        options: [
          "A data structure that stores all the suffixes of a string in sorted order",
          "A type of tree",
          "A sorting algorithm",
          "A database management system"
        ],
        answer: "A data structure that stores all the suffixes of a string in sorted order"
      },
      {
        question: "What is an AVL tree?",
        options: [
          "A self-balancing binary search tree",
          "A type of tree",
          "A sorting algorithm",
          "A database management system"
        ],
        answer: "A self-balancing binary search tree"
      },
      {
        question: "What is a B-tree?",
        options: [
          "A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.",
          "A type of tree",
          "A sorting algorithm",
          "A database management system"
        ],
        answer: "A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time."
      },
      {
        question: "What is a red-black tree?",
        options: [
          "A type of self-balancing binary search tree",
          "A type of heap",
          "A sorting algorithm",
          "A database management system"
        ],
        answer: "A type of self-balancing binary search tree"
      },
      {
        question: "What is a skip list?",
        options: [
          "A probabilistic data structure that allows fast search, insertion, and deletion operations.",
          "A type of tree",
          "A sorting algorithm",
          "A database management system"
        ],
        answer: "A probabilistic data structure that allows fast search, insertion, and deletion operations."
      },
      {
        question: "What is a hash map?",
        options: [
          "A data structure that implements associative arrays or mappings of keys to values.",
          "A type of tree",
          "A sorting algorithm",
          "A database management system"
        ],
        answer: "A data structure that implements associative arrays or mappings of keys to values."
      },
      {
        question: "What is a priority queue?",
        options: [
          "An abstract data type similar to a regular queue or stack data structure in which each element additionally has a 'priority' associated with it.",
          "A type of graph",
          "A sorting algorithm",
          "A database management system"
        ],
        answer: "An abstract data type similar to a regular queue or stack data structure in which each element additionally has a 'priority' associated with it."
      },
      {
        question: "What is a trie?",
        options: [
          "A tree data structure used for storing strings",
          "A type of graph",
          "A sorting algorithm",
          "A database management system"
        ],
        answer: "A tree data structure used for storing strings"
      }
]

export default dataStructureQuestions;