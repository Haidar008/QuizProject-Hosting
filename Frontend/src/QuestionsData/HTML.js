const htmlQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlink Text Marking Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which of the following tags is used to create a hyperlink in HTML?",
        options: ["<a>", "<link>", "<href>", "<hyperlink>"],
        answer: "<a>"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<line-break>"],
        answer: "<br>"
    },
    {
        question: "Which of the following is NOT a valid HTML element?",
        options: ["<div>", "<span>", "<section>", "<paragraph>"],
        answer: "<paragraph>"
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["alt", "title", "src", "href"],
        answer: "alt"
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: ["<a href='http://example.com'>Example</a>", "<link src='http://example.com'>Example</link>", "<href='http://example.com'>Example</href>", "<a src='http://example.com'>Example</a>"],
        answer: "<a href='http://example.com'>Example</a>"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>"
    },
    {
        question: "What does the 'target' attribute do in HTML anchor tags?",
        options: ["Specifies where to open the linked document", "Specifies the URL of the linked document", "Specifies the size of the linked document", "Specifies the color of the linked document"],
        answer: "Specifies where to open the linked document"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "id", "inline"],
        answer: "style"
    },
    {
        question: "What is the correct HTML for adding a background color?",
        options: ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<bgcolor=yellow>", "<bg color='yellow'>"],
        answer: "<body style='background-color:yellow;'>"
    },
    {
        question: "Which HTML tag is used to define a table?",
        options: ["<table>", "<tr>", "<td>", "<th>"],
        answer: "<table>"
    },
    {
        question: "What is the correct HTML for creating a table with two columns?",
        options: ["<table><row><td>Column 1</td><td>Column 2</td></row></table>", "<table><tr><td>Column 1</td></tr><tr><td>Column 2</td></tr></table>", "<table><thead><th>Column 1</th><th>Column 2</th></thead><tbody></tbody></table>", "<table><td>Column 1</td><td>Column 2</td></table>"],
        answer: "<table><tr><td>Column 1</td><td>Column 2</td></tr></table>"
    },
    {
        question: "What is the correct HTML for adding a background color to a table?",
        options: ["<table style='background-color:yellow;'>", "<background>yellow</background>", "<bgcolor=yellow>", "<table bgcolor='yellow'>"],
        answer: "<table style='background-color:yellow;'>"
    },
    {
        question: "Which HTML attribute specifies the width of a table border?",
        options: ["border", "border-width", "border-style", "border-color"],
        answer: "border"
    },
    {
        question: "What does the 'colspan' attribute do in HTML table cells?",
        options: ["Specifies the number of rows a cell should span", "Specifies the number of columns a cell should span", "Specifies the alignment of the cell content", "Specifies the color of the cell border"],
        answer: "Specifies the number of columns a cell should span"
    },
    {
        question: "Which HTML tag is used to define a form?",
        options: ["<form>", "<input>", "<button>", "<label>"],
        answer: "<form>"
    },
    {
        question: "What is the correct HTML for creating a text input field?",
        options: ["<input type='text'>", "<text>", "<input type='textfield'>", "<textfield>"],
        answer: "<input type='text'>"
    },
    {
        question: "Which HTML attribute specifies the name of an input element?",
        options: ["name", "id", "value", "placeholder"],
        answer: "name"
    },
    {
        question: "What is the correct HTML for creating a drop-down list?",
        options: ["<select><option>Option 1</option><option>Option 2</option></select>", "<dropdown><option>Option 1</option><option>Option 2</option></dropdown>", "<list><item>Option 1</item><item>Option 2</item></list>", "<input type='dropdown'>"],
        answer: "<select><option>Option 1</option><option>Option 2</option></select>"
    },
    {
        question: "Which HTML tag is used to define an option in a drop-down list?",
        options: ["<option>", "<select>", "<dropdown>", "<list>"],
        answer: "<option>"
    },
    {
        question: "What does the 'required' attribute do in HTML form elements?",
        options: ["Specifies that the input field must be filled out before submitting the form", "Specifies the input field's default value", "Specifies the input field's label", "Specifies the input field's type"],
        answer: "Specifies that the input field must be filled out before submitting the form"
    },
    {
        question: "Which HTML attribute is used to define the URL of the page the link goes to?",
        options: ["href", "url", "link", "src"],
        answer: "href"
    },
    {
        question: "What is the correct HTML for creating an email link?",
        options: ["<a href='mailto:example@example.com'>Email Me</a>", "<email>example@example.com</email>", "<a email='example@example.com'>Email Me</a>", "<link>example@example.com</link>"],
        answer: "<a href='mailto:example@example.com'>Email Me</a>"
    },
    {
        question: "What is the correct HTML for creating a checkbox?",
        options: ["<input type='check'>", "<checkbox>", "<input type='checkbox'>", "<check>"],
        answer: "<input type='checkbox'>"
    },
    {
        question: "Which HTML attribute is used to define the alternative text for an image, if the image cannot be displayed?",
        options: ["alt", "title", "src", "href"],
        answer: "alt"
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: ["<a href='http://example.com'>Example</a>", "<link src='http://example.com'>Example</link>", "<href='http://example.com'>Example</href>", "<a src='http://example.com'>Example</a>"],
        answer: "<a href='http://example.com'>Example</a>"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>"
    },
    {
        question: "What does the 'target' attribute do in HTML anchor tags?",
        options: ["Specifies where to open the linked document", "Specifies the URL of the linked document", "Specifies the size of the linked document", "Specifies the color of the linked document"],
        answer: "Specifies where to open the linked document"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "id", "inline"],
        answer: "style"
    },
    {
        question: "What is the correct HTML for adding a background color?",
        options: ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<bgcolor=yellow>", "<bg color='yellow'>"],
        answer: "<body style='background-color:yellow;'>"
    },
]

export default htmlQuestions;