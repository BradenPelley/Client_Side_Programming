//Part 1: Create the Data

const expenses = [
  { name: "Lunch", category: "Food", amount: 12 },
  { name: "Groceries", category: "Food", amount: 45 },
  { name: "Bus Ticket", category: "Transport", amount: 4 },
  { name: "Gas", category: "Transport", amount: 30 },
  { name: "Movie Ticket", category: "Entertainment", amount: 15 },
  { name: "Spotify Subscription", category: "Entertainment", amount: 10 }
];

//Part 2: Iterating Over Array

console.log("All Expenses:");

expenses.forEach(exp => {
  console.log(`${exp.name} | ${exp.category} | $${exp.amount}`);
});

//Part 3: Using map (Add 15% tax)

const expensesWithTax = expenses.map(exp => {
  return {
    name: exp.name,
    category: exp.category,
    amount: +(exp.amount * 1.15).toFixed(2)
  };
});

console.log("\nExpenses With 15% Tax:");
console.log(expensesWithTax);

//Part 4: Using filter (Only Food expenses)

const foodExpenses = expenses.filter(exp => exp.category === "Food");

console.log("\nFood Expenses:");
console.log(foodExpenses);

//Part 5: Using reduce (Calculate total spent)

const totalSpent = expenses.reduce((total, exp) => {
  return total + exp.amount;
}, 0);

console.log("\nTotal Spent: $" + totalSpent);


//BONUS: Total spent on Food only

const totalFoodSpent = foodExpenses.reduce((total, exp) => {
  return total + exp.amount;
}, 0);

console.log("Total Spent on Food: $" + totalFoodSpent);
