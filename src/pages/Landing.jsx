import { FeaturedProducts, Hero } from "../components";
import { customFetch} from "../utils";


const url="products?featured=true"

const Loader = async() =>{
    const response = await customFetch(url);
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