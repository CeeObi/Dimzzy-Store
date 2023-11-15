import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct} from "./pages";
import { ErrorElement } from "./components";

//loaders
import { Loader as LandingLoader } from "./pages/Landing";
import { Loader as SingleProductLoader } from "./pages/SingleProduct";
import { Loader as ProductLoader } from "./pages/Products";

//actions
import { action as registerAction } from "./pages/Register";




const router = createBrowserRouter([
  { 
    path:'/',
    element: <HomeLayout />, 
    errorElement: <Error />,  
    children: [
    {
      index:true,
      element:<Landing />,
      errorElement: <ErrorElement />,
      loader: LandingLoader,
    },
    {
      path:'/products',
      element:<Products />,
      errorElement: <ErrorElement />,
      loader: ProductLoader,
    },
    {
      path:'/products/:id',
      element:<SingleProduct />,
      errorElement: <ErrorElement />,
      loader: SingleProductLoader,
    },
    {
      path:'/cart',
      element:<Cart />
    },
    {
      path:'/about',
      element:<About />
    },
    {
      path:'/checkout',
      element:<Checkout />
    },
    {
      path:'/orders',
      element:<Orders />
    },
    ]
  },  
  { 
    path:'/login',
    element: <Login />, 
    errorElement: <Error />,
  },
  { 
    path:'/register',
    element: <Register />, 
    errorElement: <Error />,
    action:registerAction,
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;