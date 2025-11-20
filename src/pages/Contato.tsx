export default function Contato() {
    return (
        <div className="max-w-md mx-auto bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold mb-6 dark:text-white">Entre em Contato</h1>
            <form className="space-y-4">
                <input placeholder="Seu Nome" className="input-padrao" />
                <input placeholder="Seu Email" className="input-padrao" />
                <textarea placeholder="Sua Mensagem" className="input-padrao" rows={4} />
                <button className="btn-primary w-full">Enviar</button>
            </form>
        </div>
    )
}