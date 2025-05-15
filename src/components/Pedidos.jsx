import React, { useState } from "react";
import FormPedido from "./FormPedido";

export default function Pedidos({ pedidosInicial }) {
  const [pedidos, setPedidos] = useState(pedidosInicial);

  function adicionarPedido(novoPedido) {
    setPedidos([novoPedido, ...pedidos]);
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Lista de Pedidos</h2>

      <FormPedido onAdd={adicionarPedido} />

      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-purple-700 text-white">
            <th className="py-2 px-4 text-left">Cliente</th>
            <th className="py-2 px-4 text-left">Produto</th>
            <th className="py-2 px-4 text-center">Quantidade</th>
            <th className="py-2 px-4 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(({ id, cliente, produto, quantidade, status }) => (
            <tr key={id} className="border-b hover:bg-purple-50">
              <td className="py-2 px-4">{cliente}</td>
              <td className="py-2 px-4">{produto}</td>
              <td className="py-2 px-4 text-center">{quantidade}</td>
              <td className="py-2 px-4 text-center">{status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

