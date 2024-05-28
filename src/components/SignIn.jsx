import Logo from '../assets/removebg.png'
import { useCustomContext } from '../context/TestContext'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TbPasswordMobilePhone } from "react-icons/tb";

function SignIn() {
    const {handleChange, handleSubmit, phone, password} = useCustomContext();

    return (
        <div className='flex items-center justify-center h-screen container mx-auto'>
            <form 
            onSubmit={handleSubmit}
            className='basis-[400px] flex flex-col gap-4 shadow-md py-6 px-4 relative'>
                <div className='w-36 mx-auto mb-8'>
                    <img src={Logo} alt="logo" />
                </div>
                <label className="input input-bordered flex items-center gap-2">
                    <div>
                        <IoPhonePortraitOutline size={18} color='grey'/>
                    </div>
                    <input 
                    type="text" 
                    className="grow" 
                    placeholder="Phone number"
                    id='phone'
                    value={phone} 
                    onChange={handleChange}
                    required/>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <div>
                        <TbPasswordMobilePhone size={20} color='grey'/>
                    </div>
                    <input 
                    type="password" 
                    className="grow" 
                    placeholder='Password'
                    id='password' 
                    value={password}
                    onChange={handleChange} 
                    required/>
                </label>

                <button type='submit' className="disabled:cursor-not-allowed px-4 py-2 rounded-sm text-white bg-blue-800 block mx-auto uppercase mt-5">Kirish</button>
            </form >
        </div>
    )
}

export default SignIn