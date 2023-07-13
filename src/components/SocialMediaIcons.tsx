import instagram_img from "../assets/instagram.png";
import linkedin_img from "../assets/linkedin.png";
import twitter_img from "../assets/twitter.png";

const SocialMediaIcons = () => {
	return (
		<div className="flex justify-center md:justify-start mt-5 gap-10">
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.linkedin.com/in/josédpinto"
				target="_blank"
				rel="noreferrer"
			>
				<img alt="linkedin-link" src={linkedin_img} />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://twitter.com/zediogo96"
				target="_blank"
				rel="noreferrer"
			>
				<img alt="twitter-link" src={twitter_img} />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.instagram.com/zediogo96/"
				target="_blank"
				rel="noreferrer"
			>
				<img alt="instagram-link" src={instagram_img} />
			</a>
		</div>
	);
};

export default SocialMediaIcons;
