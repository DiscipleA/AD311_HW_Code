class Ticket {
  constructor(number) {
    this.number = number;
    this.timestamp = new Date().toLocaleTimeString();
  }
}

async function runTicketingSystem(totalCustomers) {
  const queue = [];
  const served = []; // Added to track results for the test

  for (let i = 1; i <= totalCustomers; i++) {
    const newTicket = new Ticket(i);
    queue.push(newTicket);
    // console.log(`[Issued] Ticket #${newTicket.number} issued at ${newTicket.timestamp}`);
    await new Promise(res => setTimeout(res, 10)); // Shortened for fast testing
  }

  while (queue.length > 0) {
    const currentTicket = queue.shift();
    served.push(currentTicket.number);
    // console.log(`[Serving] Ticket #${currentTicket.number} (Issued: ${currentTicket.timestamp})`);
    await new Promise(res => setTimeout(res, 10));
  }

  return served; // Must return the array to make the test work
}

// runTicketingSystem(5);

// Normal Tests
console.log("Test 1 (Normal) passed =>", (await runTicketingSystem(5)).join() === [1, 2, 3, 4, 5].join());
console.log("Test 2 (Normal) passed =>", (await runTicketingSystem(3)).join() === [1, 2, 3].join());
console.log("Test 3 (Normal) passed =>", (await runTicketingSystem(2)).join() === [1, 2].join());

// Edge Tests
console.log("Test 1 (Edge) passed =>", (await runTicketingSystem(0)).join() === [].join());
console.log("Test 2 (Edge) passed =>", (await runTicketingSystem(-1)).join() === [].join());
console.log("Test 3 (Edge) passed =>", (await runTicketingSystem(1)).join() === [1].join());