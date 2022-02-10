// import/require the model

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// ****************************************************************************************************
// ****************************************************************************************************
// Reading the cats from DB (use find(), findOne(), findById())
// ----------------------------------------------------------------------------

// .find() we are always getting array back as a response
Cat

// .findById() we are always getting object back as a response
Cat

// Bonus: Count documents



Cat.find({
    age:{ $gt: 0 },
    color: { $in: ["pink", "black", "orange"] },
    //friends: { $elemMatch: { $eq: "marco" } }
    friends: { $all:  ["marco"] }       
})
.then((cats) => cats.forEach((cat) => console.log(cat)))
.catch((error) => console.log(error)); 
//