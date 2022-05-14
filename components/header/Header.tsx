/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from "@emotion/react";
import { useMemo } from "react";
import Logo from "../logo/Logo";

const generateHeaderStyles = (theme: Theme) => css`
	background-color: ${theme.colors.primary};
	width: 100vw;
	min-height: 5rem;
`;

const headerContentStyles = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Header = () => {
	const theme = useTheme();
	const headerStyles = useMemo(() => generateHeaderStyles(theme), [theme]);

	return (
		<header css={headerStyles}>
			<div css={headerContentStyles} className="restrictWidth">
				<Logo />
			</div>
		</header>
	);
};

export default Header;
