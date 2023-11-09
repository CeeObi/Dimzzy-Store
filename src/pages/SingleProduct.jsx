import { customFetch,formatPrice } from "../utils";
import { Link, useLoaderData } from 'react-router-dom'
import { useState } from "react";






const Loader = async({params}) =>{
    const response = await customFetch(`/products/${params.id}`);
    const product =response.data.data;
    return {product}
}



const SingleProduct = () =>{
    const {product} = useLoaderData()
    const {image,title,price,description,colors,company}= product.attributes
    const dollarsAmount = formatPrice(price)


    return <h1 className="text-4xl"> SingleProduct</h1>
}

export default SingleProduct;
export {Loader};