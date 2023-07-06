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
      <div className="overflow-x-hidden h-full w-full">
        <Navbar />
        <SobreMim />
        <Projetos />
        <Experiencia />
        <Contato />

        {/*<GraficoBarra/>   x
 <GraficoPizza/>*/}

      </div>


    </>


  )
}
