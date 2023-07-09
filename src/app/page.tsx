import SobreMim from "./components/SobreMim"
import Navbar from "./components/navbar"
import GraficoBarra from "./graficoDeBarras/page"
import GraficoPizza from "./graficoDePizza/page"
import CardSobreMim from "./components/cardSobreMim"
import Projetos from "./components/Projetos"
import Contato from "./components/contato"
import Experiencia from "./components/experiencia"



export default function Home() {


  return (
    <>
      <div className="overflow-y-auto scrollbar scrollbar-corner-rounded-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-2 hover:scrollbar-thumb-sky-900 scrollbar-thumb-cardContent scrollbar-track-lineCard overflow-x-hidden h-full w-full  text-white">

        <Navbar />
        <section className="SobreSection">
          <SobreMim />
        </section>
        <section className="ProjetosSection">
          <Projetos />
        </section>
        <section id="ExperiênciaSection">
          <Experiencia />
        </section>
        <section id="ContatoSection">
          <Contato />
        </section>

        {/*<GraficoBarra/>   x
 <GraficoPizza/>*/}

      </div>


    </>


  )
}
