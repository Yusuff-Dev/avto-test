import { MdLogout } from "react-icons/md";
import { useCustomContext } from "../context/TestContext";
import { useAuth } from "../context/AuthContext";

function LogOut() {
    const { logout } = useAuth();
    const { getTranslation } = useCustomContext();
    const handleLogout = () => {
        logout();
    }
    return (
        <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-blue-900 uppercase font-semibold">
            <MdLogout size={24} /> {
                getTranslation('logout')
            }
        </button>
    )
}

export default LogOut