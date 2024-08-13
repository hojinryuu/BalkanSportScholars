require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const contactRoutes = require('./routes/contacts');

const app = express();

app.use(express.json());
app.use(cors());

// API routes
app.use('/api/contacts', contactRoutes);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI)
    .then(() => console.log('MongoDB Atlas connected...'))
    .catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
