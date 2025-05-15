// src/api.js
const API_URL = "http://localhost:4000";

export async function getProdutos() {
  const res = await fetch(`${API_URL}/produtos`);
  return res.json();
}

export async function adicionarProduto(novoProduto) {
  const res = await fetch(`${API_URL}/produtos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(novoProduto),
  });
  return res.json();
}
