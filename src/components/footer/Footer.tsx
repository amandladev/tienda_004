"use client"

export default function ElegantFooter() {
  return (
    <footer className="w-full border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} NombreEmpresa. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/privacy" className="hover:underline">Privacidad</a>
          <a href="/terms" className="hover:underline">Términos</a>
          <a href="https://facebook.com/a" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

