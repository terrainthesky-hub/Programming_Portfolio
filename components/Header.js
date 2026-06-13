import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-100"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-teal-400 to-indigo-500 text-sm font-black text-slate-950 shadow-lg shadow-teal-500/20">
              LR
            </span>
            <span className="transition-colors group-hover:text-teal-300">Lesley Rich</span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/60 hover:text-teal-300"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/60 hover:text-teal-300"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
