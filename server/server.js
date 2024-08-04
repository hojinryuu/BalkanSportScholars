const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contacts');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/contacts', contactRoutes);

const dbURI ='mongodb+srv://hojinryu:LJQE7NhnY99z1JnV@primary-cluster.ty6scxp.mongodb.net/?retryWrites=true&w=majority&appName=primary-cluster';
mongoose.connect(dbURI)
    .then(() => console.log('MongoDB Atlas connected...'))
    .catch(err => console.log(err));

// Simple test endpoint
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
