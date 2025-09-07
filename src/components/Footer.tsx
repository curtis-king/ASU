export default function Footer() {
  return (
    <footer className="bg-[#0205f4] text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-bold tracking-wide mb-2">Association Serment Universel</span>
          <span className="text-sm text-white/80 mb-1">BP 12345, Brazzaville, Congo</span>
          <span className="text-sm text-white/80 mb-1">Tél : +242 06 123 45 67</span>
          <span className="text-sm text-white/80 mb-1">Email : contact@asu-congo.org</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold mb-1">Suivez-nous</span>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/asucongo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://www.youtube.com/@asucongo" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.454 3.5 12 3.5 12 3.5s-7.454 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.12 0 12 0 12s0 3.88.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.546 20.5 12 20.5 12 20.5s7.454 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.88 24 12 24 12s0-3.88-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
        <div className="text-xs text-white/60 text-center md:text-right mt-4 md:mt-0">
          © {new Date().getFullYear()} Association Serment Universel. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
