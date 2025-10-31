"use client";
import Image from "next/image";


export default function Contact() {

  return (
<main className="flex items-center justify-center">
   <section className="flex flex-col md:flex-row items-center justify-around w-full max-w-5xl px-6 md:px-10">
    
    {/* Text + buttons */}
    <div className="order-1 md:order-none flex flex-col items-center lg:items-start text-center lg:text-left">
      <div className="flex flex-col text-black">
        <h1 className="text-8xl md:text-8xl pb-3">Contact</h1>
        <h3 className="text-2xl">Feel free to reach out, I&apos;d love to connect</h3>
      </div>

      <div className="flex gap-4 pt-10 pb-6 w-[300px] text-center">
        <a className=" flex-1 px-4 py-2 bg-black border-4 border-transparent hover:bg-white transition hover:border-[#b77574] hover:border-4 hover:text-black text-white text-xl md:text-2xl rounded" href="mailto:ardenzd3@gmail.com">Email</a>
        <a className="flex-1 px-4 py-2 bg-black border-4 border-transparent hover:bg-white transition hover:border-[#b77574] hover:border-4 hover:text-black text-white text-xl md:text-2xl rounded" href="https://www.linkedin.com/in/arden-dubiel/" target="_blank">LinkedIn</a>
      </div>
    </div>

  <div className="flex order-3">
    {/* Image */}
    <div className="relative inline-block "> 
    <Image
      src="/motivation.jpg"
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
  );
}
