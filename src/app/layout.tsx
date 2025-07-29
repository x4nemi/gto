import type { Metadata } from "next";
import { Geist, Geist_Mono, Quattrocento_Sans, Quattrocento } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const quattrocentoSans = Quattrocento_Sans({
	variable: "--font-quattrocento-sans",
	subsets: ["latin"],
	weight: "400",
});

const quattrocento = Quattrocento({
	variable: "--font-quattrocento",
	subsets: ["latin"],
	weight: "700",
});

export const metadata: Metadata = {
	title: "Cuevanense",
	description: "Creada por y para Guanajuatenses",
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/montana.png", sizes: "32x32", type: "image/png" },
			{ url: "/montana.png", sizes: "16x16", type: "image/png" },
		],
		shortcut: "/favicon.ico",
		apple: "/montana.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`${quattrocento.variable} ${quattrocentoSans.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
