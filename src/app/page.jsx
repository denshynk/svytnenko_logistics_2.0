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
		<section className="h-screen flex md:justify-center mt md:m-0 md:gap-0 items-center flex-col overflow-hidden mx-5 overflow-y-hidden">
			{/* <Background /> */}
			<div className="container mx-auto mt-10 md:mt-0">
				<div className="flex flex-col items-center justify-between pb-8">
					<motion.div
						className="text-center "
						initial={{ opacity: 0, y: -150, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
					>
						<Image
							className="hidden md:flex"
							src="/assets/logo.png"
							width={1500}
							height={500}
							alt="logo"
						/>
						<div>
							<Image
								className="md:hidden"
								src="/assets/LOGO010.png"
								width={1500}
								height={500}
								alt="logo"
							/>
							<Image
								className="md:hidden"
								src="/assets/LOGO011.png"
								width={1500}
								height={500}
								alt="logo"
							/>
						</div>
					</motion.div>
				</div>
			</div>
			<motion.div  className="flex justify-center mx-auto py-8">
				<ul className="flex text-center flex-wrap justify-center list-disc">
					<li className="uppercase mr-8">International transportation</li>
					<li className="uppercase mr-8">Goupage (LTL) from Spain</li>
					<li className="uppercase mr-8">Customs formalities</li>
					<li className="uppercase">
						Warehousing: Spain, Italy, Poland, Ukraine
					</li>
				</ul>
			</motion.div>

			<Services />

			{/* Новый фрейм с Marquee и контактами */}
			<div className=" ">
				<div className="container mx-auto py-2">
					{/* <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2> */}
					<motion.div
						className="flex flex-col items-center space-y-2 "
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
					>
						<p className="font-roboto text-2xl">+380674659106</p>
						<p className="font-roboto text-2xl">sergey@svyatnenko.com.ua</p>
					</motion.div>
				</div>
				<Marquee />
			</div>
		</section>
	);
};

export default Home;
