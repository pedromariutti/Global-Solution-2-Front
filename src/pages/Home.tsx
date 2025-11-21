import { Link } from 'react-router-dom';
import { ArrowRight, Database, Users, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20 py-10">
      
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          O Futuro do Trabalho <br /> Começa com Conhecimento
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Centralize links, compartilhe aprendizados e evolua suas skills em uma plataforma gamificada e colaborativa.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/hub" className="btn-primary flex items-center gap-2">
            Explorar Hub <ArrowRight size={20} />
          </Link>
          <Link to="/sobre" className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white transition">
            Saiba Mais
          </Link>
        </div>
      </section>

      
      <section className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Database className="text-primary" size={40} />}
          title="Centralize Tudo"
          desc="Chega de perder links ou documentos importantes. Guarde tudo em um só lugar organizado por categorias."
        />
        <FeatureCard 
          icon={<Users className="text-secondary" size={40} />}
          title="Colaboração Real"
          desc="Veja o que outros profissionais estão estudando e compartilhe suas descobertas."
        />
        <FeatureCard 
          icon={<Rocket className="text-purple-500" size={40} />}
          title="Gamificação"
          desc="Ganhe pontos por contribuir e suba de nível no seu perfil profissional."
        />
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{desc}</p>
    </div>
  )
}