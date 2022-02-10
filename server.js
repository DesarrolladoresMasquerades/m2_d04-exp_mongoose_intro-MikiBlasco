/**
 * Liveshare hack
 */

require("dotenv/config")
require("./configs/database.config");

 const Cat = require("./models/Cat.model");

// Cat.findOneAndUpdate() is dangerous because it will update the worng objects
// if the fiilter b'object is "wrong"
Cat.findByIdAndUpdate("620503a57e29e9bf64cadaf4", { $set: { name: "Sandra" } },
{new: true})
.then((cat) => console.log(cat));