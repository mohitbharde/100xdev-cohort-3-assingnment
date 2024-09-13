/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr = [];
  transactions.forEach((transaction) => {
    let categories = transaction.category;
    if (isPresent(arr, categories)) {
      arr[indexOfArr(arr, categories)].totalSpent += transaction.price;
    }
    else {
      arr.push({ category: transaction.category, totalSpent: transaction.price });
    }
  })
  return arr;
}

function isPresent(arr, category) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].category === category) {
      return true;
    }
  }
  return false;
}

function indexOfArr(arr, category) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].category == category) {
      return i;
    }
  }
  return -1;
}



// calculateTotalSpentByCategory(transactions)

module.exports = calculateTotalSpentByCategory;
