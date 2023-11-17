## Useful Project Resources
- [Complete Project](https://dimzzy-store.onrender.com/)
- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)



##(1) - Setup
- create vite project with tailwind

[Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

- setup vite project

```sh
npm create vite@latest comfy-store -- --template react
cd comfy-store
```

- add tailwind

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- rename to tailwind.config.cjs
- add following content

tailwind.config.cjs

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- remove App.css
- delete contents of index.css
- delete contents of App.jsx
- change title

```js
const App = () => {
  return <div>App</div>;
};
export default App;
```

- Add the Tailwind directives to your CSS

index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind directives are instructions that decide how Tailwind CSS creates the styles for your website. They control the global styles, component styles, and utility classes.

- start the project "npm run dev"
- setup first tailwind classes in App.jsx
- remove StrictMode

  App.jsx

```js
const App = () => {
  return <h1 className='text-7xl font-bold underline'>Tailwind project</h1>;
};
export default App;
```

## Assets

- get project assets




##(2) - Setup DaisyUI
- [DaisyUI](https://daisyui.com/)
- add and configure daisyui to our project
- add TailwindCSS Typography plugin


```sh
npm i  -D daisyui@latest @tailwindcss/typography
```

tailwind.config.js

```js
{
 plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
```

## Install All Libraries

```sh
npm i axios@1.4.0 dayjs@1.11.9 @reduxjs/toolkit@1.9.5 @tanstack/react-query@4.32.6 @tanstack/react-query-devtools@4.32.6 react-icons@4.10.1 react-redux@8.1.2 react-router-dom@6.14.2 react-toastify@9.1.3

```




##(3) - Create All Pages
- create pages directory
- create all pages and export from index.js
- About, Cart, Checkout, Error,
  HomeLayout, Landing, Login, Orders,
  Products, Register, SingleProduct
- import in app.jsx


pages/About.jsx

```js
const About = () => {
  return <h1 className='text-4xl'>About</h1>;
};
export default About;
```

pages/index.js

```js
export { default as HomeLayout } from './HomeLayout';
export { default as Landing } from './Landing';
export { default as SingleProduct } from './SingleProduct';
export { default as Products } from './Products';
export { default as Cart } from './Cart';
export { default as Error } from './Error';
export { default as About } from './About';
export { default as Login } from './Login';
export { default as Register } from './Register';
export { default as Checkout } from './Checkout';
export { default as Orders } from './Orders';
```

App.jsx

```js
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';
```




##(4) - React Router
- configure react router
- setup initial route structure
  hint : look for nested UI (basically navbar)

### App.jsx

1. Import Dependencies:

   - Import necessary modules from the 'react-router-dom' library.

2. Create Router Configuration:

   - Use the `createBrowserRouter` function to set up a router configuration.
   - Define an array of route objects, each representing a different route in your application.
   - Configure routes for different paths, including components like `HomeLayout`, `Landing`, `Products`, etc.

3. Create Router Instance:

   - Create a router instance using the `createBrowserRouter` function and pass in the defined route configuration.

4. Define App Component:

   - Create a functional component named `App`.
   - Return a `RouterProvider` component and pass in the created router instance as a prop.

5. Export App Component:
   - Export the `App` component as the default export of the module.




##(5) - Error Page
- complete error page
- create two returns
- first for 404 errors
- second for all other errors
- log the error
- add option to navigate home

### Error.jsx

1. Import Dependencies:

   - Import the necessary modules `useRouteError` and `Link` from the 'react-router-dom' library.

2. Create Error Component:

   - Define a functional component named `Error`.
   - Inside the component, use the `useRouteError` hook to get information about the route error.
   - Check the status of the error using `error.status`.

3. Conditional Rendering for 404 Error:

   - If the error status is 404, render a `main` element with a grid layout and centered content.
   - Display a large "404" text, a title "Page not found," and a description.
   - Include a link back to the home page using the `Link` component.

4. Conditional Rendering for Other Errors:

   - If the error status is not 404, render a `main` element with a grid layout and centered content.
   - Display a text message indicating that there was an error.

5. Export Error Component:
   - Export the `Error` component as the default export of the module.




##(6) - Input Field Component
- create components folder with index.js
- in daisyui
- find Text input component
- more specifically "With form-control and labels"
- set it as component (in my case FormInput.jsx)
- decide on props
- export from index.js
- test in login

### FormInput.jsx

1. Create FormInput Component:

   - Define a functional component named `FormInput`.
   - The component accepts the following props: `label`, `name`, `type`, and `defaultValue`.

2. FormInput Structure:

   - Inside the component, return a `div` element with the class `form-control`, which provides styling for form inputs.
   - Within this `div`, create a `label` element with the class `label`.
   - Inside the `label`, use the `label-text` class to display the capitalized label text provided through the props.

3. Input Element:

   - After the `label`, create an `input` element.
   - Set the `type` attribute of the `input` element to the value provided through the `type` prop.
   - Set the `name` attribute of the `input` element to the value provided through the `name` prop.
   - Use the `defaultValue` prop to set the initial value of the input element.
   - Apply the `input` and `input-bordered` classes to the `input` element for styling.

4. Export FormInput Component:
   - Export the `FormInput` component as the default export of the module.




##(7) - Login Page Structure
- setup structure for login page (use complete project as reference)
- check for loading state and disable submit button
- setup submit button in a separate component
- add loading spinner

### SubmitBtn.jsx

- Import Dependencies:

  - Import `useNavigation` from `'react-router-dom'`.

- Create the `SubmitBtn` Component:

  - Define a functional component named `SubmitBtn`.
  - Accept a prop `text`.

  - Inside the component, use the `useNavigation()` hook to access navigation state.
  - Determine whether the form is submitting by checking if `navigation.state` is equal to `'submitting'`.

  - Return a `button` element with the following attributes:

    - Type set to `'submit'`.
    - Class set to `'btn btn-primary btn-block'`.
    - Disabled attribute set to the value of `isSubmitting`.

    - Inside the `button` element, use a conditional rendering:
      - If `isSubmitting` is true:
        - Render a `span` element with class `'loading loading-spinner'`.
        - Render the text `'sending...'`.
      - If `isSubmitting` is false:
        - Render the `text` prop if provided, otherwise render `'submit'`.

### Login.jsx

- Import Dependencies:

  - Import `FormInput` and `SubmitBtn` components from the `'../components'` directory.
  - Import `Form` and `Link` from `'react-router-dom'`.

- Create the `Login` Component:

  - Define a functional component named `Login`.

  - Return a `section` element with class `'h-screen grid place-items-center'`.

    - Inside the `section` element, create a `Form` element with the following attributes:

      - `method` set to `'post'`.
      - Class set to `'card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'`.

      - Inside the `Form` element, create an `h4` element with class `'text-center text-3xl font-bold'` containing the text `'Login'`.

      - Use the `FormInput` component twice:

        - First, for an email input with type `'email'`, label `'email'`, name `'identifier'`, and defaultValue `'test@test.com'`.
        - Second, for a password input with type `'password'`, label `'password'`, name `'password'`, and defaultValue `'secret'`.

      - Create a `div` element with class `'mt-4'`.

        - Inside the `div` element, use the `SubmitBtn` component with a prop `text` set to `'login'`.

      - Create a `button` element with the following attributes:

        - Type set to `'button'`.
        - Class set to `'btn btn-secondary btn-block'`.
        - Text content set to `'guest user'`.

      - Create a `p` element with class `'text-center'`.

        - Inside the `p` element, display the text `'Not a member yet?'`.

        - Create a `Link` element with the following attributes:
          - `to` set to `'/register'`.
          - Class set to `'ml-2 link link-hover link-primary capitalize'`.
          - Text content set to `'register'`.





##(8) - Register Page Structure
- setup structure for register page (use complete project as reference)

### Register.jsx

- Import Dependencies:

  - Import `FormInput` and `SubmitBtn` components from the `'../components'` directory.
  - Import `Form` and `Link` from `'react-router-dom'`.

- Create the `Register` Component:

  - Define a functional component named `Register`.

  - Return a `section` element with class `'h-screen grid place-items-center'`.

    - Inside the `section` element, create a `Form` element with the following attributes:

      - `method` set to `'POST'`.
      - Class set to `'card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'`.

      - Inside the `Form` element, create an `h4` element with class `'text-center text-3xl font-bold'` containing the text `'Register'`.

      - Use the `FormInput` component three times:

        - First, for a text input with type `'text'`, label `'username'`, and name `'username'`.
        - Second, for an email input with type `'email'`, label `'email'`, and name `'email'`.
        - Third, for a password input with type `'password'`, label `'password'`, and name `'password'`.

      - Create a `div` element with class `'mt-4'`.

        - Inside the `div` element, use the `SubmitBtn` component with a prop `text` set to `'register'`.

      - Create a `p` element with class `'text-center'`.

        - Inside the `p` element, display the text `'Already a member?'`.

        - Create a `Link` element with the following attributes:
          - `to` set to `'/login'`.
          - Class set to `'ml-2 link link-hover link-primary capitalize'`.
          - Text content set to `'login'`.





##(9) - Custom Class
- create custom class
- align content
- add to HomeLayout Outlet component




##(10) - Header Component
- setup and render header component in HomeLayout
- add two links - Login and Register

### Header.jsx

- Import Dependencies:

  - Import `Link` from `'react-router-dom'`.

- Create the `Header` Component:

  - Define a functional component named `Header`.

  - Return a `header` element with classes `'bg-neutral py-2 text-neutral-content'`.

    - Inside the `header` element, create a `div` element with classes `'align-element flex justify-center sm:justify-end'`.

      - Inside the `div` element, create another `div` element with classes `'flex gap-x-6 justify-center items-center'`.

        - Use the `Link` component twice:

          - First, create a `Link` to `'/login'` with the following attributes:

            - Class set to `'link link-hover text-xs sm:text-sm'`.
            - Text content set to `'Sign in / Guest'`.

          - Second, create a `Link` to `'/register'` with the following attributes:
            - Class set to `'link link-hover text-xs sm:text-sm'`.
            - Text content set to `'Create an Account'`.




##(11) - Navbar Structure
- create components/Navbar.jsx
- setup initial structure
- use Daisy navbar component
- "# responsive (dropdown menu on small screen, center menu on large screen)"
- import icons from react-icons
- render in HomeLayout.jsx

### Navbar.jsx

- Import Dependencies:

  - Import icons `BsCart3`, `BsMoonFill`, `BsSunFill`, and `FaBarsStaggered` from their respective packages.
  - Import `NavLink` from `'react-router-dom'`.

- Create the `Navbar` Component:

  - Define a functional component named `Navbar`.

  - Return a `nav` element with class `'bg-base-200'`.

    - Inside the `nav` element, create a `div` element with class `'navbar align-element '`.

      - Inside the first `div` element, create another `div` element with class `'navbar-start'`.

        - Create a `NavLink` to `'/'` with the following attributes:

          - Class set to `'hidden lg:flex btn btn-primary text-3xl items-center '`.

        - Create a `div` element with class `'dropdown'`.

          - Create a `label` element with `tabIndex={0}` and class `'btn btn-ghost lg:hidden'`.

          - Create a `ul` element with `tabIndex={0}` and class `'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'`.

      - Inside the second `div` element, create a `div` element with class `'navbar-center hidden lg:flex'`.

        - Create a `ul` element with class `'menu menu-horizontal '`.

      - Inside the third `div` element, create another `div` element with class `'navbar-end'`.

        - Create a `NavLink` to `'cart'` with the following attributes:

          - Class set to `'btn btn-ghost btn-circle btn-md ml-4'`.

          - Inside the `NavLink`, create a `div` element with class `'indicator'`.

            - Add the `BsCart3` icon component with class `'h-6 w-6'`.

            - Create a `span` element with classes `'badge badge-sm badge-primary indicator-item'` and text content `'8'`.





##(12) - NavLinks
- create NavLinks component
- setup an array of links
- iterate over and setup return

### Navbar.jsx

- Import Dependencies:

  - Import `NavLink` from `'react-router-dom'`.

- Create the NavLinks Component:

  - Define a functional component named `NavLinks`.

  - Return a fragment (`<>...</>`) to contain the list of navigation links.

    - Use the `.map()` function to iterate over the `links` array.

      - For each `link` object, extract the `id`, `url`, and `text`.

      - Create an `li` element with a `key` attribute set to `id`.

        - Inside the `li` element, create a `NavLink` with the following attributes:

          - Class set to `'capitalize'`.

          - `to` attribute set to the `url`.

          - Text content set to the `text`.




##(13) - Toggle Component
- add daisyui swap component




##(14) - Set Themes
- add few themes from daisyui
- test in index.html




##(15) - Change Theme
- change theme with toggle component

### Navbar.jsx

- Import Dependencies:

  - Import `useEffect` and `useState` from `'react'`.

- Theme Configuration:

  - Define a `themes` object with theme names as keys.

- Local Storage Theme Retrieval:

  - Create a function named `getThemeFromLocalStorage`.
    - Return the value of the `'theme'` key from `localStorage` or the default theme `'winter'`.

- Logic:

  - Create a state variable `theme` using the `useState` hook and initialize it with the result of `getThemeFromLocalStorage()`.
  - Define a function `handleTheme` that toggles between the `'winter'` and `'dracula'` themes based on the current theme.
  - Use the `useEffect` hook to apply the selected theme to the `document.documentElement` and store the theme value in `localStorage`.
  - ... (rest of the component implementation)





## (16) - About Page
- setup about page

### About.jsx

- About Component:
  - Define the `About` component.
    - Return a fragment containing the following elements:
      - A `div` with classes `flex`, `flex-wrap`, `gap-2`, `sm:gap-x-6`, `items-center`, and `justify-center`.
        - Inside the `div`, an `h1` with classes `text-4xl`, `font-bold`, `leading-none`, and `tracking-tight`, with the text "We love".
        - Inside the `div`, a `div` with classes `stats`, `bg-primary`, and `shadow`.
          - Inside the nested `div`, another `div` with class `stat`.
            - Inside this `div`, a `div` with classes `stat-title`, `text-primary-content`, `text-4xl`, `font-bold`, and `tracking-widest`, containing the text "comfy".
      - A `p` element with classes `mt-6`, `text-lg`, `leading-8`, `max-w-2xl`, and `mx-auto`, containing sample Lorem ipsum text.





## (17) - Hero Component
- setup hero component in landing page

### Hero.jsx

- Import Dependencies:

  - Import `Link` from `'react-router-dom'`.

- Hero Component:
  - Define the `Hero` component.
    - Create an array `carouselImages` containing imported image paths.
    - Return a `div` with classes `grid`, `grid-cols-1`, `lg:grid-cols-2`, `gap-24`, and `items-center`.
      - Inside this `div`, another `div`.
        - Inside this `div`, an `h1` with classes `max-w-2xl`, `text-4xl`, `font-bold`, and `tracking-tight`, containing the text "We’re changing the way people shop."
        - Next, a `p` element with classes `mt-8`, `max-w-xl`, `text-lg`, and `leading-8`, containing sample Lorem ipsum text.
        - Following that, a `div` with class `mt-10`.
          - Inside the `div`, a `Link` component with props `to='products'` and classes `btn` and `btn-primary`, containing the text "Our Products".
      - Another `div` with classes `hidden`, `h-[28rem]`, `lg:carousel`, `carousel-center`, `p-4`, `space-x-4`, `bg-neutral`, and `rounded-box`.
        - Inside this `div`, a JavaScript map function iterating over `carouselImages`.
          - For each image, a `div` with class `carousel-item`.
            - Inside the `div`, an `img` element with attributes `src` set to the image path and classes `rounded-box`, `h-full`, `w-80`, and `object-cover`.




## (18) - Axios Custom Instance
- explore api
- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
- create utils/index.js
- setup custom axios instance
- figure out the base url
- setup thunder client (optional)




## (19) - Landing Loader
- setup ErrorElement
- add to Loading Page
- setup a loader
- fetch only featured products
- return products

### ErrorElement.jsx

1. Create ErrorElement Component:

   - Define a functional component named `ErrorElement`.

2. Import Dependencies:

   - Import the `useRouteError` hook from `'react-router-dom'`.

3. Get Route Error:

   - Inside the component, use the `useRouteError` hook to retrieve the error information from the current route.

4. Display Error Message:

   - Return an `h4` element with the classes `font-bold` and `text-4xl`.
   - Set the content of the `h4` element to "there was an error..."

5. Export ErrorElement Component:
   - Export the `ErrorElement` component as the default export of the module.




## (20) - Featured Products
- create FeaturedProducts, SectionTitle and ProductsGrid components
- render SectionTitle and ProductsGrid in FeaturedProducts
- setup SectionTitle
- in ProductsGrid access and render products from loader

### SectionTitle.jsx

1. Create SectionTitle Component:

   - Define a functional component named `SectionTitle`.

2. Component Props:

   - The component should accept a prop named `text`.

3. Component Structure:

   - Return a `div` element with the classes `border-b border-base-300 pb-5`.
   - Inside the `div`, place an `h2` element with the classes `text-3xl`, `font-medium`, `tracking-wider`, and `capitalize`.
   - Set the content of the `h2` element to the value of the `text` prop.

4. Export SectionTitle Component:
   - Export the `SectionTitle` component as the default export of the module.

### FeaturedProducts.jsx

1. Import Dependencies:

   - Import `ProductsGrid` from `'./ProductsGrid'`.
   - Import `SectionTitle` from `'./SectionTitle'`.

2. Create FeaturedProducts Component:

   - Define a functional component named `FeaturedProducts`.

3. Component Structure:

   - Return a `div` element with the class `pt-24`.
   - Inside the `div`, include a `SectionTitle` component with the prop `text` set to `'featured products'`.
   - Include a `ProductsGrid` component.

4. Export FeaturedProducts Component:
   - Export the `FeaturedProducts` component as the default export of the module.

### ProductsGrid.jsx

1. Import Dependencies:

   - Import `Link` and `useLoaderData` from `'react-router-dom'`.

2. Create ProductsGrid Component:

   - Define a functional component named `ProductsGrid`.

3. Component Structure:

   - Inside the component, destructure the `products` data using `useLoaderData`.
   - Return a `div` element with the classes `pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3`.
   - Use the `.map()` function to iterate through each `product` in the `products` array.

4. Product Card:

   - For each `product`, destructure the attributes such as `title`, `price`, and `image`.
   - Create a `Link` component that has the following:
     - `key` attribute set to `product.id`.
     - `to` attribute set to `/products/${product.id}`.
     - `className` attribute with classes for styling.
   - Inside the `Link`, create a `figure` element with the class `px-4 pt-4` to hold the product image.
   - Within the `figure`, include an `img` element with the `src` attribute set to `image`, `alt` attribute set to `title`, and classes for styling.
   - Below the `figure`, create a `div` element with the class `card-body items-center text-center`.
   - Inside the `div`, display the `title` using a `h2` element with classes for styling.
   - Display the `price` using a `span` element with the class `text-secondary`.

5. Export ProductsGrid Component:
   - Export the `ProductsGrid` component as the default export of the module.





## (21) - Format Price
- payment providers need in smallest unit
  - in this case cents
- in utils setup a function to format price
- utilize in ProductsGrid




## (22) - Single Product
- complete in multiple steps
- fetch and render single product
- don't forget about the colors and amount options
- extra credit - set amount options dynamically

### SingleProduct.jsx

1. Import Dependencies:

   - Import `useLoaderData` from `'react-router-dom'`.
   - Import `formatPrice`, `customFetch`, and `useState` from `'../utils'`.
   - Import `Link` from `'react-router-dom'`.

2. Define Loader Function:

   - Define a loader function that fetches product data based on the `params.id`.
   - Use `customFetch` to fetch the product data from `/products/${params.id}`.
   - Return an object containing the fetched product data.

3. Create SingleProduct Component:

   - Define a functional component named `SingleProduct`.

4. Component Structure:

   - Inside the component, destructure the `product` data using `useLoaderData`.
   - Destructure attributes like `image`, `title`, `price`, `description`, `colors`, and `company`.
   - Create a `dollarsAmount` variable by formatting the `price` using `formatPrice`.
   - Use `useState` to manage the `productColor` and `amount` state.

5. Display Product Information:

   - Return a `section` element to encapsulate the component content.
   - Display breadcrumb navigation using `Link` components for Home and Products pages.

6. Product Display:

   - Create a `div` with classes for styling and a grid layout.
   - Display the product image using an `img` element with classes for styling.

7. Product Info:

   - Within a `div`, display the product title, company, and `dollarsAmount`.

8. Description:

   - Display the product description using a `p` element.

9. Colors:

   - Display available product colors using a `div` with classes for styling.
   - Map through the `colors` array and create a `button` for each color.
   - Add appropriate classes and styles for the color button based on the selected `productColor`.

10. Amount:

    - Display a dropdown for selecting the product amount using a `div`.
    - Use a `select` element with options for different amounts.
    - Set the value of the `select` to the `amount` state and handle changes with `handleAmount` function.

11. Cart Button:

    - Display an "Add to bag" button using a `button` element with appropriate classes and an `onClick` event handler.

12. Export SingleProduct Component:
    - Export the `SingleProduct` component as the default export of the module.




## (23) - Products Page (Setup)
- create following components and render in products page
  - Filters
  - ProductsContainer
  - PaginationContainer
- in products page loader fetch all products

### Products.jsx

1. Import Dependencies:

   - Import `Filters`, `PaginationContainer`, and `ProductsContainer` from `'../components'`.
   - Import `customFetch` from `'../utils'`.

2. Define URL and Loader Function:

   - Define a constant `url` containing the URL path to fetch products from.
   - Define a loader function that fetches product data from the defined URL.
   - Use `customFetch` to fetch the product data from the `url`.
   - Extract products and meta information from the response and return them.

3. Create Products Component:

   - Define a functional component named `Products`.

4. Component Structure:

   - Return a `Fragment` element (`<>...</>`) to wrap the component content.

5. Filters Component:

   - Include the `Filters` component to allow users to apply filters to the product list.

6. ProductsContainer Component:

   - Include the `ProductsContainer` component to display the list of products.

7. PaginationContainer Component:

   - Include the `PaginationContainer` component to manage product list pagination.

8. Export Products Component:
   - Export the `Products` component as the default export of the module.




## (24) - Products Container
- create ProductsList and render products in one column
- setup header (with total jobs and toggle buttons)
- toggle between ProductsGrid and ProductsList

### ProductsList.jsx

1. Import Dependencies:

   - Import `formatPrice` from `'../utils'`.
   - Import `Link` and `useLoaderData` from `'react-router-dom'`.

2. Create ProductList Component:

   - Define a functional component named `ProductList`.

3. Component Structure:

   - Return a `div` element containing a list of products.

4. Loop Through Products:

   - Use the `useLoaderData` hook to get the `products` data from the loader.
   - Use the `map` function to loop through each product in the `products` array.

5. Product Link:

   - For each product, create a `Link` element that links to the individual product page.
   - Use the `product.id` as the link path (`to={`/products/${product.id}`}`).
   - Add CSS classes to style the link and apply hover effects.

6. Product Image:

   - Display the product image inside an `img` element.
   - Apply appropriate classes for styling and responsive design.
   - Add hover effect to the image using CSS classes.

7. Product Details:

   - Display the product title and company using `h3` and `h4` elements.
   - Add classes for font styles and responsiveness.

8. Product Price:

   - Display the formatted price using the `formatPrice` function.
   - Use a `p` element with appropriate classes for styling.

9. Export ProductList Component:
   - Export the `ProductList` component as the default export of the module.

### ProductsContainer.jsx

1. Import Dependencies:

   - Import `useLoaderData` from `'react-router-dom'`.
   - Import `ProductsGrid` and `ProductsList` from their respective paths.
   - Import `useState` from `'react'`.
   - Import `BsFillGridFill` and `BsList` from `'react-icons/bs'`.

2. Create ProductsContainer Component:

   - Define a functional component named `ProductsContainer`.

3. Component Structure:

   - Return a `div` element containing the products container.

4. Total Products Count:

   - Use the `useLoaderData` hook to get the `meta` data from the loader.
   - Extract the `total` count of products from `meta.pagination`.
   - Use a conditional statement to handle the plural form of the word "product".

5. Layout State and Styles:

   - Use the `useState` hook to manage the layout state (grid or list).
   - Create a helper function `setActiveStyles` to generate the CSS classes based on the active layout.
   - Return appropriate CSS classes for active and inactive layouts.

6. Header Section:

   - Create a `div` for the header section containing the product count and layout buttons.
   - Display the total number of products using the extracted `totalProducts` count.
   - Create a button for grid layout and a button for list layout.
   - Attach click event handlers to the buttons to set the layout state.

7. Products Display:

   - Create a `div` to display the products.
   - Use conditional rendering to handle cases where no products match the search or when products are present.
   - If no products match the search, display a message.
   - If products are present and the layout is 'grid', display the `ProductsGrid` component.
   - If products are present and the layout is 'list', display the `ProductsList` component.

8. Export ProductsContainer Component:
   - Export the `ProductsContainer` component as the default export of the module.




## (25) - Filters (Search Input)
- add size to prop FormInput.jsx
- render search input, submit button and reset button




## (26) - Filters (Select Input)
- setup input for select input
- render for categories, companies and order
- companies and categories values are located in meta

### FormSelect.jsx

1. Create FormSelect Component:

   - Define a functional component named `FormSelect`.

2. Component Structure:

   - Return a `div` element containing the form select input.

3. Props:

   - Accept the following props: `label`, `name`, `list`, `defaultValue`, and `size`.

4. Label:

   - Create a `label` element with a `for` attribute matching the `name` prop.
   - Display the capitalized label text using the `label` prop.

5. Select Input:

   - Create a `select` element for the input field.
   - Set the `name` and `id` attributes to the value of the `name` prop.
   - Apply the appropriate CSS classes for the select input using the `size` prop.
   - Set the `defaultValue` of the select input using the `defaultValue` prop.

6. Options:

   - Map through the `list` prop array to generate individual `option` elements.
   - Use each item in the `list` as the `key` and `value` attributes of the `option` element.

7. Export FormSelect Component:
   - Export the `FormSelect` component as the default export of the module.




## (27) - Filters (Price)
- create range input (hint: you will need local state)

### FormRange.jsx

1. Create FormRange Component:

   - Define a functional component named `FormRange`.

2. Component Structure:

   - Return a `div` element containing the form range input and related elements.

3. Props:

   - Accept the following props: `label`, `name`, and `size`.

4. Default Values:

   - Define default values for `step`, `maxPrice`, and `selectedPrice`.

5. Label and Selected Price Display:

   - Create a `label` element with a `for` attribute matching the `name` prop.
   - Display the capitalized label text using the `label` prop.
   - Display the selected price using the `formatPrice` function.

6. Range Input:

   - Create an `input` element with `type` set to `'range'`.
   - Set the `name`, `min`, `max`, `value`, and `step` attributes.
   - Use the `selectedPrice` state for the `value` attribute.
   - Set the `onChange` event handler to update `selectedPrice`.

7. Min and Max Price Display:

   - Create a `div` element for displaying minimum and maximum price values.
   - Use the `formatPrice` function for formatting and displaying max price.

8. Export FormRange Component:
   - Export the `FormRange` component as the default export of the module.




## (28) - Filters (Shipping)
- create checkbox input

### FormCheckbox.jsx

1. Create FormCheckbox Component:

   - Define a functional component named `FormCheckbox`.

2. Component Structure:

   - Return a `div` element containing the form checkbox input and related elements.

3. Props:

   - Accept the following props: `label`, `name`, `defaultValue`, and `size`.

4. Label Display:

   - Create a `label` element with a `for` attribute matching the `name` prop.
   - Display the capitalized label text using the `label` prop.

5. Checkbox Input:

   - Create an `input` element with `type` set to `'checkbox'`.
   - Set the `name` attribute to match the `name` prop.
   - Set the `defaultChecked` attribute using the `defaultValue` prop.
   - Use the `size` prop to determine the checkbox size class.

6. Styling and Layout:

   - Apply appropriate classes to style and position the form control items.

7. Export FormCheckbox Component:
   - Export the `FormCheckbox` component as the default export of the module.




## (29) - Global Loading
- create loading component
- check for loading state in HomeLayout
- toggle between loading and <Outlet>

### Loading.jsx

1. Create Loading Component:

   - Define a functional component named "Loading".

2. Component Structure:

   - Return a "div" element with CSS classes to center content both vertically and horizontally.

3. Loading Animation:

   - Inside the "div", include a "span" element with the classes "loading loading-ring loading-lg".
   - This applies a loading animation to create the visual effect.

4. Styling:

   - Use the provided CSS classes to style the loading animation.

5. Export Loading Component:
   - Export the "Loading" component as the default export of the module.

### HomeLayout.jsx

1. Create HomeLayout Component:

   - Define a functional component named "HomeLayout".

2. Import Dependencies:

   - Import "Outlet" and "useNavigation" from 'react-router-dom'.
   - Import "Navbar", "Loading", and "Header" from '../components'.

3. Component Structure:

   - Return a fragment ('<>...</>') to encapsulate the component's content.

4. UseNavigation Hook:

   - Use the "useNavigation" hook to access the navigation state.
   - Store whether the page is currently loading in "isPageLoading" variable.

5. Conditional Rendering:

   - Use a ternary operator to conditionally render content:
     - If "isPageLoading" is true, render the "Loading" component.
     - Otherwise, render a "section" element with CSS classes and include the "Outlet" component.

6. Header and Navbar:

   - Include the "Header" and "Navbar" components at the beginning of the component.

7. Styling:

   - Apply CSS classes to style the layout and align its elements.

8. Export HomeLayout Component:
   - Export the "HomeLayout" component as the default export of the module.




## (30) - Setup Params
- explore how to filter products
  [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi#80a47ff5-cc24-494b-89e0-02cd92acc226)
- test in Thunder Client
- access params in loader
- use params in customFetch
- pass params down
- use params as default values (price in FormRange)
- setup reset button




## (31) - Pagination
- explore how to paginate
- test in Thunder Client
- access meta
- display next, prev and page buttons
- add page value to query params

## Building the PaginationContainer Component

1. Import Required Modules:

- Import hooks and modules from `react-router-dom`:
  - `useLoaderData`
  - `useLocation`
  - `useNavigate`

2. Initialize Component:

- Create a functional component named `PaginationContainer`.

3. Retrieve Data with Hooks:

- Use the `useLoaderData` hook to get the `meta` data.
- Destructure `pageCount` and `page` from `meta.pagination`.
- Use the `useLocation` hook to get `search` and `pathname`.
- Use the `useNavigate` hook to get the `navigate` function.

4. Generate Pages Array:

- Create an array called `pages` using `Array.from()`.
  - This represents all the page numbers.

5. Handle Page Change:

- Create a function `handlePageChange` that takes `pageNumber` as an argument.
  - Update the URL's query string parameter `page` with the new page number.
  - Navigate to the updated URL.

6. Conditional Rendering:

- If `pageCount` is less than 2:
  - Return `null`.

7. Render Pagination Component:

- Render a `div` container with the class `mt-16 flex justify-end`.
  - Inside this, render another `div` with class `join`.
    - For "Prev" button:
      - Use the class `btn btn-xs sm:btn-md join-item`.
    - For page numbers:
      - Use the class `btn btn-xs sm:btn-md border-none join-item`.
      - Highlight the current page with classes `bg-base-300 border-base-300`.
    - For "Next" button:
      - Use the class `btn btn-xs sm:btn-md join-item`.

8. Export Component:

- Export the `PaginationContainer` component.




## (32) - Setup RTK and react-toastify
- create features/cart/cartSlice.js
- setup default state (README) and reducers
- export actions and cartSlice.reducer
- create store.js and add cartSlice
- setup RTK and react-toastify in main.jsx

## Building the `cartSlice` Redux Slice

1. **Import Required Modules**:

- Import functions from specific libraries:
  - `createSlice` from `@reduxjs/toolkit`
  - `toast` from `react-toastify`

2. **Initialize Default State**:

- Create a `defaultState` object with the following properties:
  - `cartItems` (array)
  - `numItemsInCart` (integer)
  - `cartTotal` (integer)
  - `shipping` (fixed value: 500)
  - `tax` (integer)
  - `orderTotal` (integer)

3. **Create the Redux Slice**:

- Use the `createSlice` function to create the `cartSlice`.
  - Name it as `'cart'`.
  - Use the previously created `defaultState` as the `initialState`.
  - Define several reducer functions within it:
    - `addItem`: Logs the payload when an item is added.
    - `clearCart`: Intended to clear all items from the cart.
    - `removeItem`: Intended to remove a specific item.
    - `editItem`: Intended to edit a specific item.

4. **Export Actions**:

- Destructure and export the following actions:
  - `addItem`
  - `removeItem`
  - `editItem`
  - `clearCart`

5. **Export Reducer**:

- Export the reducer generated by `cartSlice` for usage in the Redux store.




## (33) - Add Product (SingleProductPage)
- import and dispatch addItem action
- add item to cart in SingleProduct page




## (34) - AddItem Reducer
- display cartItems in Navbar
- setup addItem functionality

## Building the `addItem` Reducer

1. **Purpose**:

- This reducer updates the cart state when a product is added.

2. **Extract Product from Action**:

- Extract the `product` object from `action.payload`.

3. **Check for Existing Item**:

- Search for the product in the `cartItems` array based on the `cartID`.
- If the item already exists in the cart:
  - Increment the `amount` of the item in the cart by the `amount` of the `product`.

4. **Add New Item**:

- If the product does not exist in the cart:
  - Push the `product` directly into the `cartItems` array.

5. **Update Cart Totals**:

- Increase the `numItemsInCart` by the `amount` of the product.
- Increase the `cartTotal` by the product's `price` multiplied by its `amount`.

6. **Calculate Tax and Order Total**:

- Set `tax` as 10% of the `cartTotal`.
- Calculate the `orderTotal` as the sum of `cartTotal`, `shipping`, and `tax`.

7. **Save to Local Storage**:

- Convert the current state to a JSON string and store it in the browser's local storage under the key 'cart'.

8. **Notify User**:

- Use the `toast.success` method to display a success message: 'Item added to cart'.




## (35) - Refactor and Setup Local Storage
- refactor addItem and get default state from local storage

### calculateTotals Reducer:

1. **Purpose**:

- Re-calculates the tax and order total for the cart.

2. **Calculate Tax and Order Total**:

- Set `tax` as 10% of the `cartTotal`.
- Determine the `orderTotal` as the sum of `cartTotal`, `shipping`, and `tax`.

3. **Save to Local Storage**:

- Convert the current state to a JSON string and save it in the browser's local storage under the key 'cart'.




## (36) - Clear Cart, Remove Item and Edit Item
- try to setup reducers for clear cart, remove item and edit item

## Building the Reducers

### clearCart Reducer:

1. **Purpose**:

- Clears the current cart state and resets it to the default state.

2. **Update Local Storage**:

- Store the `defaultState` in the browser's local storage under the key 'cart'.

3. **Return Default State**:

- Reset the entire cart state by returning `defaultState`.

### removeItem Reducer:

1. **Purpose**:

- Removes a specific item from the cart.

2. **Extract cartID from Action**:

- Extract the `cartID` from `action.payload`.

3. **Find Product**:

- Find the product in the `cartItems` array based on the `cartID`.

4. **Update Cart Items**:

- Filter out the product from `cartItems` array based on the `cartID`.

5. **Update Cart Totals**:

- Decrease the `numItemsInCart` by the `amount` of the product.
- Decrease the `cartTotal` by the product's `price` multiplied by its `amount`.
- Call the `calculateTotals` reducer to re-evaluate tax and order total.

6. **Notify User**:

- Use the `toast.error` method to display a message: 'Item removed from cart'.

### editItem Reducer:

1. **Purpose**:

- Modifies the amount of a specific item in the cart.

2. **Extract Data from Action**:

- Extract `cartID` and `amount` from `action.payload`.

3. **Find Item**:

- Find the item in the `cartItems` array based on the `cartID`.

4. **Update Cart Totals**:

- Adjust the `numItemsInCart` by the difference between the new amount and the item's previous amount.
- Update the `cartTotal` based on the item's `price` and the amount difference.
- Update the item's `amount` to the new amount.
- Call the `calculateTotals` reducer to re-evaluate tax and order total.

5. **Notify User**:

- Use the `toast.success` method to display a message: 'Cart updated'.




## (37) - Setup Cart Page
- create CartItemsList, CartTotals, CartItem components
- export CartItemsList, CartTotals in components/index.js
- setup two column layout in cart page

### CartPage.jsx

1. **Initialize Necessary Imports**:

   - Import `useSelector` from `react-redux` to enable access to the Redux store.
   - Bring in `CartItemsList`, `SectionTitle`, and `CartTotals` components from the `components` directory.
   - Import `Link` from `react-router-dom` for navigation capabilities.

2. **Create Cart Component**:

   - Define a functional component named `Cart`.

3. **Initialize State and Variables**:

   - Set a temporary variable `user` to `null`.
   - Use the `useSelector` hook to retrieve `numItemsInCart` from the Redux store's `cartState`.

4. **Component Logic**:

   - Check if `numItemsInCart` is zero.
     - If true, return the `SectionTitle` component with the text 'Your cart is empty'.
     - If there are items in the cart, continue to display the cart details.

5. **Component Structure**:

   - Render the `SectionTitle` component with the text 'Shopping Cart'.
   - Set up a grid layout (`mt-8 grid gap-8 lg:grid-cols-12`) to manage cart layout.
   - For displaying cart items:
     - Use 8 of 12 columns on large screens (`lg:col-span-8`).
     - Insert the `CartItemsList` component.
   - For displaying cart totals and the checkout/login button:
     - Use 4 of 12 columns on large screens (`lg:col-span-4 lg:pl-4`).
     - Place the `CartTotals` component.
     - Check if `user` is defined:
       - If true, provide a link to '/checkout' with the text 'Proceed to checkout'.
       - If false, provide a link to '/login' with the text 'please login'.

6. **Export Cart Component**:

   - Export the `Cart` component as the default export of the module.




## (38) - Cart Totals
- setup cart totals component

### CartTotals.jsx

1. **Initialize Necessary Imports**:

   - Import `useSelector` from `react-redux` for state retrieval from the Redux store.
   - Bring in `formatPrice` function from the `utils` directory for price formatting.

2. **Create CartTotals Component**:

   - Define a functional component named `CartTotals`.

3. **Retrieve State from Redux**:

   - Use the `useSelector` hook to get `cartTotal`, `shipping`, `tax`, and `orderTotal` from the Redux store's `cartState`.

4. **Component Structure**:

   - Enclose all content inside a `div` with the class `card bg-base-200`.
   - Use an inner `div` with the class `card-body` for structured content.
   - Display the Subtotal:
     - Use a `p` element with classes `flex`, `justify-between`, `text-xs`, `border-b`, and `border-base-300 pb-2`.
     - Use two nested `span` elements. The first displays "Subtotal", and the second displays the formatted `cartTotal`.
   - Display Shipping charges:
     - Similar to the Subtotal, but the text reads "Shipping" and the value is the formatted `shipping`.
   - Display Tax:
     - Similar format, but the text reads "Tax" and the value is the formatted `tax`.
   - Display Order Total:
     - Use a `p` element with classes `mt-4`, `flex`, `justify-between`, and `text-sm  pb-2`.
     - Use nested `span` elements with `font-bold` class. The first displays "Order Total", and the second displays the formatted `orderTotal`.

5. **Export CartTotals Component**:

   - Export the `CartTotals` component as the default export of the module.




## (39) - Cart Items List
- iterate over cartItems and return CartItem
- in CartItem display values and implement remove,edit functionality

### CartItemsList.jsx

1. **Initialize Necessary Imports**:

   - Import `useSelector` from `react-redux` to retrieve state from the Redux store.
   - Bring in `CartItem` component for item rendering.

2. **Create CartItemsList Component**:

   - Define a functional component named `CartItemsList`.

3. **Retrieve State from Redux**:

   - Use the `useSelector` hook to get `cartItems` from the Redux store's `cartState`.

4. **Component Structure**:

   - Create a wrapping `div`.
   - Use the `map` method on `cartItems` to loop through each item.
   - For each `item`, return a `CartItem` component:
     - Pass `item.cartID` as the `key` prop for React's list rendering optimization.
     - Pass the entire `item` object as the `cartItem` prop to the `CartItem` component.

5. **Export CartItemsList Component**:

   - Export the `CartItemsList` component as the default export of the module.

### CartItem.js

1. **Initialize Necessary Imports**:

   - Import utility functions `formatPrice` and `generateAmountOptions` from the `../utils` directory.
   - Import `removeItem` and `editItem` from the Redux slice named `cartSlice`.
   - Bring in `useDispatch` from `react-redux` for dispatching actions to the Redux store.

2. **Create CartItem Component**:

   - Define a functional component named `CartItem` that accepts a `cartItem` prop.

3. **Setup Redux Dispatch**:

   - Use the `useDispatch` hook and store the result in the `dispatch` constant.

4. **Functions for Event Handlers**:

   - Define `removeItemFromTheCart` function:
     - Dispatch the `removeItem` action, passing the `cartID` from the cart item.
   - Define `handleAmount` function:
     - Dispatch the `editItem` action, updating the `amount` for the cart item identified by `cartID`.

5. **Destructure cartItem Prop**:

   - Extract necessary fields from `cartItem` including `cartID`, `title`, `price`, `image`, `amount`, `company`, and `productColor`.

6. **Component Structure**:

   - Create an `article` element wrapping the entire cart item.
     - Embed the product image using an `img` element.
     - Display product information using a `div`:
       - Show the product `title`, `company`, and `color` using corresponding elements.
     - Render the product amount using a `div` containing a dropdown `select`.
     - Provide a `button` to remove the item from the cart.
     - Display the product price using a `p` element.

7. **Export CartItem Component**:

   - Export the `CartItem` component as the default export of the module.




## (40) - Setup User Slice
- setup user slice
- add to store

### userSlice.js

- create features/user/userSlice.js
- Import Dependencies:

  - Import `createSlice` from `'@reduxjs/toolkit'`.
  - Import `toast` from `'react-toastify'`.

- Define Initial State:

  - Create an `initialState` object with default values for `user` and `theme`.

- Create Redux Slice:

  - Use `createSlice` to define a Redux slice named `'user'`.
  - Set the slice name to `'user'`.
  - Use the `initialState` object as the initial state.

- Define Reducer Functions:

  - Create the `loginUser` reducer function with the signature `(state, action) => {}`.

    - Inside the function, log a message like `'login'`.

  - Create the `logoutUser` reducer function with the signature `(state) => {}`.

    - Inside the function, log a message like `'logout'`.

  - Create the `toggleTheme` reducer function with the signature `(state) => {}`.
    - Inside the function, log a message like `'toggle theme'`.

- Export Actions:
  - Export the action creators:
    - `loginUser`
    - `logoutUser`
    - `toggleTheme`




## (41) - Move Theme Logic
- move theme logic from Navbar to userSlice




## (42) - Setup Logout and Access User
- setup logout reducer
- access user in Header, NavLinks and Cart Page




## (43) - Register User
- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
- docs - register request
- test in Thunder Client
- setup action in Register
- add action to Register route in App.jsx

### Register.js

- Import Dependencies:

  - Import `redirect` from `'react-router-dom'`.
  - Import `customFetch` from `'../utils'`.
  - Import `toast` from `'react-toastify'`.

- Define an asynchronous function named `action` that takes an object with a property named `request` as its parameter.

- Inside the `action` function:

  - Use the `request` object to get form data using the `formData` method.
  - Convert the form data to an object using `Object.fromEntries(formData)` and store it in the `data` variable.

- Use a `try` block to handle the registration process:

  - Send a POST request using `customFetch.post` to the `/auth/local/register` endpoint with the `data`.
  - If the request is successful:
    - Display a success toast message using `toast.success`.
    - Redirect the user to the `/login` page using `redirect('/login')`.

- Use a `catch` block to handle errors:
  - If an error occurs, extract the error message from the response data, if available, or provide a default error message.
  - Display the error message using `toast.error`.
  - Return `null` to indicate that an error occurred.




## (44) - Login Setup
- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
- docs - login request
- test in Thunder Client
- setup action in login and access store




## (45) - Login User
### Login.jsx

- Import Dependencies:

  - Import `redirect` from `'react-router-dom'`.
  - Import `customFetch` from `'../utils'`.
  - Import `toast` from `'react-toastify'`.
  - Import `loginUser` from `'../features/user/userSlice'`.
  - Import `useDispatch` from `'react-redux'`.

- Define a function named `action` that takes a parameter `store` and returns an asynchronous function that takes an object with a property named `request`.

- Inside the inner asynchronous function:

  - Use the `request` object to get form data using the `formData` method.
  - Convert the form data to an object using `Object.fromEntries(formData)` and store it in the `data` variable.

- Use a `try` block to handle the login process:

  - Send a POST request using `customFetch.post` to the `/auth/local` endpoint with the `data`.
  - If the request is successful:
    - Dispatch the `loginUser` action with the response data using `store.dispatch`.
    - Display a success toast message using `toast.success`.
    - Redirect the user to the home page using `redirect('/')`.

- Use a `catch` block to handle errors:
  - If an error occurs, log the error to the console.
  - Extract the error message from the response data, if available, or provide a default error message.
  - Display the error message using `toast.error`.
  - Return `null` to indicate that an error occurred.




## (46) - Demo User
- remove defaultValue from inputs

### loginAsGuestUser

- Create a function named `loginAsGuestUser`.
- Mark the function as `async` to indicate that it contains asynchronous operations.
- Wrap the entire function body in a `try` block to handle potential errors.
- Inside the `try` block, use the `customFetch.post` method to send a POST request.
- Provide the endpoint URL `/auth/local`.
- Pass an object with `identifier` and `password` properties as the request body.
- Assign the response from the `customFetch.post` call to the `response` variable.- If the request is successful, dispatch an action (e.g., `loginUser`) with the `response.data`.
- Use the `toast.success` method to display a success message (e.g., 'welcome guest user').
- If the action dispatch and toast success are successful, use the `navigate` function to navigate to a specific route (e.g., `'/'`).
- If any error occurs within the `try` block, it will be caught by the `catch` block.
- Inside the `catch` block, use `console.log` to log the error for debugging purposes.
- Display an error message using the `toast.error` method to notify the user about the login error.




## (47) - Checkout Page Setup
- create CheckoutForm component

### Checkout.jsx

- Import Dependencies:

  - Import `useSelector` from `'react-redux'`.
  - Import `CheckoutForm`, `SectionTitle`, and `CartTotals` from `'../components'`.

- Create the `Checkout` component:

  - Inside the component, use `useSelector` to access the `cartTotal` from the Redux store.
  - Check if the `cartTotal` is empty.
  - If the `cartTotal` is empty, return a `SectionTitle` component with the text 'Your cart is empty'.
  - If the `cartTotal` is not empty:
    - Return a `SectionTitle` component with the text 'Place your order'.
    - Render a `<div>` element with the class name 'mt-8 grid gap-8 md:grid-cols-2 items-start'.
    - Inside the `<div>`, render the `CheckoutForm` component and the `CartTotals` component.

- Export the `Checkout` component as the default export.




## (48) - Restrict Access
App.jsx

- in App.jsx import loader from Checkout page
- pass store into the checkoutLoader
- if no user redirect to login

### Checkout.jsx

- Import Dependencies:

  - Import `redirect` from `'react-router-dom'`.
  - Import `toast` from `'react-toastify'`.

- Create a `loader` function:

  - The `loader` function takes a `store` as a parameter.
  - Inside the `loader` function:
    - Get the `user` from the Redux store using `store.getState().userState.user`.
    - Check if the `user` is falsy (not logged in).
    - If the `user` is falsy:
      - Display a toast warning message using `toast.warn()` with the text 'You must be logged in to checkout'.
      - Return `redirect('/login')` to redirect the user to the login page.
    - If the `user` is truthy (logged in):
      - Return `null`.

- Export the `loader` function.




## (49) - CheckoutForm
- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
- docs - create order request
- test in Thunder Client

### App.jsx

- in App.jsx import action from CheckoutForm.jsx
- pass store into the checkoutAction

## CheckoutForm.jsx

- Import Dependencies:

  - Import `Form` and `redirect` from `'react-router-dom'`.
  - Import `FormInput` and `SubmitBtn` from appropriate paths.
  - Import other required utilities and actions.

- Create an `action` function:

  - The `action` function takes a `store` as a parameter and returns an asynchronous function that takes a `request` parameter.
  - Inside the async function:
    - Await `request.formData()` to get form data.
    - Destructure the `name` and `address` properties from the form data using `Object.fromEntries(formData)`.
    - Get the `user` from the Redux store using `store.getState().userState.user`.
    - Get the `cartItems`, `orderTotal`, and `numItemsInCart` from the Redux store using `store.getState().cartState`.
    - Create an `info` object containing the gathered information.
    - Try to make a POST request to '/orders' with the `info` data and the user's token in the headers.
    - If successful:
      - Dispatch the `clearCart()` action using `store.dispatch(clearCart())` to clear the cart.
      - Display a success toast message using `toast.success()` with the text 'order placed successfully'.
      - Return `redirect('/orders')` to redirect the user to the orders page.
    - If there's an error:
      - Log the error.
      - Get the error message from the response data or provide a default message.
      - Display an error toast message using `toast.error()` with the error message.
      - Return `null`.

- Create a `CheckoutForm` component:

  - Inside the component:
    - Use the `Form` component from 'react-router-dom' to create a form.
    - Display a heading for the shipping information.
    - Use the `FormInput` component to create input fields for the first name and address.
    - Use the `SubmitBtn` component to create a submit button with the text 'Place Your Order'.

- Export the `CheckoutForm` component.




## (50) - Auth Error
- handle auth errors
- check for response.status
  - if status === 401 redirect to login




## (51) - Orders Request Overview
- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
- docs - orders request
- test in Thunder Client




## (52) - Orders Page Setup
- create components/OrdersList.jsx (export)
- create loader (import/setup in App.jsx and provide store)
- restrict access to page
- make a request to get all users
- grab all the query params
- return orders and meta

### Orders.jsx

1. **Import Dependencies:**

   - Import the required modules and components from 'react-router-dom', 'react-toastify', and other custom files.

2. **Define Loader Function:**

   - Create a loader function that takes the `store` parameter and an object with a `request` property.
   - Within the loader function:
     - Retrieve the user information from the Redux store.
     - Check if the user is logged in. If not, display a warning toast and redirect to the login page.
     - Parse query parameters from the URL.
     - Use the `customFetch` utility to make a GET request to the '/orders' endpoint.
     - Handle successful responses by returning the fetched orders data and meta information.
     - Handle errors by displaying appropriate error messages using toast and optionally redirecting if unauthorized.
     - Return `null` if an error occurs.

3. **Define Orders Component:**

   - Create a functional component named `Orders`.
   - Within the component:
     - Return JSX that displays a heading element with the text "orders".

4. **Export Loader Function:**

   - Export the defined loader function.

5. **Export Orders Component:**
   - Export the `Orders` component as the default export of the module.




## (53) - Render Orders
### Orders.jsx

- Import Dependencies:

  - Import necessary components and hooks from your project's dependencies.

- Define Component:

  - Define a functional component named `Orders`.

- Fetch Data:

  - Use the `useLoaderData` hook to access data from the loader context.
  - Check if the `meta.pagination.total` value is less than 1 to determine if there are no orders.

- Conditional Rendering:

  - If there are no orders, return a component, such as `<SectionTitle />`, with a message like 'Please make an order'.

- Orders Rendering:

  - If there are orders, return the following components:
    - `<SectionTitle />` with the text 'Your Orders'.
    - `<OrdersList />` component to display the list of orders.
    - `<PaginationContainer />` component for handling pagination.

- Export Component:
  - Export the `Orders` component as the default export.

### OrdersList.jsx

- Import Dependencies:

  - Import `useLoaderData` from `'react-router-dom'`.
  - Import `day` and `advancedFormat` from `'dayjs'`.
  - Extend dayjs with the `advancedFormat` plugin using `day.extend(advancedFormat)`.

- Create the `OrdersList` component:

  - Inside the component:
    - Use the `useLoaderData()` hook to get data from loader data.
    - Destructure `orders` and `meta` from the loaded data.
    - Return the orders list interface:
      - Display the total number of orders using the `meta.pagination.total` value.
      - Create a table to display order information.
      - Define table headings: Name, Address, Products, Cost, and Date.
      - Use `.map()` to iterate over each order and generate table rows:
        - Destructure relevant attributes from the `order` object.
        - Format the `createdAt` date using dayjs to display in 'hh:mm a - MMM Do, YYYY' format.
        - Return a table row with the extracted data.

- Export the `OrdersList` component.




## (54) - Complex Pagination
- create ComplexPaginationContainer.jsx
- render in Orders.jsx

### ComplexPaginationContainer.jsx

- Import Dependencies:

  - Import `useLoaderData`, `useLocation`, and `useNavigate` from `'react-router-dom'`.

- Create the `ComplexPaginationContainer` component:

  - Inside the component:
    - Use the `useLoaderData()` hook to get data from loader data.
    - Destructure `meta.pagination` to get `pageCount` and `page`.
    - Use the `useLocation()` hook to get the current location's search and pathname.
    - Use the `useNavigate()` hook to get the navigation function.
    - Create a `handlePageChange` function that:
      - Constructs a new URLSearchParams from the current search.
      - Sets the 'page' parameter in the search to the specified `pageNumber`.
      - Uses the navigate function to change the URL with the updated search.
    - Create an `addPageButton` function that returns a button element with the appropriate classes and onClick handler.
    - Create a `renderPageButtons` function that generates an array of page buttons, including ellipses and the current page button.
    - Use conditional checks to handle rendering of first, last, and ellipsis buttons.
    - Return `null` if `pageCount` is less than 2.
    - Return the pagination interface containing the "Prev," page buttons, and "Next" buttons.

- Export the `ComplexPaginationContainer` component.




## (55) - Setup React Query
- import and setup react query in App.jsx
- pass query client down to
  - Landing Page
  - SingleProduct Page
  - Products Page
- refactor loaders




## (56) - Landing
- setup react query and invoke in loader




## (57) - Single Product
- setup react query and invoke in loader




## (58) - All Products
- setup react query and invoke in loader




## (59) - Orders
setup react query and invoke in loader




## (60) - Remove Queries
- remove "orders" query in CheckoutForm and Header

