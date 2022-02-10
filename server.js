/**
 * Liveshare hack
 */

 require("./configs/database.config");

 const Cat = require("./models/Cat.model");


 Cat.find({
         age:{ $gt: 0 },
         color: { $in: ["pink", "black", "orange"] },
         //friends: { $elemMatch: { $eq: "marco" } }
         friends: { $all:  ["marco"] }       
     })
   .then((cats) => cats.forEach((cat) => console.log(cat)))
   .catch((error) => console.log(error)); 
 //
 