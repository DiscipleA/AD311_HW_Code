# 🎟️ Technical Interview Prep AD311: Ticketing System Simulation

A lightweight, asynchronous simulation of a service center ticketing system. This project demonstrates how to manage sequential data processing using JavaScript classes, arrays as queues, and `async/await` for timing simulation.

---

## ⚙️ How It Works

The system operates in two distinct phases to ensure orderly data management:

1.  **Ticket Generation Phase**: A `for` loop instantiates new `Ticket` objects. Each ticket is assigned a unique sequence number and a high-precision timestamp. These are then "pushed" into the back of the queue.
2.  **Processing Phase**: Utilizing a `while` loop, the system "shifts" the oldest ticket from the front of the queue (**First-In, First-Out**). The system simulates "serving" the customer by introducing a controlled delay before moving to the next ticket.

## ✨ Features

* **Ticket Class**: Encapsulates data with a unique ID and automatic timestamp generation.
* **Asynchronous Flow**: Uses `Promises` and `setTimeout` to mimic real-world arrival and service intervals.
* **FIFO Logic**: Ensures the first customer to take a ticket is the first one served.
* **Edge Case Handling**: Built-in logic to gracefully handle zero or negative customer counts.
* **Validation Suite**: Includes a set of automated tests to verify system integrity across different scenarios.

---

## 🚀 How to Run

### Prerequisites
* **Node.js** (Version 14.x or higher recommended)

### Execution Steps
1.  **Create the file**: Create a file named `ticketingSystem.js`.
2.  **Paste the Code**: Copy the implementation code into the file.
3.  **Open Terminal**: Navigate to the folder containing your file.
4.  **Run the script**:
    ```bash
    node ticketingSystem.js
    ```
5.  **Observe Output**: The console will display the results of the internal test suite, confirming if the logic passed for both normal and edge cases.

---

## 📺 Demo Links

Below are the video demonstrations of the system in action.

| Phase | Description | Video Link |
| :--- | :--- | :--- |
| **Logic Walkthrough** | Deep dive into the `Ticket` class and `runTicketingSystem` function. | [Watch on YouTube](https://youtube.com/) |