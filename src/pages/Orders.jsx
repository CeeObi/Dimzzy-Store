import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
import { OrderList, ComplexPaginationContainer, SectionTitle } from "../components";



const ordersQuery = (params,user) =>{
    return{
        queryKey: ['orders', user.username, params.page?parseInt(params.page):1],
        queryFn: () => customFetch.get("/orders", {params, headers:{
            Authorization:`Bearer ${user.token}`
        }
      })
    }
}



const Loader = (store,queryClient) => async ({request}) => { 
    const user = store.getState().userState.user;
    if (!user){
        toast.warn("You must be logged in to view the orders");
        return redirect("/login");
    }
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),])
    try {
        const response = await queryClient.ensureQueryData(ordersQuery(params,user));
        return {orders:response.data.data,meta:response.data.meta}
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || "There was an error placing your order!"
        toast.error(errorMessage);
        if (error?.response?.status === 401 || 403){
            return redirect("/login")
        }
    }
}





const Orders = () =>{
    const {meta} = useLoaderData() //from 'loader= OrdersLoader(store),' in App.jsx
    if (meta.pagination.total<1){
        return <SectionTitle text="Please make an order" />
    }
    return  <>
        <SectionTitle text="Your orders" />
        <OrderList />
        <ComplexPaginationContainer />
    </>
    
}






export default Orders;
export {Loader};