import { useEffect, useState } from "react";
import axios from "axios";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState("");

  // Carregar produtos da API ao iniciar
  useEffect(() => {
    axios.get("http://localhost:4000/produtos")
      .then(res => setProdutos(res.data))
      .catch(err => console.error("Erro ao buscar produtos:", err));
  }, []);

  const adicionarProduto = () => {
    if (!novoProduto.trim()) return;

    axios.post("http://localhost:4000/produtos", { nome: novoProduto })
      .then(res => {
        setProdutos([...produtos, res.data]);
        setNovoProduto("");
      })
      .catch(err => console.error("Erro ao adicionar produto:", err));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Produtos</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={novoProduto}
          onChange={(e) => setNovoProduto(e.target.value)}
          placeholder="Nome do produto"
          className="border p-2 rounded-l w-full"
        />
        <button
          onClick={adicionarProduto}
          className="bg-purple-600 text-white px-4 rounded-r"
        >
          Adicionar
        </button>
      </div>
      <ul className="space-y-2">
        {produtos.map((produto) => (
          <li key={produto.id} className="bg-white p-2 rounded shadow">
            {produto.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}

