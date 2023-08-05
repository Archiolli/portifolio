import Image from "next/image";
import CardSobreMim from "../cardSobreMim";
import Container from "../container";
import perfil from "../../utils/img/Perfil.jpg"
const SobreMim = () => {

  return (
    <>
    
        <Container>
            <div className="px-32 pb-4 grow basis-56 text-center items-center">
              <CardSobreMim titleCard={<Image src={perfil} alt="Descrição do GIF" className="w-full h-full ml-6 justify-center items-center rounded-full" />}>
              <div className="text-xl mb-3 font-normal text-white"> Competência e tecnologias</div>               
                <div className="flex flex-col text-center items-center">                
                  <span >-Desenvolvedor Full-stack</span>
                  <span>-NextJs, Node, TypeScript, Tailwind, MySQL</span>
                </div>
              </CardSobreMim>
            </div>

            <div className="p-14 grow basis-96">
              <CardSobreMim titleCard={'Sobre mim'}>
                <div>
                  <p>Olá, me chamo João, tenho 22 anos, solteiro, fui atleta profissional por dez anos, o que me possibilitou
                    conhecer a area de programação pela faculdade. E então, a partir daí comecei a estudar mais
                    incisivamente a área, posteriormente me profissionalizar.
                  </p>
                </div>
                <div>

                  <div className="text-xl mb-2 pr-14  font-normal text-white mt-5">Objetivos</div>
                  <div className="border-2 w-full flex justify-center items-center rounded-full border-solid border-lineCard"></div>
                  <p>
                    Gerar valor aos projetos realizados
                    Ser um profissional interado com a comunidade de programação
                    Adquirir experiência com pessoas mais capacitadas para sempre evoluir
                  </p>
                </div>

              </CardSobreMim>
            </div>

        </Container>
  



    </>
  )
}
export default SobreMim;