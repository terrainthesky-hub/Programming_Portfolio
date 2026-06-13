// components/Footer.js
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium">
          <a
            href="https://github.com/terrainthesky-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-teal-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/lesley-rich-86bb8572/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-teal-300"
          >
            LinkedIn
          </a>
          <a
            href="https://terrainthesky-hub.github.io/CNC_Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-teal-300"
          >
            CNC Portfolio
          </a>
          <a
            href="https://www.shortstorylovers.com/story/everlife-30960"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-teal-300"
          >
            Writing
          </a>
          <a
            href="mailto:lesley.t.rich@gmail.com"
            className="text-slate-400 transition-colors hover:text-teal-300"
          >
            Email
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Lesley Rich. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
