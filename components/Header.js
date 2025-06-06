import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
              Lesley Rich
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-600 hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </Link>
              {/* Add other links like Projects, About, etc. */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}