/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from "@emotion/react";
import Link from "next/link";
import { useMemo } from "react";

interface NavigationProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	navLinks?: {
		href: string;
		text: string;
	}[];
}

const defaultNavLinks = [
	{
		href: "/",
		text: "Home",
	},
	{
		href: "/about",
		text: "About",
	},
	{
		href: "/adopt",
		text: "Adopt",
	},
];

const useNavigationStyles = (open: boolean) => {
	const theme = useTheme();

	const easingFunction = "cubic-bezier(0.76, 0.01, 0.27, 1)";

	const navStyles = useMemo(() => {
		return css`
			background-color: ${theme.colors.background};
			position: absolute;
			z-index: 2;
			top: 5rem;
			width: 100%;
			transition: transform 200ms 0ms ${easingFunction};
			transform: ${open ? "translateY(0)" : "translateY(-100%)"};
			@media (min-width: ${theme.breakpoints.lg}) {
				transform: translateY(0);
				position: relative;
				top: 0;
			}
			box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
			padding-inline: 6.5rem;
		`;
	}, [open, theme]);

	const ulStyles = useMemo(() => {
		return css`
			list-style: none;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			@media (min-width: ${theme.breakpoints.lg}) {
				flex-direction: row;
				justify-content: flex-start;
				gap: 2rem;
				width: min(95%, 90rem);
				margin: 0 auto;
			}
		`;
	}, [theme]);

	const liStyles = useMemo(() => {
		return css`
			text-align: center;
			height: 2.5rem;
			width: 100%;
			@media (min-width: ${theme.breakpoints.lg}) {
				width: auto;
			}
		`;
	}, [theme]);

	const aStyles = useMemo(() => {
		return css`
			display: block;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			cursor: pointer;
			color: ${theme.colors.secondary};
			text-decoration: none;
			transition: color 150ms 0ms ease-in-out;
			&:hover {
				color: ${theme.colors.primary};
			}
		`;
	}, [theme]);

	return {
		navStyles,
		ulStyles,
		liStyles,
		aStyles,
	};
};

const Navigation = ({
	open,
	setOpen,
	navLinks = defaultNavLinks,
}: NavigationProps) => {
	const { navStyles, ulStyles, liStyles, aStyles } =
		useNavigationStyles(open);

	const handleClick = () => {
		setOpen(false);
	};

	return (
		<nav css={navStyles}>
			<ul css={ulStyles}>
				{navLinks.map(({ href, text }) => (
					<li css={liStyles} key={href}>
						<Link href={href}>
							<a css={aStyles} onClick={handleClick}>
								{text}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
