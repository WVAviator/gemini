/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import React, { useMemo } from "react";
import Watermark from "./Watermark";

interface GridSectionProps {
	children: React.ReactNode;
	maxInternalWidth?: string;
}

const useGridSectionStyles = (maxInternalWidth: string) => {
	const theme = useTheme();

	const gridSectionStyles = useMemo(() => {
		return css`
			display: flex;

			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 1rem;
			gap: 1rem;
			position: relative;
			@media (min-width: ${theme.breakpoints.md}) {
				padding: 2rem;
			}
			@media (min-width: ${theme.breakpoints.lg}) {
				padding: 4rem;
				width: 100%;
			}
		`;
	}, [theme]);

	const innerStyles = useMemo(() => {
		return css`
			max-width: ${maxInternalWidth};
		`;
	}, [maxInternalWidth]);

	const sectionStyles = useMemo(() => {
		return css`
			isolation: isolate;
			overflow: hidden;
			background-color: ${theme.colors.background};
		`;
	}, [theme]);

	return { sectionStyles, gridSectionStyles, innerStyles };
};

const GridSection: React.FC<GridSectionProps> = ({
	children,
	maxInternalWidth = "65rem",
}) => {
	const { sectionStyles, gridSectionStyles, innerStyles } =
		useGridSectionStyles(maxInternalWidth);

	return (
		<section css={sectionStyles}>
			<Watermark />
			<div css={gridSectionStyles} className="restrictWidth">
				{React.Children.map(children, (child) => {
					return (
						<div css={innerStyles} className="restrictWidth">
							{child}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default GridSection;
