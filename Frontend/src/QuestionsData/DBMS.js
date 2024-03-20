const dbmsQuestions = [
    {
      question: "What is DBMS?",
      options: [
        "Database Management System",
        "Database Manipulation System",
        "Data Management System",
        "Data Manipulation System"
      ],
      answer: "Database Management System"
    },
    {
      question: "What is RDBMS?",
      options: [
        "Relational Database Management System",
        "Recursive Database Management System",
        "Reactive Database Management System",
        "Rapid Database Management System"
      ],
      answer: "Relational Database Management System"
    },
    {
      question: "What is SQL?",
      options: [
        "Structured Language",
        "Standardized Query Language",
        "Sequential Query Language",
        "Structural Query Language"
      ],
      answer: "Standardized Query Language"
    },
    {
      question: "What is a database schema?",
      options: [
        "The structure of a database",
        "A software application",
        "A database query",
        "A database management tool"
      ],
      answer: "The structure of a database"
    },
    {
      question: "What is normalization in DBMS?",
      options: [
        "The process of optimizing database performance",
        "The process of reducing redundancy in database design",
        "The process of securing a database",
        "The process of creating indexes on database tables"
      ],
      answer: "The process of reducing redundancy in database design"
    },
    {
      question: "What is a primary key in a database table?",
      options: [
        "A unique identifier for each record",
        "A key used for encryption",
        "A key used for sorting records",
        "A key used for database administration"
      ],
      answer: "A unique identifier for each record"
    },
    {
      question: "What is a foreign key in a database table?",
      options: [
        "A key from another database",
        "A key used for encryption",
        "A key used for sorting records",
        "A key that establishes a relationship between two tables"
      ],
      answer: "A key that establishes a relationship between two tables"
    },
    {
      question: "What is a SQL join?",
      options: [
        "A way to combine rows from two or more tables based on a related column",
        "A way to delete records from a database table",
        "A way to update records in a database table",
        "A way to insert records into a database table"
      ],
      answer: "A way to combine rows from two or more tables based on a related column"
    },
    {
      question: "What is an index in a database?",
      options: [
        "A data structure that improves the speed of data retrieval",
        "A key used for encryption",
        "A key used for sorting records",
        "A key that establishes a relationship between two tables"
      ],
      answer: "A data structure that improves the speed of data retrieval"
    },
    {
      question: "What is a transaction in DBMS?",
      options: [
        "A single SQL statement",
        "A unit of work performed against a database",
        "A database management tool",
        "A way to query a database"
      ],
      answer: "A unit of work performed against a database"
    },
    {
      question: "What is ACID property in DBMS?",
      options: [
        "A database management system",
        "A set of properties that guarantee database transactions are processed reliably",
        "A way to query a database",
        "A data manipulation language"
      ],
      answer: "A set of properties that guarantee database transactions are processed reliably"
    },
    {
      question: "What is a view in a database?",
      options: [
        "A virtual table based on the result set of an SQL statement",
        "A way to delete records from a database table",
        "A way to update records in a database table",
        "A way to insert records into a database table"
      ],
      answer: "A virtual table based on the result set of an SQL statement"
    },
    {
      question: "What is data integrity in DBMS?",
      options: [
        "The accuracy and consistency of data stored in a database",
        "A way to delete records from a database table",
        "A way to update records in a database table",
        "A way to insert records into a database table"
      ],
      answer: "The accuracy and consistency of data stored in a database"
    },
    {
      question: "What is a stored procedure in DBMS?",
      options: [
        "A precompiled collection of SQL statements",
        "A way to delete records from a database table",
        "A way to update records in a database table",
        "A way to insert records into a database table"
      ],
      answer: "A precompiled collection of SQL statements"
    },
    {
      question: "What is database replication?",
      options: [
        "The process of creating a copy of a database",
        "A way to delete records from a database table",
        "A way to update records in a database table",
        "A way to insert records into a database table"
      ],
      answer: "The process of creating a copy of a database"
    },
    {
      question: "What is data warehousing?",
      options: [
        "The process of collecting and managing data from various sources",
        "A way to delete records from a database table",
        "A way to update records in a database table",
        "A way to insert records into a database table"
      ],
      answer: "The process of collecting and managing data from various sources"
    },
    {
        question: "What is database concurrency control?",
        options: [
          "The process of managing simultaneous access to a database by multiple users",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "The process of managing simultaneous access to a database by multiple users"
      },
      {
        question: "What is data mining?",
        options: [
          "The process of analyzing large datasets to discover patterns and relationships",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "The process of analyzing large datasets to discover patterns and relationships"
      },
      {
        question: "What is database indexing?",
        options: [
          "The process of creating indexes on database tables to improve query performance",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "The process of creating indexes on database tables to improve query performance"
      },
      {
        question: "What is database sharding?",
        options: [
          "The process of partitioning data across multiple servers to improve performance and scalability",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "The process of partitioning data across multiple servers to improve performance and scalability"
      },
      {
        question: "What is database backup and recovery?",
        options: [
          "The process of creating copies of data to prevent data loss and restore data in case of failure",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "The process of creating copies of data to prevent data loss and restore data in case of failure"
      },
      {
        question: "What is NoSQL?",
        options: [
          "A non-relational database management system",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "A non-relational database management system"
      },
      {
        question: "What is a database trigger?",
        options: [
          "A stored procedure that is automatically executed in response to certain database events",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "A stored procedure that is automatically executed in response to certain database events"
      },
      {
        question: "What is database denormalization?",
        options: [
          "The process of intentionally introducing redundancy into a database design for performance reasons",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "The process of intentionally introducing redundancy into a database design for performance reasons"
      },
      {
        question: "What is database mirroring?",
        options: [
          "The process of maintaining redundant copies of a database for fault tolerance",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "The process of maintaining redundant copies of a database for fault tolerance"
      },
      {
        question: "What is a database transaction?",
        options: [
          "A single SQL statement",
          "A unit of work performed against a database",
          "A database management tool",
          "A way to query a database"
        ],
        answer: "A unit of work performed against a database"
      },
      {
        question: "What is a database view?",
        options: [
          "A virtual table based on the result set of an SQL statement",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "A virtual table based on the result set of an SQL statement"
      },
      {
        question: "What is database security?",
        options: [
          "The process of ensuring data integrity and protecting against unauthorized access",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "The process of ensuring data integrity and protecting against unauthorized access"
      },
      {
        question: "What is database normalization?",
        options: [
          "The process of organizing data to minimize redundancy and dependency",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "The process of organizing data to minimize redundancy and dependency"
      },
      {
        question: "What is database indexing?",
        options: [
          "The process of creating indexes on database tables to improve query performance",
          "A way to delete records from a database table",
          "A way to update records in a database table",
          "A way to insert records into a database table"
        ],
        answer: "The process of creating indexes on database tables to improve query performance"
      }
];

export default dbmsQuestions;