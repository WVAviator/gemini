/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useMemo } from "react";

interface CarouselProps {
	children: React.ReactNode;
}

const useCarouselStyles = () => {
	const carouselStyles = useMemo(() => {
		return css`
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: min(100vw, 50rem);
			overflow: hidden;
			position: relative;
			background-color: #0b0b0b;
			> div {
				position: relative;
				width: 80%;
				height: 100%;
				overflow: hidden;
			}
		`;
	}, []);

	const leftButtonStyles = useMemo(() => {
		return css`
			left: 1rem;
		`;
	}, []);

	const rightButtonStyles = useMemo(() => {
		return css`
			right: 1rem;
		`;
	}, []);

	const carouselButtonStyles = useMemo(() => {
		return css`
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 2rem;
			z-index: 2;
			height: 2rem;
			background-color: #ffffff35;
			color: #fff;
			border: none;
			cursor: pointer;
			&:hover {
				background-color: #ffffff50;
			}
		`;
	}, []);

	const carouselItemStyles = useMemo(() => {
		return css`
			position: absolute;
			width: 100%;
			height: 100%;
			transition: all 150ms;
		`;
	}, []);

	const carouselItemWrapperStyles = useMemo(() => {
		return css`
			position: relative;
			width: 100%;
			height: 100%;
		`;
	}, []);

	return {
		carouselStyles,
		leftButtonStyles: [leftButtonStyles, carouselButtonStyles],
		rightButtonStyles: [rightButtonStyles, carouselButtonStyles],
		carouselItemStyles,
		carouselItemWrapperStyles,
	};
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const {
		carouselStyles,
		leftButtonStyles,
		rightButtonStyles,
		carouselItemStyles,
		carouselItemWrapperStyles,
	} = useCarouselStyles();

	const handleButtonClick = (direction: "left" | "right") => {
		if (direction === "right") {
			currentIndex <= 0
				? setCurrentIndex(React.Children.count(children) - 1)
				: setCurrentIndex(currentIndex - 1);
		} else {
			currentIndex >= React.Children.count(children) - 1
				? setCurrentIndex(0)
				: setCurrentIndex(currentIndex + 1);
		}
	};

	return (
		<div css={carouselStyles}>
			<button
				css={leftButtonStyles}
				onClick={() => handleButtonClick("left")}
			>
				{"<"}
			</button>
			<div>
				{React.Children.map(children, (child, index) => {
					return (
						<div
							css={carouselItemStyles}
							key={index}
							style={{
								transform: `translateX(${
									100 * (currentIndex - index)
								}%)`,
							}}
						>
							<div css={carouselItemWrapperStyles}>{child}</div>
						</div>
					);
				})}
			</div>
			<button
				css={rightButtonStyles}
				onClick={() => handleButtonClick("right")}
			>
				{">"}
			</button>
		</div>
	);
};
export default Carousel;
