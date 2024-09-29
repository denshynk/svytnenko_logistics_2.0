"use client";

import { useState, useEffect } from "react";
import Background from "@/components/Background";
import Marquee from "@/components/Marquee";

import Services from "@/components/Services";
import splitString from "@/utils/splitString";
import { motion } from "framer-motion";
import Image from "next/image";

const charVariants = {
	hidden: { opacity: 0 },
	reveal: { opacity: 1 },
};

const mainttext1 = "Logistics company";
const mainttext2 = "Svyatnenko Sergei";

const Home = () => {
	const headingChar = splitString(mainttext1);
	const headingChar2 = splitString(mainttext2);

	const [isXl, setIsXl] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsXl(window.innerWidth >= 1280); // xl breakpoint
		};

		handleResize(); // Initial check
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className="h-screen">
			{/* <Background /> */}
			<div className="container mx-auto">
				<div className="flex flex-col items-center justify-between pb-8">
					<div className="text-center mt-20">
						<Image
							src="/assets/logo.png"
							width={1000}
							height={300}
							alt="logo"
						/>
					</div>
				</div>
			</div>
			<Services />
			{/* Новый фрейм с Marquee и контактами */}
			<div className="mt-20 xl:mt-2">
				<Marquee className="" />

				<div className="container mx-auto py-2">
					{/* <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2> */}
					<div className="flex flex-col items-center space-y-2 mt-8 " id="container2">
						<p className="font-roboto font-bold text-2xl">
							Phone: +380 (67) 465-9106
						</p>
						<p className="font-roboto  font-bold text-2xl">
							Email: sergey@svyatnenko.com.ua
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
