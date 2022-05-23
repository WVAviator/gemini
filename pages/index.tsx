import type { NextPage } from "next";
import Hero from "../components/ui/Hero";
import heroImage from "/public/images/hero.jpg";

const Home: NextPage = () => {
	return (
		<div>
			<Hero
				heroImage={{
					src: heroImage,
					alt: "A dog running in a field with a ball in its mouth",
				}}
				headlineText="An inspiring phrase that makes you want to help in some way."
				firstButtonText="Get involved!"
				secondButtonText="Browse Adoptions"
			/>
		</div>
	);
};

export default Home;
