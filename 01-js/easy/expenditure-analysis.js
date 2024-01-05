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

   let v={}

  for(let key in transactions)
  {
    const category = transactions[key]['category'];
    const price = transactions[key]['price'];

    v[category] = (v[category] || 0) + price;
  }

  let result=[]

  for(let key in v)
  {
    result.push({
      category:key,
      totalSpent:v[key],
    });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
