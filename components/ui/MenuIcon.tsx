/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useMemo, useState } from "react";
import { useEventDispatch } from "react-synthetic-events";

export interface MenuEventPayload {
	open: boolean;
}

const useMenuIconStyles = (open: boolean) => {
	const theme = useTheme();

	const easingFunction = "cubic-bezier(0.63, 0.18, 0.61, 1.43)";

	const commonStyles = useMemo(() => {
		return css`
			width: 30px;
			height: 5px;
			background-color: ${theme.colors.secondary};
			border-radius: 0.125rem;
		`;
	}, [theme]);

	const topStyles = useMemo(() => {
		return css`
			position: absolute;
			${open
				? `
                top: 0;
                transform: rotate(45deg);
                transition: transform 150ms 150ms ${easingFunction}, top 150ms 0ms ${easingFunction};
            `
				: `
                transition: transform 150ms 0ms ${easingFunction}, top 150ms 150ms ${easingFunction};
                top: 10px;
                transform: rotate(0deg)
                
                `};
		`;
	}, [open]);

	const bottomStyles = useMemo(() => {
		return css`
			position: absolute;
			${open
				? `
                top: 0;
                transform: rotate(-45deg);
                transition: transform 150ms 150ms ${easingFunction}, top 150ms 0ms ${easingFunction};
                `
				: `
                transition: transform 150ms 0ms ${easingFunction}, top 150ms 150ms ${easingFunction};
                top: -10px;
                transform: rotate(0deg)
                `}
		`;
	}, [open]);

	const midStyles = useMemo(() => {
		return css`
			transition: opacity 0ms 150ms;
			${open ? "opacity: 0;" : "opacity: 1;"}
		`;
	}, [open]);

	const buttonStyles = useMemo(() => {
		return css`
			@media (min-width: ${theme.breakpoints.lg}) {
				display: none;
			}
			height: 30px;
			width: 30px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border: none;
			background-color: transparent;
		`;
	}, [theme]);

	return {
		topStyles: [commonStyles, topStyles],
		bottomStyles: [commonStyles, bottomStyles],
		midStyles: [commonStyles, midStyles],
		buttonStyles,
	};
};

const MenuIcon = () => {
	const [open, setOpen] = useState(false);

	const sendOpenEvent =
		useEventDispatch<MenuEventPayload>("mobile-menu-open");

	const handleClick = () => {
		const currentOpen = open;
		setOpen(!currentOpen);
		sendOpenEvent({ open: !currentOpen });
	};

	const { topStyles, bottomStyles, midStyles, buttonStyles } =
		useMenuIconStyles(open);

	return (
		<button
			id="menubutton"
			role="button"
			aria-haspopup="true"
			aria-label="Main Menu"
			aria-expanded={open}
			aria-controls="mobilemenu"
			css={buttonStyles}
			onClick={handleClick}
		>
			<div
				css={css`
					position: relative;
				`}
			>
				<div css={topStyles}></div>
				<div css={midStyles}></div>
				<div css={bottomStyles}></div>
			</div>
		</button>
	);
};
export default MenuIcon;
