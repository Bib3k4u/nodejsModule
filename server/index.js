// index.js
const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    // Perform CRUD operations using the User model
    const newUser = await db.User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    });

    const allUsers = await db.User.findAll();

    res.json({ newUser, allUsers });
  } catch (error) {
    console.error('Error performing CRUD operations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
