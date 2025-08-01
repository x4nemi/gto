"use client"
import React, { useState } from 'react'
import { EventCard } from './EventCard'

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
		},
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
				<h2 className="card-title">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Flower--Streamline-Flex" height="18" width="18" className='fill-neutral-300 stroke-neutral-700 '>
						<g id="flower--nature-plant-tree-flower-petals-bloom">
							<path id="Subtract" d="M7 1c1.46428 0 2.65132 1.17565 2.65132 2.62588 0 0.0982 -0.00545 0.19513 -0.01605 0.29053 0.3636 -0.18569 0.77613 -0.29053 1.21343 -0.29053 1.4643 0 2.6513 1.17565 2.6513 2.62589 0 1.19765 -0.8096 2.20803 -1.9163 2.52365 0.3436 0.44277 0.5479 0.99711 0.5479 1.59868 0 1.4503 -1.1871 2.6259 -2.65134 2.6259C8.34658 13 7.37908 12.2953 7 11.304 6.62092 12.2953 5.65342 13 4.51974 13c-1.46428 0 -2.65132 -1.1756 -2.65132 -2.6259 0 -0.60157 0.20426 -1.15591 0.54785 -1.59868C1.30956 8.4598 0.5 7.44942 0.5 6.25177c0 -1.45024 1.18703 -2.62589 2.65132 -2.62589 0.43727 0 0.84981 0.10484 1.21341 0.29053 -0.0106 -0.0954 -0.01605 -0.19233 -0.01605 -0.29053C4.34868 2.17565 5.53572 1 7 1" strokeWidth="1"></path>
							<path id="Union" strokeLinecap="round" strokeLinejoin="round" d="M7 1c1.46428 0 2.65132 1.17565 2.65132 2.62588 0 0.0982 -0.00545 0.19513 -0.01605 0.29053 0.3636 -0.18569 0.77613 -0.29053 1.21343 -0.29053 1.4643 0 2.6513 1.17565 2.6513 2.62589 0 1.19765 -0.8096 2.20803 -1.9163 2.52365 0.3436 0.44277 0.5479 0.99711 0.5479 1.59868 0 1.4503 -1.1871 2.6259 -2.65134 2.6259C8.34658 13 7.37908 12.2953 7 11.304 6.62092 12.2953 5.65342 13 4.51974 13c-1.46428 0 -2.65132 -1.1756 -2.65132 -2.6259 0 -0.60157 0.20426 -1.15591 0.54785 -1.59868C1.30956 8.4598 0.5 7.44942 0.5 6.25177c0 -1.45024 1.18703 -2.62589 2.65132 -2.62589 0.43727 0 0.84981 0.10484 1.21341 0.29053 -0.0106 -0.0954 -0.01605 -0.19233 -0.01605 -0.29053C4.34868 2.17565 5.53572 1 7 1" strokeWidth="1"></path>
							<path id="Vector_2" className='fill-white' strokeLinecap="round" strokeLinejoin="round" d="M7 8.75c0.96 0 1.5 -0.54 1.5 -1.5s-0.54 -1.5 -1.5 -1.5 -1.5 0.54 -1.5 1.5 0.54 1.5 1.5 1.5" strokeWidth="1"></path>
						</g>
					</svg>
					Eventos
				</h2>
				<div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
					{cards.map((card) => (
						<EventCard key={card.id} {...card} />
					))}
				</div>
			</div>
		</div>
	)
}
