import { Outlet } from "react-router-dom";


const HomeLayout = () => {
    return (<><nav> <span className="text-4xl text-primary"> Dimzzy </span></nav><Outlet /></>)
    
}

export default HomeLayout;