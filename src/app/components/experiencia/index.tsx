'use client'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CardSobreMim from "../cardSobreMim";
import Container from "../container";
import Modal from '../modal';
import { useState } from 'react';


const Experiencia = () => {
    const openModal1 = () => {
        setIsModalOpen1(true);
    };

    const openModal2 = () => {
        setIsModalOpen2(true);
    };

    const closeModal1 = () => {
        setIsModalOpen1(false);
    };

    const closeModal2 = () => {
        setIsModalOpen2(false);
    };

    ///controle de modais
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    return (
            <Container>
               
                    <div className="w-full max-md:mt-20">
                        <CardSobreMim titleCard={"Experiência profissional"}>
                            <div className='max-h-72 h-full'>
                                <div className="flex justify-between px-10 w-full -mb-2">
                                    <div className="rounded-full h-28 w-28 bg-logoProdesan bg-cover bg-center bg-no-repeat"></div>
                                    <div className='flex justify-center items-center  w-3/4 h-28 text-center text-white'>PRODESAN – Progresso e Desenvolvimento de Santos</div>
                                </div>
                                <div className='text-white flex pr-5 justify-end border-b-2 border-solid pb-1 border-white ' >
                                    <span className='cursor-pointer'><InfoOutlinedIcon onClick={openModal1} /></span>
                                </div>


                                <div>
                                    {isModalOpen1 && (
                                        <Modal
                                            titleModal={'Detalhes da função (PRODESAN)'}
                                            contentModal={`Um novo desafio foi aceito na migração do estágio. O trabalho como desenvolvedor vem se intensificando, e transita desde a  manutenção em sistemas que utilizam PHP e Java, até propostas com soluções baseadas em tecnologias mais modernas, como React e Node (nas quais busco me  especializar) sempre com o intuito de propor uma renovação sistêmica que proporcione facilidade nas futuras manutenções.
								             O trabalho vem instigando a busca pelo conhecimento que reverbera no instinto natural de colocá-lo a prova!  
								              Circulo propulsor que faz com que me apresente um melhor profissional a cada dia!`}
                                            isOpen={isModalOpen1}
                                            closeModal={closeModal1}
                                        />
                                    )}
                                </div>

                                <div className="flex justify-between w-full px-10 mt-6 -mb-2">
                                    <div className="rounded-full h-28 w-28 bg-logoRodrimar bg-center bg-cover bg-no-repeat "></div>
                                    <div className='flex justify-center items-center w-3/4 h-28 text-center text-white'>
                                        RODRIMAR S/A - TERMINAIS PORTUÁRIOS E ARM. GERAIS
                                    </div>
                                </div>

                                <div className='flex pr-5 justify-end' >
                                    <span className='cursor-pointer'><InfoOutlinedIcon onClick={openModal2} /></span>
                                </div>
                            </div>

                            {isModalOpen2 && (
                                <Modal
                                    titleModal={'Detalhes da função (RODRIMAR)'}
                                    contentModal={`Contrato de estágio de TI inicialmente voltado para infra. Na  RODRIMAR era compartilhado com um outro estagiário a responsabilidade pelo suporte aos usuários ( empresa com mais de 100 funcionários ) , limpeza e manutenção de computadores, além de realizar trocas e recargas de toners das impressoras. A organização do acervo de hardwares da empresa também era compreendida como parte das tarefas realizadas.
						Diante de uma antiga demanda da empresa, surgiu a oportunidade de galgar espaço como desenvolvedor. Basicamente a necessidade de controle de armazenagem e transporte de grãos originou essa possibilidade. Por se tratar de um sistema de controle de carga granel (Operação Granel), que se apresentava com complexidade compatível com os conhecimentos e habilidades que já eram desempenhadas de forma teórica, tornando a decisão 
						(de abraçar o desafio e desenvolver o projeto) a mais acertada! `}
                                    isOpen={isModalOpen2}
                                    closeModal={closeModal2}
                                />
                            )}


                        </CardSobreMim>
                    </div>
                    <div className="w-full max-md:mt-20">
                        <CardSobreMim titleCard={"Formações academicas"}>
                            <div className='overflow-y-auto scrollbar scrollbar-corner-rounded-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-2 hover:scrollbar-thumb-sky-900 scrollbar-thumb-cardContent scrollbar-track-lineCard'>
                                <div className='max-h-72  pr-1'>
                                    <a href="https://unisanta.apprbs.com.br/sistemas-de-informacao/" target='_blank'>
                                        <div className='flex justify-between px-10 w-full hover:bg-white hover:bg-opacity-5 transition-colors duration-300 cursor-pointer py-5 items-center border-b-2 border-solid border-white'>
                                            <div className='bg-logoUnisanta bg-cover bg-center rounded-full bg-no-repeat h-20 w-20'></div>
                                            <div className='flex justify-center w-4/5 flex-wrap text-center'>Universidade santa cecília<div className='text-center flex justify-center w-full'>Sistemas de informação (cursando até 12/2025)</div></div>
                                        </div>
                                    </a>

                                    <a href="https://pro.onebitcode.com/?utm_campaign=OBC-C+|+E0-UNC+|+CAR+|+SCH+|+T1S-BRD+|+CPA+|+BR+|+2022-11-10+|+FULL+STACK+|+Branding&utm_content=onebitcode&utm_term=00+|+SCH+|+Keywords+|++Branding&&utm_medium=paid-traffic&utm_source=g&ltk_gcm=20126792132&ltk_gag=155881055264&ltk_gac=658337982717&ltk_gne=g&gad=1&gclid=Cj0KCQjw756lBhDMARIsAEI0AgkLHRdmRT_ppb9JPzvg1hJZrEc9VTlZpHLZIJGZynqG3euBS4K6md8aAi3AEALw_wcB" target='_blank'>
                                        <div className='flex justify-between px-10 w-full py-5 hover:bg-white hover:bg-opacity-5 transition-colors duration-300 cursor-pointer items-center  border-b-2 border-solid border-white'>
                                            <div className='bg-logoOBTC bg-cover bg-center rounded-full bg-no-repeat h-20 w-20'></div>
                                            <div className='flex justify-center w-4/5 flex-wrap text-center'>HOTMART<div className='text-center flex justify-center w-full'>OneBitCode - Leonardo Scorza - Do Zero ao Profissional</div></div>
                                        </div>
                                    </a>
                                    <a href="https://www.dio.me/courses/trabalhando-com-componentes-em-react?search=componen" target='_blank'><div className='flex justify-between px-10 w-full py-5 hover:bg-white hover:bg-opacity-5 transition-colors duration-300 cursor-pointer items-center border-b-2 border-solid border-white'>
                                        <div className='bg-logoDiome bg-cover bg-center rounded-full bg-no-repeat h-20 w-20'></div>
                                        <div className='flex justify-center w-4/5 flex-wrap text-center'>DIO.ME<div className='text-center flex justify-center w-full'>Trabalhando com Componentes em React</div></div>
                                    </div>
                                    </a>
                                    <a href="https://www.cursoemvideo.com/curso/curso-de-algoritmo/" target='_blank'><div className='flex justify-between px-10 w-full py-5 hover:bg-white hover:bg-opacity-5 transition-colors duration-300 cursor-pointer items-center  border-b-2 border-solid border-white'>
                                        <div className='bg-logoCursoEmVideo bg-cover bg-center rounded-full bg-no-repeat h-20 w-20'></div>
                                        <div className='flex justify-center w-4/5 flex-wrap text-center'>Curso em Vídeo<div className='text-center flex justify-center w-full'>Algoritimos</div></div>
                                    </div>
                                    </a>
                                    <a href="https://www.cursoemvideo.com/curso/html5-css3-modulo1/" target='_blank'><div className='flex hover:bg-white hover:bg-opacity-5 transition-colors duration-300 cursor-pointer justify-between px-10 w-full py-5 items-center  border-b-2 border-solid border-white'>
                                        <div className='bg-logoCursoEmVideo bg-cover bg-center rounded-full bg-no-repeat h-20 w-20'></div>
                                        <div className='flex justify-center w-4/5 flex-wrap text-center'>Curso em Vídeo<div className='text-center flex justify-center w-full'>HTML5 E CSS3 (Módulo 1)</div></div>
                                    </div>

                                    </a>
                                    <a href="https://www.cursoemvideo.com/curso/curso-html5-e-css3-modulo-2-de-5-40-horas/" target='_blank'><div className='flex hover:bg-white hover:bg-opacity-5 transition-colors duration-300 cursor-pointer justify-between px-10 w-full py-5 items-center  border-b-2 border-solid border-white'>
                                        <div className='bg-logoCursoEmVideo bg-cover bg-center rounded-full bg-no-repeat h-20 w-20'></div>
                                        <div className='flex justify-center w-4/5 flex-wrap text-center'>Curso em Vídeo<div className='text-center flex justify-center w-full'>HTML5 E CSS3 (Módulo 2)</div></div>
                                    </div>
                                    </a>
                                    <a href="https://www.cursoemvideo.com/curso/curso-html5-e-css3-modulo-3-de-5-40-horas/" target='_blank'><div className='flex hover:bg-white hover:bg-opacity-5 transition-colors duration-300 cursor-pointer justify-between px-10 w-full py-5 items-center  border-b-2 border-solid border-white'>
                                        <div className='bg-logoCursoEmVideo bg-cover bg-center rounded-full bg-no-repeat h-20 w-20'></div>
                                        <div className='flex justify-center w-4/5 flex-wrap text-center'>Curso em Vídeo<div className='text-center flex justify-center w-full'>HTML5 E CSS3 (Módulo 3)</div></div>
                                    </div>
                                    </a>
                                    <a href="https://www.udemy.com/course/nodejs-do-zero-a-maestria-com-diversos-projetos/?utm_source=adwords-intl&utm_medium=udemyads&utm_campaign=WebDevelopment_new_v.PROF_la.PT_cc.BR_ti.8322&utm_content=deal4584&utm_term=_._ag_116454201523_._kw__._ad_492962435167_._de_c_._dm__._pl__._ti_dsa-1145036243504_._li_1001766_._pd__._&gclid=Cj0KCQjw756lBhDMARIsAEI0AgmXbiPREwIv-xVJm8OmAMqdrT9aL1CsSJlpSxFf3KOvi4mztXWMLpUaAhuLEALw_wcB" target='_blank'>
                                        <div className='flex justify-between px-10 w-full py-5 hover:bg-white hover:bg-opacity-5 transition-colors duration-300 cursor-pointer items-center border-b-2 border-solid border-white'>
                                            <div className='bg-logoUdemy bg-cover bg-center rounded-full bg-no-repeat h-20 w-20'></div>
                                            <div className='flex justify-center w-4/5 flex-wrap text-center'>Udemy<div className='text-center flex justify-center w-full'>Node.js do Zero a Maestria com diversos Projetos</div></div>
                                        </div>
                                    </a>
                                    <a href="https://www.udemy.com/course/curso-web/" target='_blank'><div className='flex justify-between px-10 w-full py-5 hover:bg-white hover:bg-opacity-5 transition-colors duration-300 cursor-pointer items-center border-b-2 border-solid border-white'>
                                        <div className='bg-logoUdemy bg-cover bg-center rounded-full bg-no-repeat h-20 w-20'></div>
                                        <div className='flex justify-center w-4/5 flex-wrap text-center'>Udemy<div className='text-center flex justify-center w-full'>Curso Web Moderno Completo com JavaScript 2022 + Projetos</div></div>
                                    </div>
                                    </a>
                                    <a href="https://www.udemy.com/course/programacao-orientada-a-objetos-csharp/" target='_blank'>
                                        <div className='flex justify-between px-10 w-full py-5 hover:bg-white hover:bg-opacity-5 transition-colors duration-300 cursor-pointer items-center border-b-2 border-solid border-white'>
                                            <div className='bg-logoUdemy bg-cover bg-center rounded-full bg-no-repeat h-20 w-20'></div>
                                            <div className='flex justify-center w-4/5 flex-wrap text-center'>Udemy<div className='text-center flex justify-center w-full'>C# Completo: Programação Orientada + Projetos</div></div>
                                        </div>
                                    </a>
                                    <a href="https://www.udemy.com/course/logica-de-programacao-csharp/" target='_blank'>
                                        <div className='flex justify-between px-10 w-full py-5 hover:bg-white hover:bg-opacity-5 transition-colors duration-300 cursor-pointer items-center border-b-2 border-solid border-white'>
                                            <div className='bg-logoUdemy bg-cover bg-center rounded-full bg-no-repeat h-20 w-20'></div>
                                            <div className='flex justify-center w-4/5 flex-wrap text-center'>Udemy<div className='text-center flex justify-center w-full'>C# Primeiros Passos: Lógica de programação e Algorítimos</div></div>
                                        </div>
                                    </a>
                                    <a href="https://www.udemy.com/course/frccursodemanuntencao/" target='_blank'>
                                        <div className='flex justify-between px-10 w-full py-5 hover:bg-white hover:bg-opacity-5 transition-colors duration-300 cursor-pointer items-center'>
                                            <div className='bg-logoUdemy bg-cover bg-center rounded-full bg-no-repeat h-20 w-20'></div>
                                            <div className='flex justify-center w-4/5 flex-wrap text-center'>Udemy<div className='text-center flex justify-center w-full'>Manutenção De Computadores E Equipamentos De Informática</div></div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </CardSobreMim>
                    </div>


            </Container>


    )
}
export default Experiencia;

