const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Banco SQLite em arquivo
const db = new sqlite3.Database(path.resolve(__dirname, "erp.db"), (err) => {
  if (err) return console.error(err.message);
  console.log("Conectado ao banco SQLite.");
});

// Criar tabela Produtos (se não existir)
db.run(`
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL
  )
`);

// Rotas Produtos
app.get("/produtos", (req, res) => {
  db.all("SELECT * FROM produtos", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/produtos", (req, res) => {
  const { nome, preco } = req.body;
  if (!nome || preco === undefined) return res.status(400).json({ error: "Dados inválidos" });

  const sql = "INSERT INTO produtos (nome, preco) VALUES (?, ?)";
  db.run(sql, [nome, preco], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, nome, preco });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
