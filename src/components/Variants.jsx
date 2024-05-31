import { useEffect } from "react";
import Variant from "./Variant"
import { useCustomContext } from "../context/TestContext";
import Loader from "./Loader";

function Variants() {
    const { fetchVariants, variants, loading } = useCustomContext();
    useEffect(() => { fetchVariants() }, []);
    if(loading) return <Loader />
    if (!variants || variants.length === 0) return null;
    return (
        <div className="container">
            <Variant variants={variants} />
        </div>
    )
}

export default Variants