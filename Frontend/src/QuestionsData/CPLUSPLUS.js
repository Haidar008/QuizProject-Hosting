const cppQuestions = [
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    cout << x++ << endl;\n    return 0;\n}",
        options: ["5", "6", "Compiler Error", "Undefined Behavior"],
        answer: "5"
    },
    {
        question: "Which of the following is the correct way to declare a pointer in C++?",
        options: ["int* ptr;", "int ptr;", "pointer ptr;", "int& ptr;"],
        answer: "int* ptr;"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3};\n    cout << arr[4] << endl;\n    return 0;\n}",
        options: ["0", "1", "2", "Undefined Behavior"],
        answer: "Undefined Behavior"
    },
    {
        question: "What is the correct way to dynamically allocate memory for an integer variable in C++?",
        options: ["int* ptr = new int;", "int ptr = new int;", "int& ptr = new int;", "int ptr = malloc(int);"],
        answer: "int* ptr = new int;"
    },
    {
        question: "Which of the following is not a valid C++ data type?",
        options: ["int", "float", "double", "string"],
        answer: "string"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    if (x == 10) {\n        int y = 20;\n    }\n    cout << y << endl;\n    return 0;\n}",
        options: ["10", "20", "Compiler Error", "Undefined Behavior"],
        answer: "Compiler Error"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    int& ref = x;\n    ref = 10;\n    cout << x << endl;\n    return 0;\n}",
        options: ["5", "10", "Compiler Error", "Undefined Behavior"],
        answer: "10"
    },
    {
        question: "Which of the following is not a valid C++ keyword?",
        options: ["integer", "namespace", "class", "private"],
        answer: "integer"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5];\n    cout << arr << endl;\n    return 0;\n}",
        options: ["0", "Address of arr[0]", "Compiler Error", "Undefined Behavior"],
        answer: "Address of arr[0]"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    int* ptr = &x;\n    cout << ptr << endl;\n    return 0;\n}",
        options: ["0", "Address of x", "Compiler Error", "Undefined Behavior"],
        answer: "Address of x"
    },
    {
        question: "Which of the following is the correct way to define a constant in C++?",
        options: ["const int x = 10;", "int const x = 10;", "int x = const 10;", "const x = int(10);"],
        answer: "const int x = 10;"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    cout << sizeof(x) << endl;\n    return 0;\n}",
        options: ["4", "5", "Compiler Error", "Undefined Behavior"],
        answer: "4"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Hello, World!\";\n    return 0;\n}",
        options: ["Hello, World!", "Hello, World!\n", "Compiler Error", "Undefined Behavior"],
        answer: "Hello, World!"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    char arr[] = \"Hello\";\n    cout << arr[5] << endl;\n    return 0;\n}",
        options: ["H", "e", "l", "Compiler Error"],
        answer: "Compiler Error"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nvoid fun(int n) {\n    if (n > 0) {\n        fun(n-1);\n        cout << n << \" \";\n    }\n}\nint main() {\n    fun(3);\n    return 0;\n}",
        options: ["1 2 3", "3 2 1", "1 2", "3 2"],
        answer: "1 2 3"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    cout << ++x << endl;\n    return 0;\n}",
        options: ["5", "6", "Compiler Error", "Undefined Behavior"],
        answer: "6"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    cout << x++ << endl;\n    return 0;\n}",
        options: ["5", "6", "Compiler Error", "Undefined Behavior"],
        answer: "5"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    cout << x << endl;\n    return 0;\n}",
        options: ["0", "5", "Compiler Error", "Undefined Behavior"],
        answer: "5"
    },
    {
        question: "Which of the following is not a valid way to initialize a variable in C++?",
        options: ["int x = 5;", "int y(10);", "int z;", "int w{};"],
        answer: "int z;"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    float x = 10.5;\n    cout << x << endl;\n    return 0;\n}",
        options: ["10.5", "10", "Compiler Error", "Undefined Behavior"],
        answer: "10.5"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    float y = x / 3;\n    cout << y << endl;\n    return 0;\n}",
        options: ["3.33333", "3", "3.0", "Compiler Error"],
        answer: "3.0"
    },
    {
        question: "Which of the following is the correct syntax for a for loop in C++?",
        options: ["for (int i = 0; i < 5; i++) {}", "for (int i = 0; i < 5; i++)", "for (int i = 0; i++) {}", "for (int i = 5; i > 0; i--) {}"],
        answer: "for (int i = 0; i < 5; i++) {}"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    int* ptr = &x;\n    cout << *ptr << endl;\n    return 0;\n}",
        options: ["10", "Address of x", "Compiler Error", "Undefined Behavior"],
        answer: "10"
    },
    {
        question: "Which of the following operators is used to access the member of a structure?",
        options: ["->", ".", "*", "&"],
        answer: "."
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    char arr[] = \"Hello\";\n    cout << arr << endl;\n    return 0;\n}",
        options: ["Hello", "Compiler Error", "Undefined Behavior", "Address of arr[0]"],
        answer: "Hello"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    string str = \"Hello\";\n    cout << str[1] << endl;\n    return 0;\n}",
        options: ["e", "l", "H", "Compiler Error"],
        answer: "e"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nvoid fun(int x) {\n    x = 20;\n}\nint main() {\n    int y = 10;\n    fun(y);\n    cout << y << endl;\n    return 0;\n}",
        options: ["10", "20", "Compiler Error", "Undefined Behavior"],
        answer: "10"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    cout << *(arr + 2) << endl;\n    return 0;\n}",
        options: ["3", "2", "Compiler Error", "Undefined Behavior"],
        answer: "3"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    int& ref = x;\n    cout << ref << endl;\n    return 0;\n}",
        options: ["10", "Address of x", "Compiler Error", "Undefined Behavior"],
        answer: "10"
    },
    {
        question: "What is the output of the following code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Hello, \" << \"World!\" << endl;\n    return 0;\n}",
        options: ["Hello, World!", "HelloWorld!", "Compiler Error", "Undefined Behavior"],
        answer: "Hello, World!"
    }
    ];
export default cppQuestions;    