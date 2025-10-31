"use client";
import Image from "next/image";

export default function Portfolio() {

  return (
<main className="flex items-center justify-center">
   <section className="flex flex-col md:flex-row items-center justify-around w-full max-w-5xl px-6 md:px-10">
    
    {/* Text + buttons */}
    <div className="order-1 md:order-none flex flex-col items-center lg:items-start text-center lg:text-left">
      <div className="flex flex-col text-black">
        <h1 className="text-8xl md:text-8xl pb-3">Portfolio</h1>
        <h3 className="text-2xl">A little about my work and personal experience</h3>
        <h4>I graduated in 2025 with a degree in Web Design and Development. <br></br> I was drawn to this field becaue I love the blend of design and technology. </h4>
      </div>

      <div className="flex gap-4 pt-10 pb-6 text-center">
        <a className=" flex-1 px-4 py-2 bg-black border-4 border-transparent hover:bg-white transition hover:border-[#b77574] hover:border-4 hover:text-black text-white text-xl md:text-2xl rounded" href="https://www.behance.net/ardend">Behance</a>
        <a className="flex-1 px-4 py-2 bg-black border-4 border-transparent hover:bg-white transition hover:border-[#b77574] hover:border-4 hover:text-black text-white text-xl md:text-2xl rounded" href="https://github.com/Ardenz1" target="_blank">GitHub</a>
        <a className="flex-1 px-4 py-2 bg-black border-4 border-transparent hover:bg-white transition hover:border-[#b77574] hover:border-4 hover:text-black text-white text-xl md:text-2xl rounded" href="/Arden Dubiel Resume 2025.pdf" target="_blank">Resume</a>

      </div>
    </div>

  <div className="flex order-3">
    {/* Image */}
    <div className="relative inline-block "> 
    <Image
      src="/butterfly.png"
      width={400}
      height={400}
    className="object-cover rounded-lg relative z-10"
      alt="Your Description"
    />
    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#b77574] to-[#745252] translate-x-3 translate-y-3 z-0"></span>
    </div>
    </div>
  </section>
</main>
  )
}
