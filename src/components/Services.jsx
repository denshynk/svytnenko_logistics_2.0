import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const services = [
	{
		num: "01",
		img: "/assets/services/service1.png",
		title: "International cargo transportation",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam?",
	},
	{
		num: "02",
		img: "/assets/services/service2.png",
		title: "Delivery of groupage cargo from Spain",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam?",
	},
	{
		num: "03",
		img: "/assets/services/service3.png",
		title: "Customs clearance",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam?",
	},
	{
		num: "04",
		img: "/assets/services/service4.png",
		title: "Warehouses in Spain, Italy, Poland and Ukraine",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam?",
	},
];

const Services = () => {
	return (
		<section>
			<div className="container ">
				<div className="flex justify-center flex-nowrap flex-2 xl:gap-24 xl:max-w-none">
					{services.map((service, index) => (
						<motion.div
							key={index}
							className="relative px-4 md:p-6 w-[90%] max-h-[300px]"
						
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
						>
							<div className="relative flex items-center text-center flex-col justify-between">
								<Image
									src={service.img}
									width={140}
									height={140}
									className="mt-5"
									alt={`${service.num} service`}
								/>
								<h3 className="h3 mt-10 drop-shadow-xl">
									{/* {service.title} */}
								</h3>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
