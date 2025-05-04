"use client"

export default function ElegantFooter() {
  return (
    <footer className="w-full border-t border-gray-200 mt-10 bg-white text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-gray-800 font-semibold mb-2">Información de Contácto</h3>
          <p>
            +51 956 054 017  
            <br/>
            +51 940 864 330
          </p>
          <p>
            <a href="mailto:ventasganaservice@gmail.com" className="text-blue-600 hover:underline">
              ventasganaservice@gmail.com
            </a>
          </p>
          <p>Lunes - Viernes: 9:00 AM - 12:00 PM y 3:00 PM - 6:00 PM</p>
        </div>

         <div className="flex flex-col justify-between h-full">
          <div className="flex space-x-4 mb-4 md:justify-end">
            <a href="/privacy" className="hover:underline">Privacidad</a>
            <a href="/terms" className="hover:underline">Términos</a>
            <a href="https://facebook.com/a" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook
            </a>
          </div>
          <p className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Azochem. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
