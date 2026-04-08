# Welcome to the Marvel & Snap Shopify Skill Test

Thank you for taking the time to participate in this skill test. We are excited to see your abilities in action and to get a glimpse of your expertise in Shopify development. **Your task is to transform the provided Figma design into functional, responsive, and standards-compliant Shopify collection and product templates.**

## About The Theme

Your skill test will incorporate a bare bones Shopify theme, and includes `gulp` tasks for compiling styles and scripts for development and production.

The test theme will contain the following packages:

- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/): the entire catalog of Bootstrap components and JavaScript functionality is at your disposal out of the box.
- [accessible-slick](https://github.com/Accessible360/accessible-slick): a drop-in replacement for [slick](https://github.com/kenwheeler/slick). Please refer to this plugin's documentation for how to initialize carousels via `[data-slick]` attributes, which our test theme is already configured to do.

## About The Design

- Refer to this [Figma](https://www.figma.com/design/D0SMup9URKQcZH6s3TUb6x/M%26S---Developer-Skill-Test) for the complete design.
- You will need to create a Figma account (if you do not already have one) to inspect the design. <strong>If you are prompted for a password, it is `marvelandsnap`.</strong>
- We have already included the [Montserrat](https://fonts.google.com/specimen/Montserrat) font in our starter theme (via the Google Fonts API) and assigned it to Bootstrap's `$font-family-sans-serif` SCSS variable.

## About The Shop

Our [Marvel & Snap Shopify Skill Test](https://ms-skill-test.myshopify.com/) shop is preconfigured with all of the products and metafields you will need to complete the design.

<strong>Do not make any changes to this data during your skill test!</strong> Please see the [Getting started](#getting-started) section below for further details.

## What We're Looking For

- Create functional, responsive, and standards-compliant Shopify collection and product templates from the provided design.
- Demonstrate your overall knowledge of:
  - Shopify theming and local development using using [Shopify CLI](https://shopify.dev/docs/api/shopify-cli);
  - Writing valid, semantic, and accessible HTML;
  - Writing custom JavaScript using ES6 (`const`, `let`, `=>`, etc.) to accurately reproduce the provided design including interactivity;
  - Writing modern SCSS (e.g. using Flexbox, `clamp`, etc.), following [BEM](https://getbem.com/) naming conventions, using variables and at least one function/mixin, and using responsive design techniques;
  - DRY principles and git best practices (e.g. ensure your git commits are logical and accompanied by clear, concise messages).
- Use the provided folder and file structure and `gulp` tasks.
- Implement a pixel-perfect design.
- Do not spend more than <strong>eight (8)</strong> hours on the test. Don’t worry if you can’t complete it - our goal is to see what you *can* achieve within a limited timeframe.
- **Complete the main sections of the design first (PLP and PDP sections)** - these are required for the evaluation of your skill test. Only complete the header and footer of the design if you have time remaining.

## Getting started

1. Accept our invitations to the `shopify-skill-test` repository and the `ms-skill-test` store.
2. Clone the `BRANCHNAME` branch of the repository: `git clone -b BRANCHNAME https://github.com/marvelandsnap/shopify-skill-test.git`
3. Prepare for local development by running `gulp` and `shopify theme dev --store=ms-skill-test`. <strong>If you are prompted for a password, it is `datwat`.</strong>
4. Read the remaining requirements <em>in full</em> before you begin development.
5. Commit and push your work to the `BRANCHNAME` branch.

### Using `gulp`

- `npm install` (please refer to `package.json` for the required `node` and `npm` versions)
- `gulp` to build and watch during development.
- `gulp --prod` to build for production.

## Template requirements

### Header

- Using `sections/navbar.liquid` (which is already included in this template), build the provided design for the navbar. The navbar must include a cart icon that displays the total number of products in the cart (if applicable).

### Collection

- Using `sections/collection.liquid` (which is already included in this template), build the provided design for collection section (collections/all). Each product card must consist of the following product attributes:
  - "Sale" badge (if applicable);
  - Image;
  - Title;
  - Price;
  - Description;
  - Link.
- The products do not need to appear in the same order as they do in the design.

### Product

- Using `sections/product.liquid` (which is already included in this template), build the provided design for the product section.
- The product gallery (left-hand column) must incorporate a carousel using [accessible-slick](https://github.com/Accessible360/accessible-slick).
- The product content (right-hand column) must include the following product attributes:
  - Title;
  - Price, which is updated via JavaScript when switching between variants;
  - Description.
- The product add-to-cart form (right-hand column) must allow the user to:
  - Choose a product variant with `select`;
  - Enter a quantity of the selected variant with `input[type="number"]`;
  - Add the product variant and quantity to their cart.
- The product detail accordions (right-hand-column) must render the following accordion titles and `richtext` metafields:
  - Product Details (`product.metafields.accordion.product_details`);
  - Ingredients (`product.metafields.accordion.ingredients`);
  - How It's Made (`product.metafields.accordion.how_its_made`);
  - Where It's Made (`product.metafields.accordion.where_its_made`);
  - How To Use (`product.metafields.accordion.how_to_use`).

### Footer

- Using `sections/footer.liquid` (which is already included in this template), build the provided design for the footer.

## Dos and don’ts

### Please do

- **Do** explore our `src` folder and file structure for SCSS and JavaScript assets, and follow the conventions contained within.
- **Do** use `gulp --prod` to build for production prior to your final submission.
- **Do** ask questions! If the requirements of the test are unclear or you have any issues completing or submitting it, please email Katie ( [klee@marvelandsnap.com](mailto:klee@marvelandsnap.com)).

### Please don’t

- **Don’t** make any changes to our store's data during your skill test.
- **Don’t** install or use any additional packages, libraries, apps, plugins, etc. that aren’t already included with our starter theme and store.
- **Don’t** pull from or push to any branches of the `shopify-skill-test` repository *except* for the `BRANCHNAME` branch we have created for you.

## Creators

[![](https://secure.gravatar.com/avatar/7386273d774b0a2be2c6c107e52b5fdf?size=100 "Marvel & Snap")](https://www.marvelandsnap.com)

[Marvel & Snap](https://www.marvelandsnap.com) provides integrated, enterprise-grade web operations services that enable marketers to create, deliver, and manage more agile and effective digital experiences.