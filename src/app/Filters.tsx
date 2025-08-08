"use client"
// eslint-disable @typescript-eslint/no-explicit-any
import { useEffect, useState } from "react";

export const Filters = () => {
    const [startDate, setStartDate] = useState<Date>(new Date())
    // end date one week after start date
    const [endDate, setEndDate] = useState<Date>(new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)); // One week later

    useEffect(() => {
        // if the start date changes, ensure the end date is always one week later
        if (startDate) {
            const newEndDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
            if (newEndDate > endDate) {
                setEndDate(newEndDate);
            }
        }

        // if the end date is before the start date, then swap them
        if (endDate && startDate && endDate < startDate) {
            const temp = startDate;
            setStartDate(endDate);
            setEndDate(temp);
        }
    }, [startDate, endDate]);

    return (
        <div className="card card-lg backdrop-blur-xs bg-white/10 card-border">
            <div className="card-body">
                <h1 className="text-xl font-semibold">Filtros</h1>
                {/* Calendar */}
                <div className="rounded-lg bg-neutral-100 p-4 ">
                    <p className="text-neutral-400 text-sm font-extrabold uppercase mb-2">Rango de fechas</p>
                    <div className="flex gap-3 items-center">
                        <input type="date" className="input" value={startDate.toISOString().split('T')[0]} onChange={(e) => setStartDate(new Date(e.target.value))} />
                        { '—' }
                        <input type="date" className="input" value={endDate.toISOString().split('T')[0]} onChange={(e) => setEndDate(new Date(e.target.value))} />
                    </div>
                </div>
                {/* Info */}
                <div className="rounded-lg bg-neutral-100 p-4">
                    <p className="text-neutral-400 text-sm font-extrabold uppercase">Anclar info</p>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-xl" />
                </div>
            </div>
        </div>
    )
}
