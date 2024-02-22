import { faker } from '@faker-js/faker';

const itemData = new Map([
	[
		1,
		{
			id: 1,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: faker.image.urlPicsumPhotos({ height: 400 }),
			description: faker.commerce.productDescription()
		}
	],
	[
		2,
		{
			id: 2,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: faker.image.urlPicsumPhotos({ height: 400 }),
			description: faker.commerce.productDescription()
		}
	],
	[
		3,
		{
			id: 3,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: faker.image.urlPicsumPhotos({ height: 400 }),
			description: faker.commerce.productDescription()
		}
	],
	[
		4,
		{
			id: 4,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: faker.image.urlPicsumPhotos({ height: 400 }),
			description: faker.commerce.productDescription()
		}
	],
	[
		5,
		{
			id: 5,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: faker.image.urlPicsumPhotos({ height: 400 }),
			description: faker.commerce.productDescription()
		}
	],
	[
		6,
		{
			id: 6,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: faker.image.urlPicsumPhotos({ height: 400 }),
			description: faker.commerce.productDescription()
		}
	],
	[
		7,
		{
			id: 7,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: faker.image.urlPicsumPhotos({ height: 400 }),
			description: faker.commerce.productDescription()
		}
	],
	[
		8,
		{
			id: 8,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: faker.image.urlPicsumPhotos({ height: 400 }),
			description: faker.commerce.productDescription()
		}
	],
	[
		9,
		{
			id: 9,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: faker.image.urlPicsumPhotos({ height: 400 }),
			description: faker.commerce.productDescription()
		}
	],
	[
		10,
		{
			id: 10,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: faker.image.urlPicsumPhotos({ height: 400 }),
			description: faker.commerce.productDescription()
		}
	],
	[
		11,
		{
			id: 11,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: faker.image.urlPicsumPhotos({ height: 400 }),
			description: faker.commerce.productDescription()
		}
	],
	[
		12,
		{
			id: 12,
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: faker.image.urlPicsumPhotos({ height: 400 }),
			description: faker.commerce.productDescription()
		}
	]
]);

Object.freeze(itemData);

export { itemData };
