"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Islam Haziraj</h1>
          <ul className="flex space-x-8 text-sm font-medium uppercase tracking-wide">
            <li>
              <a href="#about" className="hover:text-gray-600 transition">
                About Islam
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-600 transition">
                CS2 Skills
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gray-600 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Meet Islam Haziraj: Albania&apos;s Most Proud Noob
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Islam Haziraj is a true patriot from Albania, who never misses a chance
          to shout "Shqipëri, Shqipëri!" at the top of his lungs. His
          love for his country is unmatched, but unfortunately, his skills in
          Counter-Strike 2 are less than legendary.
        </p>
        <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
          Despite being a self-proclaimed CS2 champion, Islam&apos;s gameplay is
          more like a comedy show than a competitive match. His teammates often
          wonder if he&apos;s playing the same game or just running around like a
          headless chicken.
        </p>
        <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
          But no matter how many times he dies first or forgets to buy armor,
          Islam&apos;s Albanian pride never wavers. He firmly believes that being
          Albanian is the ultimate power-up.
        </p>
      </section>

      <section
        id="skills"
        className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200"
      >
        <h3 className="text-3xl font-bold mb-8 text-center">
          Islam&apos;s CS2 "Skills" (Or Lack Thereof)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Aim? What Aim?</h4>
            <p>
              Islam&apos;s aim is so bad, even bots feel sorry for him. Headshots?
              More like head misses.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Grenade Magnet</h4>
            <p>
              If there&apos;s a grenade nearby, Islam will find it. And then
              promptly run into it.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Shop Confusion</h4>
            <p>
              Armor? Grenades? Nah, Islam prefers to run around with just a knife.
              Strategy? What&apos;s that?
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Friendly Fire Expert</h4>
            <p>
              Islam&apos;s teammates often fear him more than the enemy. Friendly
              fire? More like friendly disaster.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Premature Celebrations</h4>
            <p>
              Islam celebrates kills before they happen. Spoiler: He usually dies
              right after.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Lag? Always Lag</h4>
            <p>
              When Islam loses, it&apos;s never his fault. It&apos;s always the
              lag, the server, or the game itself.
            </p>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200"
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Gallery of Glorious Fails & Albanian Pride</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <img
            src="/islam1.png"
            alt="Islam Haziraj 1"
            className="rounded-lg object-cover w-full h-64"
            loading="lazy"
          />
          <img
            src="/islam2.png"
            alt="Islam Haziraj 2"
            className="rounded-lg object-cover w-full h-64"
            loading="lazy"
          />
          <img
            src="/islam1.png"
            alt="Islam Haziraj 3"
            className="rounded-lg object-cover w-full h-64"
            loading="lazy"
          />
          <img
            src="/islam2.png"
            alt="Islam Haziraj 4"
            className="rounded-lg object-cover w-full h-64"
            loading="lazy"
          />
          <img
            src="/islam1.png"
            alt="Islam Haziraj 5"
            className="rounded-lg object-cover w-full h-64"
            loading="lazy"
          />
          <img
            src="/islam2.png"
            alt="Islam Haziraj 6"
            className="rounded-lg object-cover w-full h-64"
            loading="lazy"
          />
        </div>
      </section>

      <section
        id="contact"
        className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-200"
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Contact Islam (If You Dare)</h3>
        <form
          className="space-y-6 max-w-xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (Not really, this is just a demo.)");
          }}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1"
            >
              Message for Islam
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="border-t border-gray-200 py-6 mt-16 text-center text-sm text-gray-600">
        © 2024 Islam Haziraj Fan Club. All rights reserved. Proudly Albanian, eternally noob.
      </footer>
    </main>
  );
}
