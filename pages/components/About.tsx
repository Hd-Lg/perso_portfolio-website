import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 2 }}
			className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>

			{/* Add picture user */}
			<motion.img
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				src="https://via.placeholder.com/100.png"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-90 xl:w-[500px] xl:h-[600px]"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4>
					A{" "}
					<span className="underline decoration-[#F7AB0A]/50">
						little
					</span>{" "}
					background about me
				</h4>
				<p className="text-sm">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Dolore magni sed, reprehenderit placeat eius, quae iusto
					totam consectetur itaque perspiciatis consequuntur cum
					cupiditate facilis, doloribus vel. Reiciendis ipsa explicabo
					quae.
				</p>
			</div>
		</motion.div>
	);
}
