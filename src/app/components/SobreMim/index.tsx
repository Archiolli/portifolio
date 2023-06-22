import Card from "../card"
  
const SobreMim = () => {

  return (
    <>  
        <div className="w-full h-screen"> 

            <div className="flex px-28">
    
             <Card text={'Imagem'} content={`-Desenvolvedor Full-stack
            -NextJs, Node, TypeScript, Tailwind, MySQL`}
            width="3/5"
            />
               
        

            <span className="ml-24">
                <Card text={'Sobre mim'} content={`Olá, me chamo João, tenho 22 anos, solteiro, fui atleta profissional por dez anos, o que me possibilitou conhecer a area de programação pela faculdade. E então,
             a partir daí comecei a estudar mais incisivamente a área,
              posteriormente me profissionalizar.`}
              width={"12"}
              /> 
            </span> 
            </div>
            
           

            
        </div> 
   
    </>
  )
}
export default SobreMim;