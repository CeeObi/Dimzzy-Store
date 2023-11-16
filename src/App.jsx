import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct} from "./pages";
import { ErrorElement } from "./components";


//loaders
import { Loader as LandingLoader } from "./pages/Landing";
import { Loader as SingleProductLoader } from "./pages/SingleProduct";
import { Loader as ProductLoader } from "./pages/Products";
import { Loader as CheckoutLoader } from "./pages/Checkout";
import { Loader as OrdersLoader } from "./pages/Orders";

//actions
import { Action as registerAction } from "./pages/Register";
import { Action as loginAction } from "./pages/Login";
import { Action as checkoutAction} from "./components/CheckoutForm.jsx";

import { store } from './store.js'

//React Query Implementation
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    }
  }
})



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
      loader: LandingLoader(queryClient),
    },
    {
      path:'/products',
      element:<Products />,
      errorElement: <ErrorElement />,
      loader: ProductLoader(queryClient),
    },
    {
      path:'/products/:id',
      element:<SingleProduct />,
      errorElement: <ErrorElement />,
      loader: SingleProductLoader(queryClient),
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
      element:<Checkout />,
      loader: CheckoutLoader(store),
      action: checkoutAction(store,queryClient),
    },
    {
      path:'/orders',
      element:<Orders />,
      loader: OrdersLoader(store,queryClient),
    },
    ]
  },  
  { 
    path:'/login',
    element: <Login />, 
    errorElement: <Error />,
    action: loginAction(store),
  },
  { 
    path:'/register',
    element: <Register />, 
    errorElement: <Error />,
    action: registerAction,
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App;