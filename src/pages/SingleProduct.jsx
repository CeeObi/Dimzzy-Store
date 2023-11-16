import { customFetch, formatPrice, generateQuantityOptions } from "../utils";
import { Link, useLoaderData } from 'react-router-dom'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems} from "../features/cart/cartSlice";


const singleProductQuery = (id) => {
    return{
    queryKey:['singleProduct',id],
    queryFn: () => customFetch(`/products/${id}`) 
    }
}


const Loader = (queryClient) => async({params}) =>{
    const response = await queryClient.ensureQueryData(singleProductQuery(params.id)) ;
    const product = response.data.data;
    return {product}}



const SingleProduct = () => {
    const {product} = useLoaderData();
    const {image,title,price,description,colors,company} = product.attributes;
    const dollarsAmount = formatPrice(price);
    const [productColor, setProductColor] = useState(colors[0])
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (event) => {
        const getQuantity = parseInt(event.target.value)
        setQuantity(getQuantity)
    }

    const cartProduct ={
        cartID: product.id + productColor,
        productID: product.id,
        image,
        title,
        price,
        company,
        productColor,
        quantity,
    }

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItems({product: cartProduct}))
    }


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
                {/* COLORS */}
                <div className="mt-6">
                    <h4 className="text-md font-medium tracking-wider capitalize">colors</h4>
                    <div className="mt-2">
                        {colors.map(
                            (color) => {return <button className={`badge w-6 h-6 mr-2 ${color===productColor && 'border-2 border-secondary'}`}  key={color} type="button" style={{backgroundColor:color}} onClick={() => setProductColor(color)}></button>}
                        )}
                    </div>
                </div>
                {/* QUANTITY */}
                <div className="form-control w-full max-w-xs">
                    <label className="label" htmlFor="quantity">
                        <h4 className="text-md font-medium tracking-wider capitalize">quantity</h4>
                    </label>
                    <select name="quatity" id="quantity" className="select select-bordered select-secondary select-md" onChange={handleQuantity} value={quantity}>
                        {generateQuantityOptions(5)}
                    </select>
                </div>
                {/* CART BTN */}
                <div className="mt-10">
                    <button className="btn btn-secondary btn-md" onClick={addToCart}> Add to cart</button>
                </div>

            </div>
        </div>

    </section>
}



export default SingleProduct;
export {Loader};