export interface SanityImageAsset {
	_key?: string;
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
	alt?: string;
}

export interface SanityItem {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

export interface Page extends SanityItem {
	title: string;
	pageUrl: { current: string };
	description: string;
	body: any;
}

export interface ShelterluvAnimal {
	Name: string;
	ID: number;
	"Internal-ID": number;
	LitterGroupId: number | null;
	Type: string;
	CurrentLocation: string | null;
	Sex: "Male" | "Female" | "Unknown";
	Status: string;
	InFoster: boolean;
	AssociatedPerson: {
		FirstName: string;
		LastName: string;
		OutDateUnixTime: Date;
		RelationshipType: string;
	};
	CurrentWeightPounds: number;
	Size: string;
	Altered: string;
	DOBUnixTime: Date;
	Age: number;
	CoverPhoto: string;
	Photos: string[];
	Videos: {
		VideoId: string;
		EmbedUrl: string;
		YoutubeUrl: string;
		ThumbUrl: string;
	}[];
	Breed: string;
	Color: string;
	Pattern: string;
	AdoptionFeeGroup: {
		Id: string;
		Name: string;
		Price: number;
		Discount: number;
		Tax: number;
	};
	Description: string;
	PreviousIds: {
		IdValue: string;
		IssuingShelter: string;
		Type: string;
	}[];
	LastIntakeUnixTime: Date;
	LastUpdatedUnixTime: Date;
	Attributes: {
		"Internal-ID": string;
		AttributeName: string;
		Publish: string;
	}[];
}
