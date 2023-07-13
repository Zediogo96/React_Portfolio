import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import MySkills from "./components/MySkills";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
	const [selectedPage, setSelectedPage] = useState("home");
	const isDesktop = useMediaQuery("(min-width: 1060px)");

	return (
		<div className="app bg-deep-blue">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: 100 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			</motion.div>
			<div className="w-5/6 mx-auto md:h-full">
				{/* {isDesktop && (
					<DotGroup
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				)} */}
				<motion.div
					margin="0 0 -200px 0"
					amount="all"
					onViewportEnter={() => setSelectedPage("home")}
				>
					<Landing setSelectedPage={setSelectedPage} />
				</motion.div>
			</div>

			<br />

			<div className="w-5/6 mx-auto md:h-full">
				<MySkills />
			</div>

			<div className="w-5/6 mx-auto">
				<motion.div
					margin="0 0 -200px 0"
					amount="all"
					onViewportEnter={() => setSelectedPage("projects")}
				>
					<Projects />
				</motion.div>
			</div>

			<div className="w-5/6 mx-auto md:h-full">
				<motion.div
					margin="0 0 -200px 0"
					amount="all"
					onViewportEnter={() => setSelectedPage("contact")}
				>
					<Contact />
				</motion.div>
			</div>

			<Footer />
		</div>
	);
}

export default App;
