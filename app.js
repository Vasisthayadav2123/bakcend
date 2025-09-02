const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
  res.send('This is the GET response for /api/data');
});

app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.json({ message: "Data received", data: req.body });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
