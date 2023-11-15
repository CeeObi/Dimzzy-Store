import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import CartItemsList from "../components/CartItemsList";
import { Link } from "react-router-dom";
import CartTotals from "../components/CartTotals";


const Cart = () =>{    
    const user = useSelector((state) => state.userState.user);
    const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)
    if (numItemsInCart===0){
        return <SectionTitle text="Your Cart is empty" />
    }
    return <>
    <SectionTitle text="Your Shopping Cart" />
    <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
            <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:p-4">
            <CartTotals />
            {user?<Link to="/checkout" className="btn btn-primary btn-block mt-8">Proceed to checkout</Link>:
            <Link to="/login" className="btn btn-primary btn-block mt-8">Login to checkout</Link>
            }
        </div>
    </div>
    
    </>
}

export default Cart;