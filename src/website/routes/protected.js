import { Navigate, Outlet } from "react-router-dom"

const Protected = ()=> {
    const auth = localStorage.getItem("opinionUser")
    return auth ? <Outlet /> : <Navigate to='/' />
}

export default Protected