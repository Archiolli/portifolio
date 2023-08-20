'use client'
import Container from '../container';
import CardSobreMim from '../cardSobreMim';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useRef } from 'react';


export default function Contato() {

    const sugestoesInputRef = useRef<HTMLTextAreaElement>(null);
    const nomeInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);

    return (
        <Container>
            <div className="lg:px-64 xl:px-60 md:px-32 2xl:px-32 max-2xl:px-96 max-sm:px-0 sm:px-0 w-full h-full">
                <CardSobreMim titleCard={"Entre em contato"}>
                    <div className="flex justify-around">
                        <span className='cursor-pointer'><a href="https://wa.me/5513998073586" target="_blank"><WhatsAppIcon /></a></span>
                        <span className='cursor-pointer'><a href="https://www.linkedin.com/in/jo%C3%A3o-archiolli-74b799189/" target="_blank"><LinkedInIcon /></a></span>
                        <span className='cursor-pointer'><a href="https://github.com/Archiolli" target="_blank"><GitHubIcon /></a></span>
                        <span className='cursor-pointer'><a href="https://www.instagram.com/joaoarchiolli/" target="_blank"><InstagramIcon /></a></span>
                        <span className='cursor-pointer'><a href="mailto:joao.roberto_2001@hotmail.com" target="_blank"><MailOutlineIcon /></a></span>
                    </div>
                    <div className='mt-2'>*Clique para ser redirecionado</div>
                    <div className='pb-10'>
                        <form action="https://formsubmit.co/joao.roberto_2001@hotmail.com" method="POST">

                            <div className='w-full'>
                                <label className='text-white' htmlFor="nome">Nome:</label>
                                <input name='name' type='text'
                                    ref={nomeInputRef}
                                    className='w-full px-2 h-12 border-solid border-2 text-white bg-inputColor bg-opacity-40 border-slate-400 rounded-md'

                                    placeholder='Digite seu nome...' /></div>
                            <div className='w-full'>
                                <label className='text-white' htmlFor="email">Email:</label>
                                <input name='email' type='email'
                                    ref={emailInputRef}
                                    className='w-full px-2 h-12 border-solid border-2 text-white bg-inputColor bg-opacity-40 border-slate-400 rounded-md'

                                    placeholder='Digite seu email...' /></div>
                            <div className='w-full'>
                                <label className='text-white' htmlFor="sugestoes">Sugestões:</label>
                                <textarea name='sugestoes'
                                    ref={sugestoesInputRef}
                                    className='w-full px-2 pt-2 h-36 border-solid border-2 text-white bg-inputColor bg-opacity-40 border-slate-400 rounded-md'
                                    placeholder='Digite sua sugestão, elogio, ou qualquer outra coisa...' />
                            </div>
                            <div className="w-full h-14 flex items-center justify-center">
                                <button className='mt-10 p-4 bg-gradient-to-r from-cardContent to-inputColor hover:from-inputColor hover:to-cardContent
	                                   hover:duration-500 hover:ease-in-out
	                                             hover:ring-2 hover:ring-mouseHoverNav
	                                               ring-offset-4 ring-offset-cardContent
                                                   text-white rounded-3xl items-center' >Enviar</button>
                            </div>

                        </form>
                    </div>
                </CardSobreMim>

            </div>

        </Container>
    )
}


