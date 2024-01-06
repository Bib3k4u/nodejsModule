// databaseAccess.js
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Insert a new user
const newUser = new User({
  name: 'John Doe',
  age: 25,
  email: 'john@example.com'
});

newUser.save((err, user) => {
  if (err) throw err;
  console.log('User saved successfully:', user);

  // Find all users
  User.find({}, (err, users) => {
    if (err) throw err;
    console.log('All users:', users);

    // Find a user and update
    User.findOneAndUpdate({ name: 'John Doe' }, { age: 26 }, { new: true }, (err, updatedUser) => {
      if (err) throw err;
      console.log('Updated user:', updatedUser);

      // Find a user and delete
      User.findOneAndDelete({ name: 'John Doe' }, (err, deletedUser) => {
        if (err) throw err;
        console.log('Deleted user:', deletedUser);

        // Find all users after update and delete
        User.find({}, (err, usersAfterUpdateAndDelete) => {
          if (err) throw err;
          console.log('All users after update and delete:', usersAfterUpdateAndDelete);

          // Close the MongoDB connection
          mongoose.connection.close(() => {
            console.log('MongoDB connection closed.');
          });
        });
      });
    });
  });
});
