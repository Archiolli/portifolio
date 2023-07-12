'use client'
import Container from '../container';
import CardSobreMim from '../cardSobreMim';

export default function Contato() {
    return (
        <section id='ContatoSection'>

            <Container>
                <div className='h-screen w-full items-center flex justify-center'>

                    <div className=" lg:px-20 sm:px-10">

                        <div className="w-full">
                            <CardSobreMim
                                title='Entre em contato'
                                isAmount={false}
                                hasInput={true}
                            />

                        </div>
                    </div>


                </div>

            </Container>
        </section>
    )
}
