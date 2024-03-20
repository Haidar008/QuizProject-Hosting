const javascriptQuestions = [
    {
      question: "What does 'DOM' stand for in JavaScript?",
      options: [
        "Document Object Model",
        "Data Object Model",
        "Document Oriented Model",
        "Dynamic Object Manipulation"
      ],
      answer: "Document Object Model"
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: [
        "var",
        "let",
        "const",
        "variable"
      ],
      answer: "var"
    },
    {
      question: "What is the output of typeof null in JavaScript?",
      options: [
        "'null'",
        "'object'",
        "'undefined'",
        "'string'"
      ],
      answer: "'object'"
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "The current function",
        "The parent function",
        "The global object",
        "The calling object"
      ],
      answer: "The calling object"
    },
    {
      question: "Which function is used to add an element to the end of an array in JavaScript?",
      options: [
        "push()",
        "add()",
        "append()",
        "insert()"
      ],
      answer: "push()"
    },
    {
      question: "What is the output of 5 + '5' in JavaScript?",
      options: [
        "'55'",
        "10",
        "'10'",
        "NaN"
      ],
      answer: "'55'"
    },
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function inside another function that has access to its parent function's variables",
        "A way to close the browser window",
        "A method for hiding sensitive information",
        "A way to stop code execution"
      ],
      answer: "A function inside another function that has access to its parent function's variables"
    },
    {
      question: "What is the purpose of the 'use strict' directive in JavaScript?",
      options: [
        "To enforce stricter parsing and error handling in JavaScript",
        "To enable experimental JavaScript features",
        "To disable JavaScript strict mode",
        "To include external JavaScript libraries"
      ],
      answer: "To enforce stricter parsing and error handling in JavaScript"
    },
    {
      question: "What is the purpose of the '=== operator in JavaScript?",
      options: [
        "To compare the values and types of two variables",
        "To assign a value to a variable",
        "To check if a variable is undefined",
        "To check if a variable is null"
      ],
      answer: "To compare the values and types of two variables"
    },
    {
      question: "What is a callback function in JavaScript?",
      options: [
        "A function passed as an argument to another function, which is then invoked inside the outer function",
        "A function that is called at the end of a program",
        "A function that is executed immediately when it is defined",
        "A function that is used to handle errors"
      ],
      answer: "A function passed as an argument to another function, which is then invoked inside the outer function"
    },
    {
        question: "What is the output of typeof NaN in JavaScript?",
        options: [
          "'number'",
          "'NaN'",
          "'undefined'",
          "'string'"
        ],
        answer: "'number'"
      },
      {
        question: "What does the 'map' method do in JavaScript arrays?",
        options: [
          "Iterates over each element in the array and applies a callback function to create a new array",
          "Returns the first element in the array",
          "Checks if any element in the array satisfies a condition",
          "Sorts the elements of the array in ascending order"
        ],
        answer: "Iterates over each element in the array and applies a callback function to create a new array"
      },
      {
        question: "What is the purpose of the 'async' and 'await' keywords in JavaScript?",
        options: [
          "To handle asynchronous code and make it appear synchronous",
          "To define asynchronous functions",
          "To execute code synchronously",
          "To handle errors in asynchronous code"
        ],
        answer: "To handle asynchronous code and make it appear synchronous"
      },
      {
        question: "What is the output of typeof [1, 2, 3] in JavaScript?",
        options: [
          "'array'",
          "'object'",
          "'array'",
          "'list'"
        ],
        answer: "'object'"
      },
      {
        question: "What is the purpose of the 'forEach' method in JavaScript arrays?",
        options: [
          "Iterates over each element in the array and applies a callback function",
          "Returns the first element in the array",
          "Checks if any element in the array satisfies a condition",
          "Sorts the elements of the array in ascending order"
        ],
        answer: "Iterates over each element in the array and applies a callback function"
      },
      {
        question: "What is the purpose of the 'reduce' method in JavaScript arrays?",
        options: [
          "Reduces an array to a single value by applying a function to each element",
          "Returns the first element in the array",
          "Checks if any element in the array satisfies a condition",
          "Sorts the elements of the array in ascending order"
        ],
        answer: "Reduces an array to a single value by applying a function to each element"
      },
      {
        question: "What is the output of 5 == '5' in JavaScript?",
        options: [
          "true",
          "false",
          "undefined",
          "NaN"
        ],
        answer: "true"
      },
      {
        question: "What is the purpose of the 'splice' method in JavaScript arrays?",
        options: [
          "To add or remove elements from an array",
          "To iterate over each element in the array and apply a callback function",
          "To sort the elements of the array in ascending order",
          "To concatenate two arrays"
        ],
        answer: "To add or remove elements from an array"
      },
      {
        question: "What is the output of typeof undefined in JavaScript?",
        options: [
          "'undefined'",
          "'null'",
          "'string'",
          "'object'"
        ],
        answer: "'undefined'"
      },
      {
        question: "What does the 'startsWith' method do in JavaScript strings?",
        options: [
          "Checks if a string starts with a specified substring",
          "Checks if a string ends with a specified substring",
          "Returns the length of the string",
          "Converts the string to uppercase"
        ],
        answer: "Checks if a string starts with a specified substring"
      },
      {
        question: "What is the purpose of the 'filter' method in JavaScript arrays?",
        options: [
          "Creates a new array with elements that pass a test",
          "Returns the first element in the array",
          "Checks if any element in the array satisfies a condition",
          "Sorts the elements of the array in ascending order"
        ],
        answer: "Creates a new array with elements that pass a test"
      },
      {
        question: "What does the 'split' method do in JavaScript strings?",
        options: [
          "Splits a string into an array of substrings based on a specified separator",
          "Joins an array of strings into a single string",
          "Replaces occurrences of a specified substring with another substring",
          "Trims leading and trailing whitespace from a string"
        ],
        answer: "Splits a string into an array of substrings based on a specified separator"
      },
      {
        question: "What does the 'isNaN' function do in JavaScript?",
        options: [
          "Checks if a value is not a number",
          "Converts a value to a number",
          "Checks if a value is a number",
          "Returns the square root of a number"
        ],
        answer: "Checks if a value is not a number"
      },
      {
        question: "What is the purpose of the 'parseInt' function in JavaScript?",
        options: [
          "Parses a string and returns an integer",
          "Returns the first element in the array",
          "Checks if any element in the array satisfies a condition",
          "Sorts the elements of the array in ascending order"
        ],
        answer: "Parses a string and returns an integer"
      },
      {
        question: "What does the 'includes' method do in JavaScript arrays?",
        options: [
          "Checks if an array includes a certain element",
          "Returns the first element in the array",
          "Checks if any element in the array satisfies a condition",
          "Sorts the elements of the array in ascending order"
        ],
        answer: "Checks if an array includes a certain element"
      },
      {
        question: "What is the purpose of the 'toFixed' method in JavaScript numbers?",
        options: [
          "Formats a number with a fixed number of decimal places",
          "Returns the first element in the array",
          "Checks if any element in the array satisfies a condition",
          "Sorts the elements of the array in ascending order"
        ],
        answer: "Formats a number with a fixed number of decimal places"
      },
      {
        question: "What is the output of typeof function() {} in JavaScript?",
        options: [
          "'function'",
          "'object'",
          "'undefined'",
          "'string'"
        ],
        answer: "'function'"
      },
      {
        question: "What is the purpose of the 'Object.keys()' method in JavaScript?",
        options: [
          "Returns an array of a given object's own enumerable property names",
          "Returns the first element in the array",
          "Checks if any element in the array satisfies a condition",
          "Sorts the elements of the array in ascending order"
        ],
        answer: "Returns an array of a given object's own enumerable property names"
      },
      {
        question: "What is the purpose of the 'Math.random()' function in JavaScript?",
        options: [
          "Returns a random floating-point number between 0 and 1",
          "Returns the first element in the array",
          "Checks if any element in the array satisfies a condition",
          "Sorts the elements of the array in ascending order"
        ],
        answer: "Returns a random floating-point number between 0 and 1"
      },
      {
        question: "What is the purpose of the 'Array.isArray()' method in JavaScript?",
        options: [
          "Checks if a value is an array",
          "Returns the first element in the array",
          "Checks if any element in the array satisfies a condition",
          "Sorts the elements of the array in ascending order"
        ],
        answer: "Checks if a value is an array"
      },
]

export default javascriptQuestions;