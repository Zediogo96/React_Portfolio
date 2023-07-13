import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
	return (
		<footer className="h-48 bg-transparent-white">
			<div className="w-10/12 mx-auto">
				
				<div className="md:flex justify-center md:justify-between text-center ">
					<p className="font-playfair font-semibold text-2xl text-yellow mt-10">
						JOSÉ DIOGO
					</p>
					<p className="font-playfair text-md text-yellow mt-10">
						©2023 DIOGO. All Rights Reserved.
					</p>
				</div>

                <SocialMediaIcons className="mt-5"/>
			</div>
		</footer>
	);
};

export default Footer;
