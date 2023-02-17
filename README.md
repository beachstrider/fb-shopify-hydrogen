# FEASTBOX Headless 

![image](https://user-images.githubusercontent.com/48445639/219711298-467e1b9a-8b00-4ea2-9862-e1adf9ccfc93.png)

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher
- Yarn

To create a new Hydrogen app, run:

```bash
npm init @shopify/hydrogen
```

## Running the dev server

Then `cd` into the new directory and run:

```bash
npm install
npm run dev
```

Remember to update `hydrogen.config.js` with your shop's domain and Storefront API token!

## Building for production

```bash
npm run build
```

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `npm run preview`:

```bash
npm run build
npm run preview
```
