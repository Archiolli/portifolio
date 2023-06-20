'use client'
import { useState, useEffect } from 'react';

export default function Card({ heigth, width } : any) {
		return(
            <>

                <div className={`h-${heigth} w-${width}`}>
                    <div ></div>
                    <div ></div>
                    <div></div>
                    <div></div>
                </div>
            </>
				
			 
		)   
}
