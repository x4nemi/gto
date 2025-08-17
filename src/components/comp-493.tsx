"use client"

import { useState } from "react"
import { addDays, subDays } from "date-fns"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarComponent(dates: Date[], setDates: (dates: Date[]) => void) {

	return (
		<div>
			<Calendar
				mode="multiple"
				selected={dates}
				onSelect={setDates}
				required
				className="rounded-md border p-2"
			/>
		</div>
	)
}
