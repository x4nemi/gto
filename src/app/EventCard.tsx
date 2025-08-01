"use client";
import { useState } from "react"
import { Interface } from "readline";
import { SiteModal } from "./SiteModal";

interface EventCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    igLink: string;
    fbLink: string;
    date: string;
    location: string;
    locationLink: string;
}

export const EventCard = (props : EventCardProps) => {
    const { title, description, image, price, igLink, fbLink, date, location, locationLink } = props;
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
            id: 2,
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

    const [openSiteModal, setOpenSiteModal] = useState(false)
    return (
        <div className="card card-lg card-border rounded-4xl border-neutral-300 max-md:w- min-md:w-max-96 mt-2" >
            <div className='relative'>
                <div className="absolute top-4 left-4 z-10 rounded-3xl">
                    <button className='btn btn-soft btn-sm rounded-tl-3xl text-neutral-800 shadow-lg shadow-neutral-500/50' onClick={() => setOpenSiteModal(true)}>
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                        </svg>
                        {location}
                    </button>
                </div>
                <div className="dropdown dropdown-center absolute top-4 right-4 z-10">
                    <button tabIndex={0} className='btn btn-soft btn-sm rounded-tr-3xl text-neutral-800 shadow-lg shadow-neutral-500/50'>
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        {date}
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
                                <path fillRule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clipRule="evenodd" />
                            </svg>
                            Google
                        </a></li>
                        <li><a className='flex items-center gap-2'>
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                            </svg>
                            Otro
                        </a></li>
                    </ul>
                </div>
            </div>
            <div className='px-2 pt-2 rounded-3xl drop-shadow-2xl'>
                <img
                    src={image}
                    alt="Event"
                    className="rounded-4xl object-cover"
                />
            </div>
            <div className='card-body pt-3'>
                <div className='justify-between flex items-center gap-0'>
                    <div className='card-title font-neuton italic text-3xl text-neutral-800'>{title}</div>
                    <div className="badge badge-soft badge-lg bg-pink-100 text-pink-600 badge-outline border-0 font-semibold text-md gap-1 rounded-lg">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2" />
                        </svg>
                        {price}
                    </div>

                </div>
                <p className='text-neutral-500 text-md'>{description}</p>
            </div>
            <SiteModal openSiteModal={openSiteModal} setOpenSiteModal={setOpenSiteModal} />
        </div>
    )
}
