"use client"
import React from 'react'

export const EventList = () => {
	const cards = [
		{
			id: 1,
			title: "Noche de Pop Rock",
			description: "Disfruta de una noche llena de buena música y diversión.",
			image: "/nocherock.jpg",
			price: "80",
			igLink: 'https://www.instagram.com/escarola.gto',
			fbLink: 'https://www.facebook.com/escarolagto',
			date: "2025-07-31, 9:00 PM",
			location: "Escarola",
			locationLink: "https://maps.app.goo.gl/TPm7G55qyhHFRwkq8",

		}
	]
	return (
		<div className="card bg-base-100 card-lg shadow-sm">
			<div className="card-body">
				<h2 className="card-title">Eventos</h2>
				{
					// cards.map((card) => (
					// 	<div className="card card-border bg-base-100 w-96" key={card.id}>
					// 		<div className="card-actions justify-end relative">
					// 			<div className="absolute top-0 right-0 h-10 w-18 rounded-2xl font-semibold text-xl bg-base-100 flex items-center justify-center">
					// 				${card.price}
					// 			</div>
					// 			<div className="absolute top-4 right-18 h-5 w-9 rounded-tr-xl shadow-(--my-shadow) bg-transparent">
					// 			</div>
					// 			<div className="absolute top-10 right-4 h-4 w-10 rounded-tr-xl shadow-(--my-shadow2) bg-transparent">
					// 			</div>
					// 		</div>
					// 		<div className="px-4 pt-4">
					// 			<img
					// 				src={card.image}
					// 				alt="Event"
					// 				className="rounded-xl w-96 object-cover"
					// 			/>
					// 		</div>
					// 		<div className='px-4 pt-4'>
					// 			<h2 className="card-title">{card.title}</h2>
					// 			<p>{card.description}</p>
					// 			<div className="flex justify-end gap-0" style={{ gap: -1 }}>
					// 				<button className="btn btn-link" onClick={() => window.open(card.igLink, '_blank')}>
					// 					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className='fill-primary' viewBox="0 0 256 256"><path d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"></path><path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
					// 				</button>
					// 				<button className="btn btn-link" onClick={() => window.open(card.fbLink, '_blank')}>
					// 					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className='fill-primary' viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>
					// 				</button>
					// 			</div>
					// 		</div>
					// 		<div className="divider"></div>
					// 		<div className='px-4 pb-4 flex justify-between items-center'>
					// 			<button className='btn btn-dash'>
					// 				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M176,120c0,32-48,56-48,56s-48-24-48-56a24,24,0,0,1,48,0,24,24,0,0,1,48,0Z" opacity="0.2"></path><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V208ZM152,88a31.91,31.91,0,0,0-24,10.86A32,32,0,0,0,72,120c0,36.52,50.28,62.08,52.42,63.16a8,8,0,0,0,7.16,0C133.72,182.08,184,156.52,184,120A32,32,0,0,0,152,88Zm-24,78.93c-13.79-7.79-40-26.75-40-46.93a16,16,0,0,1,32,0,8,8,0,0,0,16,0,16,16,0,0,1,32,0C168,140.19,141.79,159.15,128,166.93Z"></path></svg>
					// 				{card.date}
					// 			</button>
					// 			<a className='link link-hover flex' href={card.locationLink} target="_blank" rel="noopener noreferrer">
					// 				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" opacity="0.2"></path><path d="M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z"></path></svg>
					// 				{card.location}
					// 			</a>
					// 		</div>
					// 	</div>
					// ))
				}

				<div className="card card-lg border rounded-4xl border-neutral-300 w-96 mt-10" >
					{/* <div className="absolute inset-x-0 top-0 text-slate-50 mix-blend-normal font-semibold text-xl flex items-center justify-center ">
						<div className='flex items-center gap-2 mt-4'>
							<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
							</svg>
							<span className='text-sm font-semibold'>31/07 10:00PM</span>
						</div>
					</div> */}
					<div className='px-1 pt-1 rounded-4xl'>
						<img
							src={cards[0].image}
							alt="Event"
							className="rounded-4xl object-cover"
						/>
					</div>
					<div className='card-body'>
						<div className='justify-between flex items-center gap-8'>
							<div className='card-title font-neuton italic text-3xl text-neutral-800'>Título del Evento</div>
							<div className="badge badge-soft badge-lg bg-pink-100 text-pink-600 badge-outline border-0 font-semibold text-md gap-1">
								<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2" />
								</svg>
								80
							</div>

						</div>
						<p className='text-neutral-500 text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis magnam est maxime.</p>
					</div>
					<div className='divider'></div>
					<div className='flex '>
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path></svg>
						<span className='text-neutral-500 text-sm font-semibold'>31/07 10:00PM</span>
					</div>
				</div>

			</div>
		</div>
	)
}
