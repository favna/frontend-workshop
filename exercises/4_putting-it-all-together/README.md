# Exercise 4

In this exercise we will create a basic webshop application. This consists of:

-   A navigation bar to go back to the home page for when you're on the details page of a product (**provided**)
-   A homepage where you can see an overview of the available products
-   A detailed page for every product
-   A TypeScript backend from where the product information can be fetched (**provided**)

This exercise should use Material-UI components. Specifically, the following components should be used:

1. Grid (https://mui.com/material-ui/react-grid/)
2. Card (https://mui.com/material-ui/react-card/)
3. CardActionArea (https://mui.com/material-ui/react-card/)
4. CardMedia (https://mui.com/material-ui/react-card/)
5. CardContent (https://mui.com/material-ui/react-card/)
6. CardActions (https://mui.com/material-ui/react-card/)
7. Button (https://mui.com/material-ui/react-button/)
8. Typography (https://mui.com/material-ui/react-typography/)
9. Box (https://mui.com/material-ui/react-box/)

## Requirements

To finish this exercise you should follow these steps:

1. Start by writing the home page. In `src/app/page.jsx` you will find your starting point. You'll have to loop over the
   items to render each item. The data fetching is already provided here.
2. Next, you will have to write the `Item` component. The starting point for this can be found at
   `src/components/Item/Item.jsx`. You should now be able to render the home page and view all available items
3. Add a page for the item detail pages. See this part of the NextJS documentation for what you want to achieve:
   https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments. You can also look at
   `src/components/Item/Item.jsx` for a hint on what the route should be.
4. Write the code for this page. You will need to
    1. Fetch the data for the item
    2. Render the item details. You **cannot** use the same `Item` component here, because it won't show the item
       description. You will have to write a new component for this.

## Hints

1. Ideally you will do this exercise by running the application locally. However, if you face issues doing this you can
   follow this URL to do it online: https://codesandbox.io/p/sandbox/4-putting-it-all-together-smvq86

    > Note that Codesandbox will throw an error in the console that says:
    > `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './server.edge' is not defined by "exports" in /workspace/node_modules/react-dom/package.json`.
    > You can safely ignore this error, it does not affect this assignment and is a problem exclusive to Codesandbox.

2. You can run the application as a dev server, use the following command to do so:

    ```bash
    npm run ex4
    ```

3. You do not need to deal with anything backend related, that is all provided for you. If you're curious, you can find
   the backend code in the 2 `api` folders. The `api` folder in `src/` has the data, and the `api` folder in `src/app/`
   has the code through which the data can be fetched.
