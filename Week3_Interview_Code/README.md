# ContentOptimizer: Recursive String Reversal

This project implements a string reversal feature for TextWise Solutions' "ContentOptimizer" tool. The implementation utilizes a recursive approach to demonstrate fundamental computer science principles, emphasizing code readability and maintainability.

---

## 🚀 How It Works

The `reverseString` function uses **recursion** rather than traditional iterative loops. 

1. **Base Case**: The function checks if the string length is 1 or less. If so, it returns the string as-is.
2. **Recursive Step**: 
   - It extracts the **last character** of the current string.
   - It identifies the **remaining portion** (everything except the last character).
   - It calls itself again (`recurse`) with that remaining portion.
3. **Combination**: As the recursion "unwinds," it prepends the last character to the result of the recursive call, effectively flipping the string.



---

## ✨ Features

* **Recursive Implementation**: Avoids side effects by using functional programming patterns.
* **Stylistic Analysis Ready**: Designed to be integrated into algorithms that analyze sentence structures.
* **Educational Design**: Demonstrates clear base-case and recursive-case logic for easy maintenance and team onboarding.

---

## 🧪 Testing & Complexity

### Test Cases
The implementation includes validation for both standard usage and potential edge cases:
* **Normal Cases**:
    * Standard names (e.g., "Dmitriy")
    * All caps strings (e.g., "XYZABC")
    * Reversing already reversed strings.
* **Edge Cases**:
    * **Empty String**: Ensures the function handles `""` without errors.
    * **Single Character**: Validates that `"q"` returns `"q"`.
    * **Palindromes**: Ensures symmetry is maintained (e.g., `"racecar"`).

### Complexity Analysis
* **Time Complexity**: $O(n^2)$ — In JavaScript, `substring()` and string concatenation create new strings. Since the function is called $n$ times and performs $O(n)$ string operations each time, the total time is quadratic.
* **Space Complexity**: $O(n)$ — This accounts for the recursive call stack depth, which grows linearly with the length of the input string.

---

## 🛠️ How to Run

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DiscipleA/AD311_HW_Code/tree/main/Week3_Interview_Code
   cd Week3_Interview_Code
   ```
   
2. **Execute the script**:
   ```bash
   node reverseString.js
   ```
3. **Observe Results**: The terminal will display the output for all six pre-configured test cases (3 Normal, 3 Edge).

## 📺 Demos

| Feature | Walkthrough Link |
| :--- | :--- |
| Recursive Logic Breakdown & Coding | [https://youtu.be/QvuRWIgUnAU]
