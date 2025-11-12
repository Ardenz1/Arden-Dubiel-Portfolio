"use client";
import Image from "next/image";


export default function Contact() {

  return (
<main className="flex items-center justify-center md:pb-[250px] lg:pb-[150px]">
   <section className="flex flex-col md:flex-row items-center justify-around w-full max-w-5xl px-6 md:px-10">
    
    {/* Text + buttons */}
    <div className="order-1 md:order-none flex flex-col items-center lg:items-start text-center lg:text-left mb-10">
      <div className="flex flex-col text-black">
        <h1 className="text-6xl md:text-7xl font-bold text-black mb-4">Contact</h1>
    <div className="h-1 w-20 bg-[#b77574] rounded-full mb-6 mx-auto lg:mx-0"></div>
        <h3 className="text-2xl">Feel free to reach out, I&apos;d love to connect</h3>
      </div>

      <div className="flex gap-4 pt-10 pb-6 w-[300px] text-center">
        <a className="flex-1 px-4 py-2 bg-black border-4 border-transparent hover:bg-white transition hover:border-[#b77574] hover:border-4 hover:text-black text-white text-xl md:text-2xl rounded" href="mailto:ardenzd3@gmail.com">Email</a>
        <a className="flex-1 px-4 py-2 bg-black border-4 border-transparent hover:bg-white transition hover:border-[#b77574] hover:border-4 hover:text-black text-white text-xl md:text-2xl rounded" href="https://www.linkedin.com/in/arden-dubiel/" target="_blank">LinkedIn</a>
      </div>
    </div>

<div className="flex order-3 flex-col items-center">
  {/* Image */}
  <div className="relative inline-block"> 
    <Image
      src="/motivation.jpg"
      width={400}
      height={400}
      className="object-cover rounded-lg relative z-10"
      alt="Meet my cats who keep me company while I work."
    />
    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#b77574] to-[#745252] translate-x-3 translate-y-3 z-0"></span>
  </div>

  <p className="text-sm italic text-gray-500 mt-3">
    Meet my cats who keep me company while I work.
  </p>
</div>

  </section>
</main>
  );
}
