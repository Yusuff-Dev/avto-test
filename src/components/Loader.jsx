import { FadeLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex justify-center py-10">
        <FadeLoader color="#1e3a8a" size={50} />
    </div>
  )
}

export default Loader