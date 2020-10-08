const express = require('express');
const app = express();
const cors = require('cors');
const Vigenere = require('caesar-salad').Vigenere;
const port = 8000;

app.use(cors());
app.use(express.json());

app.post('/encode', (req, res) => {
  const cipher = Vigenere.Cipher(req.body.password).crypt(req.body.encoded);
  const obj = {
    'encoded': cipher,
  };
  res.send(obj);
});

app.post('/decode', (req, res) => {
  const decipher = Vigenere.Decipher(req.body.password).crypt(req.body.decoded);
  const obj = {
    'decoded': decipher,
  };
  res.send(obj);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});