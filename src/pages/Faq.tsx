export default function Faq() {
    return (
        <div className="max-w-2xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">Perguntas Frequentes</h1>
            <Details summary="Como ganho pontos?">
                Você ganha 10 pontos para cada link útil que cadastrar na plataforma.
            </Details>
            <Details summary="Posso excluir um link?">
                Sim, você pode excluir apenas os links que você mesmo cadastrou através da página "Meu Perfil".
            </Details>
            <Details summary="É gratuito?">
                Sim, o Knowledge Hub é um projeto acadêmico open-source.
            </Details>
        </div>
    );
}

function Details({summary, children}: any) {
    return (
        <details className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm group">
            <summary className="font-bold cursor-pointer list-none flex justify-between dark:text-white">
                {summary}
                <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{children}</p>
        </details>
    )
}