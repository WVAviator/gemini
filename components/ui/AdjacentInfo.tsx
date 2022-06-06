/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import React, { useMemo } from "react";

interface AdjacentInfoProps {
	children: React.ReactNode;
}

const useAdjacentInfoStyles = () => {
	const theme = useTheme();

	const adjacentInfoStyles = useMemo(() => {
		return css`
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			padding: 1rem 0rem;

			@media (min-width: ${theme.breakpoints.md}) {
				display: grid;
				grid-template-columns: 1fr 1fr;
			}
			@media (min-width: ${theme.breakpoints.lg}) {
				justify-content: space-between;
			}
		`;
	}, [theme]);

	return { adjacentInfoStyles };
};

const AdjacentInfo: React.FC<AdjacentInfoProps> = ({ children }) => {
	const { adjacentInfoStyles } = useAdjacentInfoStyles();

	return (
		<div css={adjacentInfoStyles}>
			{React.Children.map(children, (child) => {
				return <div>{child}</div>;
			})}
		</div>
	);
};

export default AdjacentInfo;
