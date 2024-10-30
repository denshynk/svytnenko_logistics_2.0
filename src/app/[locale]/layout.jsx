import { JetBrains_Mono, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

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
	weight: ["100", "300", "400", "500", "700", "900"],
	variable: "--font-roboto",
});

const theYoungest = localFont({
	src: [
		{
			path: "../../../public/fonts/TheYoungestScript-Rg.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-theYoungest",
});

const mavka = localFont({
	src: [
		{
			path: "../../../public/fonts/SweetMavkaScript.otf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-mavka",
});

export const metadata = {
	title: "Svyatnenko Logistics",
};

export default async function RootLayout({ children }) {
	 const locale = await getLocale();
	 const messages = await getMessages();
	return (
		<html lang={locale} >
			<body
				className={`${theYoungest.variable} ${jetbrainsMono.variable} ${mavka.variable}  ${roboto.variable} `}
			>
				{/* <Header /> */}
				<NextIntlClientProvider messages={messages}>
					<StairTransition />
					<PageTransition> {children}</PageTransition>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
