'use client'
import { useState, useEffect } from 'react';
import { Saira_Stencil_One } from 'next/font/google'

const StancilOne = Saira_Stencil_One({
	weight:['400'],
	subsets: ['latin']
})
	
export default function Navbar() {
		return(
				<div className='w-full text-center justify-center absolute  text-white bg-navzin'>
					<div className='px-40'>
						<div className='h-16 flex justify-between items-center'>
							<p className={`${StancilOne.className} mr-20 text-3xl`}>João Archiolli</p>
							<p className='hover:bg-mouseHoverNav transition-colors duration-500 cursor-pointer rounded-full p-4'>Sobre mim</p>
							<p className='hover:bg-mouseHoverNav transition-colors duration-500 cursor-pointer rounded-full p-4'>Projetos</p>
							<p className='hover:bg-mouseHoverNav transition-colors duration-500 cursor-pointer rounded-full p-4'>Experiência</p>
							<p className='hover:bg-mouseHoverNav transition-colors duration-500 cursor-pointer rounded-full p-4'>Contato</p>
						</div>
					</div>						
				</div>
			 
		)   
}
