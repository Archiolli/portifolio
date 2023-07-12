'use client'
import { useState, useEffect } from 'react';
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement
	);
	
	
export default function GraficoBarra() {
	const url = 'https://api.coinranking.com/v2/coins/?limit=10';
	const apiKey = 'coinranking0fc3a2ab4181b1fe2aabaab1426d4f015203cef3f58311f2';
	const [chart, setChart] = useState<any>({});
	
	useEffect(() => {
		const fetchCoins = () => {
			fetch(url, {
				headers: {
					'Authorization': `Bearer ${apiKey}`,
					'Access-Control-Allow-Origin': '*'
				}
			}).then(response => {
					if (!response.ok) {
						throw new Error('Erro na solicitação');
					}
					return response.json();
				}).then(json => {
					console.log(json);      
					setChart(json);
				})
				.catch(err => console.log(err));
		};
	
		fetchCoins();
	}, [url, apiKey]);
	

	const labels = ["1 hora atras", "2 horas atras", "3 horas atras","4 horas atras","5 horas atras","6 horas atras",
	"7 horas atras","8 horas atras","9 horas atras","10 horas atras",
	"11 horas atras","12 horas atras","13 horas atras","14 horas atras","15 horas atras",
	"16 horas atras","17 horas atras","18 horas atras","19 horas atras","20 horas atras",
	"21 horas atras","22 horas atras","23 horas atras","24 hora atras"].reverse()
 
/*const dsctCrypto =  chart?.data?.coins.map((val:any) => {
	console.log(val.name)
	return val.name
})*/

const options : any = {
	responsive: true,
	plugins: {
	  legend: {
		position: 'top',
	  },	
	  title: {
		display: true,
		fontSize: 15, 
		text: "Relátorio de cripto"
	  }
	},
	scales: {
	  x: {
		ticks: {
		  color: '#FFFFFF', // Define a cor dos rótulos do eixo X
		},
	  },
	  y: {
		ticks: {
		  color: '#FFFFFF', // Define a cor dos rótulos do eixo Y
		},
	  },
	},
  };		
		 const data = {
			labels: labels,
			datasets: [
				{
					label: `Variação de preco do bitcoin`,
					data: chart?.data?.coins[0]?.sparkline?.map((val : any) => {
						return val
					}),
					backgroundColor: 'purple',
					borderColor: '#faf3a1',
					pointBorderColor: '#FFF',
					fill: true,
					tension: 0.1     
				},
			 
			],
		};
	



	return (
		<>
	<div className='w-full h-screen'>
		<div className='flex justify-center h-22'>
		<h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
			<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
				Variação de preço do Bitcoin 
				</span> 
				
				</h1>
		</div>
		<span className="flex justify-center h-80 items-center ">
			<Line options={options} data={data} />
		</span>
	
	</div>
	 
		</>
	)
}
