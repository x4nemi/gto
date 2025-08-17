"use client"
import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"

export default function CrearPage() {
	const [dates, setDates] = useState<Date[]>([]);

	const handleAddDate = (newDate: Date) => {
		if (newDate < new Date()) return;

		dates.includes(newDate) ?
			setDates(dates.filter(date => date !== newDate)) :
			setDates([...dates, newDate]);
	};

	return (
		<div className='w-full'>
			<div className="flex items-center justify-center">
				<div className=" bg-base-200 border-base-300 rounded-box w-full max-w-md border p-6">
					<legend className="fieldset-legend text-3xl">Crear nuevo evento</legend>

					<label className="label text-lg">Título</label>
					<input type="text" className="input w-full" placeholder='Título del evento' minLength={10} title="El título debe tener al menos 10 caracteres" />

					<label className="label text-lg">Descripción del evento</label>
					<textarea className="textarea w-full" placeholder="Detalles del evento como fecha, si es recurrente, precio, para quién va dirigido,etc." />

					<label className="label text-lg">Días seleccionados</label>
					<div className='bg-white rounded-box p-2'>
						<div className='flex flex-wrap gap-2'>
							{dates.length === 0 && <span className='text-sm text-gray-500'>No has seleccionado ningún día</span>}
							{dates.map(date => (
								<div key={date.toString()} className='border p-2 badge border-violet-300'>
									{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
									<button type="button" className="px-0 cursor-pointer hover:text-violet-700" onClick={() => handleAddDate(date)}>×</button>
								</div>
							))}
						</div>
					</div>
				</div>
				<fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-6'>
					<label className="label text-lg">Selecciona el día o los días en los que será el evento</label>
					<Calendar
						mode="multiple"
						selected={dates}
						onDayClick={handleAddDate}
						className="rounded-xl p-2 bg-neutral-50"
						disabled={[
							{ before: new Date() }, // Dates before today
						]}
					/>
				</fieldset>
			</div>
		</div>
	)
}
