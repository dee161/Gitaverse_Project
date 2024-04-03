const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("")
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