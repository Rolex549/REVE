import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * About.jsx
 * Gen Z Pastel (Pinterest aesthetic) - Clean White + Pastel Accents
 *
 * Requirements:
 * - TailwindCSS present in project
 * - framer-motion installed
 * - lucide-react installed
 *
 * Copy-paste this file to replace your existing About.jsx
 */

const STORY_SETS = [
  {
    key: "lifestyle",
    title: "Lifestyle — Youth Girls",
    slides: [
      { text: "Why does tech still look boring?" },
      { text: "REVE CULT is changing the vibe." },
      { text: "Aesthetics. Comfort. Identity." },
      { text: "Earbuds that feel like YOU\n@revecult" },
    ],
  },
  {
    key: "empower",
    title: "Women Empowerment — Gen Z",
    slides: [
      { text: "Not a brand." },
      { text: "A movement." },
      { text: "Designed by women. For women." },
      { text: "Her sound. Her style. Her power.\n@revecult" },
    ],
  },
  {
    key: "valentine",
    title: "Valentine Offer — Aesthetic Hamper",
    slides: [
      { text: "Searching for a soft Valentine gift?" },
      { text: "Minimal. Aesthetic. Personal." },
      { text: "REVE CULT Valentine Hamper — Coming Soon." },
      { text: "Your partner will love this.\n@revecult" },
    ],
  },
  {
    key: "launch",
    title: "General Launch — No niche",
    slides: [
      { text: "Something aesthetic is coming." },
      { text: "Clean design. Beautiful audio." },
      { text: "A brand for women & Gen Z." },
      { text: "REVE CULT — launching soon.\n@revecult" },
    ],
  },
];

const CAROUSEL_SLIDES = [
  { title: "REVE CULT", subtitle: "A minimal, aesthetic tech brand for women." },
  { title: "Problem", subtitle: "Tech looks boring. Design doesn't match our vibe." },
  { title: "Solution", subtitle: "REVE CULT is here to change that." },
  { title: "Aesthetic Focus", subtitle: "Aesthetic earbuds crafted with simplicity." },
  { title: "Women-Centric", subtitle: "Designed by women. For women." },
  { title: "Gen Z Identity", subtitle: "Soft colors. Modern shape. Pure personality." },
  { title: "Quality", subtitle: "Premium sound. Minimal design." },
  { title: "Emotional Touch", subtitle: "Your sound. Your style." },
  { title: "Context", subtitle: "A new era of women-first tech." },
  { title: "CTA", subtitle: "Follow @revecult — Something beautiful is coming." },
];

