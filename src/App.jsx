import { Route, Routes } from "react-router"
import DashbordLayout from "./layout/DashbordLayout"
import HomeDashbord from "./pages/HomeDashbord"
import CreateProducts from "./pages/CreateProducts"
import CreateCategory from "./pages/CreateCategory"
import Error from "./Error"


function App() {
  return (
    <Routes>
    <Route path="/" element={<DashbordLayout/>}>
      <Route index element={<HomeDashbord/>}/>
      <Route path="/create-product" element={<CreateProducts/>}/>
      <Route path="/edit-product/:id" element={<CreateCategory/>}/>
      <Route path="/create-category" element={<CreateCategory/>}/>
      <Route path="/*" element={<Error/>}/>

    </Route>
    </Routes>
  )
}

export default App