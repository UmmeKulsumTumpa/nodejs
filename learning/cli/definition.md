
---

### 1. Exiting/Exit Codes

**Sub-Terms**: None explicitly listed, but the concept includes `process.exit()` and exit codes (e.g., 0, 1).

- **process.exit()**
  - **Definition**: A Node.js function that immediately stops the program and returns an exit code to the operating system.
  - **Purpose**: Used to end the program when it’s done or encounters an error, signaling whether it succeeded (code 0) or failed (e.g., code 1).

- **Exit Codes**
  - **Definition**: Numbers that indicate the program’s status when it exits. Common codes include 0 (success) and 1 (general error).
  - **Purpose**: Helps other programs or scripts know if your program ran successfully or had issues, useful for automation or debugging.

---

### 2. Environment Variables: process.env and dotenv Package

**Sub-Terms**: `process.env`, `dotenv` package.

- **process.env**
  - **Definition**: A built-in Node.js object that holds environment variables, which are key-value pairs set outside the program (e.g., `PORT=3000`).
  - **Purpose**: Allows your program to access external settings like API keys or database URLs, making it adaptable to different environments.

- **dotenv Package**
  - **Definition**: A Node.js package that loads environment variables from a `.env` file (e.g., `PORT=3000` in a file) into `process.env`.
  - **Purpose**: Simplifies managing settings by keeping them in a file, especially for sensitive data, instead of hardcoding them in your code.

---

### 3. Taking Input: process.stdin, inquirer Package, prompts Package

**Sub-Terms**: `process.stdin`, `inquirer` package, `prompts` package.

- **process.stdin**
  - **Definition**: A built-in Node.js stream that reads raw text input typed by the user in the terminal.
  - **Purpose**: Captures basic user input (like a name or number) for simple command-line interactions.

- **inquirer Package**
  - **Definition**: A Node.js library that creates interactive prompts, such as text inputs, multiple-choice lists, or yes/no questions.
  - **Purpose**: Makes your CLI user-friendly by providing structured ways to collect complex input, like selecting options from a menu.

- **prompts Package**
  - **Definition**: Another Node.js library for creating interactive prompts, similar to `inquirer`, but often lighter and simpler.
  - **Purpose**: Helps build user-friendly input interfaces for your CLI with minimal setup, ideal for quick or async-based prompts.

---

### 4. Printing Output: stdout/stderr, chalk Package, figlet Package, cli-color Package

**Sub-Terms**: `process.stdout`, `process.stderr`, `chalk` package, `figlet` package, `cli-color` package.

- **process.stdout**
  - **Definition**: A built-in Node.js stream for sending normal output (like messages or results) to the terminal.
  - **Purpose**: Displays the main output of your program, such as success messages or data, to the user.

- **process.stderr**
  - **Definition**: A built-in Node.js stream for sending error messages or warnings to the terminal.
  - **Purpose**: Separates error output from normal output, making it easier to identify issues (often shown in red by terminals).

- **chalk Package**
  - **Definition**: A Node.js library that adds colors and styles (like bold or underline) to terminal text.
  - **Purpose**: Enhances output readability and appeal by coloring messages (e.g., green for success, red for errors).

- **figlet Package**
  - **Definition**: A Node.js library that generates large, stylized text (ASCII art) from regular text.
  - **Purpose**: Creates eye-catching headers or banners in your CLI, like a big “Welcome” message.

- **cli-color Package**
  - **Definition**: A Node.js library similar to `chalk` for adding colors and formatting to terminal output.
  - **Purpose**: Improves output visuals with colors and styles, making it easier to distinguish different types of messages.

---

### 5. Command Line Arguments: process.argv, commander

**Sub-Terms**: `process.argv`, `commander` package.

- **process.argv**
  - **Definition**: A built-in Node.js array containing the arguments passed to your script when it’s run (e.g., `node script.js start`).
  - **Purpose**: Lets your program access user-provided inputs, like commands or options, to customize its behavior.

- **commander Package**
  - **Definition**: A Node.js library that simplifies parsing and managing command-line arguments, supporting commands, options, and help messages.
  - **Purpose**: Makes it easy to build complex CLIs with features like `script start --port 3000` or `script --help`, handling arguments professionally.

---

