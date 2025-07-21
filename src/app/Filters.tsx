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
                <h2 className="card-title">Filtros</h2>
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
