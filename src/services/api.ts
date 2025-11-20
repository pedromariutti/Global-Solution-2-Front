import type { Recurso } from '../types';


const API_URL = 'http://localhost:8080';

export const api = {

    getRecursos: async (): Promise<Recurso[]> => {
        try {
            const response = await fetch(`${API_URL}/recursos`);
            
            if (!response.ok) {
                throw new Error(`Erro na API: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Erro ao buscar recursos:', error);
          
            return [];
        }
    },

   
    createRecurso: async (recurso: Recurso): Promise<boolean> => {
        try {
            const response = await fetch(`${API_URL}/recursos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(recurso)
            });
            
            return response.ok; 
        } catch (error) {
            console.error('Erro ao criar recurso:', error);
            return false;
        }
    },

    deleteRecurso: async (id: number): Promise<boolean> => {
        try {
            const response = await fetch(`${API_URL}/recursos/${id}`, {
                method: 'DELETE'
            });
            
            return response.status === 204; 
        } catch (error) {
            console.error('Erro ao deletar recurso:', error);
            return false;
        }
    }
};