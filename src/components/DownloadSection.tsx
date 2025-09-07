interface Document {
  name: string;
  url: string;
}

const documents: Document[] = [
  {
    name: "Statuts de l'association (PDF)",
    url: "/docs/statuts-asu.pdf",
  },
  {
    name: "Rapport d'activité 2024 (PDF)",
    url: "/docs/rapport-2024.pdf",
  },
  // Ajoutez d'autres documents ici
];

export default function DownloadSection() {
  return (
    <section className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Télécharger nos documents</h2>
      <ul className="bg-white/80 backdrop-blur rounded-xl shadow-lg p-8 flex flex-col gap-4">
        {documents.map((doc) => (
          <li key={doc.url} className="flex items-center justify-between border-b border-gray-200 pb-2 last:border-b-0">
            <span className="text-lg text-gray-800">{doc.name}</span>
            <a
              href={doc.url}
              download
              className="bg-[#0205f4] text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
            >
              Télécharger
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
