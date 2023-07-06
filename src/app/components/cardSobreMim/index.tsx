'use client'

import { useState, useRef } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoIcon from '@mui/icons-material/Info';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

const CardSobreMim = ({ content, title, isAmount, adicionalTitle, adicionalContent, hasInput, hasOverflow, asFormacoes }: {
	content?: any;
	title: string;
	isAmount?: boolean;
	adicionalTitle?: string;
	adicionalContent?: string;
	hasInput?: boolean;
	hasOverflow?: boolean;
	asFormacoes?: boolean

}) => {

	const sugestoesInputRef = useRef<HTMLTextAreaElement>(null);
	const nomeInputRef = useRef<HTMLInputElement>(null);
	const emailInputRef = useRef<HTMLInputElement>(null);

	const [form, setForm] = useState<object>()
	const [adicionalInput, setadicionalInput] = useState(hasInput || false)
	const [amount, setAmount] = useState(isAmount || false);
	const [experiencia, setExperiencia] = useState(asFormacoes || false)

	return (
		<div className={`rounded-2xl bg-opacity-30 bg-cardContent  ${hasOverflow === true ? 'overflow-y-auto' : 'overflow-hidden'} shadow-lg`}>
			<div className="px-6 py-2">
				<div className="text-xl mb-2 pr-14  font-normal text-white">{title}</div>
				<div className="border-2 w-full flex justify-center items-center rounded-full border-solid border-lineCardSobreMim"></div>
			</div>
			<div className="text-white px-6 pt-2 pb-2">{content || <>
				<div className="flex justify-around">
					<span className='cursor-pointer'><a href="https://wa.me/5513998073586" target="_blank"><WhatsAppIcon /></a></span>
					<span className='cursor-pointer'><a href="https://www.linkedin.com/in/jo%C3%A3o-archiolli-74b799189/" target="_blank"><LinkedInIcon /></a></span>
					<span className='cursor-pointer'><a href="https://github.com/Archiolli" target="_blank"><GitHubIcon /></a></span>
					<span className='cursor-pointer'><a href="https://www.instagram.com/joaoarchiolli/" target="_blank"><InstagramIcon /></a></span>
					<span className='cursor-pointer'><a href="mailto:joao.roberto_2001@hotmail.com" target="_blank"><MailOutlineIcon /></a></span>
				</div>
				<div className='mt-2'>*Clique para ser redirecionado</div>

			</>}</div>
			{amount && (
				<div className="px-6 py-4">
					<div className="text-xl mb-2 font-normal text-white">{adicionalTitle}</div>
					<div className="border-2 w-full flex justify-center items-center rounded-full border-solid border-lineCardSobreMim"></div>
					<div className="text-white pt-2 pb-2">{adicionalContent}</div>
				</div>
			)}

			{adicionalInput && (
				<div className="flex-col w-fullnpm run flex justify-center px-20 pb-10 ">

					<div>
						<label className='text-white' htmlFor="nome">Nome:</label>
						<input name='nome' type='text'
							ref={nomeInputRef}
							className='w-full px-2 h-12 border-solid border-2 text-white bg-inputColor bg-opacity-40 border-slate-400 rounded-md'
							onChange={(e) => setForm((prev: object) => {
								return { ...prev, nome: e.target.value }
							})}
							placeholder='Digite seu nome...' /></div>
					<div>
						<label className='text-white' htmlFor="email">Email:</label>
						<input name='email' type='email'
							ref={emailInputRef}
							className='w-full px-2 h-12 border-solid border-2 text-white bg-inputColor bg-opacity-40 border-slate-400 rounded-md'
							onChange={(e) => setForm((prev: object) => {
								return { ...prev, email: e.target.value }
							})}
							placeholder='Digite seu email...' /></div>
					<div className='w-full'>
						<label className='text-white' htmlFor="sugestoes">Sugestões:</label>
						<textarea name='sugestoes'
							ref={sugestoesInputRef}
							className='w-full px-2 pt-2 h-36 border-solid border-2 text-white bg-inputColor bg-opacity-40 border-slate-400 rounded-md'
							onChange={(e) => setForm((prev: object) => {
								return { ...prev, sugestoes: e.target.value }
							})}
							placeholder='Digite sua sugestão, elogio, ou qualquer outra coisa...' />
					</div>
					<div className="w-full h-14 flex items-center justify-center">
						<button className='mt-10 p-4 bg-gradient-to-r from-cardContent to-inputColor hover:from-inputColor hover:to-cardContent
						hover:duration-500 hover:ease-in-out
						hover:ring-2 hover:ring-mouseHoverNav
						ring-offset-4 ring-offset-cardContent
					   text-white rounded-3xl items-center'>Enviar</button>
					</div>

				</div>
			)}

			{experiencia && (<>
				<div>
					<div className="flex justify-between px-10 w-full">

						<div className="rounded-full h-28 w-28 bg-logoProdesan bg-center bg-no-repeat pr-28"></div>

						<div className='flex justify-center items-center w-3/4 h-28 text-center text-white'>PRODESAN – Progresso e Desenvolvimento de Santos</div>

					</div>
					<div className='text-white flex pb-5 pr-5 justify-end border-b-2 border-solid border-white '>
						<InfoOutlinedIcon />
					</div>
					<div>

				</div>
					<div className="flex justify-between w-full px-10 mt-6">

						<div className="rounded-full h-28 w-28  bg-logoRodrimar bg-center bg-no-repeat pr-28"></div>

						<div className='flex justify-center items-center w-3/4 h-28 text-center text-white'>
							RODRIMAR S/A - TERMINAIS PORTUÁRIOS E ARM. GERAIS
						</div>
					</div>
					<div className='text-white flex pb-5 pr-5 justify-end'>
						<InfoOutlinedIcon />
					</div>


				</div>
			</>

			)}


		</div>
	);
};

export default CardSobreMim;
