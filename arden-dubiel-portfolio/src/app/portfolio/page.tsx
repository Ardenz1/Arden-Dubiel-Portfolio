"use client";
import Image from "next/image";
import { useState } from "react";


export default function Portfolio() {
const allSkills = [
    "JavaScript",
    "HTML",
    "CSS",
    "SASS",
    "Python",
    "SEO",
    "WordPress",
    "MongoDB",
    "PgAdmin",
    "Tailwind",
    "TypeScript",
    "React",
    "Svelte",
    "Next.js",
    "Prisma",
    "Figma",
    "Adobe Suite",
    "SQL",
    "Wireframing",
    "Prototyping",
    "Canva",
  ];

  const categorySkills = {
    "Graphic Design": ["Figma", "Adobe Suite", "Canva", "HTML",
      "CSS",],
    "UI/UX": ["Figma", "Adobe Suite", "Wireframing", "Prototyping", "SEO"],
    "Web Design": [
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "TypeScript",
      "React",
      "Svelte",
      "Next.js",
      "Python",
      "Prisma",
      "SQL",
      "WordPress",
      "MongoDB",
      "PgAdmin",
    ],
  };

  const [activeCategory, setActiveCategory] = useState("All");

  return (
<main className="flex flex-col items-center justify-center">
<section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-10 pb-16">
  {/* Text + Buttons */}
  <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-10">
    <h1 className="text-6xl md:text-7xl font-bold text-black mb-4">Portfolio</h1>
    <div className="h-1 w-20 bg-[#b77574] rounded-full mb-6 mx-auto md:mx-0"></div>

    <h3 className="text-2xl text-[#745252] mb-4">My Work and Experience    </h3>
    <p className="text-lg leading-relaxed text-gray-700">
      I graduated in 2025 with a degree in Web Design and Development. 
      I was drawn to this field because I love the blend of design and technology. 
      My work focuses on creating meaningful, user-centered experiences that balance 
      visual design and functionality.
    </p>

    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-10 pb-6">
      <a className="flex-1 px-4 py-2 bg-black border-4 border-transparent hover:bg-white transition hover:border-[#b77574] hover:border-4 hover:text-black text-white text-xl md:text-2xl rounded" href="https://www.behance.net/ardend">Behance</a>
      <a className="flex-1 px-4 py-2 bg-black border-4 border-transparent hover:bg-white transition hover:border-[#b77574] hover:border-4 hover:text-black text-white text-xl md:text-2xl rounded" href="https://github.com/Ardenz1" target="_blank">GitHub</a>
      <a className="flex-1 px-4 py-2 bg-black border-4 border-transparent hover:bg-white transition hover:border-[#b77574] hover:text-black text-white text-xl md:text-2xl rounded" href="/Arden Dubiel Resume 2025.pdf" target="_blank">Resume</a>
    </div>
  </div>

  {/* Image */}
<div className="flex order-3 flex-col items-center">
  {/* Image */}
  <div className="relative inline-block"> 
    <Image
      src="/butterfly.png"
      width={400}
      height={400}
      className="object-cover rounded-lg relative z-10"
      alt="A project I worked on: Recreating a butterfly in Illustrator"
    />
    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#b77574] to-[#745252] translate-x-3 translate-y-3 z-0"></span>
  </div>

  <p className="text-sm italic text-gray-500 mt-3">
    A project I worked on: Recreating a butterfly in Illustrator
  </p>
</div>
</section>

{/* Websites Section */}
<section className="w-full max-w-6xl px-6 md:px-10 py-16">
  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center md:text-left">
    Websites I’ve Worked On
  </h2>
      <div className="h-1 w-20 bg-[#b77574] rounded-full mb-6 mx-auto md:mx-0"></div>

  <p className="text-lg text-gray-700 mb-10 text-center md:text-left">
    A few live projects I’ve worked on and developed.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
    {/* Website 1 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src="/es-home.jpg"
          alt="Elias and Sultana"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl text-black font-semibold mb-2">Elias and Sultana</h3>
        <p className="text-gray-600 flex-1 mb-4">
          Headed a website refresh, and designed and implemented the &quot;Our Work&quot; blog page.
        </p>
        <a href="https://www.eliassultana.org/" target="_blank"  className="mt-auto px-4 py-2 bg-black text-white text-lg rounded border-4 border-transparent hover:bg-white hover:text-black hover:border-[#b77574] transition text-center"
        > View Site </a>
      </div>
    </div>

    {/* Website 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src="/achieve.jpg"
          alt="Project Blog"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl text-black font-semibold mb-2">Achieve</h3>
        <p className="text-gray-600 flex-1 mb-4">
          Built a food and health tracking web app using React, Tailwind CSS, and PostgreSQL.
        </p>
        <a
          href="https://achieve-plum.vercel.app/"
          target="_blank"
          className="mt-auto px-4 py-2 bg-black text-white text-lg rounded border-4 border-transparent hover:bg-white hover:text-black hover:border-[#b77574] transition text-center"
        >
          View Site
        </a>
      </div>
    </div>

    {/* Website 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src="/tns-home.jpg"
          alt="Shop Mockup"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl text-black font-semibold mb-2">TNS Global</h3>
        <p className="text-gray-600 flex-1 mb-4">
         Worked with WordPress and Elementor to refresh and improve site design
        </p>
        <a
          href="https://tnsglobalusa.com/"
          target="_blank"
          className="mt-auto px-4 py-2 bg-black text-white text-lg rounded border-4 border-transparent hover:bg-white hover:text-black hover:border-[#b77574] transition text-center"
        >
          View Site
        </a>
      </div>
    </div>
  </div>
</section>

<section className="w-full max-w-6xl px-6 md:px-10 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center md:text-left">
        Skills
      </h2>
          <div className="h-1 w-20 bg-[#b77574] rounded-full mb-6 mx-auto md:mx-0"></div>

      <p className="text-lg text-gray-700 mb-10 text-center md:text-left">
        Click on a category to highlight relevant skills.
      </p>

      {/* Category Buttons */}
      <div className="flex justify-center md:justify-start gap-4 mb-8 flex-wrap">
        {["All", "Web Design", "Graphic Design", "UI/UX"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded text-lg font-medium border-2 transition mb-2
              ${
                activeCategory === category
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:border-[#b77574] hover:text-[#b77574]"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill List */}
      <div className="flex flex-wrap gap-3 mb-10">
        {allSkills.map((skill) => {
          const isHighlighted =
            activeCategory === "All" ||
            (categorySkills[activeCategory as keyof typeof categorySkills]?.includes(skill) ?? false);
          return (
            <span
              key={skill}
              className={`px-3 py-1 rounded-full text-sm md:text-base transition
                ${
                  isHighlighted
                    ? "bg-[#b77574] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </section>
</main>
  )
}
