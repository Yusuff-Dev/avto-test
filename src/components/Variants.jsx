import { useEffect } from "react";
import Variant from "./Variant"
import { useCustomContext } from "../context/TestContext";

function Variants() {
    const { fetchVariants, variants } = useCustomContext();
    useEffect(() => { fetchVariants() }, []);
    if (!variants || variants.length === 0) return null;
    return (
        <div className="px-5 w-full">
            <Variant variants={variants} />
        </div>
    )
}

export default Variants