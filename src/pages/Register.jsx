import { Form, Link, redirect } from "react-router-dom";
import {FormInput, SubmitBtn} from "../components"
import { customFetch } from "../utils";
import { toast } from "react-toastify";

const action = async({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    try {
        const response = await customFetch.post("auth/local/register", data);
        toast.success("User account created successfully");
        return redirect("/login");        
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || "please double check your credentials"
        toast.error(errorMessage);
        return null
    }
}

const Register = () =>{
    
    return <section className="h-screen grid place-items-center">
        <Form method="POST" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
            <h4 className="text-center font-bold text-3xl">Register</h4>
            <div>
                <FormInput type="text" name="username" label="username" defaultValue="Dims1 obi1" />
                <FormInput type="email" name="email" label="email" defaultValue="dims1@gmail.com"/>
                <FormInput type="password" name="password" label="password" defaultValue="passw0rd"/>
            </div>
            
            <div className="mt-4">
                <SubmitBtn text="Register"/>            
            </div>
            <div>
                <p className="text-center">
                    Already a member? <Link to="/login" className="ml-2 link link-hover link-primary capitalize"> login</Link>
                </p>
            </div>
        </Form>
    </section>
}

export default Register;
export {action};