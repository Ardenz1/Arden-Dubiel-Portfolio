"use client";
import React, { useState } from "react";

const Footer = () => {
  return(
 <section className="bg-black text-white w-full mt-10">
  <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-6 md:px-10 py-6">
    <div className="text-3xl">
      <a href="/" className="hover:text-[#b77574] transition">Arden · Dubiel</a>
    </div>

    <nav className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
      <a href="/" className="px-3 py-2 hover:text-[#b77574] transition">Home</a>
      <a href="/portfolio" className="px-3 py-2 hover:text-[#b77574] transition">Portfolio</a>
      <a href="/contact" className="px-3 py-2 hover:text-[#b77574] transition">Contact</a>
    </nav>
  </div>

  <p className="text-sm mt-4 md:mt-0 text-gray-400 text-center pb-4">
    © 2026 Arden Dubiel. All rights reserved.
  </p>
</section>

 
  );
};

export default Footer;
