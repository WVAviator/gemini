/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from "@emotion/react";
import { useMemo } from "react";
import LogoSVG from "./LogoSVG";

const createLogoStyle = (theme: Theme) => css`
	display: flex;
	gap: 1.5rem;
	align-items: center;
	font-size: 1.625rem;
	font-weight: 600;
	color: ${theme.colors.secondary};
	height: 100%;
`;

const createLogoTextMediaQuery = (theme: Theme) => css`
	display: none;
	@media (min-width: ${theme.breakpoints.md}) {
		display: inline;
	}
`;

const Logo = () => {
	const theme = useTheme();
	const logoStyle = useMemo(() => createLogoStyle(theme), [theme]);
	const logoTextMediaQuery = useMemo(
		() => createLogoTextMediaQuery(theme),
		[theme]
	);

	return (
		<div css={logoStyle}>
			<LogoSVG />
			<div>
				Gemini
				<span css={logoTextMediaQuery}> Pet Rescue and Transport</span>
			</div>
		</div>
	);
};

export default Logo;
