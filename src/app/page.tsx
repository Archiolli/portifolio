import Card from "./components/card"
import Navbar from "./components/navbar"
import GraficoBarra from "./graficoDeBarras/page"
import GraficoPizza from "./graficoDePizza/page"

  
  
export default function Home() {


  return (
    <>   
    <Navbar/>
    <div className="flex items-center justify-center mt-10">
      <Card text={'Sobre mim'} content={"vai tomar no cu lorem lorem lorem lorem"}/>
           

    {/*<GraficoBarra/> <GraficoPizza/>*/}
           
    </div>

    </>

 
  )
}
