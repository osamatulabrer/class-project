import { Route, Routes } from "react-router"
import DashbordLayout from "./layout/DashbordLayout"
import HomeDashbord from "./pages/dashboard/home/HomeDashbord.jsx"
import Products from "./pages/dashboard/product/Create.jsx"
import Category from './pages/dashboard/category/Create.jsx'
import Error from "./Error"
import Register from './pages/auth/Register'
import Private from './pages/auth/Private'
import LogIn from './pages/auth/LogIn'






function App() {
  return (
    <Routes>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<LogIn/>}/>
      <Route  element={<Private/>}>
        <Route path="/" element={<DashbordLayout/>}>
          <Route index element={<HomeDashbord/>}/>
          <Route path="create-product" element={<Products/>}/>
          <Route path="edit-product/:id" element={<Products/>}/>
          <Route path="create-category" element={<Category/>}/>
          <Route path="edit-category/:id" element={<Category/>}/>
        </Route>
          <Route path="*" element={<Error/>}/>
      </Route>
   
    </Routes>
  )
}

export default App