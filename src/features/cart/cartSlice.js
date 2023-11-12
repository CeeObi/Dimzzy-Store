import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";



const defaultState = {
    cartItems:[],
    numItemsInCart: 0,
    cartTotal:0,
    shipping:500,
    tax:0,
    orderTotal:0,
};


const cartSlice = createSlice({
    name:"cart",
    initialState: defaultState,
    reducers: {
        addItems:(state,action) => {
            const {product} = action.payload;
            const item = state.cartItems.find((i) => {return i.cartID === product.cartID})
            if(item){item.quantity += product.quantity}
            else{state.cartItems.push(product)}
            state.numItemsInCart += product.quantity
            state.cartTotal += product.price * product.quantity
            state.tax = 0.1 * state.cartTotal
            state.orderTotal = state.cartTotal + state.shipping + state.tax
            localStorage.setItem("cart", JSON.stringify(state))
            toast.success("Item added to cart!")
        },
        clearCart:(state) => {},
        removeItem: (state,action) => {},
        editItem: (state,action) => {},
    }
})



export const {addItems,clearCart,removeItem,editItem} = cartSlice.actions;
export default cartSlice.reducer;