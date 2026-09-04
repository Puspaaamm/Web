import { Github, Mail, Code, ExternalLink } from 'lucide-react';
import Scene3D from './components/Scene3D';

export default function App() {
  const projects = [
    { title: 'Interactive 3D Web App', desc: 'React Three Fiber & Three.js canvas model', tag: '3D Web' },
    { title: 'Fullstack Platform', desc: 'Vite, React 19, and Tailwind CSS v4 setup', tag: 'Web Dev' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-slate-800 backdrop-blur-md sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-wider text-cyan-400">PK.DEV</span>
          <nav className="flex gap-6 text-sm text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 flex-1 flex flex-col gap-16">
        {/* Hero Section */}
        <section id="about" className="grid md:grid-cols-2 gap-8 items-center py-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Creative <span className="text-cyan-400">Developer</span>
            </h1>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Building modern interactive web experiences with React, Three.js, and TypeScript.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* 3D Model Display */}
          <Scene3D />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Code className="text-cyan-400" /> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition"
              >
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  {proj.tag}
                </span>
                <h3 className="text-xl font-semibold mt-4 mb-2">{proj.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{proj.desc}</p>
                <a href="#" className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:underline">
                  View details <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <div className="flex justify-center gap-6 mb-4 text-slate-400">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <Github size={20} />
          </a>
          <a href="mailto:contact@example.com" className="hover:text-cyan-400">
            <Mail size={20} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Pushpam Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}
