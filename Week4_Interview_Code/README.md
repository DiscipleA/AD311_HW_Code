# Retail Inventory Management: Restock Automation

This project implements a critical feature for a retail inventory system. It automates the "restock order" process by duplicating zero-stock entries within an inventory array while maintaining the original array length.

---

## 🚀 How It Works

The `restockInventory` function uses an **in-place** modification strategy to handle out-of-stock items (represented by `0`).

1. **Traversal**: The script uses a `while` loop to iterate through the array. 
2. **Identification**: When the system encounters a `0`, it interprets this as a product needing a restock.
3. **Duplication & Shifting**:
    * It uses `splice(i + 1, 0, 0)` to insert a duplicate zero immediately after the current one.
    * Because `splice` increases the array length, `pop()` is immediately called to remove the last element, keeping the inventory size constant.
4. **Pointer Management**: After a duplication, the index `i` is incremented twice (once via `i++` inside the if-block and once at the end of the loop) to skip the newly created duplicate.



---

## ✨ Features

* **In-Place Modification**: No secondary arrays are created, optimizing memory usage.
* **Constant Array Length**: Elements shifted beyond the original capacity are automatically discarded.
* **Dynamic Pointer Logic**: Intelligently skips duplicated elements to prevent infinite loops.
* **Strict Adherence to Requirements**: Does not modify elements beyond the original array length.

---

## 📊 Complexity Analysis

* **Time Complexity**: $O(n^2)$  
  While the `while` loop visits each element, the `splice()` method is itself an $O(n)$ operation because it must shift all subsequent elements to the right. In the worst case (an array of all zeros), the total time is quadratic.
* **Space Complexity**: $O(1)$  
  The algorithm is highly space-efficient as it does not use any additional data structures. All modifications are performed directly on the input array.

---

## 🧪 Testing & Validation

The script includes a suite of test cases to ensure reliability across different retail scenarios:

* **Normal Cases**:
    * Multiple zeros throughout the list (e.g., `[4,0,1,3,0,2,5,0]`).
    * Zeros at the very beginning of the inventory.
    * Zeros near the end where the shifted elements are truncated.
* **Edge Cases**:
    * **Empty Inventory**: Handles `[]` gracefully.
    * **Full Zeros**: Validates performance when every item is out of stock.
    * **No Zeros**: Ensures inventory remains untouched if all products are in stock.

---

## 🛠️ How to Run

1.  **Install Node.js**: Ensure you have a modern version of Node.js installed.
2.  **Save the Script**: Ensure your code is saved in a file named `restockInventory.js`.
3.  **Run via Terminal**:
    ```bash
    node restockInventory.js
    ```
4.  **Verify Results**: The console will log `true` for each test case if the logic correctly matches the expected output.

---

## 📺 Demos

| Resource | Description |
| :--- | :--- |
| **In-Place Array coding** | [Duplicate Zeros Logic Coding](https://youtu.be/wpvbIwN5Ufc) |
