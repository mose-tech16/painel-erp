import React, { useState } from "react";

export default function FormPedido({ onAdd }) {
  const [cliente, setCliente] = useState("");
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!cliente || !produto || quantidade < 1) return alert("Preencha todos os campos!");

    onAdd({
      id: Date.now(),
      cliente,
      produto,
      quantidade: Number(quantidade),
      status: "Pendente",
    });

    setCliente("");
    setProduto("");
    setQuantidade(1);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Novo Pedido</h2>

      <div className="mb-3">
        <label className="block mb-1">Cliente:</label>
        <input
          type="text"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Produto:</label>
        <input
          type="text"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Quantidade:</label>
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          min="1"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
      >
        Adicionar Pedido
      </button>
    </form>
  );
}
