import "@emotion/react";

declare module "@emotion/react" {
	export interface Theme {
		colors: {
			primary: string;
			secondary: string;
			background: string;
			white: string;
		};
		breakpoints: {
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
	}
}
