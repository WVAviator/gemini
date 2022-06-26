/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useMemo } from "react";

const useWatermarkStyles = () => {
	const theme = useTheme();

	const containerStyles = useMemo(() => {
		return css`
			position: relative;
		`;
	}, []);

	const watermarkStyles = useMemo(() => {
		return css`
			position: absolute;
			top: 0;
			right: 0;
			width: max(125vw, 100rem);
			height: max(125vw, 100rem);
			z-index: 0;
			pointer-events: none;
			@media (min-width: ${theme.breakpoints.md}) {
				width: max(100vw, 80rem);
				height: max(100vw, 80rem);
			}
			@media (min-width: ${theme.breakpoints.lg}) {
				width: max(70vw, 50rem);
				height: max(70vw, 50rem);
			}
		`;
	}, [theme]);

	return { containerStyles, watermarkStyles };
};

const Watermark = () => {
	const { containerStyles, watermarkStyles } = useWatermarkStyles();

	return (
		<div css={containerStyles} className="restrictWidth">
			<svg
				css={watermarkStyles}
				width="1145"
				height="1364"
				viewBox="0 0 1145 1364"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1023 301.217C1099.73 282.462 1174.18 258.023 1246.92 227.333L1203.73 121.623C1038.62 191.13 861.319 227.077 682.172 227.37C503.024 227.662 325.61 192.295 160.27 123.328L117.077 227.333C189.823 258.023 264.275 282.462 341 301.217V1062.78C264.275 1081.54 189.823 1105.98 117.077 1136.67L160.27 1242.38C325.642 1173.71 502.941 1138.37 682 1138.37C861.06 1138.37 1038.36 1173.71 1203.73 1242.38L1246.92 1136.67C1174.18 1105.98 1099.73 1081.54 1023 1062.78V301.217ZM454.667 1040.05V323.382C529.687 334.748 605.843 341 682 341C758.157 341 834.313 334.748 909.333 323.382V1040.62C758.674 1017.32 605.327 1017.32 454.667 1040.62V1040.05Z"
					fill="white"
				/>
			</svg>
		</div>
	);
};

export default Watermark;
