const pythonQuestions = [
    {
        "question": "What is the output of '2' + '2' in Python?",
        "options": ["'22'", "'4'", "TypeError", "'2' + '2'"],
        "answer": "'22'"
    },
    {
        "question": "What is the keyword used for creating a function in Python?",
        "options": ["def", "function", "define", "fun"],
        "answer": "def"
    },
    {
        "question": "Which of the following data types is mutable in Python?",
        "options": ["int", "float", "str", "list"],
        "answer": "list"
    },
    {
        "question": "What does the 'append' method do in Python lists?",
        "options": ["Adds an element to the end of the list", "Removes the last element from the list", "Sorts the list", "Reverses the list"],
        "answer": "Adds an element to the end of the list"
    },
    {
        "question": "What is the output of '5' == 5 in Python?",
        "options": ["True", "False", "None", "TypeError"],
        "answer": "True"
    },
    {
        "question": "What does the 'strip' method do in Python strings?",
        "options": ["Removes leading and trailing whitespace", "Splits the string into a list", "Joins the elements of a list into a string", "Converts the string to uppercase"],
        "answer": "Removes leading and trailing whitespace"
    },
    {
        "question": "What is the keyword used to define a class in Python?",
        "options": ["class", "def", "function", "struct"],
        "answer": "class"
    },
    {
        "question": "Which of the following is NOT a valid variable name in Python?",
        "options": ["my_var", "1var", "_var", "var_1"],
        "answer": "1var"
    },
    {
        "question": "What does the 'pop' method do in Python lists?",
        "options": ["Removes and returns the last element from the list", "Adds an element to the end of the list", "Sorts the list", "Reverses the list"],
        "answer": "Removes and returns the last element from the list"
    },
    {
        "question": "What is the output of 'hello'.upper() in Python?",
        "options": ["'HELLO'", "'hello'", "'Hello'", "'hElLo'"],
        "answer": "'HELLO'"
    },
    {
        "question": "What is the purpose of the 'range' function in Python?",
        "options": ["Generates a sequence of numbers", "Returns the length of a sequence", "Reverses a sequence", "Sorts a sequence"],
        "answer": "Generates a sequence of numbers"
    },
    {
        "question": "What is the output of 'hello'.split() in Python?",
        "options": ["['hello']", "['h', 'e', 'l', 'l', 'o']", "'hello'", "[]"],
        "answer": "['hello']"
    },
    {
        "question": "What does the 'join' method do in Python strings?",
        "options": ["Concatenates the elements of an iterable with the string as a separator", "Splits the string into a list", "Removes leading and trailing whitespace", "Converts the string to uppercase"],
        "answer": "Concatenates the elements of an iterable with the string as a separator"
    },
    {
        "question": "What is the purpose of the 'try' and 'except' blocks in Python?",
        "options": ["To handle exceptions", "To define a function", "To define a class", "To iterate over a sequence"],
        "answer": "To handle exceptions"
    },
    {
        "question": "Which of the following is NOT a valid Python data type?",
        "options": ["int", "string", "array", "tuple"],
        "answer": "array"
    },
    {
        "question": "What is the output of len([1, 2, 3]) in Python?",
        "options": ["1", "2", "3", "4"],
        "answer": "3"
    },
    {
        "question": "What does the 'replace' method do in Python strings?",
        "options": ["Replaces occurrences of a specified substring with another substring", "Splits the string into a list", "Joins the elements of a list into a string", "Converts the string to uppercase"],
        "answer": "Replaces occurrences of a specified substring with another substring"
    },
    {
        "question": "What is the purpose of the 'import' statement in Python?",
        "options": ["To import modules or packages", "To define a function", "To define a class", "To iterate over a sequence"],
        "answer": "To import modules or packages"
    },
    {
        "question": "What is the output of 'hello'[::-1] in Python?",
        "options": ["'hello'", "'olleh'", "'h'", "'o'"],
        "answer": "'olleh'"
    },
    {
        "question": "What is the purpose of the 'break' statement in Python loops?",
        "options": ["To exit the loop prematurely", "To skip the current iteration of the loop", "To continue to the next iteration of the loop", "To define a function"],
        "answer": "To exit the loop prematurely"
    },
    {
        "question": "What is the purpose of the 'is' keyword in Python?",
        "options": ["To check if two objects are the same object", "To compare the values of two objects", "To define a function", "To check if an object is of a certain type"],
        "answer": "To check if two objects are the same object"
    },
    {
        "question": "What is the output of 'hello' + 'world' in Python?",
        "options": ["'helloworld'", "'hello world'", "'hello'", "'world'"],
        "answer": "'helloworld'"
    },
    {
        "question": "What is the purpose of the 'continue' statement in Python loops?",
        "options": ["To skip the current iteration of the loop and continue to the next iteration", "To exit the loop prematurely", "To define a function", "To continue to the next iteration of the loop"],
        "answer": "To skip the current iteration of the loop and continue to the next iteration"
    },
    {
        "question": "What does the 'max' function do in Python?",
        "options": ["Returns the largest item in an iterable", "Returns the smallest item in an iterable", "Sorts the items in an iterable", "Reverses the items in an iterable"],
        "answer": "Returns the largest item in an iterable"
    },
    {
        "question": "What is the purpose of the 'pass' statement in Python?",
        "options": ["Does nothing and acts as a placeholder", "To exit the loop prematurely", "To skip the current iteration of the loop", "To define a function"],
        "answer": "Does nothing and acts as a placeholder"
    },
    {
        "question": "What does the 'round' function do in Python?",
        "options": ["Rounds a number to the nearest integer", "Returns the length of a sequence", "Reverses a sequence", "Sorts a sequence"],
        "answer": "Rounds a number to the nearest integer"
    },
    {
        "question": "What is the purpose of the 'with' statement in Python?",
        "options": ["To ensure that resources are properly released", "To define a function", "To exit the loop prematurely", "To skip the current iteration of the loop"],
        "answer": "To ensure that resources are properly released"
    },
    {
        "question": "What is the output of '5' + 5 in Python?",
        "options": ["'10'", "10", "TypeError", "'5' + 5"],
        "answer": "TypeError"
    },
    {
        "question": "What is the purpose of the 'sorted' function in Python?",
        "options": ["Returns a sorted list of the specified iterable", "Returns the largest item in an iterable", "Returns the smallest item in an iterable", "Reverses the items in an iterable"],
        "answer": "Returns a sorted list of the specified iterable"
    },
    {
        "question": "What does the 'range' function do in Python?",
        "options": ["Generates a sequence of numbers", "Returns the length of a sequence", "Reverses a sequence", "Sorts a sequence"],
        "answer": "Generates a sequence of numbers"
    },
]
export default pythonQuestions;