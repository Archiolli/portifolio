'use client'
import { useState, useEffect } from 'react';



export default function Card({text, content} : String) {
	return (
		<>
			<div className='max-w-sm rounded bg-cardContent overflow-hidden shadow-lg'>
				<div className="px-6 py-4">
					<div className="text-xl mb-2 font-normal text-white">{text}</div>
					<div className="border-2 w-full flex justify-center items-center rounded-full border-solid border-lineCard">	</div>
				</div>
					<div className="text-white mb-2 px-6 pt-4 pb-2">
						{content}
					</div>			
			</div>
		</>


	)
}
