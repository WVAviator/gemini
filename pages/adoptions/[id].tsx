import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import Carousel from "../../components/ui/Carousel";
import GridSection from "../../components/ui/GridSection";
import {
	getShelterluvAnimal,
	getShelterluvAnimals,
} from "../../lib/shelterluv";
import { ShelterluvAnimal } from "../../lib/types";

interface AnimalPageProps {
	animal: ShelterluvAnimal;
}

const AnimalPage: NextPage<AnimalPageProps> = ({ animal }) => {
	return (
		<div>
			<Carousel>
				{animal.Photos.map((photo) => {
					return (
						<Image
							src={photo}
							alt={`A ${animal.Color} ${animal.Breed}`}
							key={photo}
							layout="fill"
							objectFit="cover"
						/>
					);
				})}
			</Carousel>
			<GridSection>
				<h1>{animal.Name}</h1>
				<p>{animal.Description}</p>
				<p>Age: {animal.Age}</p>
				<p>Sex: {animal.Sex}</p>
				<p>Breed: {animal.Breed}</p>
			</GridSection>
		</div>
	);
};

interface AnimalParams extends ParsedUrlQuery {
	id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { id } = context.params as AnimalParams;
	const animal = await getShelterluvAnimal(id);

	return {
		props: {
			animal,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const animals = await getShelterluvAnimals();

	const paths = animals.map((animal) => {
		return {
			params: {
				id: animal["Internal-ID"].toString(),
			},
		};
	});

	return {
		paths,
		fallback: true,
	};
};

export default AnimalPage;
