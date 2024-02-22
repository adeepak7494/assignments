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
  const result = [];
  transactions.forEach(ele => {
    const index = result.findIndex(e => e.category === ele.category)
    if( index > -1) {
      result[index].totalSpent = result[index].totalSpent + ele.price;
    }
    else {
      result.push({category : ele.category , totalSpent : ele.price});
    }
  })
  return result;
}

module.exports = calculateTotalSpentByCategory;
