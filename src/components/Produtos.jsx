import React, { useEffect, useState } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  const adicionarProduto = async (e) => {
    e.preventDefault();
    if (!nome || !preco) return alert("Preencha nome e preço");

    try {
      const res = await fetch("http://localhost:4000/produtos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, preco: parseFloat(preco) }),
      });
      if (!res.ok) throw new Error("Erro ao adicionar produto");

      const novoProduto = await res.json();
      setProdutos([...produtos, novoProduto]);
      setNome("");
      setPreco("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Produtos</h2>

      <form onSubmit={adicionarProduto} className="mb-6">
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="border p-2 mr-2"
          step="0.01"
          min="0"
        />
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
          Adicionar
        </button>
      </form>

      <ul>
        {produtos.map((produto) => (
          <li key={produto.id} className="mb-2">
            {produto.nome} — R$ {produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
