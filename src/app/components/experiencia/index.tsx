'use client'
import CardSobreMim from "../cardSobreMim";
import Container from "../container";

const Experiencia = () => {

    return (
        <>
            <Container>
                <div className="flex justify-between w-full h-screen items-center px-24">

                    <div className="w-full pr-5">

                        <CardSobreMim
                            title="Experiência profissional"
                            content={' '}
                            asFormacoes={true}
                        />
                    </div>
                    <div className="w-full pl-5">

                        <CardSobreMim
                            title="Formações academicas"
                            content={' '}
                        />
                    </div>
                </div>

            </Container>
        </>
    )
}
export default Experiencia;