
"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function AproposPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">À propos de l'ASU</h1>
            <p className="text-lg md:text-xl text-white/90 font-light mb-4 drop-shadow">
              L’Association Serment Universel (ASU), fondée en 1998 à Brazzaville, est une ONG de référence dans la prise en charge psychosociale en République du Congo.
            </p>
            <p className="text-base md:text-lg text-white/80 font-extralight mb-2 drop-shadow">
              Depuis plus de 25 ans, nous œuvrons pour l’accompagnement, la prévention et le soutien des personnes vulnérables, notamment dans la lutte contre le VIH/SIDA.
            </p>
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
            <div className="flex-shrink-0">
              <Image
                src="/reunion.png"
                alt="Équipe ASU"
                width={320}
                height={320}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0205f4] mb-4">Notre histoire</h2>
              <p className="text-lg text-gray-700 mb-4">
                Notre équipe pluridisciplinaire, composée de professionnels et de bénévoles engagés, place l’humain au cœur de l’action solidaire. Nous croyons en la force du collectif, en l’espoir et en la dignité pour tous.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#0205f4] mb-2">Notre mission</h3>
              <p className="text-gray-700">
                Offrir un accompagnement psychosocial de qualité, sensibiliser et prévenir les risques liés au VIH/SIDA, soutenir les familles et enfants affectés, et promouvoir l’accès aux soins pour tous.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#0205f4] mb-2">Nos valeurs</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Respect et dignité humaine</li>
                <li>Solidarité et engagement</li>
                <li>Écoute et bienveillance</li>
                <li>Transparence et responsabilité</li>
              </ul>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#0205f4] mb-2">Nos actions principales</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Accompagnement psychosocial des personnes vivant avec le VIH/SIDA</li>
              <li>Organisation d’ateliers de sensibilisation et de prévention</li>
              <li>Soutien scolaire et social aux enfants vulnérables</li>
              <li>Distribution de biens essentiels et aide d’urgence</li>
              <li>Formation des bénévoles et professionnels de santé</li>
            </ul>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#0205f4] mb-2">Notre équipe</h3>
            <p className="text-gray-700 mb-2">
              L’ASU, c’est une équipe passionnée et engagée, composée de :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Psychologues et travailleurs sociaux</li>
              <li>Médecins et infirmiers partenaires</li>
              <li>Bénévoles et membres actifs</li>
              <li>Partenaires institutionnels et associatifs</li>
            </ul>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#0205f4] mb-2">Nos partenaires</h3>
            <p className="text-gray-700">
              Nous collaborons avec des institutions nationales et internationales, des ONG, des écoles, et des entreprises pour renforcer l’impact de nos actions.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#0205f4] mb-2">Contact & siège</h3>
            <ul className="text-gray-700 space-y-1">
              <li><strong>Adresse :</strong> 989 Avenue de trois martyrs / Plateau des 15 ans, Brazzaville, République du Congo</li>
              <li><strong>Téléphone :</strong> 06 699 3977</li>
              <li><strong>Email :</strong> contact@sermentuniversel.org</li>
              <li><strong>Site web :</strong> <a href="https://sermentuniversel.org" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">sermentuniversel.org</a></li>
            </ul>
          </div>
          <div className="flex justify-center">
            <a
              href="/"
              className="inline-block px-8 py-3 rounded-full bg-[#0205f4] text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Retour à l’accueil
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
