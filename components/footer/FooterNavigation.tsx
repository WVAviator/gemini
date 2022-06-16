/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import React, { useMemo } from "react";

interface FooterNavigationProps {
	navLinks?:
		| {
				href: string;
				text: string;
		  }[]
		| null;
}

const useFooterNavigationStyles = () => {
	const theme = useTheme();
	const navStyles = useMemo(() => {
		return css`
			& ul {
				list-style: none;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				@media (min-width: ${theme.breakpoints.lg}) {
					align-items: flex-start;
				}

				& a {
					text-decoration: none;
					font-size: 1.1rem;
					color: ${theme.colors.white};
				}
			}
		`;
	}, [theme]);
	return { navStyles };
};

const defaultNavLinks = [
	{
		href: "/",
		text: "Home",
	},
	{
		href: "/privacy",
		text: "Privacy Policy",
	},
	{
		href: "/terms",
		text: "Terms of Use",
	},
];

const FooterNavigation: React.FC<FooterNavigationProps> = ({
	navLinks = defaultNavLinks,
}) => {
	const { navStyles } = useFooterNavigationStyles();
	return (
		<nav css={navStyles}>
			<ul>
				{(navLinks || defaultNavLinks).map(({ href, text }) => (
					<li key={href}>
						<Link href={href}>
							<a>{text}</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default FooterNavigation;
