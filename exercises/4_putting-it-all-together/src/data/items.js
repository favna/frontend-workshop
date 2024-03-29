import { faker } from '@faker-js/faker';

export const itemData = [
	{
		id: 1,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400 }),
		description: faker.commerce.productDescription()
	},

	{
		id: 2,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400 }),
		description: faker.commerce.productDescription()
	},

	{
		id: 3,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400 }),
		description: faker.commerce.productDescription()
	},

	{
		id: 4,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400 }),
		description: faker.commerce.productDescription()
	},

	{
		id: 5,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400 }),
		description: faker.commerce.productDescription()
	},

	{
		id: 6,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400 }),
		description: faker.commerce.productDescription()
	},

	{
		id: 7,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400 }),
		description: faker.commerce.productDescription()
	},

	{
		id: 8,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400 }),
		description: faker.commerce.productDescription()
	},

	{
		id: 9,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400 }),
		description: faker.commerce.productDescription()
	},

	10,
	{
		id: 10,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400 }),
		description: faker.commerce.productDescription()
	},

	11,
	{
		id: 11,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400 }),
		description: faker.commerce.productDescription()
	},

	12,
	{
		id: 12,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos({ height: 400 }),
		description: faker.commerce.productDescription()
	}
];

Object.freeze(itemData);
