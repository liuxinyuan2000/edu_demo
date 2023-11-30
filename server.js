const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
