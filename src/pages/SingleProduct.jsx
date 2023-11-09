import { customFetch,formatPrice } from "../utils";
import { Link, useLoaderData } from 'react-router-dom'
import { useState } from "react";






const Loader = async({params}) =>{
    const response = await customFetch(`/products/${params.id}`);
    const product = response.data.data;
    return {product}
}



const SingleProduct = () => {
    const {product} = useLoaderData();
    const {image,title,price,description,colors,company} = product.attributes;
    const dollarsAmount = formatPrice(price);


    return <section>
        <div className="text-md breadcrumbs">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
            </ul>
        </div>
        {/* PRODUCT */}
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
            {/* IMAGE */}
            <img src={image} alt={title} className="w-96 h-96 object-cover lg:w-full rounded-lg" />
            {/* PRODUCT INFO*/}
            <div>
                <h1 className="capitalize text-3xl font-bold">{title}</h1>
                <h4 className="text-xl text-neutral-content font-bold mt-2">{company}</h4>
                <p className="text-xl mt-3 ">{dollarsAmount}</p>
                <p className="mt-6 leading-8">{description}</p>

            </div>
        </div>

    </section>
}

export default SingleProduct;
export {Loader};