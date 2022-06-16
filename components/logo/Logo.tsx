/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from "@emotion/react";
import Link from "next/link";
import { useMemo } from "react";
import LogoSVG from "./LogoSVG";

interface LogoProps {
	textColor?: keyof Theme["colors"];
	pawColor?: keyof Theme["colors"];
	geminiColor?: keyof Theme["colors"];
}

const useLogoStyles = (color: keyof Theme["colors"]) => {
	const theme = useTheme();
	const logoStyles = useMemo(() => {
		return css`
			cursor: pointer;
			display: flex;
			gap: 1.5rem;
			align-items: center;
			font-size: 1.625rem;
			font-weight: 600;
			color: ${theme.colors[color]};
			height: 100%;
			& span {
				display: none;
				@media (min-width: ${theme.breakpoints.md}) {
					display: inline;
				}
			}
			transition: all 0.2s;
			&:hover {
				filter: brightness(0.9);
			}
		`;
	}, [theme, color]);
	return { logoStyles };
};

const Logo: React.FC<LogoProps> = ({
	textColor = "secondary",
	pawColor = "secondary",
	geminiColor = "white",
}) => {
	const theme = useTheme();
	const { logoStyles } = useLogoStyles(textColor);

	return (
		<Link href="/">
			<a css={logoStyles}>
				<LogoSVG bgColor={pawColor} fgColor={geminiColor} />
				<div>
					Gemini
					<span> Pet Rescue and Transport</span>
				</div>
			</a>
		</Link>
	);
};

export default Logo;
