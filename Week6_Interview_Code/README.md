# Tech Interview Prep AD311: Analyzing Financial Growth Trends | Array


## 📂 Project Overview

A high-performance JavaScript utility designed to process historical financial growth data. This program transforms yearly growth percentages by squaring them (to highlight volatility and magnitude) and returns them in a sorted, non-decreasing order.

## 🚀 How It Works

The program implements an **Optimized Two-Pointer Algorithm**. Since the input array is already sorted in non-decreasing order, the largest squared values must reside at the boundaries (the most negative values on the left or the most positive values on the right).

1. **Initialize**: Two pointers are set at the `left` (index 0) and `right` (last index) of the array.
2. **Compare**: The squares of the values at both pointers are calculated using the exponentiation operator (`** 2`).
3. **Place**: The larger square is placed into the `result` array starting from the last index (`resultIndex`) to maintain sorted order without a secondary sort pass.
4. **Iterate**: The corresponding pointer is moved inward, and the process repeats until the array is fully processed.

---

## ✨ Features

* **Linear Efficiency**: Achieves $O(n)$ time complexity, making it significantly faster than squaring and then sorting ($O(n \log n)$).
* **Built-in Validation**: Includes a suite of automated console-log tests to verify logic instantly upon execution.
* **Memory Efficiency**: Allocates memory for the result array upfront, reducing the overhead of dynamic array resizing.
* **Robust Coverage**: Handles mixed integers, strictly negative values, empty sets, and duplicate values.

---

## 📊 Complexity Analysis

| Metric | Complexity | Description |
| :--- | :--- | :--- |
| **Time Complexity** | $O(n)$ | The algorithm passes through the array exactly once. |
| **Space Complexity** | $O(n)$ | A new array of size $n$ is created to store the squared results. |

---

## 🛠️ How To Run

Since the script includes its own test runner, you do not need external dependencies like Jest to see the results.

### Prerequisites
* **Node.js** installed on your machine.

### Execution
1.  Save the code into a file named `sortedSquares.js`.
2.  Open your terminal or command prompt.
3.  Navigate to the directory containing the file.
4.  Run the following command:
    ```bash
    node sortedSquares.js
    ```
5.  The terminal will output the results of the 3 Normal and 3 Edge test cases.

---

## 🎥 Demo Table

The following videos demonstrate the implementation, testing phase, and logic walkthrough.

| Video Title | Description | Link |
| :--- | :--- | :--- |
| **Logic & Implementation** | Step-by-step walkthrough of the Two-Pointer approach. | [Watch on YouTube](https://youtube.com/link_here) |
