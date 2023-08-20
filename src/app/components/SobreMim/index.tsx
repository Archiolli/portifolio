import Image from "next/image";
import CardSobreMim from "../cardSobreMim";
import Container from "../container";
import perfil from "../../utils/img/Perfil.jpg"
const SobreMim = () => {

  return (
    <>

      <Container>
        <div className="sm:flex sm:flex-row max-lg:flex max-lg:flex-col lg:flex lg:flex-row 2xl:flex 2xl:flex-col
         max-md:px-0
        ">
          <div className="w-full max-sm:pb-8 sm:pb-8 md:pb-8  text-center items-center px-20">
            <CardSobreMim titleCard={<div className="flex justify-center">
              <Image src={perfil} alt="Descrição do GIF" className="max-sm:h-32 max-sm:w-32 md:w-32 md:h-32  rounded-full" /></div>}
            >
              <div className="text-xl mb-3 font-normal text-white"> Competência e tecnologias</div>
              <div className="flex flex-col text-center items-center">
                <span >-Desenvolvedor Full-stack</span>
                <span>-NextJs, Node, TypeScript, Tailwind, MySQL</span>
              </div>
            </CardSobreMim>
          </div>

          <div className="items-center max-lg:px-0 flex px-10 text-justify
          
          2xl:px-[10%] xl:px-[10%]
          ">
            <CardSobreMim titleCard={'Sobre mim'}>
              <div>
                <p>Olá, me chamo João, tenho 22 anos, solteiro, fui atleta profissional por dez anos, o que me possibilitou
                  conhecer a area de programação pela faculdade. E então, a partir daí comecei a estudar mais
                  incisivamente a área, posteriormente me profissionalizar.
                </p>
              </div>
              <div>

                <div className="text-xl mb-2 pr-14 font-normal text-white mt-5">Objetivos</div>
                <div className="border-2 w-full flex justify-center items-center rounded-full border-solid border-lineCard"></div>
                <p>
                  Gerar valor aos projetos realizados
                  Ser um profissional interado com a comunidade de programação
                  Adquirir experiência com pessoas mais capacitadas para sempre evoluir
                </p>
              </div>
            </CardSobreMim>
          </div>

        </div>


      </Container>




    </>
  )
}
export default SobreMim;