
'use client'
import CardSobreMim from "../cardSobreMim";
import Container from "../container";

const Projetos = () => {

    return (
        <section id="ProjetosSection">
            <Container>
                <div className="items-center h-full flex flex-wrap px-20">
                    <div className="grow basis-72 p-5">
                        <CardSobreMim
                        
                            title="Operação Granel"
                            content={' '}
                            isAmount={false}
                            asProjetoOpGranel={true}
                        />
                    </div>

                    <div className="grow basis-72 p-5">
                        <CardSobreMim
                            title="Pets"
                            content={` `}
                            isAmount={false}
                            asPetProject={true}
                        />
                    </div>

                    <div className="grow basis-72 p-5">
                        <CardSobreMim
                            title="Gráficos Crypto"
                            content={`img Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quos repellat voluptatum, totam reiciendis nihil earum ducimus illum sequi hic tenetur similique odio, rerum dolorem suscipit, error quae doloribus porro.`}
                            isAmount={false}
                        />

                    </div>




                    <div className="grow basis-72 p-5">
                        <CardSobreMim
                            title="Login"
                            content={`img Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quos repellat voluptatum, totam reiciendis nihil earum ducimus illum sequi hic tenetur similique odio, rerum dolorem suscipit, error quae doloribus porro.`}
                            isAmount={false}
                        />
                    </div>

                    <div className="grow basis-72 p-5">
                        <CardSobreMim
                            title="Banco"
                            content={` `}
                            isAmount={false}
                            asBancoProject={true}
                        />
                    </div>

                    <div className="grow basis-72 p-5">
                        <CardSobreMim
                            title="TodoList"
                            content={` `}
                            isAmount={false}
                            asTodoProject={true}
                        />

                    </div>

                </div>

            </Container>
        </section>


    )
}
export default Projetos;