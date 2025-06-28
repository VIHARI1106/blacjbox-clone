const express = require('express');
const app = express();
const blackboxRoutes = require('./routes/blackbox');

app.use(express.json()); // Parse JSON request bodies

// Mount blackbox routes
app.use('/blackbox', blackboxRoutes);

// Catch-all for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
