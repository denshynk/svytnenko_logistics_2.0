"use client";

import Marquee from "@/components/Marquee";
import NewMarquee from "@/components/NewMarquee";
import Services from "@/components/Services";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LocalSwitcher from "@/components/local-switcher";

const Home = () => {
	const t = useTranslations("Home");
	return (
		<section className="md:h-screen h-full flex md:justify-center flex-col overflow-hidden">
			<LocalSwitcher />
			<div className="flex items-center flex-col mx-5 md:mx-0">
				<div className="container mx-auto mt-10 md:mt-0">
					<div className="flex flex-col items-center justify-between">
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
				<motion.div
					className="flex justify-center mx-auto py-8"
					initial={{ opacity: 0, y: -150, scale: 0.9 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
				>
					<ul className="flex text-center flex-wrap justify-center list-disc">
						<li className="uppercase mx-4">{t("service1")}</li>
						<li className="uppercase mx-4">{t("service2")}</li>
						<li className="uppercase mx-4">{t("service3")}</li>
						<li className="uppercase mx-4">{t("service4")}</li>
					</ul>
				</motion.div>

				<Services />

				{/* Новый фрейм с Marquee и контактами */}
				<div className=" ">
					<div className="container mx-auto py-2">
						{/* <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2> */}
						<motion.div
							className="flex flex-col items-center space-y-2 "
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
						>
							<p className="font-roboto text-2xl tracking-[7px]">
								+380674659106
							</p>
							<p type="email" className="font-roboto text-2xl">
								sergey@svyatnenko.com.ua
							</p>
						</motion.div>
					</div>
				</div>
				<NewMarquee />
			</div>
		</section>
	);
};

export default Home;
