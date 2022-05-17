/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from "@emotion/react";
import { useMemo, useState } from "react";
import Logo from "../logo/Logo";
import Button from "../ui/Button";
import MenuIcon from "../ui/MenuIcon";

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
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header css={headerStyles}>
			<div css={headerContentStyles} className="restrictWidth">
				<Logo />
				<Button
					css={css`
						font-size: 1.25rem;
						display: none;
						@media (min-width: ${theme.breakpoints.lg}) {
							display: inline-block;
						}
					`}
				>
					Donate
				</Button>
				<MenuIcon open={menuOpen} setOpen={setMenuOpen} />
			</div>
		</header>
	);
};

export default Header;
