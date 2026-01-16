# JavaScript Algorithmic Challenges: Interview Simulations

This repository contains two JavaScript assignments designed to simulate real-world coding interview scenarios for environmental research and data analytics companies.

---

## 🚀 How It Works

### 1. Animal Leg Analytics (`Animal_Legs_Count.js`)
* **The Problem**: Given an array of animal names, the program must return the count of animals that possess exactly four legs.
* **The Logic**: The solution utilizes a reference list to categorize animals by their leg counts:
    * **Four Legs**: lion, deer, elephant, horse, dog, cat.
    * **Two Legs**: monkey, parrot, ostrich.
    * **No Legs**: snake, worm.
    * **Multiple (>4)**: spider, ant, centipede.
* **Implementation**: It iterates through the input array and increments a counter whenever a "four-legged" match is found.

### 2. Sorted Client Data Merger (`Merge_Clients.js`)
* **The Problem**: Consolidate two sorted arrays of customer IDs (`customerData1` and `customerData2`) into a single sorted array.
* **The Logic**: To optimize performance, the merge happens **in-place** within `customerData1`.
* **The Constraints**: `customerData1` is pre-allocated with a total length of $m + n$ to accommodate all incoming data.
* **The Strategy**: A **Three-Pointer** approach is typically used, starting from the back of the arrays to avoid overwriting existing data in `customerData1` while merging.



---

## ✨ Features

* **Optimized Space Complexity**: The client merger operates with $O(1)$ auxiliary space by utilizing the pre-allocated space in the first array.
* **Efficient Time Complexity**: Both solutions run in $O(N)$ linear time, ensuring they scale effectively with larger datasets.
* **Real-World Context**: Problems are framed as interview tasks to demonstrate both technical proficiency and the ability to follow specific business requirements.

---

## 🧪 Testing & Complexity (`Merge_Clients.js`)

### Complexity Analysis
* **Time Complexity**: $O(m + n)$ as each element is processed exactly once.
* **Space Complexity**: $O(1)$ because the merge occurs in-place within the existing array.

### Test Cases
* **Normal Cases**:
    * Both arrays have multiple elements (e.g., $m=3, n=3$).
    * All elements in `customerData1` are smaller than `customerData2`.
    * All elements in `customerData1` are larger than `customerData2`.
* **Edge Cases**:
    * `customerData2` is empty ($n=0$).
    * Arrays contain duplicate customer IDs.
    * `customerData1` has only one record ($m=1$).

---

## 🛠️ How to Run

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Clone the Repository**:
   ```bash
   git clone <your-repository-url>
   cd <your-repository-folder>
   ```
2. **Run Assignment 1 & 2**:
    ```bash
    node Animal_Legs_Count.js
    node Merge_Clients.js
    ```
📺 Demos
1. **Assignment 1 Part 1**: https://youtu.be/9GzkudxjQms
   **Assignment 1 Part 2**: https://youtu.be/ehsK2W0sQSg

2. **Assignment 2**: https://youtu.be/6Lkv43zeqoI
