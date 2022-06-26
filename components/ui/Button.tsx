/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import react, { ReactElement, useMemo } from "react";

type ButtonVariant = "filled" | "outlined";

interface ButtonProps {
	href?: string;
	variant?: ButtonVariant;
	children?: React.ReactNode;
	className?: string;
	endIcon?: ReactElement | null;
}

const useButtonStyles = (variant: ButtonVariant) => {
	const theme = useTheme();
	const variantStyles = useMemo(
		() => ({
			filled: css`
				background-color: ${theme.colors.secondary};
				color: #fff;
				border: 1px solid ${theme.colors.secondary};
				&:hover {
					filter: brightness(80%);
					color: #fff;
					border: 1px solid ${theme.colors.secondary};
				}
			`,
			outlined: css`
				background-color: transparent;
				color: ${theme.colors.secondary};
				border: 1px solid ${theme.colors.secondary};
				&:hover {
					background-color: ${theme.colors.secondary};
					color: #fff;
					border: 1px solid ${theme.colors.secondary};
				}
			`,
		}),
		[theme]
	);

	const baseStyles = useMemo(
		() => css`
			transition: all 100ms ease-in-out;
			font-size: 1rem;
			cursor: pointer;
			padding: 0.5rem 1.5rem;
			border-radius: 0.5rem;
			&:active {
				transform: scale(0.95);
			}
			white-space: nowrap;
		`,
		[]
	);

	return [baseStyles, variantStyles[variant]];
};

const Button = ({
	href = "",
	variant = "filled",
	children = "",
	className = "",
	endIcon = null,
}: ButtonProps) => {
	const renderedButton = (
		<button css={useButtonStyles(variant)} className={className}>
			<div
				css={css`
					display: flex;
					align-items: center;
					gap: 1em;
				`}
			>
				<span>{children}</span>

				{endIcon && (
					<span
						css={css`
							width: 1.5rem;
							height: 1.5rem;
						`}
					>
						{react.cloneElement(endIcon)}
					</span>
				)}
			</div>
		</button>
	);

	if (!href) {
		return renderedButton;
	}

	return (
		<Link href={href}>
			<a>{renderedButton}</a>
		</Link>
	);
};
export default Button;
