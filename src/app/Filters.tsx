"use client"
// eslint-disable @typescript-eslint/no-explicit-any
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
        <div className="card card-lg backdrop-blur-xs bg-white/10 card-border">
            <div className="card-body">
                <h1>Filtros</h1>
                
            </div>
        </div>
    )
}
