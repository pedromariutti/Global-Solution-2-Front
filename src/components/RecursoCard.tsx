import type { Recurso } from '../types';
import { ExternalLink, Trash2, Tag } from 'lucide-react';

interface Props {
    recurso: Recurso;
    onDelete?: (id: number) => void;
    showDelete?: boolean;
}

export function RecursoCard({ recurso, onDelete, showDelete = false }: Props) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700 flex flex-col h-full">
            <div className="flex justify-between items-start mb-3">
                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Tag size={12} /> {recurso.categoria}
                </span>
                {showDelete && onDelete && recurso.id && (
                    <button 
                        onClick={() => onDelete(recurso.id!)}
                        className="text-red-400 hover:text-red-600 transition"
                        title="Remover recurso"
                    >
                        <Trash2 size={18} />
                    </button>
                )}
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 line-clamp-2">
                {recurso.titulo}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow line-clamp-3">
                {recurso.descricao}
            </p>
            
            <a 
                href={recurso.link} 
                target="_blank" 
                rel="noreferrer"
                className="mt-auto w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 py-2 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors font-medium"
            >
                Acessar Conteúdo <ExternalLink size={16} />
            </a>
        </div>
    );
}