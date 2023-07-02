import SobreMim from "./components/SobreMim"
import Navbar from "./components/navbar"
import GraficoBarra from "./graficoDeBarras/page"
import GraficoPizza from "./graficoDePizza/page"
import CardSobreMim from "./components/cardSobreMim"
import Projetos from "./components/Projetos"
import Contato from "./components/contato"

  
  
export default function Home() {


  return (
    <>   
    <div className="overflow-x-hidden h-full">
    <Navbar/>
    <SobreMim/>
    <Projetos/>
    <Contato/>
      
    {/*<GraficoBarra/>   x
 <GraficoPizza/>*/}
           
    </div>
    

    </>

 
  )
}
