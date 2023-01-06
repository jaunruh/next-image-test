
export type Project = {
	type: string
	title: string
	description: string
	subtext?:  string
	projectDate: Date
	backgroundColor: string
	image: ImageData
	content: Content[]
	listing?: ImageListing
}

export type Content = {
	tileHeight: number
	backgroundColor: string
	description: string
	image: ImageData
}

export type ImageListing = {
	imageSizeX: number
	imageSizeY: number
	images: string[]
}

export type ImageData = {
	name: string
	fitting: string
	positionHorizontal: number
	positionVertical: number
	width: number
}