# React Typescript

[![Test Coverage](https://travis-ci.org/jasonraimondi/react-typescript.svg)](https://travis-ci.org/jasonraimondi/react-typescript#)

There is very little documentation on setting up a TypeScript React project that is not using the create-react-app magical nonsense. Here is my response. 

We have a [single component](./src/app/App.tsx) with [a test](./src/app/App.test.tsx) that is using Jest + Enzyme and is covering the component 100%.

Hopefully this is an easy to understand, starter/example for people looking to bootstrap their own apps. 

### Install Dependencies

```bash
npm install
```

### Run Tests

```bash
npm run test
```

Coverage Output Preview:

![Project Coverage](https://i.imgur.com/9ssxemw.png)

### Building

```bash
npm run dev
npm run prod
```

### Styles via PostCSS Loader + CSSNext

This includes loaders for PostCSS with CSSNext.

### Images via File Loader

This includes support for loading in gif, png, jpg, or svg files.
