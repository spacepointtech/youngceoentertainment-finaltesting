// // backend/index.js
// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const cors = require('cors');

// // Load environment variables
// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware to parse incoming JSON requests
// app.use(express.json());

// // Basic route for testing
// app.get('/', (req, res) => {
//     res.send('Backend is running!');
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Backend Server is Active!! ${port}`);
// });



// // Use CORS to allow requests from other origins
// app.use(cors({
//   origin: 'http://localhost:3000', // Frontend origin
//   methods: ['GET', 'POST'],        // Allowed methods
// }));


// // Connect to the database
// connectDB();



// backend/index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();

// // Enable CORS for frontend requests
app.use(cors({
  origin: 'http://localhost:3000',
}));




app.use(express.json());

// Register the user routes
app.use('/api', userRoutes);  // <-- This line ensures the /api/signup route is available

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



