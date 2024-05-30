import React, { useEffect } from 'react'
import SliderComponent from './SliderComponent'
import { useCustomContext } from '../context/TestContext'
function RandomTest() {
    const { randomTests, fetchRandomTests } = useCustomContext();
    useEffect(() => { fetchRandomTests() }, []);

    if (!randomTests || randomTests.length === 0) return null;

    return (
        <>
            <SliderComponent variant={randomTests} />
        </>
    )
}

export default RandomTest