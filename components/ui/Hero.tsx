/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from "@emotion/react";
import Image, { ImageProps } from "next/image";
import React, { useEffect, useMemo, useRef } from "react";
import ArrowSmRightIcon from "@heroicons/react/solid/ArrowSmRightIcon";
import Button from "./Button";
import useWindowSize from "../../lib/hooks/useWindowSize";

interface HeroImage extends Pick<ImageProps, "src" | "alt"> {}

interface HeroProps {
	heroImage: HeroImage;
	headlineText: string;
	firstButtonText: string;
	secondButtonText: string;
}

const useHeroStyles = (
	sectionRef: React.MutableRefObject<HTMLDivElement | null>
) => {
	const theme = useTheme();
	const { width } = useWindowSize();

	const sectionHeight = useMemo(() => {
		width;
		if (sectionRef.current) {
			return sectionRef.current.clientHeight / 16;
		}
		return 25;
	}, [sectionRef, width]);

	const sectionStyles = useMemo(() => {
		return css`
			height: ${sectionHeight}rem;
			background-color: ${theme.colors.background};
			@media (min-width: ${theme.breakpoints.md}) {
				height: ${sectionHeight}rem;
			}
			@media (min-width: ${theme.breakpoints.lg}) {
				height: ${sectionHeight}rem;
			}
		`;
	}, [theme, sectionHeight]);

	const heroImageStyles = useMemo(() => {
		return css`
			z-index: 0;
		`;
	}, []);

	const backgroundStyles = useMemo(
		() => css`
			position: relative;
			z-index: 0;
			height: 30rem;
			@media (min-width: ${theme.breakpoints.md}) {
				height: 32rem;
			}
			@media (min-width: ${theme.breakpoints.lg}) {
				height: 45rem;
			}
		`,
		[theme]
	);

	const contentStyles = useMemo(
		() => css`
			z-index: 2;
			position: relative;
			padding-top: 20rem;
			@media (min-width: ${theme.breakpoints.md}) {
				padding-top: 22rem;
			}
			@media (min-width: ${theme.breakpoints.lg}) {
				padding-top: 34rem;
			}
		`,
		[theme]
	);

	const headlineStyles = useMemo(
		() =>
			css`
				width: min(99%, 41rem);
				position: relative;
				z-index: 3;
				background-color: white;
				padding: 2.25rem 2.625rem;
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
				border-radius: 0.5rem;
				margin: 0 auto;
				@media (min-width: ${theme.breakpoints.md}) {
					margin-left: 0;
				}
				@media (min-width: ${theme.breakpoints.lg}) {
				}
				h1 {
					font-size: 1.5rem;
					margin-bottom: 1em;
					text-align: center;
					@media (min-width: ${theme.breakpoints.md}) {
						font-size: 2rem;
						text-align: left;
					}
					@media (min-width: ${theme.breakpoints.lg}) {
						font-size: 2.5rem;
					}
				}
			`,
		[theme]
	);

	const buttonStyles = useMemo(
		() => css`
			font-size: 1rem;
			font-weight: bold;
			@media (min-width: ${theme.breakpoints.md}) {
				font-size: 1.125rem;
			}
			@media (min-width: ${theme.breakpoints.lg}) {
				font-size: 1.25rem;
			}
		`,
		[theme]
	);

	const buttonContainerStyles = useMemo(
		() => css`
			display: flex;
			gap: 1rem;
			flex-wrap: wrap;
			justify-content: center;
			@media (min-width: ${theme.breakpoints.md}) {
				justify-content: flex-start;
			}
		`,
		[theme]
	);

	return {
		sectionStyles,
		heroImageStyles,
		backgroundStyles,
		contentStyles,
		headlineStyles,
		buttonStyles,
		buttonContainerStyles,
	};
};

const Hero = ({
	heroImage,
	headlineText,
	firstButtonText,
	secondButtonText,
}: HeroProps) => {
	const sectionRef = useRef(null);

	const {
		sectionStyles,
		heroImageStyles,
		backgroundStyles,
		contentStyles,
		headlineStyles,
		buttonStyles,
		buttonContainerStyles,
	} = useHeroStyles(sectionRef);

	return (
		<section css={sectionStyles}>
			<div css={backgroundStyles}>
				{
					<Image
						src={heroImage.src}
						alt={heroImage.alt}
						css={heroImageStyles}
						objectFit="cover"
						objectPosition="center"
						layout="fill"
						priority
					/>
				}
				<div
					css={contentStyles}
					className="restrictWidth"
					ref={sectionRef}
				>
					<div css={headlineStyles}>
						<h1>{headlineText}</h1>
						<div css={buttonContainerStyles}>
							<Button
								css={buttonStyles}
								endIcon={<ArrowSmRightIcon />}
							>
								{firstButtonText}
							</Button>
							<Button css={buttonStyles} variant="outlined">
								{secondButtonText}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
