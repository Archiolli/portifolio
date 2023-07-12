import CardSobreMim from "../cardSobreMim";
import Container from "../container";

const SobreMim = () => {

  return (
    <>
      <section id="SobreSection">
        <Container>
          <div className="flex flex-wrap justify-center items-center h-screen">

            <div className="px-32 pb-4 grow basis-56 text-center">
              <CardSobreMim
                title="Imagem"
                content={`-Competência e tecnologias
            -Desenvolvedor Full-stack            
            -NextJs, Node, TypeScript, Tailwind, MySQL`}
                isAmount={false}
              />
            </div>

            <div className="p-14 grow basis-96">
              <CardSobreMim
                title="Sobre mim"
                content={`Olá, me chamo João, tenho 22 anos, solteiro, fui atleta profissional por dez anos, o que me possibilitou 
            conhecer a area de programação pela faculdade. E então, a partir daí comecei a estudar mais
            incisivamente a área, posteriormente me profissionalizar.`}
                isAmount={true}
                adicionalContent="Gerar valor aos projetos realizados
            Ser um profissional interado com a comunidade de programação
            Adquirir experiência com pessoas mais capacitadas para sempre evoluir"
                adicionalTitle="Objetivos"
              />
            </div>




          </div>
        </Container>
      </section>



    </>
  )
}
export default SobreMim;