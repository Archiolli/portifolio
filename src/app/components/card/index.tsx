
import React from 'react';

const Card = ({ text, content, img, width } : {text: any, content: string, img?: any, width: string}) => {
  return (
    <>
      <div className={`w-${width} rounded-2xl bg-cardContent overflow-hidden shadow-lg`}>
        <div className="px-6 py-4">
          <div className="text-xl mb-2 font-normal text-white">{text || img}</div>
          <div className="border-2 w-full flex justify-center items-center rounded-full border-solid border-lineCard"></div>
        </div>
        <div className="text-white mb-2 px-6 pt-2 pb-2">{content}</div>
      </div>
    </>
  );
};

export default Card;

