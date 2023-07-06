'use client'
import { useState, useEffect } from 'react';
import { Saira_Stencil_One } from 'next/font/google'

const StancilOne = Saira_Stencil_One({
	weight:['400'],
	subsets: ['latin']
})
	
export default function Navbar() {
		return(
<>	

				<header>
					<nav className={`px-32 text-white w-screen flex justify-around items-center bg-navzin h-16`}>
						<div className={`${StancilOne.className} text-3xl`}>João Archiolli</div>						
						<ul className='flex	list-none'>
							<li className='ml-16 hover:bg-mouseHoverNav transition-colors duration-500 cursor-pointer rounded-full p-4'>Sobre mim</li>
							<li className='ml-16 hover:bg-mouseHoverNav transition-colors duration-500 cursor-pointer rounded-full p-4'>Projetos</li>
							<li className='ml-16 hover:bg-mouseHoverNav transition-colors duration-500 cursor-pointer rounded-full p-4'>Experiencia</li>
							<li className='ml-16 hover:bg-mouseHoverNav transition-colors duration-500 cursor-pointer rounded-full p-4 '>Contato</li>
						</ul>
					</nav>
				</header>

				
</>
			
			 
		)   
}
