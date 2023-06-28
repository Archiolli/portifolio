import SobreMim from "./components/SobreMim"
import Navbar from "./components/navbar"
import GraficoBarra from "./graficoDeBarras/page"
import GraficoPizza from "./graficoDePizza/page"
import CardSobreMim from "./components/cardSobreMim"
import Projetos from "./components/Projetos"

  
  
export default function Home() {


  return (
    <>   
    <div className="overflow-auto">
    <Navbar/>
    <Projetos/>
      
      
    {/*<GraficoBarra/>   x <SobreMim/>
 <GraficoPizza/>*/}
           
    </div>
    

    </>

 
  )
}
