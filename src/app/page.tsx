'use client'
import { useState, useEffect, useRef } from "react";
import SobreMim from "./components/SobreMim";
import Navbar from "./components/navbar";
import GraficoBarra from "./graficoDeBarras/page";
import GraficoPizza from "./graficoDePizza/page";
import CardSobreMim from "./components/cardSobreMim";
import Projetos from "./components/Projetos";
import Contato from "./components/contato";
import Experiencia from "./components/experiencia";
import initializeAOS from "./utils/aos/aos";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {




  return (
    <>
      <Navbar />
      <div className="scroll-smooth overflow-y-auto scrollbar scrollbar-corner-rounded-full scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-w-2 hover:scrollbar-thumb-sky-900 scrollbar-thumb-cardContent
       scrollbar-track-lineCard overflow-x-hidden h-full w-full  text-white">
        <section id="1">
          <SobreMim />
        </section>
        <section id="2">
          <Projetos />
        </section>
        <section id="3">
          <Experiencia />
        </section>
        <section id="4">
          <Contato />
        </section>


        {/*<GraficoBarra/>   x
 <GraficoPizza/>*/}
      </div>
    </>
  );
}

