const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
}, {
  versionKey: false,
  timestamps: true
})

//midleware
UserSchema.pre('save', function (next) {
  console.log('------antes-------')
  console.log(this.email, this.password)
  console.log('-------------')
  const hasdhedPassword = bcrypt.hashSync(this.password,12)
  console.log('------despues-------')
  console.log(this.email, this.password)
  console.log('-------------')
  this.password = hasdhedPassword
  next()
})

const UserModel = model('users', UserSchema)

module.exports = UserModel