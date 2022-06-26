/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMemo } from "react";

interface CardsLayoutProps {
	children: React.ReactNode;
}

const useCardsLayoutStyles = () => {
	const layoutStyles = useMemo(() => {
		return css`
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			gap: 1rem;
			width: 100%;
		`;
	}, []);

	return { layoutStyles };
};

const CardsLayout: React.FC<CardsLayoutProps> = ({ children }) => {
	const { layoutStyles } = useCardsLayoutStyles();

	return <section css={layoutStyles}>{children}</section>;
};
export default CardsLayout;
