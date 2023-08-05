'use client'
import { useState, useRef, ReactNode } from 'react';

import Image from 'next/image';

interface iCard {
	children: ReactNode;
	titleCard: ReactNode;
}

const CardSobreMim = ({ children, titleCard }: iCard) => {

	return (
		<div className={`rounded-2xl bg-opacity-30 bg-cardContent shadow-lg pb-5 w-full`}>
			<div className="px-6 py-2">
				<div className="text-xl mb-2 pr-14  font-normal text-white">{titleCard}</div>
				<div className="border-2 w-full flex justify-center items-center rounded-full border-solid border-lineCard"></div>
			</div>
			<div className="text-white px-6 pt-2">
				{children}
			</div>
		</div>
	);
};

export default CardSobreMim;