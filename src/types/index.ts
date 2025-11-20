// Interface que espelha o RecursoTO do Java
export interface Recurso {
    id?: number;
    titulo: string;
    link: string;
    categoria: string;
    descricao: string;
    idUsuario: number; // Simulando vínculo
}

// Interface para Gamificação
export interface Usuario {
    id: number;
    nome: string;
    email: string;
    pontos: number; // Gamificação
    nivel: string; // Ex: "Júnior", "Especialista"
    avatarUrl?: string;
}