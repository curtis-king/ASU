import { useState } from "react";


export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Ici, vous pouvez envoyer les données à votre backend ou service email
  }

  return (
    <section className="w-full flex justify-center items-center py-20 bg-gradient-to-br from-[#e0e7ff]/40 to-[#f0f4ff]/60">
      <div className="w-full max-w-2xl bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col items-center border border-white/40">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-[#0205f4] drop-shadow-lg">Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-lg font-medium text-[#0205f4]">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-xl px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0205f4] bg-white/80 text-gray-900 text-base shadow-sm transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-medium text-[#0205f4]">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-xl px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0205f4] bg-white/80 text-gray-900 text-base shadow-sm transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-lg font-medium text-[#0205f4]">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="rounded-xl px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0205f4] bg-white/80 text-gray-900 text-base shadow-sm transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0205f4] text-white font-bold rounded-xl py-3 mt-2 text-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Envoyer
          </button>
          {submitted && (
            <div className="text-green-600 text-center mt-2 text-base font-semibold">Merci pour votre message !</div>
          )}
        </form>
      </div>
    </section>
  );
}
