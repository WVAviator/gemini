import axios from "axios";
import { ShelterluvAnimal } from "../types";

const key = process.env.SHELTERLUV_API_KEY || "";
const baseUrl = "https://www.shelterluv.com/api/v1";

export const getShelterluvAnimals = async () => {
	const response = await axios.get(`${baseUrl}/animals`, {
		headers: {
			"X-Api-Key": key,
		},
		params: {
			status_type: "publishable",
		},
	});

	const animals = response.data.animals as ShelterluvAnimal[];

	return filterResults(animals);
};

export const getShelterluvAnimal = async (animalId: string) => {
	const url = `${baseUrl}/animals/${animalId}`;
	const response = await axios.get(url, {
		headers: {
			"X-Api-Key": key,
		},
	});
	const animal = response.data as ShelterluvAnimal;
	return animal;
};

const filterResults = (animals: ShelterluvAnimal[]) => {
	let filteredAnimals = new Array<ShelterluvAnimal>();

	animals.forEach((animal) => {
		if (!animal.Name) return;
		if (animal.Photos.length === 0) return;

		filteredAnimals.push(animal);
	});

	return filteredAnimals;
};
