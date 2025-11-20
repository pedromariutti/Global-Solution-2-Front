import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 font-semibold text-white">Knowledge Hub &copy; 2025</p>
        <p className="text-sm">Inovação e Tecnologia para o Futuro do Trabalho.</p>
        <div className="flex justify-center gap-4 mt-4 text-sm">
            <Link to="/faq" className="hover:text-primary">FAQ</Link>
            <span className="text-slate-600">|</span>
            <span className="hover:text-primary cursor-pointer">Termos de Uso</span>
        </div>
      </div>
    </footer>
  );
}