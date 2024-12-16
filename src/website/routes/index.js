import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, useLocation } from "react-router-dom"
import Home from "../pages/home"
import Signup from "../pages/signup"
import VerifyOtp from "../pages/varifyOtp"
import ForgotPassword from "../pages/passwordForget"
import ResetPassword from "../pages/passwordForget/ResetPassword"
import UserDashboard from "../pages/userDashboard/dashboard"
import AllOffers from "../pages/userDashboard/offers/AllOffer"
import UserProfile from "../pages/userDashboard/profile"
import Cashout from "../pages/userDashboard/cashout"
import Protected from "./protected"
import { isAuthenticated } from "./helpers"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LeaderBoard from "../pages/userDashboard/leaderboard"
import Rewards from "../pages/userDashboard/rewards"
import Affiliates from "../pages/userDashboard/affiliates"
import DashboardHeader from "../components/userDdashboard/DashboardHeader"
import UserSidebar from "../components/userDdashboard/UserSidebar"
import FooterMenu from "../components/userDdashboard/FooterMenu"

const Layout = () => {
    const location = useLocation()
    const excludedPaths = ['/dashboard', '/alloffers', '/cashout', '/userprofile', '/leaderboard', '/rewards','/affiliates'];
    const isExcluded = excludedPaths.includes(location.pathname);
    return (
        <>
            {!isExcluded && <Header />}
                <Outlet /> {/* This renders the nested route content */}
            {!isExcluded && <Footer />}
        </>
    );  
}

const LayoutDashboard = () => {
    // const location = useLocation()
    // const excludedPaths = ['/dashboard', '/alloffers', '/cashout', '/userprofile', '/leaderboard', '/rewards','/affiliates'];
    // const isExcluded = excludedPaths.includes(location.pathname);
    return (
        <>
           <DashboardHeader />
            <div className="main flex">
                <UserSidebar />
                <div className='dashboard-wrapper MD:p-6 p-4'>
                    <Outlet />
            <FooterMenu />
                </div>
            </div>
        </>
    );  
}
const router = createBrowserRouter(
    createRoutesFromElements(
       <>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} loader={async () => await isAuthenticated()} /> 
            <Route path="signup" element={<Signup />} loader={async () => await isAuthenticated()}> </Route>
            <Route path="verifyotp" element={<VerifyOtp />} loader={async () => await isAuthenticated()}> </Route>
            <Route path="forgotpassword" element={<ForgotPassword />} loader={async () => await isAuthenticated()}> </Route>
            <Route path="resetpassword" element={<ResetPassword />} loader={async () => await isAuthenticated()}> </Route>
            <Route path="*" element={<h1 className="text-3xl">Page not found</h1>} />
            </Route>
            <Route path="/" element={<LayoutDashboard />}>
            <Route element={<Protected />}>
                <Route path="dashboard" element={<UserDashboard/>}> </Route>
                <Route path="alloffers" element={<AllOffers/>}> </Route>
                <Route path="userprofile" element={<UserProfile/>}> </Route>
                <Route path="cashout" element={<Cashout/>}> </Route>
                <Route path="leaderboard" element={<LeaderBoard/>}> </Route>
                <Route path="rewards" element={<Rewards/>}> </Route>
                <Route path="affiliates" element={<Affiliates/>}> </Route>
            </Route>
            </Route>
        
        </>
    )
)

const Index = ()=> {
    return (
        <>
           <RouterProvider router={router}/>
        </>
    ) 
 
}
export default Index