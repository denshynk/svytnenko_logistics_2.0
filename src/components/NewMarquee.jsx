import { motion } from "framer-motion";
import React from "react";

const NewMarquee = () => {
	const initialMarquee = [
		"/assets/logos/2.svg",
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
		"/assets/logos/22.png",
	];

	return (
		<div className="container mx-auto">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
				}}
				className="flex mt-8"
			>
				<motion.div
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
					className="flex flex-shrink-0"
				>
					{initialMarquee.map((image, index) => {
						return (
							<img
								className="h-[80px] max-w-[300px] pr-10"
								src={image}
								key={index}
							/>
						);
					})}
				</motion.div>
				<motion.div
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
					className="flex flex-shrink-0"
				>
					{initialMarquee.map((image, index) => {
						return (
							<img
								className="h-[80px] max-w-[300px] pr-10"
								src={image}
								key={index}
							/>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default NewMarquee;
