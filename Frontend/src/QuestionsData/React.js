const reactQuestions = [
    {
        question: "What is React?",
        options: ["A JavaScript library for building user interfaces", "A programming language", "A database management system", "A server-side framework"],
        answer: "A JavaScript library for building user interfaces"
    },
    {
        question: "What is JSX in React?",
        options: ["A syntax extension for JavaScript", "A JavaScript framework", "A state management library", "A package manager"],
        answer: "A syntax extension for JavaScript"
    },
    {
        question: "What is the virtual DOM in React?",
        options: ["A lightweight representation of the real DOM", "A type of DOM used in virtual reality applications", "A database management system", "A server-side framework"],
        answer: "A lightweight representation of the real DOM"
    },
    {
        question: "What is the purpose of props in React?",
        options: ["To pass data from parent to child components", "To handle component state", "To define component styles", "To interact with the browser DOM"],
        answer: "To pass data from parent to child components"
    },
    {
        question: "What is the function of setState() in React?",
        options: ["To update component state and trigger a re-render", "To define component styles", "To handle user input", "To fetch data from an API"],
        answer: "To update component state and trigger a re-render"
    },
    {
        question: "What are React components?",
        options: ["Independent, reusable pieces of UI", "JavaScript functions or classes that return HTML", "Data structures used to store component state", "Methods used to manipulate the DOM"],
        answer: "Independent, reusable pieces of UI"
    },
    {
        question: "What is the purpose of useEffect() hook in React?",
        options: ["To perform side effects in function components", "To define component styles", "To handle user input", "To fetch data from an API"],
        answer: "To perform side effects in function components"
    },
    {
        question: "What is the role of ReactDOM in React?",
        options: ["To render React components into the DOM", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To render React components into the DOM"
    },
    {
        question: "What is the purpose of keys in React lists?",
        options: ["To identify which items have changed, are added, or are removed", "To define component styles", "To handle user input", "To fetch data from an API"],
        answer: "To identify which items have changed, are added, or are removed"
    },
    {
        question: "What are React hooks?",
        options: ["Functions that let you use state and other React features without writing a class", "Data structures used to store component state", "Methods used to manipulate the DOM", "Independent, reusable pieces of UI"],
        answer: "Functions that let you use state and other React features without writing a class"
    },
    {
        question: "What is the purpose of React Router?",
        options: ["To enable navigation in single-page React applications", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To enable navigation in single-page React applications"
    },
    {
        question: "What is the difference between state and props in React?",
        options: ["State is mutable and controlled by the component itself, while props are immutable and controlled by parent components", "State is immutable and controlled by the component itself, while props are mutable and controlled by parent components", "State and props are the same thing", "State and props are both mutable and controlled by the component itself"],
        answer: "State is mutable and controlled by the component itself, while props are immutable and controlled by parent components"
    },
    {
        question: "What are React fragments?",
        options: ["A syntax error in React", "A way to group multiple elements without adding extra nodes to the DOM", "A type of React component", "A feature of JSX"],
        answer: "A way to group multiple elements without adding extra nodes to the DOM"
    },
    {
        question: "What is the purpose of the useRef() hook in React?",
        options: ["To create a mutable reference to a DOM element", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To create a mutable reference to a DOM element"
    },
    {
        question: "What are controlled components in React?",
        options: ["Components that receive their current value through props and notify changes through callbacks like onChange", "Components that store their own state internally", "Components that render static content", "Components that are not part of the React component tree"],
        answer: "Components that receive their current value through props and notify changes through callbacks like onChange"
    },
    {
        question: "What is the purpose of the useMemo() hook in React?",
        options: ["To memoize expensive calculations and avoid unnecessary re-renders", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To memoize expensive calculations and avoid unnecessary re-renders"
    },
    {
        question: "What are higher-order components (HOCs) in React?",
        options: ["Functions that take a component and return a new component", "Components that render other components", "Components that manage their own state", "Components that handle user input"],
        answer: "Functions that take a component and return a new component"
    },
    {
        question: "What is the purpose of the useCallback() hook in React?",
        options: ["To memoize callbacks and avoid unnecessary re-renders", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To memoize callbacks and avoid unnecessary re-renders"
    },
    {
        question: "What is the context API in React used for?",
        options: ["To pass data through the component tree without having to pass props down manually at every level", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To pass data through the component tree without having to pass props down manually at every level"
    },
    {
        question: "What is the purpose of the useEffect() hook in React?",
        options: ["To perform side effects in function components", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To perform side effects in function components"
    },
    {
        question: "What is the purpose of the useReducer() hook in React?",
        options: ["To manage complex state logic in a more predictable way", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To manage complex state logic in a more predictable way"
    },
    {
        question: "What are portals in React?",
        options: ["A way to render children into a DOM node that exists outside the DOM hierarchy of the parent component", "Components that render other components", "A way to manage component state", "A feature of React Router"],
        answer: "A way to render children into a DOM node that exists outside the DOM hierarchy of the parent component"
    },
    {
        question: "What is React's reconciliation process?",
        options: ["The process of updating the DOM to match the React component tree", "The process of fetching data from an API", "The process of managing component state", "The process of handling user input"],
        answer: "The process of updating the DOM to match the React component tree"
    },
    {
        question: "What are the benefits of using React's functional components?",
        options: ["They are simpler and easier to read/write than class components", "They allow the use of React hooks", "They support the use of JSX", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the purpose of the componentDidCatch() method in React?",
        options: ["To handle errors that occur during rendering", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To handle errors that occur during rendering"
    },
    {
        question: "What is React Fiber?",
        options: ["A reimplementation of the React reconciliation algorithm", "A feature of React Router", "A way to manage component state", "A data structure used in React components"],
        answer: "A reimplementation of the React reconciliation algorithm"
    },
    {
        question: "What is the purpose of the React.StrictMode component?",
        options: ["To help locate and fix potential problems in your application", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To help locate and fix potential problems in your application"
    },
    {
        question: "What is the purpose of the React.memo() function?",
        options: ["To memoize functional components and prevent unnecessary re-renders", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To memoize functional components and prevent unnecessary re-renders"
    },
    {
        question: "What is the purpose of the React.StrictMode component?",
        options: ["To help locate and fix potential problems in your application", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To help locate and fix potential problems in your application"
    },
    {
        question: "What is the purpose of the React.Fragment component?",
        options: ["To group multiple elements without adding extra nodes to the DOM", "To manage component state", "To handle user input", "To fetch data from an API"],
        answer: "To group multiple elements without adding extra nodes to the DOM"
    },
]

export default reactQuestions;