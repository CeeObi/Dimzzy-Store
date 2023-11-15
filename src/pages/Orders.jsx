import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
import { OrderList, PaginationContainer, SectionTitle } from "../components";


const Loader = (store) => async ({request}) => { 
    const user = store.getState().userState.user;
    if (!user){
        toast.warn("You must be logged in to view the orders");
        return redirect("/login");
    }
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),])
    try {
        const response = await customFetch.get("/orders", {params, headers:{
            Authorization:`Bearer ${user.token}`
        }})
        return {orders:response.data.data,meta:response.data.meta}
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || "There was an error placing your order!"
        toast.error(errorMessage);
        if (error.response.status === 401 || 403){
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
        <PaginationContainer />
    </>
    
}






export default Orders;
export {Loader};