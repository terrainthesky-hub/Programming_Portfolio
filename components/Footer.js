// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Lesley Rich. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
            <a href="https://github.com/terrainthesky-hub" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">GitHub</a>
            <a href="https://linkedin.com/in/lesley-rich-86bb8572/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}