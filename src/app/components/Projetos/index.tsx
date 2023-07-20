
'use client'
import { useState } from "react";
import CardSobreMim from "../cardSobreMim";
import Container from "../container";
import Image from "next/image";
import Modal from '../modal';
import rodrigif from '../../utils/gifs/videoOpGranel.gif';
import todoGif from "../../utils/gifs/giftodoapp.gif";
import petGif from "../../utils/gifs/gifPets.gif";
import bancoGif from "../../utils/gifs/gifBanco.gif";

const Projetos = () => {


    return (
        <section id="ProjetosSection">
            <Container>

                <div className="flex justify-between">
                    
                        <CardSobreMim titleCard={"Operação Granel"}>
                            <div className="h-40 w-full">
                                <Image src={rodrigif} alt="Descrição do GIF" className="w-full h-full rounded-xl" />
                            </div>
                        </CardSobreMim>
                    
                    
                        <CardSobreMim titleCard="Pets">
                            <div className="h-40 w-full">
                                <Image src={petGif} alt="Descrição do GIF" className="w-full h-full rounded-xl" />
                            </div>
                        </CardSobreMim>
                    

                    
                        <CardSobreMim titleCard='Todo App'>
                            <div className="h-40 w-full">
                                <Image src={todoGif} alt="Descrição do GIF" className="w-full h-full rounded-xl" />
                            </div>
                        </CardSobreMim>
                </div>



                <div className="justify-center w-full flex">
                    <CardSobreMim titleCard='Banco'>
                        <div className="h-40 w-full">
                            <Image src={bancoGif} alt="Descrição do GIF" className="w-full h-full rounded-xl" />
                        </div>
                    </CardSobreMim>
                </div>



            </Container>
        </section>


    )
}
export default Projetos;