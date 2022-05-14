import Head from "next/head";

const defaultMeta: PageMetaProps = {
	title: "Gemini Pet Rescue",
	description:
		"Gemini Pet Rescue is a nonprofit animal rescue organization specializing in pet adoptions and transports.",
	keywords: ["adoption", "transport", "rescue"],
	url: "",
	ogImage: "",
};

interface PageMetaProps {
	title?: string;
	description?: string;
	keywords?: string[];
	url?: string;
	ogImage?: string;
}

const PageMeta = ({
	title = defaultMeta.title,
	description = defaultMeta.description,
	keywords = defaultMeta.keywords,
	url = defaultMeta.url,
	ogImage = defaultMeta.ogImage,
}: PageMetaProps) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords?.join(", ")} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta property="og:type" key="ogType" content="website" />
			<meta
				property="og:title"
				key="ogTitle"
				content="Gemini Pet Rescue"
			/>
			<meta
				property="og:url"
				key="ogUrl"
				content={url} //TODO: add url
			/>
			<meta
				property="og:image"
				key="ogImage"
				content={ogImage} //TODO: add image
			/>
			<meta
				property="og:description"
				key="ogDescription"
				content={description}
			/>
		</Head>
	);
};

export default PageMeta;
