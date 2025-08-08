import { Filters } from "./Filters";
import { Pared } from "./Pared";

export default function Home() {
	return (
		<div className='w-full'>
			<div className="flex flex-col lg:flex-row xl:flex-row w-full gap-4 lg:px-3">
				<div className="w-full lg:w-auto min-w-sm">
					<Filters />
				</div>
				<div className="w-full flex-1">
					<Pared />
				</div>
			</div>
		</div>
	);
}
