"use client";
import { useState } from "react";
import Image from "next/image";
import CustomModal from "../components/CustomModal";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" });

  const openModal = (src: string, alt: string) => {
    setCurrentImage({ src, alt });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage({ src: "", alt: "" });
  };

  return (
<main className="flex items-center justify-center md:pb-[250px] lg:pb-[150px]">
    {/* <p>dark mode/light mode button</p>
    <p>links to socials as icons</p>
    <p>doodles</p> */}

  <section className="flex flex-col md:flex-row items-center justify-around w-full max-w-5xl px-6 md:px-10">
    
    {/* Text + buttons */}
    <div className="order-1 md:order-none flex flex-col items-center lg:items-start text-center lg:text-left mb-10">
      <div className="flex flex-col text-black">
        <h1 className="text-6xl md:text-8xl pb-3">Hi, I&apos;m Arden</h1>
          <div className="h-1 w-20 bg-[#b77574] rounded-full mb-6 mx-auto  lg:mx-0"></div>
        <h3 className="text-2xl">I&apos;m a Web, Graphic, and UI/UX Designer</h3>
      </div>

      <div className="flex gap-4 pt-10 pb-6 w-[300px] text-center">
        <a className=" flex-1 px-4 py-2 bg-black border-4 border-transparent hover:bg-white transition hover:border-[#b77574] hover:border-4 hover:text-black text-white text-xl md:text-2xl rounded" href="/portfolio">Portfolio</a>
        <a className="flex-1 px-4 py-2 bg-black border-4 border-transparent hover:bg-white transition hover:border-[#b77574] hover:border-4 hover:text-black text-white text-xl md:text-2xl rounded" href="/contact">Contact</a>
      </div>
    </div>

    {/* Image */}
  <div className="flex order-3">
 <div className="relative inline-block">
  <Image
    src="/me22025.jpg"
    width={400}
    height={400}
    alt="Your Description"
    className="object-cover rounded-lg relative z-10"
    priority 
  />
  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#b77574] to-[#745252] translate-x-3 translate-y-3 z-0"></span>
</div>
  </div>  

  </section>
</main>

  );
}
