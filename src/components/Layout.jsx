import React, { useEffect } from 'react'
import { useCustomContext } from '../context/TestContext'
import { Link } from 'react-router-dom';

function Layout() {
    const { variants, fetchVariants } = useCustomContext();
    useEffect(()=>{ fetchVariants() }, []);
    if (!variants) return null;
    return (
        <div>
            {
                variants.map((variant, index) => {
                    return <Link to={`variants/${index}`} key={index} className='border'>{variant?.name}</Link>
                })
            }
        </div>
    )
}

export default Layout