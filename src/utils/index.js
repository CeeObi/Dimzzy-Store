import axios from "axios";


const productionUrl ="https://strapi-store-server.onrender.com/api"

const customFetch = axios.create({
    baseURL: productionUrl,
})


const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat('en-US',{ style:'currency', currency: 'AUD',}).format((price/100).toFixed(2));
    return dollarsAmount;
}




export {customFetch, formatPrice};