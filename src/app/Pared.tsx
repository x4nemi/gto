"use client"
import React, { useState } from 'react'
import { EventCard } from './EventCard'
import { Card } from './Card'

export const Pared = () => {
    const cards = [
        {
            id: 1,
            title: "Noche de Pop Rock",
            description: "Disfruta de una noche llena de buena música y diversión.",
            image: "/nocherock.jpg",
            price: "80",
            igLink: 'https://www.instagram.com/escarola.gto',
            fbLink: 'https://www.facebook.com/escarolagto',
            date: "2025-07-31T21:00:00",
            duration: "2 hours",
            hour: "9:00 PM",
            location: "Escarola",
            locationLink: "https://maps.app.goo.gl/TPm7G55qyhHFRwkq8",
        },
        {
            id: 2,
            title: "Taller de Patronaje, Corte y Confección",
            description: "Aprende a crear tus propias prendas desde cero.",
            image: "/patronaje.jpg",
            price: "250",
            igLink: 'https://www.instagram.com/escarola.gto',
            fbLink: 'https://www.facebook.com/escarolagto',
            date: "06-08-2025",
            hour: "6:00 - 8:00 PM",
            location: "Agitadario",
            locationLink: "https://maps.app.goo.gl/TPm7G55qyhHFRwkq8",
        },
        {
            id: 3,
            title: "Taller de Bordado",
            description: "Descubre el arte del bordado y crea tus propias obras.",
            image: "/bordado.jpg",
            price: "400",
            igLink: 'https://www.instagram.com/escarola.gto',
            fbLink: 'https://www.facebook.com/escarolagto',
            date: "06-08-2025",
            hour: "4:00 - 6:00 PM",
            location: "Mango y Menta",
            locationLink: "https://maps.app.goo.gl/TPm7G55qyhHFRwkq8",
        },
    ]

    return (
        <div className="card card-lg">
            <div className="card-body">
                <div className='grid xl:grid-cols-2 2xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-6'>
                    {cards.map((card) => (
                        <Card key={card.id} {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}
