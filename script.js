/* ======================================================
   CodeSaathi AI — Application Logic
   Pure HTML/CSS/JS · No APIs · GitHub Pages compatible
   ====================================================== */

'use strict';

/* ======================================================
   DATA: PROGRAMMING CONCEPTS
   ====================================================== */
const CONCEPTS = [
  {
    id: 'var-python',
    lang: 'python',
    title: 'Variables in Python',
    desc: 'Store and name data values so you can reuse them later.',
    topic: 'Variables',
    explanation: 'A variable is a named container that holds a value. In Python you create one simply by writing a name, an equals sign, and a value. Python figures out the data type automatically.',
    example: `name = "Alice"\nage = 25\nheight = 5.6\n\nprint(name)    # Alice\nprint(age)     # 25\nprint(height)  # 5.6`,
    note: 'Variable names should be lowercase and descriptive. Use underscores for spaces (e.g. first_name).'
  },
  {
    id: 'var-js',
    lang: 'javascript',
    title: 'Variables in JavaScript',
    desc: 'Declare variables with let, const, or var.',
    topic: 'Variables',
    explanation: 'JavaScript has three ways to declare variables. Use const for values that never change, let for values that will change, and avoid var in modern code.',
    example: `const pi = 3.14159;       // cannot be reassigned\nlet score = 0;            // can be changed later\nlet playerName = "Bob";\n\nscore = 10;\nconsole.log(score);       // 10`,
    note: 'Prefer const by default. Switch to let only when you know the value will change.'
  },
  {
    id: 'loop-python',
    lang: 'python',
    title: 'For Loops in Python',
    desc: 'Repeat a block of code a set number of times.',
    topic: 'Loops',
    explanation: 'A for loop iterates over a sequence (like a list or range). The loop variable takes each value in turn, and the indented block runs once per value.',
    example: `# Count from 1 to 5\nfor i in range(1, 6):\n    print(i)\n\n# Loop over a list\nfruits = ["apple", "banana", "mango"]\nfor fruit in fruits:\n    print(fruit)`,
    note: 'range(1, 6) produces 1, 2, 3, 4, 5 — the end number is NOT included.'
  },
  {
    id: 'loop-js',
    lang: 'javascript',
    title: 'For Loops in JavaScript',
    desc: 'Iterate over arrays or repeat actions with a counter.',
    topic: 'Loops',
    explanation: 'The classic for loop has three parts: initialization (let i = 0), condition (i < 5), and increment (i++). The body runs while the condition is true.',
    example: `// Print 0 to 4\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\n// Loop over an array\nconst colors = ["red", "green", "blue"];\nfor (let i = 0; i < colors.length; i++) {\n  console.log(colors[i]);\n}`,
    note: 'You can also use for...of (modern) to iterate arrays: for (const item of array) { }'
  },
  {
    id: 'func-python',
    lang: 'python',
    title: 'Functions in Python',
    desc: 'Reusable blocks of code that perform a specific task.',
    topic: 'Functions',
    explanation: 'A function groups code under a name. You define it with def, give it a name and optional parameters, then call it whenever you need it. Functions can return values.',
    example: `def greet(name):\n    message = "Hello, " + name + "!"\n    return message\n\nresult = greet("Alice")\nprint(result)   # Hello, Alice!\n\nprint(greet("Bob"))  # Hello, Bob!`,
    note: 'If a function has no return statement it returns None by default.'
  },
  {
    id: 'func-js',
    lang: 'javascript',
    title: 'Functions in JavaScript',
    desc: 'Define reusable logic with the function keyword or arrow syntax.',
    topic: 'Functions',
    explanation: 'Functions in JavaScript can be declared with the function keyword or as arrow functions. Both accept parameters and can return values.',
    example: `// Traditional function\nfunction add(a, b) {\n  return a + b;\n}\n\n// Arrow function (modern style)\nconst multiply = (a, b) => a * b;\n\nconsole.log(add(3, 4));       // 7\nconsole.log(multiply(3, 4)); // 12`,
    note: 'Arrow functions are shorter but behave slightly differently with the "this" keyword.'
  },
  {
    id: 'array-python',
    lang: 'python',
    title: 'Lists (Arrays) in Python',
    desc: 'Store multiple values in a single ordered collection.',
    topic: 'Arrays',
    explanation: 'Python uses lists instead of arrays. A list can hold any mix of types. You access items by their index (starting at 0) and can add, remove, or change items.',
    example: `fruits = ["apple", "banana", "mango"]\n\nprint(fruits[0])   # apple (first item)\nprint(fruits[-1])  # mango (last item)\n\nfruits.append("grape")   # add to end\nfruits.remove("banana")  # remove by value\n\nprint(len(fruits))  # 3`,
    note: 'Lists are mutable — you can change their contents after creation. Tuples are the immutable alternative.'
  },
  {
    id: 'array-js',
    lang: 'javascript',
    title: 'Arrays in JavaScript',
    desc: 'Ordered collections of values with built-in helper methods.',
    topic: 'Arrays',
    explanation: 'JavaScript arrays hold ordered values accessible by zero-based index. They come with powerful built-in methods like push, pop, map, filter, and find.',
    example: `const scores = [85, 92, 78, 96];\n\nconsole.log(scores[0]);       // 85\nconsole.log(scores.length);   // 4\n\nscores.push(100);             // add to end\nscores.pop();                 // remove last\n\n// Find all passing scores\nconst passing = scores.filter(s => s >= 80);\nconsole.log(passing);  // [85, 92, 96]`,
    note: 'Array indexes start at 0. The last element is at index array.length - 1.'
  },
  {
    id: 'if-general',
    lang: 'general',
    title: 'If / Else Statements',
    desc: 'Make decisions in your code based on conditions.',
    topic: 'Conditionals',
    explanation: 'An if statement checks a condition. If it is true, the if-block runs. If false, the else-block runs (if provided). Use else if / elif for multiple branches.',
    example: `# Python\nscore = 75\n\nif score >= 90:\n    print("A grade")\nelif score >= 70:\n    print("B grade")   # this runs\nelse:\n    print("Below B")\n\n// JavaScript\nif (score >= 90) {\n  console.log("A grade");\n} else if (score >= 70) {\n  console.log("B grade");  // this runs\n} else {\n  console.log("Below B");\n}`,
    note: 'Conditions must evaluate to true or false. Use == for comparison (=== in JavaScript for strict equality).'
  },
  {
    id: 'class-general',
    lang: 'general',
    title: 'Classes & Objects (OOP Basics)',
    desc: 'Blueprint for creating objects that bundle data and behavior.',
    topic: 'OOP',
    explanation: 'A class is a template. An object is an instance of that template. Classes bundle related data (attributes) and functions (methods) together.',
    example: `# Python\nclass Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n\n    def speak(self):\n        return self.name + " says Woof!"\n\nmy_dog = Dog("Rex", "Labrador")\nprint(my_dog.speak())   # Rex says Woof!`,
    note: '__init__ is the constructor — it runs automatically when you create an object.'
  },
  {
    id: 'while-general',
    lang: 'general',
    title: 'While Loops',
    desc: 'Repeat a block of code as long as a condition remains true.',
    topic: 'Loops',
    explanation: 'A while loop keeps running its body until the condition becomes false. Make sure something inside the loop eventually makes the condition false, or it will run forever.',
    example: `# Python\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1   # IMPORTANT: increment to avoid infinite loop\n\n// JavaScript\nlet n = 0;\nwhile (n < 5) {\n  console.log(n);\n  n++;\n}`,
    note: 'Always ensure the loop condition will eventually become false. A missing increment is a common beginner mistake.'
  },
  {
    id: 'string-general',
    lang: 'general',
    title: 'Strings',
    desc: 'Sequences of characters used to represent text.',
    topic: 'Strings',
    explanation: 'A string is a sequence of characters enclosed in quotes. You can concatenate (join) strings, check their length, extract parts (slicing), and use built-in methods to transform them.',
    example: `# Python\ngreeting = "Hello, World!"\nprint(len(greeting))       # 13\nprint(greeting.upper())    # HELLO, WORLD!\nprint(greeting[0:5])       # Hello\n\n// JavaScript\nconst msg = "Hello, World!";\nconsole.log(msg.length);          // 13\nconsole.log(msg.toUpperCase());   // HELLO, WORLD!\nconsole.log(msg.slice(0, 5));     // Hello`,
    note: 'String indexes start at 0. Most string methods return a new string — they do not modify the original.'
  }
];

