import axios from "axios";


const productionUrl ="https://strapi-store-server.onrender.com/api"

const customFetch = axios.create({
    baseURL: productionUrl,
})


const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat('en-US',{ style:'currency', currency: 'AUD',}).format((price/100).toFixed(2));
    return dollarsAmount;
}

const generateQuantityOptions = (numQtyAvailable) => {
    return Array.from( {length:numQtyAvailable}, ( _, index) => {
            const quantity = index + 1
            return <option key={quantity} value={quantity}>{quantity}</option>
        }
    )
}




export {customFetch, formatPrice, generateQuantityOptions};