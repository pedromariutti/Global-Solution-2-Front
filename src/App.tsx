import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';


import { Header } from './components/Header';
import { Footer } from './components/Footer';


import Home from './pages/Home';
import HubGlobal from './pages/HubGlobal';
import Perfil from './pages/Perfil';
import Equipe from './pages/Equipe';
import Sobre from './pages/Sobre';
import Faq from './pages/Faq';
import Contato from './pages/Contato';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hub" element={<HubGlobal />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<div className="text-center mt-20 text-2xl font-bold">Página não encontrada (404)</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;