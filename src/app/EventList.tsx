"use client"
import React, { useState } from 'react'

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

	const [openSiteModal, setOpenSiteModal] = useState(true)
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

				<div className="card card-lg border rounded-4xl border-neutral-300 w-96 mt-2" >
					<div className='relative'>
						<div className="absolute top-3 left-3 z-10">
							<button className='btn btn-soft btn-sm rounded-tl-3xl text-neutral-800 shadow-lg shadow-neutral-500/50' onClick={() => setOpenSiteModal(true)}>
								<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
								</svg>
								Escarola
							</button>
						</div>
						<div className="dropdown dropdown-center absolute top-3 right-3 z-10">
							<button tabIndex={0} className='btn btn-soft btn-sm rounded-tr-3xl text-neutral-800 shadow-lg shadow-neutral-500/50'>
								<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
								</svg>
								31/07, 9:00pm
							</button>
							<ul tabIndex={0} className="dropdown-content mt-1 menu bg-base-100 rounded-box z-1 p-2 shadow-sm w-36">
								<div className='text-xs py-2 text-center'>
									Agregar al calendario
								</div>
								<li><a className='flex items-center gap-2'>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M120,128a32,32,0,1,0-32,32A32,32,0,0,0,120,128Zm-48,0a16,16,0,1,1,16,16A16,16,0,0,1,72,128Zm152-24H208V40a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H72v16a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V112A8,8,0,0,0,224,104Zm-58.34,60L216,127.65v72.7ZM112,48h80v77.24l-40,28.89V80a16,16,0,0,0-16-16H112ZM40,80h96v77.9c0,.12,0,.24,0,.36V176H40ZM88,192h48a16,16,0,0,0,16-16v-2.13L199.26,208H88Z"></path></svg>
									Outlook
								</a></li>
								<li><a className='flex items-center gap-2'>
									<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
										<path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
									</svg>
									Google
								</a></li>
								<li><a className='flex items-center gap-2'>
									<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
									</svg>
									Otro
								</a></li>
							</ul>
						</div>
					</div>
					<div className='px-1 pt-1 rounded-4xl drop-shadow-2xl'>
						<img
							src={cards[0].image}
							alt="Event"
							className="rounded-4xl object-cover"
						/>
					</div>
					<div className='card-body pt-3'>
						<div className='justify-between flex items-center gap-0'>
							<div className='card-title font-neuton italic text-3xl text-neutral-800'>Noche de Pop Rock</div>
							<div className="badge badge-soft badge-lg bg-pink-100 text-pink-600 badge-outline border-0 font-semibold text-md gap-1 rounded-lg">
								<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2" />
								</svg>
								80
							</div>

						</div>
						<p className='text-neutral-500 text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis magnam est maxime.</p>
					</div>
				</div>
				<dialog className="modal fixed inset-0 z-40 bg-black/50 backdrop-blur-md flex items-center justify-center" open={openSiteModal}>
					<div className="modal-box lg:w-96 xl:w-96 p-0">
						<div className="flex flex-col items-center pb-10 pt-12">
							<img className="w-24 h-24 mb-3 rounded-full shadow-lg z-100" src="/escarola_logo.jpg" alt="Escarola" />
							<h5 className="mb-1 text-xl font-semibold text-gray-900">Escarola</h5>
							<span className="text-sm text-gray-500">Restaurante</span>
							<div className="inline-flex gap-2 mt-5" role="group">
								<button className="btn btn-soft delay-150 transition shadow-sm hover:-rotate-5 hover:-translate-y-1 hover:scale-105 ease-in-out text-slate-800">
									<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5" />
									</svg>
								</button>
								<button className="btn btn-soft delay-150 transition shadow-sm hover:-rotate-2 hover:-translate-y-1 hover:scale-105 ease-in-out text-slate-800">
									<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
										<path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
									</svg>

								</button>
								<button className="btn btn-soft delay-150 transition shadow-sm hover:rotate-2 hover:-translate-y-1 hover:scale-105 ease-in-out text-slate-800"><svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
									<path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
								</svg>
								</button>
								<button className="btn btn-soft delay-150 transition shadow-sm hover:rotate-5 hover:-translate-y-1 hover:scale-105 ease-in-out text-slate-800">
									<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
										<path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd" />
										<path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
									</svg>
								</button>
							</div>
						</div>
						<div className='absolute inset-x-0 top-0 lg:w-96 xl:w-96 min-md:w-full h-32 bg-linear-to-r from-amber-100 via-rose-200 to-sky-100 rounded-2xl z-0'></div>
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setOpenSiteModal(false)}>✕</button>
						</form>
					</div>
				</dialog>
			</div>
		</div >
	)
}
