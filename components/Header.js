import Link from 'next/link';

export default function Header() {
  return (
    // Use a dark, blurred background for the sticky header
    <header className="bg-slate-900/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-700">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Make the main brand pop with the accent color */}
            <Link href="/" className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors duration-300">
              Lesley Rich
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-slate-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Home
              </Link>
              <Link href="/blog" className="text-slate-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
