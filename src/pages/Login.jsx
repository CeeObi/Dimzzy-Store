import {FormInput, SubmitBtn} from "../components"
import { Form, Link } from "react-router-dom";


const Login = () =>{    
    return <section className="h-screen grid place-items-center">
    <Form method="POST" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-6">
        <h4 className="text-center font-bold text-3xl">Login</h4>
        <div>
        <FormInput type="email" name="identifier" label="email" defaultValue="test@test.com" />
        <FormInput type="password" name="password" label="password" defaultValue="secret" />
        </div>
        
        <div className="mt-4">
            <SubmitBtn text="Login"/>            
        </div>
        <div>
        <button type="button" className="btn btn-secondary btn-block">
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