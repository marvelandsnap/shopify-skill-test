# Welcome to the Marvel & Snap Shopify Skill Test!

Thank you for taking the time to participate in this skill test. We are excited to see your abilities in action and to get a glimpse of your expertise in Shopify development. **Your task is to transform the provided Figma design into functional, responsive, and standards-compliant Shopify collection and product templates.**

## About the starter theme

Your skill test will incorporate a “bare” version of our custom Shopify starter theme, which includes our preferred folder and file structure, packages, and `gulp` tasks for compiling styles and scripts for development and production.

Our Shopify themes are typically built using packages such as:

- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/), which we compile from source, customizing its variables and writing custom SCSS to achieve the intended design. <strong>The entire catalog of Bootstrap components and JavaScript functionality is at your disposal out of the box.</strong> Please use as many of these features as possible (e.g. accordions) before writing custom SCSS or JavaScript.
- [accessible-slick](https://github.com/Accessible360/accessible-slick), which is our preferred carousel plugin of choice for its accessibility features. It is a drop-in replacement for [slick](https://github.com/kenwheeler/slick). Please refer to that plugin's documentation for how to initialize carousels via `[data-slick]` attributes, which our starter theme is already configured to do.
- `gulp`, which we use for linting, compiling and minifying SCSS and JavaScript assets.

### To use our `gulp` tasks:

- `npm install` (please refer to `package.json` for the required `node` and `npm` versions)
- `gulp` to build and watch during development.
- `gulp --prod` to build for production.

## About the design

- Refer to Figma for the complete design: https://www.figma.com/design/D0SMup9URKQcZH6s3TUb6x/M%26S---Developer-Skill-Test
- You will need to create a Figma account (if you do not already have one) to inspect the design. <strong>If you are prompted for a password, it is `marvelandsnap`.</strong>
- We have already included the [Montserrat](https://fonts.google.com/specimen/Montserrat) font in our starter theme (via the Google Fonts API) and assigned it to Bootstrap's `$font-family-sans-serif` SCSS variable.

## About the shop

Our [Marvel & Snap Shopify Skill Test](https://ms-skill-test.myshopify.com/) shop is preconfigured with all of the products and metafields you will need to complete the designs.


<strong>Do not make any changes to this data during your skill test!</strong> Please see the [Getting started](#getting-started) section below for further details.

## What we are looking for

- Create functional, responsive, and standards-compliant Shopify collection and product templates from the provided design.
- Demonstrate your overall knowledge of:
    - Shopify theming, including its prescribed folder and file structure and usage of Liquid's template tags such as filters, loops, internationalization, etc.;
    - Local development using [Shopify CLI](https://shopify.dev/docs/api/shopify-cli);
    - Writing custom SCSS and JavaScript to accurately reproduce the provided design, including responsiveness and interactivity;
    - DRY principles and git best practices.
- Use the provided folder and file structure and `gulp` tasks.
- Do not spend more than eight <strong>(8)</strong> hours on the test. Don’t worry if you can’t complete it - our goal is to see what you *can* achieve within a limited timeframe.
- **Complete the main sections of the design (i.e. the collection and product templates) first** - these are required for the evaluation of your skill test. Only complete the header and footer of the design if you have time remaining.

<h2 id="getting-started">Getting started</h2>

1. Accept our invitations to the `shopify-skill-test` repository and the `ms-skill-test` store.
2. Clone the `BRANCHNAME` branch of the repository: `git clone -b BRANCHNAME https://github.com/marvelandsnap/shopify-skill-test.git`
3. Prepare for local development by running `gulp` and `shopify theme dev --store=ms-skill-test.myshopify.com`. <strong>If you are prompted for a password, it is `datwat`.</strong>
4. Read the remaining requirements <em>in full</em> before you begin development.
5. Commit and push your work to the `BRANCHNAME` branch.

## General requirements

### HTML

- Ensure your HTML is valid, semantic and accessible (e.g. using `aria` attributes where appropriate).

### Bootstrap
- Demonstrate your knowledge and usage of Bootstrap's components and conventions.

### CSS

- Write your CSS using SCSS, which will be compiled using our theme’s `gulp` tasks.
- Follow [BEM](https://getbem.com/) naming conventions for any custom styles.
- Demonstrate usage of:
    - Modern CSS techniques such as Flexbox, Grid, `clamp`, etc.;
    - SCSS variables and at least one function or mixin;
    - Responsive design techniques.

<h3 id="javascript">JavaScript</h3>

- Write your JavaScript using ES6, which will be compiled using our theme’s `gulp` tasks.
- Demonstrate combined usage of *both* ES6 (`const`, `let`, arrow functions, etc.) and jQuery (event binding, interactivity, etc.) to:
    - Add simple animations to the page, e.g. fading in elements as they enter the viewport. You can use jQuery’s animation methods or apply classes containing your own CSS animations.
    - Update the price displayed within the [product template](#product-template) when switching between variants.

### Liquid

- Ensure your Liquid is free of errors, formatted consistently, and documented appropriately.

### Git

- Ensure your git commit(s) are logical and accompanied by clear, concise messages.

## Template requirements

### Header Group (`sections/header-group.json`)

- Using `sections/navbar.liquid` (which is already included in this template), build the provided design for the navbar. The navbar must include a cart icon that displays the total number of products in the cart (if applicable).

### Collection (`templates/collection.json`)

- Using `sections/hero.liquid` (which is already included in this template), build the provided design for the hero of the collection template. You must write JSON schema to represent this section's settings, and use those settings in the section template. These settings must include:
  - Logo (`image_picker`);
  - Heading (`text`);
  - Subheading (`richtext`);
  - Image (`image_picker`).
- Using `sections/collection.liquid` (which is already included in this template), build the provided design for the list of products (cards) within the collection template. Each card must consist of the following product attributes:
  - "Sale" badge (if applicable);
  - Image;
  - Title;
  - Price;
  - Description;
  - Link.
- The products do not need to appear in the same order as they do in the design.

<h3 id="product-template">Product (<code>templates/product.liquid</code>)</h3>

- Using `sections/product.liquid` (which is already included in this template), build the provided design for the "all products" collection (`/collections/all`).
- The product images (left-hand column) must be a carousel using [accessible-slick](https://github.com/Accessible360/accessible-slick).
- The product details (right-hand column) must include the following product attributes:
  - Title;
  - Price, which is updated via [JavaScript](#javascript) when switching between variants;
  - Description.
- The product add-to-cart form (right-hand column) must allow the user to:
  - Choose a product variant with `select`;
  - Enter a quantity of the selected variant with `input[type="number"]`;
  - Add the product variant and quantity to their cart.
- The product accordion (right-hand-column) must render the following accordion titles and `richtext` metafields:
  - Product Details (`product.metafields.accordion.product_details`);
  - Ingredients (`product.metafields.accordion.ingredients`);
  - How It's Made (`product.metafields.accordion.how_its_made`);
  - Where It's Made (`product.metafields.accordion.where_its_made`);
  - How To Use (`product.metafields.accordion.how_to_use`).

### Footer (`sections/footer-group.json`)
- Using `sections/footer.liquid` (which is already included in this template), build the provided design for the footer.

## Dos and don’ts

### Please do:

- **Do** explore our `src` folder and file structure for SCSS and JavaScript assets, and follow the conventions contained within.
- **Do** use `gulp --prod` to build for production prior to your final submission.
- **Do** ask questions! If the requirements of the test are unclear or you have any issues completing or submitting it, please email [kbest@marvelandsnap.com](mailto:kbest@marvelandsnap.com) and CC [tmcquaid@marvelandsnap.com](mailto:tmcquaid@marvelandsnap.com).

### Please don’t:

- **Don’t** make any changes to our store's data during your skill test.
- **Don’t** install or use any additional packages, libraries, apps, plugins, etc. that aren’t already included with our starter theme and store.
- **Don’t** pull from or push to any branches of the `shopify-skill-test` repository *except* for the `BRANCHNAME` branch we have created for you.

## Creators

[![](https://secure.gravatar.com/avatar/7386273d774b0a2be2c6c107e52b5fdf?size=100 "Marvel & Snap")](https://www.marvelandsnap.com)

[Marvel & Snap](https://www.marvelandsnap.com) provides integrated, enterprise-grade web operations services that enable marketers to create, deliver, and manage more agile and effective digital experiences.