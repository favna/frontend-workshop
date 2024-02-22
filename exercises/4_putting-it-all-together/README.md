# Exercise 4

In this exercise we will create a basic webshop application. This consists of:

-   A navigation bar to go back to the home page for when you're on the details page of a product (**provided**)
-   A homepage where you can see an overview of the available products
-   A detailed page for every product

Note that item data is completely randomly generated, titles and descriptions will NOT match with the images.

## Requirements

To finish this exercise you should follow these steps:

1. Start by writing the home page. In `src/routes/home.jsx` you will find your starting point. You'll have to loop over
   the items to render each item. The data and routing to item detail pages is provided. You can also check
   `src/routes/home.css` for some nice looking CSS that you can use.
2. Next, you will have to write the `item` page. The starting point for this can be found at `src/routes/item.jsx`. Once
   again styles are provided in `src/routes/item.css` that you can use.
3. Make sure the router knows about navigating to the item page. Hint: Look at `src/main.jsx`.

## Hints

1. You can start this application by navigating to the this folder in your terminal then running the command:

    ```bash
    npm install && npm run dev
    ```

However, if you face issues doing this you can follow this URL to do it online:
<https://stackblitz.com/github/favna/frontend-workshop/tree/main/exercises/4_putting-it-all-together>

## Advanced assignment

If you're already done with the assignment and there is still time left here is a more advanced setup for this exercise.

As you will have noticed the web application the data comes from the `src/data/items.js` file. This is a simple Map of
all the data. In a normal application this data would come from an API. In this advanced assignment you will create a
simple API to serve the data.

-   Start by creating the API that can provide the data. You can do this with Java, C#, whichever you are focussing on
    during the graduate class.
-   Change the requesting of the data in `src/routes/home.jsx` and `src/routes/item.jsx` to use the API instead of the
    local data.
-   You can fetch the data from your API with the `fetch` function, for which you can read more here:
    <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch>
-   You need to use a combination of `useEffect` and `useState` to get the data in React. For example:

```jsx
import { useEffect, useState } from 'react';

function Home() {
	// Define a state for the items
	const [items, setItems] = useState([]);

	// Fetch the items from the API when the page is loaded
	useEffect(async () => {
		const response = await fetch('http://localhost:8080/items');
		const data = await response.json();
		setItems(data);
	}, []);
}
```
