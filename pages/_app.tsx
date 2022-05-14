import type { AppProps } from "next/app";
import PageLayout from "../components/layout/PageLayout";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</ThemeProvider>
	);
}

export default MyApp;
