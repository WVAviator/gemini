import { css, Global } from "@emotion/react";
import Header from "../header/Header";
//import Footer from "../footer/Footer";
import PageMeta from "../meta/PageMeta";

const globalStyles = css`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI",
			sans-serif;
	}
	.restrictWidth {
		width: min(95%, 90rem);
		margin: 0 auto;
	}
`;

interface PageLayoutProps {
	children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<>
			<Global styles={globalStyles} />
			<PageMeta />
			<Header />
			<main id="main">{children}</main>
			{/* <Footer /> */}
		</>
	);
};

export default PageLayout;
