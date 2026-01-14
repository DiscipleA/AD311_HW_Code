# JavaScript Foundations AD311: Scoping and Modern Syntax (Week 2)

This repository contains three assignments focused on modernizing JavaScript code through proper variable declaration and the versatile use of **Spread Syntax**.

## 📂 Project Structure
* **`Var_Declaration.js`**: Exercises in identifying where `const` and `let` are appropriate based on reassignment needs.
* **`VarToConst_Let.js`**: A refactoring exercise focusing on function-level scope and the reliability of modern keywords.
* **`Exploring_Spread.js`**: Deep dive into spread syntax (`...`) across functions, arrays, and objects.

---

## 🚀 How it Works

### 1. Variable Declaration & Scoping (`Var_Declaration.js`)
In this assignment, `var` was replaced by evaluating whether a variable's value changes:
* **`let` for Reassignment**: Used for variables like `fullName`, `age`, and `MAXIMUM` where values are updated after the initial declaration.
* **`const` for Reference Types**: Used for `loopArray` because while the array contents change via `.push()`, the variable binding itself remains constant.
* **Logical Constraints**: `let` was chosen for loop iterators (`i`) because using `const` in a standard `for` loop would result in an error during the increment step.

### 2. Refactoring Legacy Code (`VarToConst_Let.js`)
This assignment focused on enhancing code reliability through modern scoping:
* **Deferred Initialization**: `accessLevel` was declared with `let` because it must be initialized later within conditional blocks.
* **Block Scope Protection**: Variables like `message` were refactored to `let` to ensure they are contained within their specific blocks, preventing "leaking" or unexpected behavior.
* **Loop Scoping**: The loop iterator `i` was changed to `let` to ensure it is block-scoped and doesn't leak into the global namespace.

### 3. Spread Syntax Mastery (`Exploring_Spread.js`)
This module demonstrates the "unpacking" of data structures:
* **Function Argument Expansion**: Using `...numbers` to pass an array of random values into a `sum` function as individual arguments.
* **Array Manipulation**: Merging multiple arrays (`mergedArray`) and inserting elements at specific positions (`extendedColors`) without mutating original data.
* **Object Operations**: 
    * **Cloning**: Creating a shallow copy of the `person` object to ensure modifications to `newPerson` do not affect the original.
    * **Merging & Overwriting**: Combining `object1` and `object2`, demonstrating that when keys conflict (like property `b`), the last object spread into the new one takes precedence.



---

## ⚠️ The Dangers of `var` (Bug Report)
Based on the refactoring tasks, the following vulnerabilities were identified in legacy `var` code:
* **Global/Function Leakage**: `var` does not respect block scopes (like `if` statements), allowing variables like `message` to be accessed or accidentally overwritten outside their intended block.
* **Redeclaration Risks**: `var` allows multiple declarations of the same variable name, leading to silent bugs where data is overwritten without warning.
* **Hoisting**: Variables declared with `var` are initialized as `undefined` before the code runs, potentially leading to logical errors if used before their actual definition.



---

## 🛠️ How to Run

Ensure you have [Node.js](https://nodejs.org/) installed, then run the files via the terminal:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   ```

2. **Run the scripts:**

    ```bash
    node Var_Declaration.js
    node VarToConst_Let.js
    node Exploring_Spread.js
    ```
3. **Verify Output:** The results for each task—including access levels, merged arrays, and object comparisons—will be displayed in your terminal.
