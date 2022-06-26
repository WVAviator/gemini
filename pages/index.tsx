import type { NextPage } from "next";
import Image from "next/image";
import GridSection from "../components/ui/GridSection";
import Hero from "../components/ui/Hero";
import heroImage from "/public/images/hero.jpg";
import dogCrate from "/public/images/dogcrate.png";
import geminiVan from "/public/images/gemini-van.png";
import smallTown from "/public/images/small-town.png";
import QuickInfo from "../components/ui/QuickInfo";
import AdjacentInfo from "../components/ui/AdjacentInfo";
import Button from "../components/ui/Button";
import ArrowSmRightIcon from "@heroicons/react/solid/ArrowSmRightIcon";
import Watermark from "../components/ui/Watermark";

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
			<GridSection>
				<AdjacentInfo>
					<Image
						src={dogCrate}
						alt="a travel crate for a large dog"
					/>
					<QuickInfo>
						<h2>Animal Adoptions</h2>
						<p>
							Finding adopters for the animals we rescue is our
							number one goal. Please let us know if you’re
							interested in adopting from us!
						</p>
						<Button endIcon={<ArrowSmRightIcon />}>
							Browse Adoptions
						</Button>
					</QuickInfo>
				</AdjacentInfo>
				<AdjacentInfo>
					<Image
						src={geminiVan}
						alt="a van with the gemini logo on the side"
					/>
					<QuickInfo>
						<h2>Transport Services</h2>
						<p>
							As part of our rescue mission, we transport animals
							to other animal rescue organizations all over the
							country to ensure they find a home.
						</p>
						<Button endIcon={<ArrowSmRightIcon />}>
							Learn More
						</Button>
					</QuickInfo>
				</AdjacentInfo>
				<AdjacentInfo>
					<Image src={smallTown} alt="a small town" />
					<QuickInfo>
						<h2>Community Outreach</h2>
						<p>
							We strive to lend a hand to those who need help with
							their pets in our local community and in the animal
							rescue community as a whole.
						</p>
						<Button endIcon={<ArrowSmRightIcon />}>
							Get Involved
						</Button>
					</QuickInfo>
				</AdjacentInfo>
			</GridSection>
		</div>
	);
};

export default Home;
