import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			"Hi! My name is Hdn",
			"Guy-who-loves-Coffe.tsx",
			"<ButLovesToCodeMore />",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
			}}
			transition={{
				duration: 2.5,
			}}
			className="h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden"
		>
			<BackgroundCircles />
			{/* Insert Image here */}
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					Web Developer
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h1>
				<div>
					<Link href={"#about"}>
						<button className="heroButton">About</button>
					</Link>
					<Link href={"#experience"}>
						<button className="heroButton">Experience</button>
					</Link>
					<Link href={"#skills"}>
						<button className="heroButton">Skills</button>
					</Link>
					<Link href={"#projects"}>
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
