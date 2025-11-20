import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, BrainCircuit, Menu, X } from 'lucide-react';
import { useState } from 'react';


export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-primary font-bold text-2xl">
          <BrainCircuit size={32} />
          <span>Knowledge<span className="text-secondary">Hub</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-slate-600 dark:text-slate-300">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/hub" className="hover:text-primary transition">Hub Global</Link>
          <Link to="/perfil" className="hover:text-primary transition">Meu Perfil</Link>
          <Link to="/equipe" className="hover:text-primary transition">Equipe</Link>
          <Link to="/sobre" className="hover:text-primary transition">Sobre</Link>
          <Link to="/contato" className="hover:text-primary transition">Contato</Link>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} className="text-white"/> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700 dark:text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 p-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300">Home</Link>
          <Link to="/hub" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300">Hub Global</Link>
          <Link to="/perfil" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300">Meu Perfil</Link>
          <Link to="/equipe" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300">Equipe</Link>
          <Link to="/contato" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300">Contato</Link>
        </div>
      )}
    </header>
  );
}