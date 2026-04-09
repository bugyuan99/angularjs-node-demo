const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static AngularJS files from /public
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Simple API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Node.js API!' });
});

// In-memory account store
let accounts = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob',   email: 'bob@example.com'   },
];
let nextId = 3;

// GET all accounts
app.get('/api/accounts', (req, res) => {
  res.json(accounts);
});

// GET single account by id
app.get('/api/accounts/:id', (req, res) => {
  const account = accounts.find(a => a.id === parseInt(req.params.id));
  if (!account) return res.status(404).json({ error: 'Account not found' });
  res.json(account);
});

// POST create a new account
app.post('/api/accounts', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'name and email are required' });
  const account = { id: nextId++, name, email };
  accounts.push(account);
  res.status(201).json(account);
});

// PUT update an account
app.put('/api/accounts/:id', (req, res) => {
  const account = accounts.find(a => a.id === parseInt(req.params.id));
  if (!account) return res.status(404).json({ error: 'Account not found' });
  const { name, email } = req.body;
  if (name)  account.name  = name;
  if (email) account.email = email;
  res.json(account);
});

// DELETE an account
app.delete('/api/accounts/:id', (req, res) => {
  const index = accounts.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Account not found' });
  const deleted = accounts.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
