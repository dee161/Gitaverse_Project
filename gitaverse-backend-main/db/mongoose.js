const mongoose = require('mongoose');
// mongodb+srv://deepanshukumawat16:<password>@gitaverse.ob92wwu.mongodb.net/
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://deepanshukumawat16:deepanshukumawat16@gitaverse.ob92wwu.mongodb.net/new?retryWrites=true&w=majority&appName=gitaverse")
.then(() => {
  console.log('connected mongo successful')
})
.catch((e) => {
  console.log('err while connecting to mongoDB')
  console.log(e);
});

module.exports = {
  mongoose
}