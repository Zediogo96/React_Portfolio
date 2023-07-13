import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsImage from "../assets/skills-image.png";
import Skills from "./SkillsIcons";
import LineGradient from "./LineGradient";

const MySkills = () => {
	const isAboveLarge = useMediaQuery("(min-width: 1060px)");
	return (
		<section id="skills" className="pt-10 pb-24">
			{/* HEADER AND IMAGE SECTION */}
			<div className="md:flex md:justify-between md:gap-16 mt-32">
				<motion.div
					className="md:w-1/3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className="font-playfair font-semibold text-6xl mt-12">
						MY <span className="text-red">SKILLS</span>
					</p>
					<LineGradient width="w-1/2 mt-1" />
					<p className="mt-5">
						Here are some of my skills that I have acquired over the years. <br /> I am
						trying to improve myself every day, currently learning React and NextJS.
					</p>

					<br/>

					<Skills />
				</motion.div>

				<div className="mt-16 md:mt-0">
					{isAboveLarge ? (
						<div
							className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
						>
							<motion.div
								className="md:w-1/3"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5 }}
								transition={{ duration: 0.5 }}
								variants={{
									hidden: { opacity: 0, x: 50 },
									visible: { opacity: 1, x: 0 },
								}}
							>
								<img alt="skills" className="z-10 mt-12" src={skillsImage} />
							</motion.div>
						</div>
					) : (
						<img alt="skills" className="z-10 mt-12" src={skillsImage} />
					)}
				</div>
			</div>

			{/* SKILLS */}
			<div className="md:flex md:justify-between mt-16 gap-12 md:gap-32">
				{/* EXPERIENCE */}
				<motion.div
					className="md:w-1/3 mt-10 mr-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative h-32 w-1/3">
						<div className="z-10">
							<p className="font-playfair font-semibold text-5xl">01</p>
							<p className="font-playfair font-semibold text-3xl mt-3">
								Experience
							</p>
						</div>
					</div>
					<p className="mt-5">
						Currently looking for my first opportunity as a Software Developer.
						I think my skills  and knowledge would be a great fit for a web development role, but I am open to other opportunities.
					</p>
				</motion.div>

				{/* INNOVATIVE */}
				<motion.div
					className="md:w-1/3 mt-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative h-32">
						<div className="z-10">
							<p className="font-playfair font-semibold text-5xl">02</p>
							<p className="font-playfair font-semibold text-3xl mt-3">
								Creative
							</p>
						</div>

					</div>
					<p className="mt-5">
						My main focus is not being able to design a website, although I consider myself to be a creative person, as I'm able to transcript good ideas into code.
					</p>
				</motion.div>
				{/* ALWAYS LEARNING */}
				<motion.div
					className="md:w-1/3 mt-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative h-32">
						<div className="z-10">
							<p className="font-playfair font-semibold text-5xl">03</p>
							<p className="font-playfair font-semibold text-3xl mt-3">
								Always learning
							</p>
						</div>

					</div>
					<p className="mt-5">
						I have a strong desire to learn and improve my skills, and I am always looking for new challenges. I am currently learning React and NextJS.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default MySkills;
