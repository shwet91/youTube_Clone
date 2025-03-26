
import Trial from "./components/Trial"
import VideoPlayer from "./components/VideoPlayer"
import UpdateUserDetails from "./components/UserSettings/UpdateUserDetails"
import SignupForm from "./pages/Signup"
import LoginForm from "./pages/Login"
import Layout from "./components/sidebar/Sidebar"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh ">
       <Trial></Trial>
      <VideoPlayer></VideoPlayer>
      <UpdateUserDetails></UpdateUserDetails>
    </div>
  )
}

export default App
