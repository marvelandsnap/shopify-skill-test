# Welcome to the Marvel & Snap Shopify Skill Assessment

Thank you for taking the time to participate in this skill assessment. We’re excited to see your abilities in action and get a glimpse of your expertise in Shopify development. **Your task is to transform the provided Figma design into functional, responsive, and standards-compliant Shopify collection and product templates.**

## About the Theme

This assessment uses a bare-bones Shopify theme that includes `gulp` tasks for compiling styles and scripts for development and production.

The theme includes the following packages:
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/): all Bootstrap components and JavaScript functionality are available out of the box.
- [accessible-slick](https://github.com/Accessible360/accessible-slick): a drop-in replacement for [slick](https://github.com/kenwheeler/slick). Refer to its documentation for initializing carousels via `[data-slick]` attributes (already configured in this theme).

## About the Design

- Refer to the provided Figma link for the complete design. You may need to create a Figma account to inspect it. **If you are prompted for a password, it is `marvelandsnap`.**
- The [Montserrat](https://fonts.google.com/specimen/Montserrat) font is already included via Google Fonts and assigned to Bootstrap’s `$font-family-sans-serif` SCSS variable.

## About the Shop

The [Marvel & Snap Shopify Skill Assessment](https://ms-skill-test.myshopify.com/) store is preconfigured with all required products and metafields.

**Do not make any changes to this data during your skill assessment!** Please see the [Getting started](#getting-started) section below for further details.

## What We're Looking For

- Create functional, responsive, and standards-compliant Shopify collection and product templates from the provided design.
- Demonstrate your overall knowledge of:
  - Shopify theming and local development using the [Shopify CLI](https://shopify.dev/docs/api/shopify-cli)
  - Writing valid, semantic, and accessible HTML
  - Writing custom JavaScript using ES6 (`const`, `let`, `=>`, etc.) to accurately reproduce the provided design including interactivity
  - Writing modern SCSS (e.g. using Flexbox, `clamp`, etc.), following [BEM](https://getbem.com/) naming conventions, using variables and at least one function/mixin, and using responsive design techniques
  - DRY principles and git best practices (e.g. ensure your git commits are logical and accompanied by clear, concise messages)
- Use the provided folder and file structure and `gulp` tasks.
- Implement a pixel-perfect design.
- Do not spend more than **eight (8)** hours on the assessment. Don’t worry if you can’t complete it - our goal is to see what you *can* achieve within a limited timeframe.
- **Complete the main sections of the design first (PLP and PDP sections)** - these are required for the evaluation of your skill assessment. Only complete the header and footer of the design if you have time remaining.

## Getting started

1. Accept our invitations to the `shopify-skill-assessment` repository and the `ms-skill-test` store.
2. Clone your branch (this `BRANCHNAME` will be provided) `git clone -b BRANCHNAME https://github.com/marvelandsnap/shopify-skill-assessment.git`
3. Prepare for local development by running `gulp` and `shopify theme dev --store=ms-skill-test`. **If you are prompted for a password, it is `datwat`.**
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
  - "Sale" badge (if applicable)
  - Image
  - Title
  - Price
  - Description
  - Link
- The products do not need to appear in the same order as they do in the design.

### Product

- Using `sections/product.liquid` (which is already included in this template), build the provided design for the product section.
- The product gallery (left-hand column) must incorporate a carousel using [accessible-slick](https://github.com/Accessible360/accessible-slick).
- The product content (right-hand column) must include the following product attributes:
  - Title
  - Price, which is updated via JavaScript when switching between variants
  - Description
- The product add-to-cart form (right-hand column) must allow the user to:
  - Choose a product variant with `select`
  - Enter a quantity of the selected variant with `input[type="number"]`
  - Add the product variant and quantity to their cart
- The product detail accordions (right-hand-column) must render the following accordion titles and `richtext` metafields:
  - Product Details (`product.metafields.accordion.product_details`)
  - Ingredients (`product.metafields.accordion.ingredients`)
  - How It's Made (`product.metafields.accordion.how_its_made`)
  - Where It's Made (`product.metafields.accordion.where_its_made`)
  - How To Use (`product.metafields.accordion.how_to_use`)

### Footer

- Using `sections/footer.liquid` (which is already included in this template), build the provided design for the footer.

## Dos and don’ts

### Please do

- **Do** explore our `src` folder and file structure for SCSS and JavaScript assets, and follow the conventions contained within.
- **Do** use `gulp --prod` to build for production prior to your final submission.
- **Do** ask questions! If the requirements of the assessment are unclear or you have any issues completing or submitting it, please email Katie ( [klee@marvelandsnap.com](mailto:klee@marvelandsnap.com)).

### Please don’t

- **Don’t** make any changes to our store's data during your skill assessment.
- **Don’t** install or use any additional packages, libraries, apps, plugins, etc. that aren’t already included with our starter theme and store.
- **Don’t** pull from or push to any branches of the `shopify-skill-assessment` repository *except* for the `BRANCHNAME` branch we have created for you.

## Creators

[![](https://secure.gravatar.com/avatar/7386273d774b0a2be2c6c107e52b5fdf?size=100 "Marvel & Snap")](https://www.marvelandsnap.com)

[Marvel & Snap](https://www.marvelandsnap.com) provides integrated, enterprise-grade web operations services that enable marketers to create, deliver, and manage more agile and effective digital experiences.
