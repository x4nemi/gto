"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Inicio", href: "/", current: true },
  { name: "Crear", href: "/crear", current: false },
  { name: "Contacto", href: "/contacto", current: false }
];

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <div className="navbar bg-base-100 shadow-sm mb-5 rounded-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
              tabs.map((tab) => (
                <Link 
                  key={tab.name} 
                  href={tab.href} 
                  className={pathname === tab.href ? "text-primary" : ""}
                >
                  {tab.name}
                </Link>
              ))
            }
          </ul>
        </div>
        <div className="avatar px-2">
          <div className="w-10 rounded-full">
            <img src="/montana.png" alt="Logo Cuevanense" />
          </div>
        </div>
        <Link href="/" className="font-semibold text-xl">Cuevanense</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            tabs.map((tab) => (
              <li key={tab.name}>
                <Link 
                  href={tab.href} 
                  className={pathname === tab.href ? "text-primary" : ""}
                >
                  {tab.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="navbar-end">
        {/* Hace que esté en medio */}
      </div>
    </div>
  );
}
