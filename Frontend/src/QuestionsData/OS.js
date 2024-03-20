const operatingSystemsQuestions = [
    {
        question: "What is the purpose of an operating system?",
        options: ["To provide a user interface", "To manage hardware resources", "To create software applications", "To store data"],
        answer: "To manage hardware resources"
    },
    {
        question: "What is virtual memory?",
        options: ["A memory management technique", "A type of RAM", "A file storage system", "A network protocol"],
        answer: "A memory management technique"
    },
    {
        question: "What is a process in the context of operating systems?",
        options: ["A computer program in execution", "A piece of hardware", "An input/output device", "A type of file system"],
        answer: "A computer program in execution"
    },
    {
        question: "What is a kernel?",
        options: ["The central part of an operating system", "A type of computer processor", "A software application", "A hardware component"],
        answer: "The central part of an operating system"
    },
    {
        question: "What is multitasking?",
        options: ["The ability of an operating system to run multiple programs concurrently", "A type of hardware component", "A programming language", "A network protocol"],
        answer: "The ability of an operating system to run multiple programs concurrently"
    },
    {
        question: "What is a file system?",
        options: ["A method for organizing and storing files on a storage device", "An operating system kernel", "A type of computer memory", "A networking protocol"],
        answer: "A method for organizing and storing files on a storage device"
    },
    {
        question: "What is a deadlock?",
        options: ["A situation where two or more processes are unable to proceed due to each waiting for the other", "A type of computer virus", "A hardware failure", "A network outage"],
        answer: "A situation where two or more processes are unable to proceed due to each waiting for the other"
    },
    {
        question: "What is a page fault?",
        options: ["A situation where a requested page is not in memory and must be retrieved from disk", "A hardware failure", "A type of computer virus", "A network problem"],
        answer: "A situation where a requested page is not in memory and must be retrieved from disk"
    },
    {
        question: "What is a shell?",
        options: ["A command line interface to the operating system", "A type of computer monitor", "A hardware component", "A software application"],
        answer: "A command line interface to the operating system"
    },
    {
        question: "What is a semaphore?",
        options: ["A synchronization primitive used in concurrent programming", "A type of computer processor", "A hardware component", "A network protocol"],
        answer: "A synchronization primitive used in concurrent programming"
    },
    {
        question: "What is a context switch?",
        options: ["The process of saving and restoring the state of a process or thread", "A hardware failure", "A type of computer virus", "A networking protocol"],
        answer: "The process of saving and restoring the state of a process or thread"
    },
    {
        question: "What is a device driver?",
        options: ["A software component that allows the operating system to communicate with hardware devices", "A type of computer processor", "A hardware component", "A networking protocol"],
        answer: "A software component that allows the operating system to communicate with hardware devices"
    },
    {
        question: "What is a deadlock?",
        options: ["A situation where two or more processes are unable to proceed due to each waiting for the other", "A type of computer virus", "A hardware failure", "A network outage"],
        answer: "A situation where two or more processes are unable to proceed due to each waiting for the other"
    },
    {
        question: "What is a file descriptor?",
        options: ["An abstract reference to an open file", "A type of computer memory", "A networking protocol", "A hardware component"],
        answer: "An abstract reference to an open file"
    },
    {
        question: "What is a thread?",
        options: ["A basic unit of CPU utilization", "A type of computer monitor", "A hardware component", "A software application"],
        answer: "A basic unit of CPU utilization"
    },
    {
        question: "What is a RAID?",
        options: ["A data storage technology that combines multiple disks into a single logical unit", "A networking protocol", "A type of computer processor", "A hardware component"],
        answer: "A data storage technology that combines multiple disks into a single logical unit"
    },
    {
        question: "What is paging?",
        options: ["A memory management scheme that allows the operating system to move pages of memory between RAM and disk", "A type of computer virus", "A hardware component", "A networking protocol"],
        answer: "A memory management scheme that allows the operating system to move pages of memory between RAM and disk"
    },
    {
        question: "What is a system call?",
        options: ["A request made by a program to the operating system for a service", "A type of computer processor", "A hardware component", "A networking protocol"],
        answer: "A request made by a program to the operating system for a service"
    },
    {
        question: "What is a deadlock?",
        options: ["A situation where two or more processes are unable to proceed due to each waiting for the other", "A type of computer virus", "A hardware failure", "A network outage"],
        answer: "A situation where two or more processes are unable to proceed due to each waiting for the other"
    },
    {
        question: "What is a fork() system call?",
        options: ["A system call used to create a new process", "A type of computer virus", "A hardware component", "A networking protocol"],
        answer: "A system call used to create a new process"
    },
    {
        question: "What is a zombie process?",
        options: ["A process that has completed execution but still has an entry in the process table", "A type of computer monitor", "A hardware component", "A software application"],
        answer: "A process that has completed execution but still has an entry in the process table"
    },
    {
        question: "What is a kernel panic?",
        options: ["A critical error condition in the operating system kernel", "A type of computer virus", "A hardware failure", "A networking protocol"],
        answer: "A critical error condition in the operating system kernel"
    },
    {
        question: "What is a race condition?",
        options: ["A situation where the behavior of a system depends on the timing of events", "A type of computer processor", "A hardware component", "A networking protocol"],
        answer: "A situation where the behavior of a system depends on the timing of events"
    },
    {
        question: "What is a scheduler?",
        options: ["A component of the operating system responsible for allocating CPU resources to processes", "A type of computer memory", "A hardware component", "A software application"],
        answer: "A component of the operating system responsible for allocating CPU resources to processes"
    },
    {
        question: "What is thrashing?",
        options: ["A situation where a computer spends more time swapping data between memory and disk than executing instructions", "A type of computer virus", "A hardware failure", "A networking protocol"],
        answer: "A situation where a computer spends more time swapping data between memory and disk than executing instructions"
    },
    {
        question: "What is a page fault?",
        options: ["A situation where a requested page is not in memory and must be retrieved from disk", "A type of computer processor", "A hardware component", "A networking protocol"],
        answer: "A situation where a requested page is not in memory and must be retrieved from disk"
    },
    {
        question: "What is a deadlock?",
        options: ["A situation where two or more processes are unable to proceed due to each waiting for the other", "A type of computer virus", "A hardware failure", "A network outage"],
        answer: "A situation where two or more processes are unable to proceed due to each waiting for the other"
    },
    {
        question: "What is the purpose of virtual memory?",
        options: ["To provide the illusion of a larger memory space than is physically available", "To store data on disk", "To manage input/output devices", "To manage hardware resources"],
        answer: "To provide the illusion of a larger memory space than is physically available"
    },
    {
        question: "What is a deadlock?",
        options: ["A situation where two or more processes are unable to proceed due to each waiting for the other", "A type of computer virus", "A hardware failure", "A network outage"],
        answer: "A situation where two or more processes are unable to proceed due to each waiting for the other"
    },
    {
        question: "What is a system call?",
        options: ["A request made by a program to the operating system for a service", "A type of computer processor", "A hardware component", "A networking protocol"],
        answer: "A request made by a program to the operating system for a service"
    }
]

export default operatingSystemsQuestions;
