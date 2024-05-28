import { Route, Routes } from "react-router-dom"
import Sidebar from "./Sidebar"
import Variants from "./Variants"
import VariantDetail from "./VariantDetail"
import SliderComponent from "./SliderComponent"

function Hero() {
  return (
    <div className="flex gap-4 items-start">
      <Sidebar />
        <Routes>
          <Route path="/" element={<Variants />} />
          <Route path="/variants/:id" element={<VariantDetail />} />
          <Route path="/test" element={<SliderComponent />} />
        </Routes>
    </div>
  )
}

export default Hero