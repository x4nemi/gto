"use client"
// eslint-disable @typescript-eslint/no-explicit-any
import "cally";
import { useState } from "react";

export const Filters = () => {
    const [value, setValue] = useState("");

    return (
        <div className="card bg-base-100 card-lg shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Filtros</h2>
                <p>Elige un rango de fechas:</p>
                <calendar-date className="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
                    <calendar-month></calendar-month>
                </calendar-date>
            </div>
        </div>
    )
}
