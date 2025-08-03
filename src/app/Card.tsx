"use client";
import { EventCardProps } from '@/interfaces/EventInterface';
import React, { useState } from 'react'

export const Card = (props: EventCardProps) => {
    const { title, description, image, price, igLink, fbLink, date, hour, location, locationLink } = props;

    return (
        <div className='card card-lg card-border rounded-4xl h-fit border-neutral-200 shadow-md group/card'>
            <div className='absolute inset-x-40 -top-6 z-10'>
                <img src='/tape.webp' className='h-14 object-cover' />
            </div>
            <div className='p-1 sticky top-0'>
                <img
                    src={image}
                    alt="Event"
                    className={`rounded-[28px] object-cover`}
                />
            </div>
            <div className='absolute inset-x-0 bottom-0 invisible group-hover/card:visible group-hover/card:translate-y-0 group-hover/card:opacity-100 group-hover/card:backdrop-blur-md transition-all duration-500 ease-in-out translate-y-10 opacity-0 backdrop-blur-none rounded-[28px] m-1'>
                <div className='card-body rounded-[28px] bg-violet-200/30 ring-2 ring-white/80'>
                    <h2 className='card-title text-lg font-semibold text-neutral-100'>{title}</h2>
                    <p className='text-sm text-neutral-300'>{description}</p>
                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex items-center gap-2'>
                            <span className='text-sm text-neutral-500'>Precio: ${price}</span>
                            <span className='text-sm text-neutral-500'>Fecha: {new Date(date).toLocaleDateString()}</span>
                            <span className='text-sm text-neutral-500'>Hora: {hour}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
