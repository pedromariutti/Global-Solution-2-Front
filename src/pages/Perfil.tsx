import { useState, useEffect } from 'react';
import type { Usuario, Recurso } from '../types';
import { api } from '../services/api.ts';
import { RecursoCard } from '../components/RecursoCard';
import { PlusCircle, Trophy, Star, Share2 } from 'lucide-react';

export default function Perfil() {
    
    const [usuario] = useState<Usuario>({
        id: 1, 
        nome: "Colaborador FIAP",
        email: "dev@fiap.com.br",
        pontos: 0,
        nivel: "Iniciante",
        avatarUrl: "https://github.com/github.png"
    });

    const [meusRecursos, setMeusRecursos] = useState<Recurso[]>([]);
    const [novoRecurso, setNovoRecurso] = useState({ titulo: '', link: '', categoria: 'Java', descricao: '' });
    const [showForm, setShowForm] = useState(false);

   
    useEffect(() => {
        carregarMeusDados();
    }, []);

    const carregarMeusDados = async () => {
        try {
            const todos = await api.getRecursos();
           
            const meus = todos.filter((r: Recurso) => r.idUsuario === usuario.id);
            setMeusRecursos(meus);
            
          
            const pontosCalculados = meus.length * 10;
            let nivelCalculado = "Iniciante";
            if (pontosCalculados > 50) nivelCalculado = "Especialista";
            else if (pontosCalculados > 20) nivelCalculado = "Intermediário";

            
            usuario.pontos = pontosCalculados;
            usuario.nivel = nivelCalculado;
        } catch (error) {
            console.error("Erro ao carregar perfil:", error);
        }
    };

    const handleSalvar = async (e: React.FormEvent) => {
        e.preventDefault();
        const rec: Recurso = { 
            ...novoRecurso, 
            idUsuario: usuario.id,
            descricao: novoRecurso.descricao || ""
        };
        
        const sucesso = await api.createRecurso(rec);
        if (sucesso) {
            alert('Recurso compartilhado! Você ganhou +10 pontos.');
            setShowForm(false);
            setNovoRecurso({ titulo: '', link: '', categoria: 'Java', descricao: '' });
            carregarMeusDados();
        } else {
            alert('Erro ao salvar. Verifique se o link começa com http.');
        }
    };

    const handleDelete = async (id: number) => {
        if(confirm("Deseja remover este item? Seus pontos serão recalculados.")) {
            await api.deleteRecurso(id);
            carregarMeusDados();
        }
    }

    return (
        <div className="space-y-8">
            {/* Header do Perfil */}
            <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-white shadow-lg flex flex-col md:flex-row items-center gap-6">
                <img src={usuario.avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-white/30" />
                <div className="text-center md:text-left flex-grow">
                    <h1 className="text-3xl font-bold">{usuario.nome}</h1>
                    <p className="text-primary-100">{usuario.email}</p>
                    <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                        <div className="bg-white/20 px-4 py-2 rounded-lg flex items-center gap-2 backdrop-blur-sm">
                            <Trophy className="text-yellow-300" />
                            <span className="font-bold text-xl">{usuario.pontos} XP</span>
                        </div>
                        <div className="bg-white/20 px-4 py-2 rounded-lg flex items-center gap-2 backdrop-blur-sm">
                            <Star className="text-yellow-300" />
                            <span className="font-bold">{usuario.nivel}</span>
                        </div>
                    </div>
                </div>
                <button 
                    onClick={() => setShowForm(!showForm)}
                    className="bg-white text-primary px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition flex items-center gap-2"
                >
                    <PlusCircle /> Novo Recurso
                </button>
            </div>

            {/* Formulário */}
            {showForm && (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 animate-fade-in-down">
                    <h2 className="text-xl font-bold mb-4 dark:text-white">Compartilhar Conhecimento</h2>
                    <form onSubmit={handleSalvar} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                            required 
                            placeholder="Título do Conteúdo" 
                            className="input-padrao"
                            value={novoRecurso.titulo}
                            onChange={e => setNovoRecurso({...novoRecurso, titulo: e.target.value})}
                        />
                        <select 
                            className="input-padrao"
                            value={novoRecurso.categoria}
                            onChange={e => setNovoRecurso({...novoRecurso, categoria: e.target.value})}
                        >
                            <option>Java</option>
                            <option>Frontend</option>
                            <option>IA</option>
                            <option>Soft Skills</option>
                            <option>DevOps</option>
                        </select>
                        <input 
                            required 
                            placeholder="Link (URL)" 
                            className="input-padrao md:col-span-2"
                            value={novoRecurso.link}
                            onChange={e => setNovoRecurso({...novoRecurso, link: e.target.value})}
                        />
                        <textarea 
                            placeholder="Descrição breve..." 
                            className="input-padrao md:col-span-2"
                            value={novoRecurso.descricao}
                            onChange={e => setNovoRecurso({...novoRecurso, descricao: e.target.value})}
                        />
                        <div className="md:col-span-2 flex justify-end gap-2">
                            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-slate-500">Cancelar</button>
                            <button type="submit" className="btn-primary">Salvar e Ganhar Pontos</button>
                        </div>
                    </form>
                </div>
            )}

            {/* Lista de Recursos */}
            <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                    <Share2 /> Minhas Contribuições
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {meusRecursos.map(rec => (
                        <RecursoCard key={rec.id} recurso={rec} showDelete={true} onDelete={handleDelete} />
                    ))}
                    {meusRecursos.length === 0 && (
                        <p className="col-span-full text-slate-500">Você ainda não compartilhou nada. Comece agora!</p>
                    )}
                </div>
            </div>
        </div>
    );
}