/* ======================================================
   DATA: CODE EXAMPLES FOR EXPLAINER
   ====================================================== */
const CODE_EXAMPLES = [
  {
    id: 'py-hello',
    label: 'Python — Hello World',
    code: `name = input("Enter your name: ")\nprint("Hello, " + name + "!")`,
    lines: [
      { n: 1, text: 'Calls input() to pause and wait for the user to type something. The text in quotes is the prompt shown to the user. The typed value is stored in the variable name.' },
      { n: 2, text: 'Calls print() to display text. The + operator joins (concatenates) three strings: "Hello, ", the value of name, and "!". The result is printed to the screen.' }
    ]
  },
  {
    id: 'py-loop',
    label: 'Python — Sum of Numbers',
    code: `total = 0\nnumbers = [1, 2, 3, 4, 5]\n\nfor num in numbers:\n    total = total + num\n\nprint("Sum:", total)`,
    lines: [
      { n: 1, text: 'Creates a variable called total and sets it to 0. This will accumulate the running sum.' },
      { n: 2, text: 'Creates a list called numbers containing five integer values.' },
      { n: 3, text: 'Blank line for readability — Python ignores blank lines.' },
      { n: 4, text: 'Starts a for loop. Each time through, num takes the next value from the numbers list (1, then 2, then 3, etc.).' },
      { n: 5, text: 'Adds the current num to total and stores the result back in total. After all iterations total equals 15.' },
      { n: 6, text: 'Another blank line.' },
      { n: 7, text: 'Prints the label "Sum:" followed by the final value of total (15).' }
    ]
  },
  {
    id: 'py-func',
    label: 'Python — Simple Function',
    code: `def is_even(number):\n    if number % 2 == 0:\n        return True\n    return False\n\nresult = is_even(8)\nprint(result)`,
    lines: [
      { n: 1, text: 'Defines a function called is_even that accepts one parameter called number.' },
      { n: 2, text: 'Uses the modulo operator (%) to get the remainder of number ÷ 2. If the remainder is 0, the number is even.' },
      { n: 3, text: 'Returns True (a boolean value) if the condition on line 2 was satisfied.' },
      { n: 4, text: 'If we reach this line the condition was false, so we return False.' },
      { n: 5, text: 'Blank line separating the function definition from the code that uses it.' },
      { n: 6, text: 'Calls is_even with the argument 8. The function runs and returns True, which is stored in result.' },
      { n: 7, text: 'Prints the value of result — which is True.' }
    ]
  },
  {
    id: 'js-dom',
    label: 'JavaScript — Update the Page',
    code: `const btn = document.getElementById("myBtn");\nconst output = document.getElementById("output");\n\nbtn.addEventListener("click", function() {\n  output.textContent = "Button was clicked!";\n});`,
    lines: [
      { n: 1, text: 'Uses document.getElementById to find the HTML element with id="myBtn" and stores a reference to it in the constant btn.' },
      { n: 2, text: 'Same idea — finds the element with id="output" and stores it in output.' },
      { n: 3, text: 'Blank line for readability.' },
      { n: 4, text: 'Attaches a "click" event listener to btn. The second argument is a callback function that runs every time the button is clicked.' },
      { n: 5, text: 'Sets the text content of the output element. The user will see "Button was clicked!" appear on the page.' },
      { n: 6, text: 'Closes the callback function and the addEventListener call.' }
    ]
  },
  {
    id: 'js-array',
    label: 'JavaScript — Filter an Array',
    code: `const scores = [45, 82, 67, 91, 55, 78];\n\nconst passing = scores.filter(function(score) {\n  return score >= 60;\n});\n\nconsole.log(passing);`,
    lines: [
      { n: 1, text: 'Declares a constant array called scores containing six numbers.' },
      { n: 2, text: 'Blank line.' },
      { n: 3, text: 'Calls the filter() method on scores. filter() runs the provided function for every element and keeps only those for which the function returns true.' },
      { n: 4, text: 'The callback returns true when score is 60 or more. Those elements are kept in the result.' },
      { n: 5, text: 'Closes the callback function and the filter() call. passing now holds [82, 67, 91, 78].' },
      { n: 6, text: 'Blank line.' },
      { n: 7, text: 'Logs the passing array to the browser console: [82, 67, 91, 78].' }
    ]
  }
];

