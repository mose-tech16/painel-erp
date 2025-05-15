import React, { useState } from "react";

export default function ListaClientes({ clientesIniciais }) {
  const [clientes, setClientes] = useState(clientesIniciais);

  function adicionarCliente(novoCliente) {
    setClientes([novoCliente, ...clientes]);
  }

  function FormCliente({ onAdd }) {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      if (!nome || !telefone) return alert("Preencha todos os campos!");

      onAdd({
        id: Date.now(),
        nome,
        telefone,
      });

      setNome("");
      setTelefone("");
    }

    return (
      <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Novo Cliente</h2>

        <div className="mb-3">
          <label className="block mb-1">Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1">Telefone:</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
        >
          Adicionar Cliente
        </button>
      </form>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Lista de Clientes</h2>

      <FormCliente onAdd={adicionarCliente} />

      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-purple-700 text-white">
            <th className="py-2 px-4 text-left">Nome</th>
            <th className="py-2 px-4 text-left">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(({ id, nome, telefone }) => (
            <tr key={id} className="border-b hover:bg-purple-50">
              <td className="py-2 px-4">{nome}</td>
              <td className="py-2 px-4">{telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

