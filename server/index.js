// server/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint for handling contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Message received from ${name} (${email}): ${message}`);
  // You could store this in a database or send an email here.
  res.json({ success: true, message: 'Thank you for contacting me!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
