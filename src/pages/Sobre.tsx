export default function Sobre() {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Sobre o Knowledge Hub</h1>
      <p className="mb-4">
        O <strong>Knowledge Hub</strong> nasce da necessidade de preparar profissionais para o futuro do trabalho, 
        onde a tecnologia e as relações humanas convergem.
      </p>
      <p className="mb-4">
        Nosso objetivo é democratizar o acesso a curadorias de conteúdo, permitindo que o aprendizado contínuo 
        (lifelong learning) e a requalificação (reskilling) sejam processos sociais e engajadores.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Tecnologias Utilizadas</h2>
      <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
        <li>Front-End: React, Vite, TypeScript, Tailwind CSS</li>
        <li>Back-End: Java, Quarkus (API RESTful)</li>
        <li>Banco de Dados: Oracle Database</li>
      </ul>
    </div>
  );
}