/* ======================================================
   DATA: ERROR GUIDE
   ====================================================== */
const ERRORS = [
  {
    id: 'e1', lang: 'python',
    name: 'SyntaxError',
    cause: 'The code is written incorrectly — Python cannot understand the structure. Common causes: missing colon after if/for/def, unmatched parentheses, or wrong indentation.',
    fix: 'Read the error message carefully — it shows the line number and often points to the exact problem. Check for missing colons, brackets, and proper indentation.',
    example: `# Wrong\nif x > 5\n    print(x)\n\n# Correct\nif x > 5:\n    print(x)`
  },
  {
    id: 'e2', lang: 'python',
    name: 'IndentationError',
    cause: 'Python uses indentation (spaces or tabs) to define code blocks. Mixing tabs and spaces, or inconsistent indentation, triggers this error.',
    fix: 'Use 4 spaces consistently for each level of indentation. Never mix tabs and spaces. Most editors have a "convert tabs to spaces" setting.',
    example: `# Wrong (mixed indentation)\ndef greet():\n    print("Hi")\n\t print("there")  # tab + spaces\n\n# Correct\ndef greet():\n    print("Hi")\n    print("there")`
  },
  {
    id: 'e3', lang: 'python',
    name: 'NameError: name is not defined',
    cause: 'You used a variable name that has not been created yet, or you misspelled it.',
    fix: 'Check that you spelled the variable name exactly right (Python is case-sensitive). Make sure you assigned a value to it before trying to use it.',
    example: `# Wrong\nprint(mesage)  # misspelled\n\n# Correct\nmessage = "Hello"\nprint(message)`
  },
  {
    id: 'e4', lang: 'python',
    name: 'TypeError',
    cause: 'You tried to perform an operation on a value of the wrong type — for example, adding a string and an integer.',
    fix: 'Convert the value to the correct type first using int(), str(), or float() before combining or operating on it.',
    example: `# Wrong\nage = input("Age: ")  # input returns a string\nnext_year = age + 1   # TypeError!\n\n# Correct\nage = int(input("Age: "))\nnext_year = age + 1`
  },
  {
    id: 'e5', lang: 'python',
    name: 'IndexError: list index out of range',
    cause: 'You tried to access a list position that does not exist. If a list has 3 items, valid indexes are 0, 1, and 2.',
    fix: 'Remember indexes start at 0. Use len(list) - 1 for the last item, or negative indexing (list[-1]).',
    example: `fruits = ["apple", "banana", "mango"]\n\n# Wrong\nprint(fruits[3])   # IndexError — only 0, 1, 2 exist\n\n# Correct\nprint(fruits[2])   # mango\nprint(fruits[-1])  # mango (last item)`
  },
  {
    id: 'e6', lang: 'python',
    name: 'KeyError',
    cause: 'You tried to access a dictionary key that does not exist.',
    fix: 'Use the .get() method which returns None (or a default) instead of crashing. Or check with if key in dict before accessing.',
    example: `data = {"name": "Alice", "age": 25}\n\n# Wrong\nprint(data["email"])   # KeyError\n\n# Correct\nprint(data.get("email", "not found"))  # not found`
  },
  {
    id: 'e7', lang: 'python',
    name: 'ZeroDivisionError',
    cause: 'You tried to divide a number by zero, which is mathematically undefined.',
    fix: 'Check that the divisor is not zero before dividing. Use an if statement to guard against it.',
    example: `# Wrong\nresult = 10 / 0   # ZeroDivisionError\n\n# Correct\ndivisor = 0\nif divisor != 0:\n    result = 10 / divisor\nelse:\n    print("Cannot divide by zero")`
  },
  {
    id: 'e8', lang: 'javascript',
    name: 'ReferenceError: x is not defined',
    cause: 'You referenced a variable that has not been declared anywhere in scope, or you spelled it differently.',
    fix: 'Declare the variable with let, const, or var before using it. Check the spelling carefully — JavaScript is case-sensitive.',
    example: `// Wrong\nconsole.log(userName);  // ReferenceError\n\n// Correct\nconst userName = "Alice";\nconsole.log(userName);`
  },
  {
    id: 'e9', lang: 'javascript',
    name: 'TypeError: Cannot read properties of undefined',
    cause: 'You tried to access a property or call a method on a variable that is undefined or null.',
    fix: 'Check that the variable actually holds an object before accessing its property. Use optional chaining (?.) in modern JS.',
    example: `// Wrong\nconst user = undefined;\nconsole.log(user.name);  // TypeError\n\n// Correct — guard check\nif (user) {\n  console.log(user.name);\n}\n\n// Modern optional chaining\nconsole.log(user?.name);  // undefined (no crash)`
  },
  {
    id: 'e10', lang: 'javascript',
    name: 'SyntaxError: Unexpected token',
    cause: 'JavaScript found a character or keyword it did not expect. Usually a missing brace, bracket, comma, or a mismatched quote.',
    fix: 'Look at the line the error points to and the lines just before it. Check for missing }, ), ], or mismatched quotes.',
    example: `// Wrong\nconst obj = { name: "Alice" age: 25 };  // missing comma\n\n// Correct\nconst obj = { name: "Alice", age: 25 };`
  },
  {
    id: 'e11', lang: 'javascript',
    name: 'RangeError: Maximum call stack size exceeded',
    cause: 'A function called itself (directly or indirectly) without a stopping condition — infinite recursion.',
    fix: 'Ensure every recursive function has a base case that stops the recursion. Or convert the recursion to a loop.',
    example: `// Wrong — no base case\nfunction count(n) {\n  return count(n - 1);  // never stops\n}\n\n// Correct\nfunction count(n) {\n  if (n <= 0) return;  // base case\n  console.log(n);\n  count(n - 1);\n}`
  },
  {
    id: 'e12', lang: 'general',
    name: 'Infinite Loop',
    cause: 'A loop\'s condition never becomes false, so it runs forever. Your program freezes or the browser tab becomes unresponsive.',
    fix: 'Make sure something inside the loop changes the variable used in the condition. Add a counter or break statement as a safety net.',
    example: `# Python — Wrong\ncount = 0\nwhile count < 10:\n    print(count)\n    # Missing: count += 1  ← loop never ends\n\n# Correct\ncount = 0\nwhile count < 10:\n    print(count)\n    count += 1  # condition will eventually be false`
  },
  {
    id: 'e13', lang: 'general',
    name: 'Off-by-One Error',
    cause: 'Loops or indexes that are off by one — iterating one too many or one too few times, or accessing the wrong list position.',
    fix: 'Remember: indexes start at 0, so the last valid index is length - 1. In range(n), the loop runs n times (0 to n-1, not 1 to n).',
    example: `# Python\nitems = [10, 20, 30]  # 3 items, indexes 0,1,2\n\n# Wrong — tries index 3 which doesn't exist\nfor i in range(1, len(items) + 1):\n    print(items[i])\n\n# Correct\nfor i in range(len(items)):\n    print(items[i])  # 0, 1, 2`
  },
  {
    id: 'e14', lang: 'javascript',
    name: 'NaN — Not a Number',
    cause: 'A mathematical operation produced an undefined numeric result, usually because a string was passed instead of a number.',
    fix: 'Use Number() or parseInt() / parseFloat() to convert strings to numbers. Check with isNaN() before using the result.',
    example: `const input = "hello";\nconst result = input * 2;\nconsole.log(result);    // NaN\n\n// Safe conversion\nconst num = Number(input);\nif (!isNaN(num)) {\n  console.log(num * 2);\n} else {\n  console.log("Please enter a valid number");\n}`
  }
];

