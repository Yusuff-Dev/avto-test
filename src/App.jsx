import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App

// <Routes>
    //   <Route element={<PrivateRoute />}>
    //     <Route path="/" element={<Navbar />} />
    //     <Route path="/variants/:id" element={<VariantDetail />} />
    //     <Route path="/test" element={<RandomTest />} />
    //   </Route>
    //   <Route path="/login" element={<SignIn />} />
    //   <Route path="*" element={<NotFound />} />
    // </Routes>

