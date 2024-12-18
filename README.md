# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Features

Users can:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` is used)
- **Bonus**: ${\textsf{\color{lightgreen} Can view the number of items added to the cart}}$



### Screenshot

Home             |  Product
:-------------------------:|:-------------------------:
![](./doc/screenshots/Home%20Page.png)  |  ![](./doc/screenshots/Product%20Details%20Page.png)

### Links

- Solution URL: [https://github.com/KausalyaSubramaniyan/audiophile/tree/feature/home](https://github.com/KausalyaSubramaniyan/audiophile/tree/feature/home)
- Live Site URL: [https://audiophile-kausalyasubramaniyans-projects.vercel.app/](https://audiophile-kausalyasubramaniyans-projects.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Emotion react](https://emotion.sh/docs/introduction) - For styles
- [Redux toolkit & RTK Query](https://redux-toolkit.js.org/introduction/getting-started) - For global state management and data fetch
- [React router dom](https://reactrouter.com/home) - For routing

### What I learned

- UI Elements

  While I have used Material-UI and other company-specific internal UI libraries, I tried implementing basic elements like Input, Button, and Spinner on my own in this project without relying on third-party libraries. This has helped me to deepen my understanding of UI design principles and improved my coding skills.

- Redux toolkit & RTK Query

  Learnt redux toolkit & RTK Query for global state management and data fetching. These libraries help maintain clean code without boilerplate, all while effectively performing their functions.

### Continued development

While the current application addresses the key critical functionalities, I will be focusing on the following backlogs in the future:
* Unit & Integration testcases
* Implementing dark theme
* Focus on Accessibility
* Development of backend application

## Author

- Kausalya Subramaniyan
