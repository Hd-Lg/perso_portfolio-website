/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				whileInView={{ opacity: 1, y: 0 }}
				src={"../../assets/Amazon.jpg"}
				alt="Logo"
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">
					CEO of Altered Blockchain
				</h4>
				<p className="font-bold text-2xl mt-1">ALTERED BLOCKCHAIN</p>
				<div className="flex space-x-2 my-2">
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TpbxEQy4ckB-g31PwUQPlgHaHa%26pid%3DApi%26h%3D160&f=1&ipt=601190d06c399050fe039027d30012d695a9724335e26579115b8cff7f3f7e38&ipo=images"
						alt="typescript"
						className="h-10 w-10 rounded-full"
					/>
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TpbxEQy4ckB-g31PwUQPlgHaHa%26pid%3DApi%26h%3D160&f=1&ipt=601190d06c399050fe039027d30012d695a9724335e26579115b8cff7f3f7e38&ipo=images"
						alt="typescript"
						className="h-10 w-10 rounded-full"
					/>
				</div>
				<p className="uppercase py-5 text-gray-300">
					Started work ... - Ended ...
				</p>
				<ul className="list-disc space-y-4 mt-5 text-lg">
					<li>Summary Point</li>
					<li>Summary Point</li>
					<li>Summary Point</li>
					<li>Summary Point</li>
					<li>Summary Point</li>
				</ul>
			</div>
		</article>
	);
}
