import { EventList } from "./EventList";
import { Filters } from "./Filters";

export default function Home() {
	const tabs = [
		{ name: "Inicio", href: "#", current: true },
		{ name: "Registrar", href: "#", current: false },
		{ name: "Contacto", href: "#", current: false }
	];
	return (
		<main className="flex min-h-screen flex-col items-center p-8">
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							{
								tabs.map((tab) => (
									<li key={tab.name}><a href={tab.href} className={tab.current ? "text-primary" : ""}>{tab.name}</a></li>
								))
							}
						</ul>
					</div>
					<a className="btn btn-ghost text-xl">Ocío Cuevanense</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						{
							tabs.map((tab) => (
								<li key={tab.name}>
									<a href={tab.href} className={tab.current ? "" : ""}>
										{tab.name}
									</a>
								</li>
							))
						}
					</ul>
				</div>
				<div className="navbar-end">
					{/* Hace que esté en medio */}
				</div>
			</div>
			<div className='w-full'>
				<div className="grid grid-cols-12 w-full gap-4">
					<div className="col-span-5">
						<Filters />
					</div>
					<div className="col-span-7">
						<EventList />
					</div>
				</div>
			</div>
		</main >
	);
}
