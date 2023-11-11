import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products/";

const Loader = async ({request}) =>{
    const params = Object.fromEntries( [...new URL(request.url).searchParams.entries()]); // const search = params.get("search"). This other way to get it one by one   
    // console.log(params)
    const response = await customFetch(url,{params})
    const products = response.data.data
    const meta = response.data.meta    
    return {products, meta, params}
}



const Products = () =>{    
    return <>   
    <Filters />
    <ProductsContainer />
    <PaginationContainer />
    </>
}

export default Products;
export {Loader};