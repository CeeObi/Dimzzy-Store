import { FeaturedProducts, Hero } from "../components";
import { customFetch} from "../utils";

const url="products?featured=true"

const featuredProductsQuery = {
    queryKey: ["featuredProducts"],
    queryFn: () => customFetch(url),
}


const Loader = (queryClient) => async() =>{
    const response = await queryClient.ensureQueryData(featuredProductsQuery);
    const products =response.data.data;
    return {products}
}



const Landing = () =>{
    return <>
        <Hero/>
        <FeaturedProducts />
    </>
}

export default Landing;
export {Loader};