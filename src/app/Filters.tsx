"use client"
// eslint-disable @typescript-eslint/no-explicit-any
import "cally";
import { useEffect, useState } from "react";

const July19 = new Date(2025, 6, 19);

export const Filters = () => {
    const [firstDay, setFirstDay] = useState('');
    const [lastDay, setLastDay] = useState('');

    const handleChange = (e: any) => {
        const value = e.target.value;
        setFirstDay(value.split('/')[0]);
        setLastDay(value.split('/')[1]);
        console.log(`Selected range: ${value}`);
    };


    return (
        <div className="card bg-base-100 card-lg shadow-sm">
            <div className="card-body">
                <h1 className="card-title">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Horizontal-Slider-2--Streamline-Flex" height="18" width="18" className='fill-neutral-300 stroke-neutral-700'>
                        <desc>
                            Horizontal Slider 2 Streamline Icon: https://streamlinehq.com
                        </desc>
                        <g id="horizontal-slider-2--adjustment-adjust-controls-fader-horizontal-settings-slider">
                            <path id="Vector" d="M1 2.28125c0 0.96 0.54 1.5 1.5 1.5s1.5 -0.54 1.5 -1.5 -0.54 -1.5 -1.5 -1.5 -1.5 0.54 -1.5 1.5Z" strokeWidth="1"></path>
                            <path id="Vector_2" d="M10 11.7187c0 0.96 0.54 1.5 1.5 1.5s1.5 -0.5399 1.5 -1.4999c0 -0.9601 -0.54 -1.5001 -1.5 -1.5001s-1.5 0.54 -1.5 1.5Z" strokeWidth="1"></path>
                            <path id="Vector_3" d="M5.52368 7c0 0.96 0.54 1.5 1.5 1.5s1.5 -0.54 1.5 -1.5 -0.54 -1.5 -1.5 -1.5 -1.5 0.54 -1.5 1.5Z" strokeWidth="1"></path>
                            <path id="Vector_4" strokeLinecap="round" strokeLinejoin="round" d="M1 2.28125c0 0.96 0.54 1.5 1.5 1.5s1.5 -0.54 1.5 -1.5 -0.54 -1.5 -1.5 -1.5 -1.5 0.54 -1.5 1.5Z" strokeWidth="1"></path>
                            <path id="Vector_5" strokeLinecap="round" strokeLinejoin="round" d="M10 11.7187c0 0.96 0.54 1.5 1.5 1.5s1.5 -0.5399 1.5 -1.4999c0 -0.9601 -0.54 -1.5001 -1.5 -1.5001s-1.5 0.54 -1.5 1.5Z" strokeWidth="1"></path>
                            <path id="Vector_6" strokeLinecap="round" strokeLinejoin="round" d="M5.52368 7c0 0.96 0.54 1.5 1.5 1.5s1.5 -0.54 1.5 -1.5 -0.54 -1.5 -1.5 -1.5 -1.5 0.54 -1.5 1.5Z" strokeWidth="1"></path>
                            <path id="Vector_7" strokeLinecap="round" strokeLinejoin="round" d="M1 7h4.5" strokeWidth="1"></path>
                            <path id="Vector_8" strokeLinecap="round" strokeLinejoin="round" d="M1 11.7188h9" strokeWidth="1"></path>
                            <path id="Vector_9" strokeLinecap="round" strokeLinejoin="round" d="M8.5 7H13" strokeWidth="1"></path>
                            <path id="Vector_10" strokeLinecap="round" strokeLinejoin="round" d="M13 2.28125H4" strokeWidth="1"></path>
                        </g>
                    </svg>
                    Filtros</h1>
                <p>Elige un rango de fechas:</p>
                <div className="flex justify-center">
                    <calendar-range className="cally bg-base-100 border border-base-300 shadow-lg rounded-box "
                        value={
                            (() => {
                                const start = new Date().toLocaleDateString('en-CA').split('T')[0];
                                const end = new Date();
                                end.setDate(end.getDate() + 6);
                                return `${start}/${end.toLocaleDateString('en-CA').split('T')[0]}`;
                            })()
                        }
                        onchange={(e: any) => handleChange(e)}
                        isDateDisallowed={(date: Date) => {
                            // Disable past dates
                            return date < July19;
                        }}
                    >
                        <calendar-month></calendar-month>
                    </calendar-range>
                </div>
            </div>
        </div>
    )
}
