import { JetBrains_Mono, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsMono",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500",  "700", "900"],
	variable: "--font-roboto",
});

const theYoungest = localFont({
	src: [
		{
			path: "../../public/fonts/TheYoungestScript-Rg.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-theYoungest",
});

const mavka = localFont({
	src: [
		{
			path: "../../public/fonts/SweetMavkaScript.otf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-mavka",
});

export const metadata = {
	title: "Svyatnenko Logistics",

};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${theYoungest.variable} ${jetbrainsMono.variable} ${mavka.variable}  ${roboto.variable}`}
			>
				{/* <Header /> */}
				<StairTransition />
				<PageTransition> {children}</PageTransition>
			</body>
		</html>
	);
}
