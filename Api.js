const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let colaboradores = [];

app.get('/colaboradores', (req, res) => {
  res.json(colaboradores);
});

app.post('/colaboradores', (req, res) => {
  const colaborador = req.body;
  colaboradores.push(colaborador);
  res.json(colaborador);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
