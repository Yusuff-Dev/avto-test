import { GiBookshelf } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useCustomContext } from "../context/TestContext"
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import LogOut from './LogOut'
import Lang from "./Lang";

function Sidebar() {
    const { active, setActive } = useCustomContext();
    return (
        <div className={`bg-white p-4 sticky top-0 pt-10 h-screen shadow-lg rounded-r-xl flex flex-col gap-5 ${active && 'w-[250px]'}`}>
            <div className="flex items-center justify-between">
                <Logo />
                <div 
                onClick={()=>setActive(!active)}
                className="translate-x-full text-blue-900 bg-blue-900 rounded-r-lg py-2 shadow-md cursor-pointer">
                    {
                        active ? <IoIosArrowBack fill="white" size={28}/> : <IoIosArrowForward fill="white" size={28} />
                    }
                </div>
            </div>
            <NavLink to='/' className={`flex items-center gap-2 uppercase text-blue-900 font-semibold rounded-md p-2`}>
                <GiBookshelf size={32} />
                {
                    active && 'Shablonlar'
                }
            </NavLink>
            <NavLink to='/test' className={`flex items-center gap-2 uppercase text-blue-900 font-semibold rounded-md p-2`}>
                <IoSchoolSharp size={32} />
                {
                    active && 'Imtihon'
                }
            </NavLink>
            <div>
                <Lang />
            </div>
            <div className="mt-auto">
                <LogOut />
            </div>
        </div>
    )
}

export default Sidebar