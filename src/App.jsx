import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Pedidos from "./components/Pedidos";
import { pedidos as pedidosIniciais } from "./data/pedidos";
import ListaProdutos from "./components/ListaProdutos";
import { produtos } from "./data/produtos";
import ListaClientes from "./components/ListaClientes";
import { clientes } from "./data/clientes";
import Produtos from "./components/Produtos";

export default function App() {
  const [page, setPage] = useState("pedidos");

  return (
    <div className="flex min-h-screen">
      <Sidebar setPage={setPage} />
      <main className="flex-1 p-8 bg-purple-50">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-purple-800">
            Painel de Controle - Delivery de Açaí
          </h1>
        </header>

        {page === "pedidos" && <Pedidos pedidosInicial={pedidosIniciais} />}
        {page === "produtos" && <Produtos />}
        {page === "clientes" && <ListaClientes clientesIniciais={clientes} />}
        {page === "produtos" && <ListaProdutos />}
      </main>
    </div>
  );
}
