import { useEffect, useState } from 'react';
import { api } from '../services/api.ts';
import type { Recurso } from '../types';
import { RecursoCard } from '../components/RecursoCard';
import { Search } from 'lucide-react';

export default function HubGlobal() {
  const [recursos, setRecursos] = useState<Recurso[]>([]);
  const [busca, setBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');

  const loadRecursos = async () => {
    try {
      const data = await api.getRecursos();
      setRecursos(data);
    } catch (error) {
      console.error("Erro ao carregar recursos:", error);
    }
  };

  useEffect(() => {
    loadRecursos();
  }, []);

  const recursosFiltrados = recursos.filter(rec => {
    const titulo = rec.titulo ? rec.titulo.toLowerCase() : '';
    const descricao = rec.descricao ? rec.descricao.toLowerCase() : '';
    const termoBusca = busca.toLowerCase();

    const matchBusca = titulo.includes(termoBusca) || descricao.includes(termoBusca);
    const matchCat = filtroCategoria === 'Todas' || rec.categoria === filtroCategoria;
    
    return matchBusca && matchCat;
  });

  const categorias = ['Todas', 'Java', 'Frontend', 'IA', 'Soft Skills', 'DevOps'];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Hub Global de Conhecimento</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Explore recursos curados pela nossa comunidade. Aprenda, compartilhe e evolua sua carreira.
        </p>
      </div>

      {/* Barra de Busca e Filtros */}
      <div className="flex flex-col md:flex-row gap-4 justify-between bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
        <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 text-slate-400" size={20} />
            <input 
                type="text" 
                placeholder="Pesquisar por título ou descrição..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-slate-800 dark:text-white"
                value={busca}
                onChange={e => setBusca(e.target.value)}
            />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categorias.map(cat => (
                <button 
                    key={cat}
                    onClick={() => setFiltroCategoria(cat)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                        filtroCategoria === cat 
                        ? 'bg-primary text-white' 
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recursosFiltrados.map(rec => (
            <RecursoCard key={rec.id} recurso={rec} />
        ))}
        {recursosFiltrados.length === 0 && (
            <div className="col-span-full text-center py-10 text-slate-500">
                Nenhum recurso encontrado para os filtros selecionados.
            </div>
        )}
      </div>
    </div>
  );
}