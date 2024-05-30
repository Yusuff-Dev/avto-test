import { Outlet } from "react-router-dom"
import Variants from '../components/Variants'

function Home() {
  return (
    <div>
      <Variants/>
      <Outlet />
    </div>
  )
}

export default Home