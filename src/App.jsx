import { Route, Routes } from "react-router"
import DashbordLayout from "./layout/DashbordLayout"
import HomeDashbord from "./pages/HomeDashbord"
import CreateProducts from "./pages/CreateProducts"
import CreateCategory from "./pages/CreateCategory"
import Error from "./Error"
import Register from './pages/Register'
import LogIn from "./pages/LogIn";



function App() {
  return (
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<LogIn/>}/>
    <Route path="/" element={<DashbordLayout/>}>
      <Route index element={<HomeDashbord/>}/>
      <Route path="/create-product" element={<CreateProducts/>}/>
      <Route path="/edit-product/:id" element={<CreateProducts/>}/>
      <Route path="/create-category" element={<CreateCategory/>}/>
      <Route path="/edit-category/:id" element={<CreateCategory/>}/>
      <Route path="/*" element={<Error/>}/>

    </Route>
    </Routes>
  )
}

export default App