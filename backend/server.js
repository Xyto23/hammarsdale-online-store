const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
app.use('/api/products', require('./routes/products'));

// --- Add more routes here (auth, vendor, admin, orders) ---

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`HAMMARSDALE ONLINE STORE backend running on port ${PORT}`)))
    .catch(err => console.error(err));
