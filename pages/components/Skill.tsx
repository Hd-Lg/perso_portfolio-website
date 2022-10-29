import React from "react";
import { motion } from "framer-motion";

type Props = {
	directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-4qhu3DJklzhriLcJxGzQwHaGI%26pid%3DApi&f=1&ipt=9826e94371881b5caf4c386730cd96be5e8922fce5fe6291dd6815b87218af09&ipo=images"
				className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full z-0">
				<div className="flex items-center justify-center h-full">
					<p className="text-3xl text-black font-bold opacity-100">
						100%
					</p>
				</div>
			</div>
		</div>
	);
}
