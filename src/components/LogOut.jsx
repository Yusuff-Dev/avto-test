import { MdLogout } from "react-icons/md";
import { useCustomContext } from "../context/TestContext";

function LogOut() {
    const {handleLogout, active} = useCustomContext();
    return (
        <button
        onClick={handleLogout}
            className="flex items-center gap-1 text-blue-900 uppercase font-semibold">
            <MdLogout size={24} /> {
                active && 'chiqish'
            }
        </button>
    )
}

export default LogOut