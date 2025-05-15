import React from 'react';

export default function Sidebar({ setPage }) {
  return (
    <nav className="w-48 bg-purple-700 min-h-screen p-4 text-white">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul>
        <li 
          className="mb-4 cursor-pointer hover:bg-purple-600 rounded px-3 py-2"
          onClick={() => setPage('pedidos')}
        >
          Pedidos
        </li>
        <li 
          className="mb-4 cursor-pointer hover:bg-purple-600 rounded px-3 py-2"
          onClick={() => setPage('produtos')}
        >
          Produtos
        </li>
        <li 
          className="mb-4 cursor-pointer hover:bg-purple-600 rounded px-3 py-2"
          onClick={() => setPage('clientes')}
        >
          Clientes
        </li>
      </ul>
    </nav>
  );
}
