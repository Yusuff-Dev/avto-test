import React, { useEffect } from 'react'
import { useCustomContext } from '../context/TestContext'
import { useParams } from 'react-router-dom';
import SliderComponent from './SliderComponent';

function VariantDetail() {
    const param = useParams();
    const { fetchVariant, variant } = useCustomContext();
    useEffect(() => { fetchVariant(+param.id + 1) }, []);
    if (!variant || variant.length === 0) return null
    return (
        <SliderComponent variant={variant} />
    )
}

export default VariantDetail