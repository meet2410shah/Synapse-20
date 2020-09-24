const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

// Create Schema and Model
const registrationSchema = new Schema({
  name: String,
  college: String,
  email: String,
  mobile: Number,
  type: String,
  category: String,
  groupevents: String,
  game: String,
  payment: { type: Boolean, default: false },
  order_id: { type: String, default: "" }
});

module.exports = mongoose.model(`Registration`, registrationSchema);
