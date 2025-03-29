
import Trial from "./components/Trial"
import VideoPlayer from "./components/VideoSection/VideoPlayer"
import UpdateUserDetails from "./components/UserSettings/UpdateUserDetails"
import Logout from "./components/Auth/Logout"
import ChangeCoverImage from "./components/UserSettings/ChangeCoverImage"
import ChangeAvatar from "./components/UserSettings/ChangeAvatar"
import ChangePassword from "./components/UserSettings/ChangePassword"
import Store from "./components/Store"
import SignupForm from "./components/Auth/SignupForm"
import LoginForm from "./components/Auth/LoginForm"
import Layout from "./components/sidebar/Sidebar"
import UploadVideo from "./components/VideoSection/UploadVideo"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Header from "./components/DesignSection/Header"
import  {AppSidebar}  from "./components/DesignSection/Sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="w-screen h-screen bg-black">
       {/* <Trial></Trial> */}
       {/* <SignupForm></SignupForm> */}
       {/* <LoginForm></LoginForm> */}
       {/* <Logout></Logout> */}
      {/* <UpdateUserDetails></UpdateUserDetails> */}
      {/* <ChangePassword></ChangePassword> */}
      {/* <ChangeAvatar></ChangeAvatar> */}
      {/* <ChangeCoverImage></ChangeCoverImage> */}
      {/* <Store></Store> */}
      {/* <UploadVideo></UploadVideo> */}
      <Header></Header>
      {/* <Login></Login> */}
      <Outlet></Outlet>


    </div>
  )
}

export default App
