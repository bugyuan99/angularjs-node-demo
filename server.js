const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static AngularJS files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Serve React production build
app.use('/react', express.static(path.join(__dirname, 'react-app', 'dist')));

// Simple API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Node.js API!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
