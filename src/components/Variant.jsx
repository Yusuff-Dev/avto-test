import { Link } from "react-router-dom"

function Variant({ variants }) {
    return (
        <>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-3 lg:grid-cols-4'>
                {
                    variants.map((variant, index) => {
                        return (
                            <li key={index} className="shadow-md p-2 rounded-md hover:bg-blue-200 duration-500">
                                <Link to={`/variants/${index}`}>
                                    <h3>{variant?.name}</h3>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Variant