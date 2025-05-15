import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Result from './pages/Result'  // result page for city+season search
import Dashboard from './pages/Dashboard' // optional: add if you want pokemon name search as separate page

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="result" element={<Result />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> // if needed */}
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
