# Exercise 3

In this exercise we will write an about page in a React application.

The challenge here is to find your way around the React code and write something about yourself that looks nice and is
interesting to read. To make things easier we have added Material-UI as UI library to this project so you don't have to
deal much with the styling and can leverage Material-UI components instead.

You can reference the documentation of Material-UI here: <https://mui.com/material-ui/>

## Requirements

The application should have the following requirements:

-   The about me should tell us something about yourself
-   Try to use some Material-UI components

## Advanced assignment

If you're already done with the assignment and we have not yet continued the workshop to the next topic here is an
advanced assignment that you can pick up.

As you will have noticed the web application has a "home" page and an "about" page. For the advanced assignment we want
you to add another page, called "review". On this page you will write a short review about your experience with the
graduate class so far and what you hope to learn in the coming weeks.

-   Start by adding a link to the review page to the right of the button for the about page.
-   Add the review page and make sure you can navigate to it
-   Write a review about your experience with the graduate class so far and what you hope to learn in the coming weeks

## Hints

1. Ideally you will do this exercise by running the application locally. However, if you face issues doing this you can
   follow this URL to do it online: https://codesandbox.io/p/sandbox/3-adding-an-about-me-page-693djz

    > Note that Codesandbox will throw an error in the console that says:
    > `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './server.edge' is not defined by "exports" in /workspace/node_modules/react-dom/package.json`.
    > You can safely ignore this error, it does not affect this assignment and is a problem exclusive to Codesandbox.

1. You must run the application as a dev server, use the following command to do so:

    ```bash
    npm run ex3
    ```

1. If you wish to add a link to your about, for example to your personal website or LinkedIn then you can import the
   `Link` component like so:

    ```js
    import Link from '@/components/Link';
    ```

    and then use it like so:

    ```jsx
    <Link href="https://cgi.com">CGI</Link>
    ```
