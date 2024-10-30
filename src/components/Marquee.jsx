import { motion } from "framer-motion";
import React, { useEffect, useState, useMemo } from "react";

// Function to shuffle an array
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

const Marquee = () => {
	// Memoize the initial array to avoid re-creation on every render
	const initialMarquee = useMemo(
		() => [
			"/assets/logos/2.svg",
			"/assets/logos/15.png",
			"/assets/logos/4.png",
			"/assets/logos/5.png",
			"/assets/logos/6.png",
			"/assets/logos/8.png",
			"/assets/logos/9.png",
			"/assets/logos/11.svg",
			"/assets/logos/13.svg",
			"/assets/logos/16.svg",
			"/assets/logos/17.png",
			"/assets/logos/18.png",
			"/assets/logos/19.png",
			"/assets/logos/20.svg",
			"/assets/logos/21.svg",
		],
		[]
	);

	const [upperMarquee, setUpperMarquee] = useState([]);

	// Shuffle the array when the component mounts
	useEffect(() => {
		setUpperMarquee(shuffleArray([...initialMarquee]));
	}, [initialMarquee]);

	return (
		<div className="pb-10 md:pb-0">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
				}}
				className="mt-8 overflow-hidden" // Ensure overflow is hidden
			>
				<div className="flex">
					{/* Marquee Animation Container */}
					<motion.div
						initial={{ x: 0 }}
						animate={{ x: "-100%" }}
						transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
						className="flex"
					>
						{/* First Marquee */}
						<div className="flex flex-shrink-0">
							{upperMarquee.map((image, index) => {
								return (
									<img
										key={index}
										className="max-h-[80px] mr-10"
										src={image}
										alt={`Logo ${index}`}
									/>
								);
							})}
						</div>
						{/* Duplicate Marquee for seamless scrolling */}
						<div className="flex flex-shrink-0">
							{upperMarquee.map((image, index) => {
								return (
									<img
										key={index}
										className="max-h-[80px] mr-10"
										src={image}
										alt={`Logo ${index}`}
									/>
								);
							})}
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default Marquee;
