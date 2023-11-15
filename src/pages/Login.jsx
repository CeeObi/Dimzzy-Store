import {FormInput, SubmitBtn} from "../components"
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";



const Action = (store) =>  async({request}) => {
    // console.log(store) 
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    try {
        const response = await customFetch.post("auth/local", data);
        store.dispatch(loginUser(response.data))
        toast.success("Logged in successfully");
        return redirect("/");        
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || "please double check your credentials"
        toast.error(errorMessage);
        return null
    }}


const Login = () =>{    
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const loginAsGuestUser = async () => {
        try {
            const response = await customFetch.post("auth/local",{
                identifier: "test@test.com",
                password: "secret"
            });
            dispatch(loginUser(response.data));           
            toast.success("Logged in as guest successfully");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Guest user login error. Please try again!")
            
        }
    }
    return <section className="h-screen grid place-items-center">
    <Form method="POST" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-6">
        <h4 className="text-center font-bold text-3xl">Login</h4>
        <div>
        <FormInput type="email" name="identifier" label="email"  />
        <FormInput type="password" name="password" label="password"  />
        </div>
        
        <div className="mt-4">
            <SubmitBtn text="Login"/>            
        </div>
        <div>
        <button type="button" className="btn btn-secondary btn-block" onClick={loginAsGuestUser}>
                guest user
        </button>        
        </div>
        <p className="text-center">
            Not a member yet? <Link to="/register" className="ml-2 link link-hover link-primary capitalize"> register</Link>
        </p>
    </Form>
    </section>
}




export default Login;
export {Action};