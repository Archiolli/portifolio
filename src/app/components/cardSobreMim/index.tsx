'use client'

import { useState, useRef } from 'react';

const CardSobreMim = ({ content, title, isAmount, adicionalTitle, adicionalContent, hasInput }: {
  content: string;
  title: string;
  isAmount?: boolean;
  adicionalTitle?: string;
  adicionalContent?: string;
  hasInput?: boolean;

}) => {

  const [adicionalInput, setadicionalInput] = useState(hasInput || false)
  const [amount, setAmount] = useState(isAmount || false);

  const nameHtmlProp = 

  return (
    <div className={`rounded-2xl bg-cardContent overflow-hidden shadow-lg`}>
      <div className="px-6 py-2">
        <div className="text-xl mb-2 pr-14 font-normal text-white">{title}</div>
        <div className="border-2 w-full flex justify-center items-center rounded-full border-solid border-lineCardSobreMim"></div>
      </div>
      <div className="text-white px-6 pt-2 pb-2">{content}</div>
      {amount && (
        <div className="px-6 py-4">
          <div className="text-xl mb-2 font-normal text-white">{adicionalTitle}</div>
          <div className="border-2 w-full flex justify-center items-center rounded-full border-solid border-lineCardSobreMim"></div>
          <div className="text-white pt-2 pb-2">{adicionalContent}</div>
        </div>
      )}

      {adicionalInput && (
         <div className="items-center flex justify-center">
         <label htmlFor="nome">Nome:</label>
         <input name='nome' type='text' placeholder='Digite seu nome...'/>

         <label htmlFor="email">Email:</label>
         <input name='email' type='email' placeholder='Digite seu email...'/>

         <label htmlFor="nome">Sugestões:</label>
         <textarea name='nome' placeholder='Digite sua sugestão, elogio, ou qualquer outra coisa...' />
       </div>
      )}
    </div>
  );
};

export default CardSobreMim;
