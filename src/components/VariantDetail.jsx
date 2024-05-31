import React, { useEffect } from 'react'
import { useCustomContext } from '../context/TestContext'
import { useParams } from 'react-router-dom';
import SliderComponent from './SliderComponent';
import Loader from './Loader';

function VariantDetail() {
    const param = useParams();
    const { fetchVariant, variant, loading } = useCustomContext();
    useEffect(() => { fetchVariant(+param.id + 1) }, []);
    if(loading) return <Loader />
    if (!variant || variant.length === 0) return null
    return (
        <SliderComponent variant={variant} />
    )
}

export default VariantDetail