/* ======================================================
   DATA: PRACTICE EXERCISES
   ====================================================== */
const EXERCISES = [
  {
    id: 'q1', topic: 'variables',
    question: 'Which of the following correctly declares a variable in Python?',
    options: ['variable name = "Alice"', 'name = "Alice"', 'var name = "Alice"', 'let name = "Alice"'],
    answer: 1,
    hint: 'Python does not use keywords like var or let. You simply write the name, an equals sign, and the value.',
    explanation: 'In Python you assign a variable by writing: name = "Alice". No keyword is needed.'
  },
  {
    id: 'q2', topic: 'variables',
    question: 'In JavaScript, which keyword should you use for a value that will NEVER change?',
    options: ['var', 'let', 'const', 'static'],
    answer: 2,
    hint: 'Think: "constant" — something that stays the same.',
    explanation: 'const declares a constant — a value that cannot be reassigned. Use let when the value might change.'
  },
  {
    id: 'q3', topic: 'loops',
    question: 'How many times does this Python loop run?  for i in range(3):',
    options: ['2 times', '3 times', '4 times', 'Infinite'],
    answer: 1,
    hint: 'range(n) produces n values starting from 0.',
    explanation: 'range(3) generates 0, 1, 2 — exactly 3 values — so the loop body runs 3 times.'
  },
  {
    id: 'q4', topic: 'loops',
    question: 'What is the output of this code?\n\nfor i in range(2, 5):\n    print(i)',
    options: ['2 3 4 5', '2 3 4', '1 2 3 4', '2 3 4 5 6'],
    answer: 1,
    hint: 'range(start, stop) — the stop value is NOT included.',
    explanation: 'range(2, 5) generates 2, 3, 4. The stop value 5 is excluded, so the output is 2, 3, 4.'
  },
  {
    id: 'q5', topic: 'functions',
    question: 'What does the return keyword do in a function?',
    options: [
      'Prints the value to the screen',
      'Stops the program completely',
      'Sends a value back to wherever the function was called',
      'Declares a new variable'
    ],
    answer: 2,
    hint: 'When a function is called in an expression, what value does it provide?',
    explanation: 'return sends a value back to the caller. result = add(2, 3) — the function returns 5 and it is stored in result.'
  },
  {
    id: 'q6', topic: 'functions',
    question: 'Which Python code correctly defines a function named greet?',
    options: [
      'function greet():\n    print("Hi")',
      'def greet():\n    print("Hi")',
      'define greet():\n    print("Hi")',
      'func greet():\n    print("Hi")'
    ],
    answer: 1,
    hint: 'Python uses a specific keyword to define functions — it starts with "d".',
    explanation: 'In Python, functions are defined with the def keyword: def greet(): followed by an indented body.'
  },
  {
    id: 'q7', topic: 'arrays',
    question: 'What is the index of "banana" in this list?\n\nfruits = ["apple", "banana", "mango"]',
    options: ['0', '1', '2', '3'],
    answer: 1,
    hint: 'List indexes start at 0, so the first item is 0.',
    explanation: '"apple" is at index 0, "banana" at index 1, and "mango" at index 2.'
  },
  {
    id: 'q8', topic: 'arrays',
    question: 'Which method adds an item to the END of a JavaScript array?',
    options: ['array.add()', 'array.append()', 'array.push()', 'array.insert()'],
    answer: 2,
    hint: 'Think of pushing something onto a stack.',
    explanation: 'push() adds one or more elements to the end of an array. pop() removes the last element.'
  },
  {
    id: 'q9', topic: 'variables',
    question: 'What will this Python code print?\n\nx = 5\nx = x + 3\nprint(x)',
    options: ['5', '3', '8', 'x + 3'],
    answer: 2,
    hint: 'The second line re-assigns x to a new value.',
    explanation: 'x starts at 5. Then x = x + 3 means x = 5 + 3 = 8. So print(x) outputs 8.'
  },
  {
    id: 'q10', topic: 'loops',
    question: 'What is a common cause of an infinite loop?',
    options: [
      'Using range() with two arguments',
      'Forgetting to update the loop variable so the condition never becomes false',
      'Having more than one line inside the loop',
      'Using a for loop instead of a while loop'
    ],
    answer: 1,
    hint: 'What must eventually happen for a while loop to stop?',
    explanation: 'An infinite loop occurs when the condition never becomes false. You must update the variable the condition checks (e.g. count += 1) inside the loop.'
  },
  {
    id: 'q11', topic: 'functions',
    question: 'What value does a Python function return if it has no return statement?',
    options: ['0', 'False', 'None', 'An error is raised'],
    answer: 2,
    hint: 'Python has a special built-in value that means "nothing".',
    explanation: 'In Python, a function with no return statement implicitly returns None — the Python equivalent of "no value".'
  },
  {
    id: 'q12', topic: 'arrays',
    question: 'How do you get the number of items in a Python list called my_list?',
    options: ['my_list.size()', 'my_list.count()', 'len(my_list)', 'my_list.length'],
    answer: 2,
    hint: 'Python uses a built-in function (not a method) for this.',
    explanation: 'len(my_list) returns the number of items. In JavaScript you would use array.length (a property, not a function call).'
  }
];

