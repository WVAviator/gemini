import { GetStaticProps, NextPage } from "next";
import CardsLayout from "../../components/layout/CardsLayout";
import AnimalCard from "../../components/ui/AnimalCard";
import GridSection from "../../components/ui/GridSection";
import { getShelterluvAnimals } from "../../lib/shelterluv";
import { ShelterluvAnimal } from "../../lib/types";

interface AdoptionsProps {
	animals: ShelterluvAnimal[];
}

const Adoptions: NextPage<AdoptionsProps> = ({ animals }) => {
	return (
		<GridSection maxInternalWidth="100%">
			<CardsLayout>
				{animals.map((animal) => (
					<AnimalCard key={animal.ID} animal={animal} />
				))}
			</CardsLayout>
		</GridSection>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const animals = await getShelterluvAnimals();
	return {
		props: {
			animals,
		},
		revalidate: 600,
	};
};

export default Adoptions;
