"use client"
import React, { useEffect, useState, useMemo } from 'react'
import { EventCard } from './EventCard'
import { Card } from './Card'

// Datos de tarjetas - definidos fuera del componente para evitar recreaciones
const cardsData = [
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
];

export const Pared = () => {
    // Estado para el ancho de la ventana (solo en cliente)
    const [windowWidth, setWindowWidth] = useState(0);

    // Efecto para manejar el tamaño de la ventana
    useEffect(() => {
        // Solo ejecutar en el navegador
        if (typeof window === 'undefined') return;
        
        // Establecer el ancho inicial
        setWindowWidth(window.innerWidth);
        
        // Función para actualizar el ancho de la ventana
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        // Añadir event listener para resize
        window.addEventListener('resize', handleResize);
        
        // Limpiar event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Sin dependencias - solo se ejecuta al montar
    
    // Calcular el número de columnas basado en el ancho de la ventana
    const numColumns = useMemo(() => {
        if (windowWidth >= 1536) return 3;        // 2xl
        else if (windowWidth >= 1024) return 2;   // xl
        else return 1;                            // lg, md, sm
    }, [windowWidth]);
    
    // Distribuir las tarjetas en columnas usando useMemo
    const { column1, column2, column3 } = useMemo(() => {
        return {
            column1: cardsData.filter((_, index) => index % numColumns === 0),
            column2: cardsData.filter((_, index) => index % numColumns === 1),
            column3: cardsData.filter((_, index) => index % numColumns === 2)
        };
    }, [numColumns]);

    return (
        <div className="container mx-auto px-4">
            <div className='grid xl:grid-cols-2 2xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-6'>
                <div className='flex flex-col gap-8'>
                    {column1.map((card, index) => (
                        <div key={`col1-${index}`} className="card-wrapper">
                            <Card {...card} />
                        </div>
                    ))}
                </div>
                {numColumns > 1 && <div className='flex flex-col gap-8'>
                    {column2.map((card, index) => (
                        <div key={`col2-${index}`} className="card-wrapper">
                            <Card {...card} />
                        </div>
                    ))}
                </div>}
                {numColumns > 2 && <div className='flex flex-col gap-8'>
                    {column3.map((card, index) => (
                        <div key={`col3-${index}`} className="card-wrapper">
                            <Card {...card} />
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}