/* ======================================================
   STATE
   ====================================================== */
let currentConceptLang = 'all';
let currentErrorLang   = 'all';
let currentExerciseTopic = 'all';
let currentErrorSearch = '';

/* ======================================================
   NAVIGATION
   ====================================================== */
function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const section = document.getElementById('section-' + name);
  if (section) section.classList.add('active');

  const btn = document.querySelector('[data-section="' + name + '"]');
  if (btn) btn.classList.add('active');

  // Close mobile sidebar
  closeMobileSidebar();

  // Render on demand
  if (name === 'progress') renderProgress();
}

function toggleMobileSidebar() {
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebarOverlay');
  const isOpen   = sidebar.classList.contains('mobile-open');

  if (isOpen) {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('visible');
  } else {
    sidebar.classList.add('mobile-open');
    overlay.classList.add('visible');
  }
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('sidebarOverlay').classList.remove('visible');
}

/* ======================================================
   LEARN — CONCEPT CARDS
   ====================================================== */
function filterConcepts(lang, btn) {
  currentConceptLang = lang;
  document.querySelectorAll('#section-learn .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderConceptCards();
}

function renderConceptCards() {
  const grid = document.getElementById('conceptsGrid');
  const list = currentConceptLang === 'all'
    ? CONCEPTS
    : CONCEPTS.filter(c => c.lang === currentConceptLang);

  if (list.length === 0) {
    grid.innerHTML = '<p class="placeholder-text">No concepts found for this filter.</p>';
    return;
  }

  grid.innerHTML = list.map(c => `
    <div class="card" onclick="openConceptModal('${c.id}')">
      <span class="card-tag tag-${c.lang}">${c.lang === 'general' ? 'General CS' : c.lang.charAt(0).toUpperCase() + c.lang.slice(1)}</span>
      <div class="card-title">${c.title}</div>
      <div class="card-desc">${c.desc}</div>
      <div class="card-footer">
        <button class="btn-primary" onclick="event.stopPropagation(); openConceptModal('${c.id}'); markConceptRead('${c.id}')">
          Learn →
        </button>
        ${isConceptRead(c.id) ? '<span class="card-tag tag-success">✓ Read</span>' : ''}
      </div>
    </div>
  `).join('');
}

/* ======================================================
   CONCEPT MODAL
   ====================================================== */
function openConceptModal(id) {
  const concept = CONCEPTS.find(c => c.id === id);
  if (!concept) return;

  markConceptRead(id);

  const langLabel = concept.lang === 'general' ? 'General CS' : concept.lang.charAt(0).toUpperCase() + concept.lang.slice(1);

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-topic-tag">
      <span class="card-tag tag-${concept.lang}">${langLabel}</span>
      <span class="card-tag tag-general" style="margin-left:0.4rem">${concept.topic}</span>
    </div>
    <div class="modal-title">${concept.title}</div>
    <div class="modal-body">${concept.explanation}</div>
    <div class="modal-code">${escapeHtml(concept.example)}</div>
    ${concept.note ? `<div class="modal-note">💡 ${concept.note}</div>` : ''}
  `;

  document.getElementById('conceptModal').classList.add('open');
}

function closeConceptModal(e) {
  if (e === null || e.target === document.getElementById('conceptModal')) {
    document.getElementById('conceptModal').classList.remove('open');
    renderConceptCards(); // refresh ✓ badges
  }
}

/* ======================================================
   CODE EXPLAINER
   ====================================================== */
function populateCodeSelect() {
  const select = document.getElementById('codeSelect');
  CODE_EXAMPLES.forEach(ex => {
    const opt = document.createElement('option');
    opt.value = ex.id;
    opt.textContent = ex.label;
    select.appendChild(opt);
  });
}

function loadCodeExample() {
  const select  = document.getElementById('codeSelect');
  const id      = select.value;
  const panels  = document.getElementById('explainerPanels');
  const ph      = document.getElementById('explainerPlaceholder');

  if (!id) {
    panels.style.display = 'none';
    ph.style.display = 'block';
    return;
  }

  const example = CODE_EXAMPLES.find(e => e.id === id);
  if (!example) return;

  document.getElementById('codeDisplay').textContent = example.code;

  document.getElementById('explanationDisplay').innerHTML = example.lines.map(l => `
    <div class="explanation-item">
      <span class="line-num">${l.n}</span>
      <span class="line-text">${l.text}</span>
    </div>
  `).join('');

  panels.style.display = 'grid';
  ph.style.display = 'none';
}

/* ======================================================
   ERROR GUIDE
   ====================================================== */
function filterErrors(lang, btn) {
  currentErrorLang = lang;
  document.querySelectorAll('#section-errors .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderErrors();
}

function searchErrors() {
  currentErrorSearch = document.getElementById('errorSearch').value.trim().toLowerCase();
  renderErrors();
}

function clearErrorSearch() {
  document.getElementById('errorSearch').value = '';
  currentErrorSearch = '';
  renderErrors();
}

function renderErrors() {
  let list = currentErrorLang === 'all'
    ? ERRORS
    : ERRORS.filter(e => e.lang === currentErrorLang);

  if (currentErrorSearch) {
    list = list.filter(e =>
      e.name.toLowerCase().includes(currentErrorSearch) ||
      e.cause.toLowerCase().includes(currentErrorSearch) ||
      e.fix.toLowerCase().includes(currentErrorSearch)
    );
  }

  const grid    = document.getElementById('errorResults');
  const noRes   = document.getElementById('errorNoResult');

  if (list.length === 0) {
    grid.innerHTML = '';
    noRes.style.display = 'block';
    return;
  }

  noRes.style.display = 'none';
  grid.innerHTML = list.map(e => {
    const langLabel = e.lang === 'general' ? 'General' : e.lang.charAt(0).toUpperCase() + e.lang.slice(1);
    return `
      <div class="card">
        <span class="card-tag tag-${e.lang === 'python' ? 'python' : e.lang === 'javascript' ? 'javascript' : 'general'}">${langLabel}</span>
        <div class="card-title">${e.name}</div>
        <div class="error-card-cause"><strong>Cause:</strong> ${e.cause}</div>
        <div class="error-card-fix"><strong>Fix:</strong> ${e.fix}</div>
        ${e.example ? `<details style="margin-top:0.65rem"><summary style="cursor:pointer;font-size:0.82rem;color:var(--text-muted);font-weight:600">View Example ▾</summary><pre class="code-block" style="margin-top:0.5rem;border-radius:6px">${escapeHtml(e.example)}</pre></details>` : ''}
      </div>
    `;
  }).join('');
}

/* ======================================================
   PRACTICE EXERCISES
   ====================================================== */
function filterExercises(topic, btn) {
  currentExerciseTopic = topic;
  document.querySelectorAll('#section-practice .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderExercises();
}

function renderExercises() {
  const list = currentExerciseTopic === 'all'
    ? EXERCISES
    : EXERCISES.filter(e => e.topic === currentExerciseTopic);

  const container = document.getElementById('exerciseContainer');

  if (list.length === 0) {
    container.innerHTML = '<p class="placeholder-text">No exercises for this topic yet.</p>';
    return;
  }

  container.innerHTML = list.map((ex, idx) => `
    <div class="exercise-card" id="ex-card-${ex.id}">
      <div class="exercise-meta">
        <span class="exercise-num">Question ${idx + 1}</span>
        <span class="card-tag tag-${ex.topic === 'variables' ? 'python' : ex.topic === 'functions' ? 'javascript' : 'general'}">${capitalize(ex.topic)}</span>
        ${getExerciseResultBadge(ex.id)}
      </div>
      <div class="exercise-question">${ex.question.replace(/\n/g, '<br>')}</div>
      <div class="exercise-options" id="opts-${ex.id}">
        ${ex.options.map((opt, i) => `
          <button class="option-btn ${getOptionClass(ex.id, i)}"
            id="opt-${ex.id}-${i}"
            onclick="selectOption('${ex.id}', ${i})"
            ${isExerciseDone(ex.id) ? 'disabled' : ''}>
            <span>${String.fromCharCode(65 + i)}.</span> ${opt.replace(/\n/g, '<br>')}
          </button>
        `).join('')}
      </div>
      <div class="exercise-actions">
        <button class="btn-secondary" onclick="toggleHint('${ex.id}')">💡 Hint</button>
        <button class="btn-accent"    onclick="toggleAnswer('${ex.id}')">📖 Answer</button>
      </div>
      <div class="hint-box" id="hint-${ex.id}">${ex.hint}</div>
      <div class="answer-box" id="answer-${ex.id}"><strong>Explanation:</strong> ${ex.explanation}</div>
    </div>
  `).join('');
}

function selectOption(exId, selectedIdx) {
  const exercise = EXERCISES.find(e => e.id === exId);
  if (!exercise || isExerciseDone(exId)) return;

  const isCorrect = selectedIdx === exercise.answer;
  saveExerciseResult(exId, isCorrect, selectedIdx);

  // Disable all options
  exercise.options.forEach((_, i) => {
    const btn = document.getElementById(`opt-${exId}-${i}`);
    if (!btn) return;
    btn.disabled = true;
    if (i === exercise.answer) btn.classList.add('correct');
    else if (i === selectedIdx && !isCorrect) btn.classList.add('wrong');
  });

  // Update badge
  const meta = document.querySelector(`#ex-card-${exId} .exercise-meta`);
  const existingBadge = meta.querySelector('.result-badge');
  if (existingBadge) existingBadge.remove();

  const badge = document.createElement('span');
  badge.className = `result-badge ${isCorrect ? 'pass' : 'fail'}`;
  badge.textContent = isCorrect ? '✓ Correct' : '✗ Wrong';
  meta.appendChild(badge);
}

function toggleHint(exId) {
  const el = document.getElementById('hint-' + exId);
  if (el) el.classList.toggle('visible');
}

function toggleAnswer(exId) {
  const el = document.getElementById('answer-' + exId);
  if (el) el.classList.toggle('visible');
}

function getOptionClass(exId, idx) {
  if (!isExerciseDone(exId)) return '';
  const ex = EXERCISES.find(e => e.id === exId);
  const saved = loadExerciseResult(exId);
  if (idx === ex.answer) return 'correct';
  if (saved && !saved.correct && idx === saved.selected) return 'wrong';
  return '';
}

function getExerciseResultBadge(exId) {
  const saved = loadExerciseResult(exId);
  if (!saved) return '';
  return saved.correct
    ? '<span class="result-badge pass">✓ Correct</span>'
    : '<span class="result-badge fail">✗ Wrong</span>';
}

/* ======================================================
   PROGRESS DASHBOARD
   ====================================================== */
function renderProgress() {
  renderProgressStats();
  renderProgressTopics();
}

function renderProgressStats() {
  const conceptsRead = getConceptsRead().length;
  const totalConcepts = CONCEPTS.length;

  const allResults = EXERCISES.map(e => loadExerciseResult(e.id)).filter(Boolean);
  const attempted  = allResults.length;
  const correct    = allResults.filter(r => r.correct).length;
  const score      = attempted > 0 ? Math.round((correct / EXERCISES.length) * 100) : 0;

  document.getElementById('progressStats').innerHTML = `
    <div class="stat-card">
      <div class="stat-number">${conceptsRead}</div>
      <div class="stat-label">Concepts Read</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">${totalConcepts}</div>
      <div class="stat-label">Total Concepts</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">${attempted}</div>
      <div class="stat-label">Exercises Attempted</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">${correct}</div>
      <div class="stat-label">Correct Answers</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">${score}%</div>
      <div class="stat-label">Overall Score</div>
    </div>
  `;
}

function renderProgressTopics() {
  const topics = ['Variables', 'Loops', 'Functions', 'Arrays', 'Conditionals', 'OOP', 'Strings'];

  const rows = topics.map(topic => {
    const topicConcepts = CONCEPTS.filter(c => c.topic === topic);
    const topicExercises = EXERCISES.filter(e => e.topic === topic.toLowerCase());

    const readCount = topicConcepts.filter(c => isConceptRead(c.id)).length;
    const doneCount = topicExercises.filter(e => isExerciseDone(e.id)).length;

    const total = topicConcepts.length + topicExercises.length;
    const done  = readCount + doneCount;
    const pct   = total > 0 ? Math.round((done / total) * 100) : 0;

    return `
      <div class="topic-row">
        <div class="topic-row-header">
          <span class="topic-row-name">${topic}</span>
          <span class="topic-row-pct">${pct}%</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  });

  document.getElementById('progressTopics').innerHTML = rows.join('');
}

function resetProgress() {
  if (!confirm('Are you sure you want to reset all your progress? This cannot be undone.')) return;
  localStorage.removeItem('cs_concepts_read');
  localStorage.removeItem('cs_exercise_results');
  renderProgress();
  // Refresh current section to clear badges
  renderConceptCards();
  renderExercises();
  alert('Progress has been reset.');
}

/* ======================================================
   LOCAL STORAGE HELPERS
   ====================================================== */
function getConceptsRead() {
  try { return JSON.parse(localStorage.getItem('cs_concepts_read') || '[]'); }
  catch { return []; }
}

function isConceptRead(id) {
  return getConceptsRead().includes(id);
}

function markConceptRead(id) {
  const read = getConceptsRead();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem('cs_concepts_read', JSON.stringify(read));
  }
}

function loadExerciseResult(exId) {
  try {
    const results = JSON.parse(localStorage.getItem('cs_exercise_results') || '{}');
    return results[exId] || null;
  } catch { return null; }
}

function saveExerciseResult(exId, isCorrect, selectedIdx) {
  try {
    const results = JSON.parse(localStorage.getItem('cs_exercise_results') || '{}');
    results[exId] = { correct: isCorrect, selected: selectedIdx };
    localStorage.setItem('cs_exercise_results', JSON.stringify(results));
  } catch { /* storage unavailable */ }
}

function isExerciseDone(exId) {
  return loadExerciseResult(exId) !== null;
}

/* ======================================================
   UTILITY
   ====================================================== */
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ======================================================
   INIT
   ====================================================== */
document.addEventListener('DOMContentLoaded', function () {
  renderConceptCards();
  populateCodeSelect();
  renderErrors();
  renderExercises();
});
