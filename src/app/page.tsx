import Card from "./components/card"
import SobreMim from "./components/SobreMim"
import Navbar from "./components/navbar"
import GraficoBarra from "./graficoDeBarras/page"
import GraficoPizza from "./graficoDePizza/page"

  
  
export default function Home() {


  return (
    <>   
    <Navbar/>
    <div className=" h-screen mt-10">
      <SobreMim/>
      
    {/*<GraficoBarra/> <GraficoPizza/>*/}
           
    </div>
    

    </>

 
  )
}
