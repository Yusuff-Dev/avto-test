import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import { LiaBarsSolid } from "react-icons/lia";
import { LiaTimesSolid } from "react-icons/lia";
import { useCustomContext } from '../context/TestContext'
import Lang from './Lang'
import LogOut from './LogOut';

function Navbar() {
    const { active, setActive, getTranslation } = useCustomContext();
    return (
        <nav className="bg-white py-2 shadow-md sticky top-0 z-50">
            <div className="container flex items-center justify-between">
                <div className='w-16'>
                    <Logo />
                </div>
                <div className="hidden md:flex grow justify-center gap-5">
                    <NavLink to='/' className={`flex items-center uppercase text-blue-900 font-semibold`}>
                        {
                            active && getTranslation('templates')
                        }
                    </NavLink>
                    <NavLink to='/test' className={`flex items-center uppercase text-blue-900 font-semibold`}>
                        {
                            active && getTranslation('exam')
                        }
                    </NavLink>
                </div>
                <div className="flex items-center gap-4">
                    <div className='hidden md:flex gap-4'>
                        <Lang />
                        <LogOut />
                    </div>
                    <button
                        onClick={() => setActive(!active)}
                        className='btn btn-link md:hidden'>
                        {
                            active ? <LiaBarsSolid className="text-3xl text-blue-900" /> :
                                <LiaTimesSolid className="text-3xl text-blue-900" />
                        }
                    </button>
                </div>
            </div>
            <div className={`${active ? 'h-0 ' : 'h-[150px]'} overflow-hidden origin-top duration-200 absolute w-full bottom-0 translate-y-full bg-white shadow-md rounded-b-lg md:hidden`}>
                <div className="container flex flex-col gap-5">
                    <div className="flex flex-col justify-center gap-5 items-start">
                        <NavLink
                        onClick={() => setActive(!active)}
                        to='/' className={`flex items-center uppercase text-blue-900 font-semibold`}>
                            {
                                getTranslation('templates')
                            }
                        </NavLink>
                        <NavLink 
                        onClick={() => setActive(!active)}
                        to='/test' className={`flex items-center uppercase text-blue-900 font-semibold`}>
                            {
                                getTranslation('exam')
                            }
                        </NavLink>
                    </div>

                    <div className='flex gap-5 items-center justify-between'>
                        <Lang />
                        <LogOut />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar