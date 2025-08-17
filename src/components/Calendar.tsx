"use client"
import React, { useEffect, useState } from 'react'

export const Calendar = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleString('es-MX', { month: 'long' }));
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    
    const handlePreviousMonth = () => {
        setCurrentMonth(prev => {
            const date = currentMonth === 'enero' ? new Date(new Date().getFullYear() - 1, 11) : new Date(new Date().getFullYear(), new Date().getMonth() - 1);
            return date.toLocaleString('es-MX', { month: 'long' });
        });
    }

    const handleNextMonth = () => {
        setCurrentMonth(prev => {
            const date = currentMonth === 'diciembre' ? new Date(new Date().getFullYear() + 1, 0) : new Date(new Date().getFullYear(), new Date().getMonth() + 1);
            return date.toLocaleString('es-MX', { month: 'long' });
        });
    }

    return (
        <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
            <div className="flex items-center text-gray-900">
                <button type="button" className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500" onClick={handlePreviousMonth}>
                    <span className="sr-only">Previous month</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                    </svg>
                </button>
                <div className="flex-auto text-sm font-semibold">{
                    currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)
                    }</div>
                <button type="button" className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500" onClick={handleNextMonth}>
                    <span className="sr-only">Next month</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
            </div>
            <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                {/* <button type="button" className="rounded-tl-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                    <time dateTime="2021-12-27" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
                </button>
                <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                    <time dateTime="2021-12-28" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
                </button>
                <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                    <time dateTime="2021-12-29" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
                </button>
                <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                    <time dateTime="2021-12-30" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
                </button>
                <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                    <time dateTime="2021-12-31" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
                </button> */}
                {
                    Array.from({ length: daysInMonth }, (_, i) => (
                        <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10" key={i + 1}>
                            <time dateTime={`2022-01-${String(i + 1).padStart(2, '0')}`} className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">
                                {i + 1}
                            </time>
                        </button>
                    ))
                }
                {/* <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                    <time dateTime="2022-02-01" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
                </button>
                <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                    <time dateTime="2022-02-02" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
                </button>
                <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                    <time dateTime="2022-02-03" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
                </button>
                <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                    <time dateTime="2022-02-04" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
                </button>
                <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                    <time dateTime="2022-02-05" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
                </button>
                <button type="button" className="rounded-br-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
                    <time dateTime="2022-02-06" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
                </button> */}
            </div>
        </div>
    )
}