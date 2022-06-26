/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { ShelterluvAnimal } from "../../lib/types";

interface AnimalCardProps {
	animal: ShelterluvAnimal;
}

const useAnimalCardStyles = () => {
	const theme = useTheme();

	const innerStyles = useMemo(() => {
		return css`
			display: flex;
			height: 100%;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			& p,
			h2 {
				width: 100%;
				text-align: center;
			}
		`;
	}, []);

	const outerStyles = useMemo(() => {
		return css`
			padding: 1rem;
			border-radius: 0.5rem;
			background-color: #fff;
			box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
			width: 18rem;
			height: 24rem;
			cursor: pointer;
			transition: all 150ms;
			&:hover {
				box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
				background-color: ${theme.colors.primary}30;
			}
		`;
	}, [theme]);

	const imageStyles = useMemo(() => {
		return css`
			width: 100%;
			aspect-ratio: 1;
			position: relative;
			object-fit: cover;
			border-radius: 0.5rem;
			overflow: hidden;
		`;
	}, []);

	const descStyles = useMemo(() => {
		return css`
			width: 100%;
			height: 6rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		`;
	}, []);

	return { innerStyles, outerStyles, imageStyles, descStyles };
};

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
	const { innerStyles, outerStyles, imageStyles, descStyles } =
		useAnimalCardStyles();

	return (
		<Link href={`/adoptions/${animal["Internal-ID"].toString()}`}>
			<article css={outerStyles}>
				<div css={innerStyles}>
					<div css={imageStyles}>
						<Image
							src={animal.CoverPhoto}
							alt={`A ${animal.Color} ${animal.Breed}`}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div css={descStyles}>
						<h2>{animal.Name}</h2>
						<p>{animal.Breed}</p>
					</div>
				</div>
			</article>
		</Link>
	);
};
export default AnimalCard;
