'use client'
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  
export default function Home() {
  const url = 'https://api.coinranking.com/v2/coins/?limit=10';
  const apiKey = 'coinranking0fc3a2ab4181b1fe2aabaab1426d4f015203cef3f58311f2';
  const [chart, setChart] = useState({});
  
  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Access-Control-Allow-Origin': '*'
        }
      });
  
      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }
  
      const json = await response.json();
      console.log(json);      
      setChart(json);

    };
  
    fetchCoins().catch(err => console.log(err));
  }, [url, apiKey]);
  

  const labels = chart?.data?.coins.map((val:any) => {
    return val.name
  }) 



  const options = {
    responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Cryptos ativas',
        },
      },
    };
    
    
     const data = {
      labels,
      datasets: [
        {
          label: `${chart?.data?.coins.length} Cyptos disponíveis`,
          data: chart?.data?.coins.map((val) => {
            return val.price
          }),
          backgroundColor: ['rgb(13 148 136)',
          'rgb(34 211 238)',
          'rgb(94 234 212)',
          'rgb(17 94 89)'
        ]

        },
       
      ],
    };
  
  ChartJS.register(
    BarElement
  )


  return (
    <>
  <div className='w-full h-screen'>
    <div className='flex justify-center h-22'>
    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        Melhores cryptos
        </span> 
        
        </h1>
    </div>
    <span className="flex justify-center h-80 items-center ">
      <Bar options={options} data={data} />
    </span>
  
  </div>
   
    </>
  )
}
