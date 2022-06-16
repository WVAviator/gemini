/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useMemo } from "react";
import Logo from "../logo/Logo";
import FooterNavigation from "./FooterNavigation";

interface FooterProps {
	navLinks?:
		| {
				href: string;
				text: string;
		  }[]
		| null;
}

const useFooterStyles = () => {
	const theme = useTheme();
	const footerInnerStyles = useMemo(() => {
		return css`
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 2rem;
			gap: 2rem;
			@media (min-width: ${theme.breakpoints.lg}) {
				flex-direction: row;
				justify-content: space-between;
				padding-inline: 4rem;
			}

			& > :first-child {
				order: 2;
				@media (min-width: ${theme.breakpoints.lg}) {
					order: 0;
				}
			}
		`;
	}, [theme]);

	const footerOuterStyles = useMemo(() => {
		return css`
			background-color: ${theme.colors.secondary};
		`;
	}, [theme]);

	return { footerInnerStyles, footerOuterStyles };
};

const Footer: React.FC<FooterProps> = ({ navLinks = null }) => {
	const { footerInnerStyles, footerOuterStyles } = useFooterStyles();

	return (
		<section css={footerOuterStyles}>
			<div css={footerInnerStyles} className="restrictWidth">
				<Logo
					textColor="white"
					pawColor="white"
					geminiColor="secondary"
				/>
				<FooterNavigation navLinks={navLinks} />
			</div>
		</section>
	);
};
export default Footer;
