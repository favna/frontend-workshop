import { faker } from '@faker-js/faker';

export const itemData = [
	{
		id: 1,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400, width: 500, blur: 0, grayscale: false }),
		description: faker.commerce.productDescription()
	},

	{
		id: 2,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400, width: 500, blur: 0, grayscale: false }),
		description: faker.commerce.productDescription()
	},

	{
		id: 3,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400, width: 500, blur: 0, grayscale: false }),
		description: faker.commerce.productDescription()
	},

	{
		id: 4,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400, width: 500, blur: 0, grayscale: false }),
		description: faker.commerce.productDescription()
	},

	{
		id: 5,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400, width: 500, blur: 0, grayscale: false }),
		description: faker.commerce.productDescription()
	},

	{
		id: 6,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400, width: 500, blur: 0, grayscale: false }),
		description: faker.commerce.productDescription()
	},

	{
		id: 7,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400, width: 500, blur: 0, grayscale: false }),
		description: faker.commerce.productDescription()
	},

	{
		id: 8,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400, width: 500, blur: 0, grayscale: false }),
		description: faker.commerce.productDescription()
	},

	{
		id: 9,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400, width: 500, blur: 0, grayscale: false }),
		description: faker.commerce.productDescription()
	},

	{
		id: 10,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400, width: 500, blur: 0, grayscale: false }),
		description: faker.commerce.productDescription()
	},

	{
		id: 11,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400, width: 500, blur: 0, grayscale: false }),
		description: faker.commerce.productDescription()
	},

	{
		id: 12,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400, width: 500, blur: 0, grayscale: false }),
		description: faker.commerce.productDescription()
	}
];

Object.freeze(itemData);
