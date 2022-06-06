/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import React, { useMemo } from "react";

interface QuickInfoProps {
	children: React.ReactNode;
}

const useQuickInfoStyles = () => {
	const theme = useTheme();

	const quickInfoStyles = useMemo(() => {
		return css`
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1.5em;
			text-align: center;
			font-size: 1.25rem;
			@media (min-width: ${theme.breakpoints.md}) {
				text-align: left;
				align-items: flex-start;
				justify-content: space-between;
				& p {
					max-width: 30rem;
				}
			}
			@media (min-width: ${theme.breakpoints.lg}) {
			}
		`;
	}, [theme]);

	return { quickInfoStyles };
};

const QuickInfo: React.FC<QuickInfoProps> = ({ children }) => {
	const { quickInfoStyles } = useQuickInfoStyles();

	return (
		<section>
			<div css={quickInfoStyles}>
				{React.Children.map(children, (child) => {
					return <div>{child}</div>;
				})}
			</div>
		</section>
	);
};

export default QuickInfo;
