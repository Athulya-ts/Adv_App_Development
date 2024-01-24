// import AppName from "./Components/Auth/AppName"
import AppName from "./Components/Auth/AppName"
import SignUp from "./Components/Auth/SignUp"
import SignIn from "./Components/Auth/SignIn"
import UserLandingPage from "./Components/UserLandingPage"
import AdminLandingPage from "./Components/AdminLandingPage"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <BrowserRouter>
    <div>
      {/* <AppName/> */}
      <Routes>
        <Route path = "/" element = {<AppName/>}/>
        <Route path = "/Components/Auth/SignUp" element = {<SignUp/>}/>
        <Route path = "/Components/Auth/SignIn" element = {<SignIn/>}/>
        <Route path = "/Components/UserLandingPage" element = {<UserLandingPage/>}/>
        <Route path = "/Components/AdminLandingPage" element = {<AdminLandingPage/>}/>
        <Route path = "/Components/Navbar" element = {<Navbar/>}/>
      </Routes>
    </div>
      </BrowserRouter>
  )
}

export default App