"use client"

import { CalendarIcon } from "lucide-react"
import {
	Button,
	DateRangePicker,
	Dialog,
	Group,
	Label,
	Popover,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { RangeCalendar } from "@/components/ui/calendar-rac"
import { DateInput, dateInputStyle } from "@/components/ui/datefield-rac"

export default function CalendarRange() {
	return (
		<DateRangePicker className="*:not-first:mt-2">
			<Label className="text-foreground text-sm font-medium">
				Rango de fechas
			</Label>
			<div className="flex">
				<Group className={cn(dateInputStyle, "pe-9")}>
					<DateInput slot="start" unstyled />
					<span aria-hidden="true" className="text-muted-foreground/70 px-2">
						-
					</span>
					<DateInput slot="end" unstyled />
				</Group>
				<Button className="text-muted-foreground/80 hover:text-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 z-10 -ms-9 -me-px flex w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none data-focus-visible:ring-[3px]">
					<CalendarIcon size={16} />
				</Button>
			</div>
			<Popover
				className="bg-background text-popover-foreground data-entering:animate-in data-exiting:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 rounded-md border shadow-lg outline-hidden"
				offset={4}
			>
				<Dialog className="max-h-[inherit] overflow-auto p-2">
					<RangeCalendar />
				</Dialog>
			</Popover>
		</DateRangePicker>
	)
}
