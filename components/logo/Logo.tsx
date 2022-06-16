/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from "@emotion/react";
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
		<div css={logoStyles}>
			<LogoSVG bgColor={pawColor} fgColor={geminiColor} />
			<div>
				Gemini
				<span> Pet Rescue and Transport</span>
			</div>
		</div>
	);
};

export default Logo;
