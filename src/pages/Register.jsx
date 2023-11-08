import { Form, Link } from "react-router-dom";
import {FormInput, SubmitBtn} from "../components"

const Register = () =>{
    return <section className="h-screen grid place-items-center">
        <Form method="POST" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
            <h4 className="text-center font-bold text-3xl">Register</h4>
            <div>
                <FormInput type="text" name="username" label="username"  />
                <FormInput type="email" name="email" label="email"/>
                <FormInput type="password" name="password" label="password"/>
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