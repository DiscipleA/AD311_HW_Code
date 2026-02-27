# Simple Text Editor with Undo Support

This project implements a basic text editor model in JavaScript. It utilizes the **Stack** data structure to track operations, allowing users to reverse their actions (Undo) in the exact order they were performed.

---

## 📝 Assignment Overview
The objective is to manage text state changes using a `TextOperation` class. Every time a character is added or removed, a "Command" object is pushed onto a stack. When an undo is requested, the system pops the last command and performs the inverse action to restore the previous state.

---

## ⚙️ How It Works
The editor relies on the **Last-In, First-Out (LIFO)** principle of a Stack:
1. **Add**: Appends a character to the string and pushes an 'add' operation to the stack.
2. **Delete**: Removes the last character and pushes a 'delete' operation (saving the deleted character) to the stack.
3. **Undo**: 
   - Pops the most recent operation from the stack.
   - If the operation was an **Add**, it removes the character.
   - If the operation was a **Delete**, it restores the saved character.

---

## ✨ Features
* **Granular Undo**: Tracks specific characters so that deletions can be perfectly restored.
* **Stack Integration**: Efficiently manages history without storing the entire string multiple times.
* **Safety Checks**: Gracefully handles undo/delete requests on empty strings to prevent crashes.

---

## 🛠️ How To Run
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Save the script as `editor.js`.
3. Execute the script in your terminal:
   ```bash
   node TextOperation.js
   ```
---   

## 📊 Complexity Analysis

| Operation | Time Complexity | Space Complexity |
| :--- | :--- | :--- |
| **Add** | $O(1)*$ | $O(1)$ |
| **Delete** | $O(n)$ | $O(1)$ |
| **Undo** | $O(n)$ | $O(1)$ |

---

## 🎥 Demo Table

The following videos demonstrate the implementation, testing phase, and logic walkthrough.

| Video Title | Description | Link |
| :--- | :--- | :--- |
| **Stack Logic Explained & Test Code** | Deep dive into how LIFO applies to Undo/Redo. | [Watch on YouTube](https://youtube.com/link_here) |
| **Code Walkthrough** | Explanation of the TextOperation & SimpleTextEditor classes. | [Watch on YouTube](https://youtube.com/link_here) |