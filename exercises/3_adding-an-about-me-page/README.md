# Exercise 3

In this exercise we will write an about page in a React application.

The challenge here is to find your way around the React code and write something about yourself that looks nice and is
interesting to read. To make things easier we have added Material-UI as UI library to this project so you don't have to
deal much with the styling and can leverage Material-UI components instead.

You can reference the documentation of Material-UI here: <https://mui.com/material-ui/>

## Requirements

The application should have the following requirements:

-   The application should be a web application
-   The about me should tell us something about yourself
-   Try to use some Material-UI components

## Hints

1. You must run the application as a dev server, use the following command to do so:

    ```bash
    npm run ex3
    ```

2. If you wish to add a link to your about, for example to your personal website or LinkedIn then you can import the
   `Link` component like so:

    ```js
    import Link from '@/components/Link';
    ```

    and then use it like so:

    ```jsx
    <Link href="https://cgi.com">CGI</Link>
    ```
