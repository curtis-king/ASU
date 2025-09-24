"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FaireUnDonPage() {
  return (
    <div className="relative bg-white min-h-screen flex flex-col">
      <Navbar onOpenMenu={() => {}} />
      <main className="flex-1 pt-20 lg:px-0">
        <section
          className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden"
          style={{
            backgroundImage: 'url("/cover-asu.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-[#0205f4]/70" />
          <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-16 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Faire un don</h1>
            <p className="text-lg md:text-xl text-white/90 font-light mb-4 drop-shadow">
              Soutenez l'ASU et aidez-nous à poursuivre nos actions solidaires au Congo.
            </p>
            <p className="text-base md:text-lg text-white/80 font-extralight mb-2 drop-shadow">
              Votre don, même modeste, fait la différence pour les plus vulnérables.
            </p>
          </div>
        </section>
        <section className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#0205f4] mb-6">Comment donner ?</h2>
            <ul className="text-gray-700 text-lg mb-8 space-y-2">
              <li>• Par virement bancaire (RIB sur demande)</li>
              <li>• Par mobile money (Airtel Money, MTN Mobile Money)</li>
              <li>• Par chèque ou espèces au siège de l'association</li>
            </ul>
            <div className="w-full flex flex-col gap-4">
              <a
                href="mailto:contact@asu-congo.org"
                className="inline-block px-8 py-3 rounded-full bg-[#0205f4] text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200 text-center"
              >
                Nous contacter pour un don
              </a>
              <a
                href="/docs/asu-rib.pdf"
                download
                className="inline-block px-8 py-3 rounded-full bg-white border border-[#0205f4] text-[#0205f4] font-semibold shadow hover:bg-blue-50 transition-colors duration-200 text-center"
              >
                Télécharger le RIB (PDF)
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-8 text-center">
              Merci pour votre générosité et votre confiance !<br />
              Association Serment Universel, Brazzaville, Congo
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
