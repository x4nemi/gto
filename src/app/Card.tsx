"use client";
import { EventCardProps } from '@/interfaces/EventInterface';
import React, { useState } from 'react'
import { PushPinIcon } from "@phosphor-icons/react";

export const Card = (props: EventCardProps) => {
    const { title, description, image, price, igLink, fbLink, date, hour, location, locationLink } = props;
    const [infoPinned, setInfoPinned] = useState(false)

    return (
        <div className='card card-lg card-border rounded-4xl h-fit border-neutral-200 shadow-md group/card'>
            <div className="flex justify-center w-full absolute -top-6 z-10">
                <img src='/tape.webp' className='h-14 w-52' />
            </div>
            <div className='p-1'>
                <img
                    src={image}
                    alt="Event"
                    className={`rounded-[28px] object-cover`}
                />
            </div>
            <div className={`absolute inset-x-0 bottom-0 rounded-[28px] m-1 ${infoPinned ? 'visible backdrop-blur-md' : 'invisible group-hover/card:visible group-hover/card:translate-y-0 group-hover/card:opacity-100 group-hover/card:backdrop-blur-md transition-all duration-500 ease-in-out translate-y-10 opacity-0 backdrop-blur-none'}`}>
                <div className='card-body rounded-[28px] bg-violet-200/30 ring-2 ring-white/80'>
                    <div className='flex justify-between items-center'>
                        <h2 className='card-title text-xl font-semibold text-neutral-100'>{title}</h2>
                        <button className='p-2 rounded-lg hover:bg-violet-200/30 transition-colors duration-300 text-white group/buttonpin'>
                            <PushPinIcon className='fill-current' weight={infoPinned ? "fill" : "bold"} size={20} onClick={() => setInfoPinned(!infoPinned)} />
                        </button>
                    </div>
                    <p className='text-sm text-neutral-300'>{description}</p>
                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex items-center gap-2'>
                            <span className='text-sm text-neutral-500'>Precio: ${price}</span>
                            <span className='text-sm text-neutral-500'>Fecha: {date}</span>
                            <span className='text-sm text-neutral-500'>Hora: {hour}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
