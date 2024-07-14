import Home from "./Home"
import Navbar from "./NavBar"
import Login from "./Login"
import Signup from "./Signup"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <div>
      <Navbar/>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/home" element={<Home/>}></Route>
          <Route path = "/login" element={<Login/>}></Route>
          <Route path = "/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App