export default function About() {
  const [activeSet, setActiveSet] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const trimanRef = useRef(null);

  const scrollToTriman = () => {
    trimanRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goNextSlide = () => {
    const currentSet = STORY_SETS[activeSet];
    if (activeSlide < currentSet.slides.length - 1) {
      setActiveSlide((s) => s + 1);
    } else if (activeSet < STORY_SETS.length - 1) {
      setActiveSet((s) => s + 1);
      setActiveSlide(0);
    } else {
      setActiveSet(0);
      setActiveSlide(0);
    }
  };

  const goPrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide((s) => s - 1);
    } else if (activeSet > 0) {
      const newSet = activeSet - 1;
      setActiveSet(newSet);
      setActiveSlide(STORY_SETS[newSet].slides.length - 1);
    } else {
      const last = STORY_SETS.length - 1;
      setActiveSet(last);
      setActiveSlide(STORY_SETS[last].slides.length - 1);
    }
  };

  return (
    <div className="bg-white text-gray-900 antialiased relative overflow-hidden">
      {/* Decorative pastel blobs (clean white + pastel accents) */}
      <div className="pointer-events-none absolute -z-10 inset-0">
        <div className="absolute -left-20 -top-40 w-80 h-80 rounded-full bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 opacity-60 blur-3xl transform rotate-12" />
        <div className="absolute right-0 top-20 w-72 h-72 rounded-full bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 opacity-60 blur-2xl" />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-96 h-40 rounded-full bg-gradient-to-r from-pink-50 via-lavender-50 to-indigo-50 opacity-40 blur-2xl" />
      </div>

      {/* HERO */}
      <section className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="max-w-4xl text-center relative">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="font-light text-gray-500">REVE CULT</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            Minimal, pastel-forward audio designed by women — for women. Soft shapes,
            thoughtful engineering, and accessories that feel personal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-6 py-3 rounded-full border border-pink-200 bg-white text-pink-600 font-semibold shadow-sm hover:scale-[1.02] transition"
            >
              Our Story
            </button>
            <button
              onClick={scrollToTriman}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold shadow-lg hover:opacity-95 transition"
            >
              Read TRIMAN CULT Story →
            </button>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 border-t">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat num="500K+" label="Customers" accent="bg-pink-50" />
          <Stat num="50+" label="Countries" accent="bg-lavender-50" />
          <Stat num="4.8★" label="Avg. Rating" accent="bg-rose-50" />
          <Stat num="100%" label="Women-led" accent="bg-purple-50" />
        </div>
      </section>

      {/* STORY SLIDES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold">Story Slides</h3>
          <div className="flex items-center gap-3">
            {STORY_SETS.map((s, i) => (
              <button
                key={s.key}
                onClick={() => { setActiveSet(i); setActiveSlide(0); }}
                className={`text-sm px-3 py-1 rounded-full transition font-medium ${
                  i === activeSet ? "bg-pink-600 text-white" : "bg-gray-100 text-gray-700"
                }`}
              >
                {s.title.split(" — ")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="md:flex gap-8 items-start">
          {/* Left: Main slide card */}
          <div className="flex-1">
            <motion.div
              key={`${activeSet}-${activeSlide}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36 }}
              className="relative rounded-3xl border border-gray-100 p-10 min-h-[360px] flex items-center justify-center text-center bg-white shadow-sm"
            >
              <p className="text-3xl md:text-4xl font-semibold leading-snug whitespace-pre-line text-gray-900">
                {STORY_SETS[activeSet].slides[activeSlide].text}
              </p>

              <button
                onClick={goPrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:scale-105 transition"
                aria-label="previous"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={goNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:scale-105 transition"
                aria-label="next"
              >
                <ChevronRight />
              </button>

              {/* indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {STORY_SETS[activeSet].slides.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-10 h-1 rounded-full cursor-pointer ${idx === activeSlide ? "bg-pink-600" : "bg-gray-200"}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: thumbnails */}
          <aside className="w-full md:w-72 mt-6 md:mt-0 space-y-4">
            {STORY_SETS[activeSet].slides.map((slide, idx) => (
              <motion.div
                key={idx}
                onClick={() => setActiveSlide(idx)}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl border cursor-pointer transition ${
                  idx === activeSlide ? "bg-pink-50 border-pink-200" : "bg-white border-gray-100"
                }`}
              >
                <p className="font-medium text-gray-900">Slide {idx + 1}</p>
                <p className="text-xs text-gray-600 mt-2 whitespace-pre-line">{slide.text}</p>
              </motion.div>
            ))}
          </aside>
        </div>
      </section>

      {/* CAROUSEL PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold">Carousel Preview</h3>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCarouselIndex((i) => Math.max(i - 1, 0))}
              className="p-2 rounded-full bg-white border shadow-sm"
              aria-label="prev"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => setCarouselIndex((i) => Math.min(i + 1, CAROUSEL_SLIDES.length - 1))}
              className="p-2 rounded-full bg-white border shadow-sm"
              aria-label="next"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 pb-6"
            animate={{ x: -carouselIndex * 320 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {CAROUSEL_SLIDES.map((c, i) => (
              <div key={i} className="w-72 min-w-[18rem] rounded-2xl border p-6 bg-white shadow-sm">
                <h4 className="text-xl font-semibold">{c.title}</h4>
                <p className="text-sm text-gray-600 mt-3 whitespace-pre-line">{c.subtitle}</p>
                <div className="mt-6 text-xs text-gray-400">Slide {i + 1} / {CAROUSEL_SLIDES.length}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCarouselIndex(idx)}
              className={`w-8 h-2 rounded-full ${idx === carouselIndex ? "bg-pink-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </section>

      {/* REVE CULT – OUR STORY */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          REVE CULT – OUR STORY
        </motion.h2>

        <motion.p
          className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Her Sound. Her Style. Her Story.
        </motion.p>

        <div className="space-y-10 text-gray-700 text-lg leading-relaxed">
          <StoryBlock
            title="🌸 How It All Started"
            paragraphs={[
              "Every idea begins with a moment. For REVE CULT, that moment began with Atman, who simply wanted to gift his girlfriend aesthetic earbuds that matched her personality.",
              "He searched everywhere — but everything was bulky, bold and masculine. Nothing soft. Nothing feminine. Nothing made for her.",
              "That’s when he asked: “Why isn’t tech designed for women?” That single question became the spark that started everything.",
            ]}
          />

          <StoryBlock
            title="🤝 The Dream Shared"
            paragraphs={[
              "Atman shared the idea with his closest friend Ayush.",
              "Together they realized a gap: the tech world lacked brands that represented women’s style and identity.",
              "They decided to build something expressive, beautiful and empowering — and named it REVE (meaning “dream” in French).",
            ]}
          />

          <StoryBlock
            title="✨ The Birth of REVE CULT"
            paragraphs={[
              "REVE evolved from product to CULT — a community-driven movement where women choose tech that reflects their personality.",
              "With minimalist art, floral lines, soft colors and beautiful packaging, REVE CULT became India’s first women-first Gen Z tech brand.",
            ]}
            bullets={["Aesthetics", "Sound", "Emotion", "Individuality", "Empowerment"]}
          />

          <StoryBlock
            title="🎧 From Sketch to Sound"
            paragraphs={[
              "Atman and Ayush sketched shapes, tested comfort, tuned audio and prototyped — always keeping women’s needs at the center.",
              "Features like ANC, long battery, soft fit and elegant design were added because women asked for them.",
            ]}
          />

          <StoryBlock
            title="💫 A Brand Made For Her"
            paragraphs={[
              "REVE CULT earbuds are more than tech — they’re a fashion piece, a confidence booster and a way to express identity.",
              "From students to creators to working women, REVE CULT celebrates every woman’s unique style.",
            ]}
            bullets={["A fashion piece", "A self-expression tool", "A lifestyle accessory", "A confidence booster"]}
          />
        </div>
      </section>

      {/* CTA / TRIMAN BUTTON */}
      <section className="py-12 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="text-3xl font-semibold">Designed for clarity. Built for comfort.</h3>
          <p className="mt-3 text-gray-600 max-w-lg mx-auto">
            REVE CULT blends tech with art — minimal, pastel and designed for her.
          </p>

          <div className="mt-8">
            <button
              onClick={scrollToTriman}
              className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-95 transition"
            >
              Read the TRIMAN CULT Story →
            </button>
          </div>
        </motion.div>
      </section>

      {/* TRIMAN CULT STORY SECTION */}
      <section ref={trimanRef} className="max-w-5xl mx-auto px-6 py-24 border-t">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-10" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}>
          TRIMAN CULT – The Legacy Behind REVE
        </motion.h2>

        <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
          <p>TRIMAN CULT TECH PRIVATE LIMITED is the parent company founded by two brothers.</p>

          <ul className="list-disc ml-6 space-y-1">
            <li><strong>TRI</strong> — inspired by elder brother Trikal</li>
            <li><strong>MAN</strong> — inspired by younger brother Atman</li>
          </ul>

          <p>Together, TRIMAN represents unity, legacy, and a shared dream to build India’s most aesthetic tech culture.</p>

          <p>CULT stands for the community they aim to build — a lifestyle, not just a brand.</p>

          <h3 className="text-2xl font-semibold mt-6">The Vision</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Tech innovation</li>
            <li>Aesthetic-first product development</li>
            <li>Women & Gen Z lifestyle tech</li>
            <li>Community-driven brand building</li>
          </ul>

          <p className="mt-4">The first brand born from this vision is <strong>REVE CULT</strong> — India’s first women-first, aesthetic tech brand.</p>

          <p>REVE CULT is not just built by Atman and Ayush… it is powered by the TRIMAN CULT foundation — a family legacy turning into a modern movement.</p>
        </div>
      </section>
    </div>
  );
}

/* ----------------- small components ----------------- */

function Stat({ num, label, accent = "bg-pink-50" }) {
  return (
    <div className="py-6">
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${accent} shadow-sm mb-4`}>
        {/* decorative dot */}
        <div className="w-3 h-3 rounded-full bg-pink-400" />
      </div>
      <p className="text-3xl font-semibold">{num}</p>
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

function StoryBlock({ title, paragraphs = [], bullets = [] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-4">
      <h3 className="text-2xl font-semibold">{title}</h3>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-gray-700">{p}</p>
      ))}
      {bullets && bullets.length > 0 && (
        <ul className="list-disc ml-6 text-gray-700">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </motion.div>
  );
}
