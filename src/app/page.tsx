

"use client";

import { useState } from "react";


const products = [
  {
    name: "The Daily Glow Serum",
    category: "BRIGHTEN & HYDRATE",
    price: "$32",
    image: "/elora-serum.png",
    description:
      "A lightweight facial serum designed for a simple, refreshing skincare ritual.",
    size: "30 ml",
  },
  {
    name: "The Essential Moisturizer",
    category: "NOURISH & RESTORE",
    price: "$38",
    image: "/elora-moisturizer.png",
    description:
      "A comforting daily moisturizer concept with a smooth, nourishing texture.",
    size: "50 ml",
  },
  {
    name: "The Gentle Cleanser",
    category: "CLEANSE & REFRESH",
    price: "$26",
    image: "/elora-cleanser.png",
    description:
      "A gentle facial cleanser concept for a fresh and uncomplicated daily routine.",
    size: "150 ml",
  },
];

export default function Home() {

  const [selectedProduct, setSelectedProduct] =
    useState<(typeof products)[number] | null>(null);

const [menuOpen, setMenuOpen] = useState(false);


  return (
    <main className="min-h-screen bg-[#F7F3ED] text-[#344B40]">
      <div className="bg-[#344B40] px-4 py-3 text-center text-xs tracking-[0.18em] text-white">
        A LITTLE MORE GLOW, EVERY DAY
      </div>

      
<header className="relative border-b border-[#E8DCD0] px-6 py-6 md:px-16">
  <div className="flex items-center justify-between gap-4">
    <a
      href="#"
      className="font-serif text-3xl tracking-[0.12em]"
    >
      ÉLORA
    </a>

    <nav className="hidden gap-9 text-sm md:flex">
      <a href="#shop" className="hover:opacity-60">
        Shop
      </a>
      <a href="#about" className="hover:opacity-60">
        Our Story
      </a>
      <a href="#contact" className="hover:opacity-60">
        Contact
      </a>
    </nav>

    <div className="flex items-center gap-3">
      <a
        href="#shop"
        className="hidden rounded-full border border-[#344B40] px-5 py-2 text-xs tracking-widest sm:inline-block"
      >
        EXPLORE
      </a>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#344B40] text-xl md:hidden"
      >
        {menuOpen ? "×" : "☰"}
      </button>
    </div>
  </div>

  {menuOpen && (
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      className="absolute left-0 right-0 top-full z-40 flex flex-col gap-5 border-b border-[#E8DCD0] bg-[#F7F3ED] px-6 py-8 text-sm shadow-lg md:hidden"
    >
      <a
        href="#shop"
        onClick={() => setMenuOpen(false)}
        className="hover:opacity-60"
      >
        Shop
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="hover:opacity-60"
      >
        Our Story
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="hover:opacity-60"
      >
        Contact
      </a>
    </nav>
  )}
</header>


      <section className="grid min-h-[650px] items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-16">
        <div className="max-w-xl">
          <p className="mb-6 text-xs font-semibold tracking-[0.3em] text-[#82937D]">
            SKINCARE, SIMPLIFIED
          </p>

          
<h1 className="font-serif text-5xl leading-[1.12] sm:text-6xl md:text-7xl md:leading-[1.08]">

            Your skin,
            <br />
            beautifully
            <br />
            <span className="italic text-[#A6B29A]">you.</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-8 text-[#69746D]">
            Thoughtful skincare essentials for your everyday ritual.
            Simple routines, beautiful textures, and a little more
            confidence in your own skin.
          </p>

          <a
            href="#shop"
            className="mt-9 inline-block rounded-full bg-[#344B40] px-9 py-4 text-sm font-semibold text-white transition hover:bg-[#52766A]"
          >
            Discover the collection →
          </a>
        </div>

        <div className="relative overflow-hidden rounded-t-[180px] bg-[#E8DCD0]">
          <img
            src="/elora-hero.png"
            alt="Skincare and beauty editorial"
            className="h-[520px] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-[#E8EDE4] px-6 py-12 text-center">
        <p className="font-serif text-2xl italic md:text-3xl">
          A softer approach to skincare. A more beautiful everyday.
        </p>
      </section>

      <section id="shop" className="px-6 py-24 md:px-16">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#82937D]">
              THE COLLECTION
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Everyday essentials
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-[#69746D]">
            Discover our carefully curated skincare collection,
            created for simple everyday rituals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          
{products.map((product) => (
  <button
    key={product.name}
    type="button"
    onClick={() => setSelectedProduct(product)}
    className="group w-full cursor-pointer text-left"
    aria-label={`View details for ${product.name}`}
  >
    <div className="overflow-hidden rounded-2xl bg-[#E8DCD0]">
      <img
        src={product.image}
        alt={product.name}
        className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>

    <div className="mt-5 flex items-start justify-between gap-4">
      <div>
        <p className="text-[10px] tracking-[0.2em] text-[#82937D]">
          {product.category}
        </p>

        <h3 className="mt-2 font-serif text-2xl">
          {product.name}
        </h3>

        <p className="mt-3 text-xs font-medium text-[#82937D] group-hover:underline">
          VIEW DETAILS →
        </p>
      </div>

      <p className="font-semibold">{product.price}</p>
    </div>
  </button>
))}
        </div>
      </section>

      <section
        id="about"
        className="grid items-center gap-12 bg-[#E8EDE4] px-6 py-24 md:grid-cols-2 md:px-16"
      >
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/elora-about.png"
            alt="ÉLORA SKIN skincare collection"
            className="h-[440px] w-full object-cover"
          />
        </div>

        <div className="max-w-lg">
          <p className="text-xs tracking-[0.25em] text-[#82937D]">
            OUR PHILOSOPHY
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Beauty in the
            <span className="italic"> everyday.</span>
          </h2>
          <p className="mt-7 leading-8 text-[#69746D]">
            At ÉLORA, we believe skincare should feel like a moment
            of calm. Our approach celebrates simplicity, consistency,
            and feeling comfortable in your own skin.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block border-b border-[#344B40] pb-2 text-sm font-semibold"
          >
            Get in touch →
          </a>
        </div>
      </section>

      
<section
  id="contact"
  className="bg-[#F7F3ED] px-6 py-24 text-center"
>
  <p className="text-xs font-semibold tracking-[0.3em] text-[#82937D]">
    STAY IN THE GLOW
  </p>

  <h2 className="mt-5 font-serif text-4xl text-[#344B40] md:text-5xl">
    A little beauty in your inbox.
  </h2>

  <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-[#69746D]">
    Skincare inspiration, exclusive updates and little moments
    of self-care, delivered with love.
  </p>

  <form
    className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
    onSubmit={(event) => {
      event.preventDefault();
      alert(
        "Thanks for your interest! This is a portfolio demo. No email has been collected."
      );
    }}
  >
    <label htmlFor="newsletter-email" className="sr-only">
      Email address
    </label>

    <input
      id="newsletter-email"
      type="email"
      required
      placeholder="Enter your email address"
      className="min-w-0 flex-1 rounded-full border border-[#D6D9D0] bg-white px-6 py-4 text-sm text-[#344B40] outline-none focus:border-[#344B40]"
    />

    <button
      type="submit"
      className="rounded-full bg-[#344B40] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#52766A]"
    >
      Subscribe
    </button>
  </form>

  <p className="mt-5 text-xs text-[#82937D]">
    Newsletter demo only — no emails are collected.
  </p>
</section>

<footer className="bg-[#344B40] px-6 py-14 text-white md:px-16">
  <div className="grid gap-12 md:grid-cols-3">
    <div>
      <a
        href="#"
        className="font-serif text-4xl tracking-[0.12em]"
      >
        ÉLORA
      </a>

      <p className="mt-5 max-w-xs text-sm leading-7 text-[#E8EDE4]">
        Thoughtful skincare essentials for a more beautiful
        everyday ritual.
      </p>
    </div>

    <div>
      <h3 className="mb-5 text-sm font-semibold tracking-widest">
        EXPLORE
      </h3>

      <nav className="flex flex-col items-start gap-4 text-sm text-[#E8EDE4]">
        <a href="#shop" className="hover:text-white">
          Shop
        </a>
        <a href="#about" className="hover:text-white">
          Our Story
        </a>
        <a href="#contact" className="hover:text-white">
          Contact
        </a>
      </nav>
    </div>

    <div>
      <h3 className="mb-5 text-sm font-semibold tracking-widest">
        CONNECT
      </h3>

      <p className="max-w-xs text-sm leading-7 text-[#E8EDE4]">
        Follow our journey as we celebrate simple skincare,
        thoughtful rituals and everyday beauty.
      </p>

      <p className="mt-4 text-xs text-[#BFCFC4]">
        Social channels coming soon.
      </p>
    </div>
  </div>

  <div className="mt-14 border-t border-[#607267] pt-7">
    <p className="text-center text-xs leading-6 text-[#E8EDE4]">
      © 2026 ÉLORA SKIN · Fictional brand concept · Portfolio project
    </p>
  </div>
</footer>

{selectedProduct && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    onClick={() => setSelectedProduct(null)}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-label={selectedProduct.name}
      className="relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-[#F7F3ED] shadow-2xl md:grid-cols-2"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setSelectedProduct(null)}
        aria-label="Close product details"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-[#344B40] shadow"
      >
        ×
      </button>

      <div className="bg-[#E8DCD0]">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="h-72 w-full object-cover md:h-full"
        />
      </div>

      <div className="flex flex-col justify-center p-8 md:p-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#82937D]">
          {selectedProduct.category}
        </p>

        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#344B40]">
          {selectedProduct.name}
        </h2>

        <p className="mt-5 text-2xl font-semibold text-[#344B40]">
          {selectedProduct.price}
        </p>

        <p className="mt-6 leading-8 text-[#69746D]">
          {selectedProduct.description}
        </p>

        <p className="mt-5 text-sm text-[#82937D]">
          Size: {selectedProduct.size}
        </p>

        <button
          type="button"
          onClick={() => setSelectedProduct(null)}
          className="mt-9 rounded-full bg-[#344B40] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#52766A]"
        >
          Continue Exploring
        </button>

        <p className="mt-4 text-center text-xs text-[#82937D]">
          Concept product — not available for purchase
        </p>
      </div>
    </div>
  </div>
)}

    </main>
  );
}
