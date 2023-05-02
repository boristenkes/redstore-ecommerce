# Redstore - Ecommerce Website

This repository contains the code for an ecommerce website built as a practice project to demonstrate web development skills. The design was based on an [online HTML & CSS tutorial](https://www.youtube.com/watch?v=yQimoqo0-7g&t=0s).<br />

## Screenshot

![](./preview.png)

## About the project

Redstore is a fully responsive ecommerce website that allows users to browse different products. All products are stored in [mockapi.io](https://mockapi.io/).

The home page displays 4 featured products, which are the highest-rated products, 8 most recent products, and one exclusive product.

On the "Products" page, you can view all products listed and sort them by name, rating, price, or date (ascending or descending).

The products are separated into pages, with a maximum of 12 products per page. When there are more than 12 products, a new page is added automatically to improve the user experience by reducing the amount of scrolling required.

Each product is a link to a details page where you can see its category, name, brand, price, description, related products (_products with a similar name or from the same brand_), and more product images (if available). You can navigate through the product images by clicking the small images below the main image.<br />
By default, 4 related products are shown, and clicking the "View More" button will reveal 4 additional related products. The "View More" button is disabled when there are no more related products to show.

Updating the product quantity will automatically adjust the price based on the selected quantity.

Once you have selected the desired product size and quantity, you can add the product to the cart, which is saved in the browser (`localStorage`), so you can see it next time you visit.

Each item in the cart includes the product image, name, selected size, and quantity (quantity can be changed in the cart), total price for that one item (item price \* item quantity), and an option to remove it from the cart.

A table below the cart displays the subtotal, which is the sum of all item totals, shipping price, and total price. The subtotal and total are updated automatically when the quantity of any item is changed.

## Built with

- [React](https://react.dev/)
- [Sass](https://sass-lang.com/)
- [styled-components](https://styled-components.com/)
- [Vite](https://vitejs.dev/)

## Author

- [Github](https://github.com/boristenkes/)
