import Link from "next/link";

export default function Navbar({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8 bg-[#0205f4]/80 backdrop-blur-md rounded-b-xl shadow-md text-white"
        style={{
          WebkitBackdropFilter: 'blur(12px)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Association Serment Universel (ASU)</span>
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="ASU Logo" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" onClick={onOpenMenu} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Ouvrir le menu principal</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-4">
          <Link href="#about" className="text-sm font-semibold text-white bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white/10 hover:text-white transition-colors">À propos</Link>
          <Link href="#actions" className="text-sm font-semibold text-white bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white/10 hover:text-white transition-colors">Nos actions</Link>
          <Link href="#gallery" className="text-sm font-semibold text-white bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white/10 hover:text-white transition-colors">Galerie</Link>
          <Link href="#news" className="text-sm font-semibold text-white bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white/10 hover:text-white transition-colors">Actualités</Link>
          <Link href="#contact" className="text-sm font-semibold text-white bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white/10 hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#don" className="text-sm font-semibold text-white bg-transparent border border-white px-8 py-2 rounded-full shadow-md hover:bg-white/10 hover:text-white transition-colors">Faire un don</Link>
        </div>
      </nav>
    </header>
  );
}
