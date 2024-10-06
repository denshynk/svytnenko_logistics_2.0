"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";


export default function LocalSwitcher() {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const localActive = useLocale();

	const toggleLanguage = () => {
		const nextLocale = localActive === "en" ? "ua" : "en";
		startTransition(() => {
			router.replace(`/${nextLocale}`);
		});
	};

	return (
		<motion.button
			onClick={toggleLanguage}
			disabled={isPending}
			className="absolute top-5 right-10"
			initial={{ opacity: 0, x: 100, scale: 0.9 }}
			animate={{ opacity: 1, x: 0, scale: 1 }}
			transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
		>
			{localActive === "en" ? "UA" : "EN"}
		</motion.button>
	);
}
