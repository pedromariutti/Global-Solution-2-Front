export default function Equipe() {
    
    const integrantes = [
        { nome: "Pedro Mariutti", rm: "RM 75999", github: "https://github.com", foto: "https://github.com/github.png" },
        { nome: "Henrique Orellana", rm: "RM 565608", github: "https://github.com", foto: "https://github.com/github.png" },
        { nome: "Anabelle Rosseto", rm: "RM 564526", github: "https://github.com", foto: "https://github.com/github.png" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrantes.map((membro, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-slate-200 dark:border-slate-700">
                    <img src={membro.foto} alt={membro.nome} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary" />
                    <h3 className="text-xl font-bold dark:text-white">{membro.nome}</h3>
                    <p className="text-slate-500 mb-4">{membro.rm}</p>
                    <a href={membro.github} target="_blank" className="text-primary hover:underline">Ver GitHub</a>
                </div>
            ))}
        </div>
    );
}