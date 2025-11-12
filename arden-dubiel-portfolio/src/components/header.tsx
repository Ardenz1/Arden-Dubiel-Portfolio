"use client";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md w-full relative">
      <div className="flex justify-between items-center px-6 py-4 mb-8">
        <div className="text-5xl text-black hover:text-[#b77574]" style={{ fontFamily: "'Gabriela', sans-serif" }}><a href="/">A·D</a></div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="flex flex-col justify-between w-6 h-6 relative">
            <span className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${open ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-black transition duration-300 ease-in-out ${open ? "opacity-0" : "top-1/2 -translate-y-1/2"}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${open ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"}`}></span>
          </button>
        </div>
        <nav className="hidden md:flex gap-4">
          <a href="/" className="px-4 py-2 text-black hover:bg-[#b77574] hover:text-white">Home</a>
          <a href="/portfolio" className="px-4 py-2 text-black hover:bg-[#b77574] hover:text-white">Portfolio</a>
          <a href="/contact" className="px-4 py-2 bg-black text-white rounded hover:bg-[#b77574]">Contact</a>
        </nav>
      </div>
      {open && (
        <nav className="flex flex-col text-xl md:hidden gap-2 px-6 pb-4 mb-8">
          <a href="/portfolio" className="block px-4 py-2 text-black hover:bg-[#b77574] hover:text-white rounded">Portfolio</a>
          <a href="/contact" className="block px-4 py-2 text-black hover:bg-[#b77574] hover:text-white rounded">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
