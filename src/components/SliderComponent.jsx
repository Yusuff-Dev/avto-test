import React, { useState } from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import Time from './Time';
import { useCustomContext } from '../context/TestContext';

const SliderComponent = ({ variant }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [answered, setAnswered] = useState({});
    const [timeEnded, setTimeEnded] = useState(false);
    const [trueCount, setTrueCount] = useState(0);
    const { getTranslation, getTranslationValue } = useCustomContext();
    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? variant.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === variant.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePaginationClick = (index) => {
        setActiveIndex(index);
    };

    const handleTimeEnd = () => {
        setTimeEnded(true);

    };

    const checkAnswers = (item, index, activeIndex) => {
        setAnswered((prevAnswered) => ({ ...prevAnswered, [activeIndex]: index }));
        if (item.is_true) {
            setTrueCount((prevTrueCount) => prevTrueCount + 1);
        }
    };

    const isAnswered = (index) => {
        return answered[index] !== undefined;
    };

    const checkButton = (index) => {

        if (answered[index] !== undefined) {
            return variant[index].questions[answered[index]].is_true ? '#43A047' : '#E53935';
        }

        return timeEnded ? '#E53935' : 'white';
    };

    const color = (index, activeIndex) => {
        if (timeEnded || answered[activeIndex] !== undefined) {
            if (index === answered[activeIndex]) {
                return variant[activeIndex].questions[index].is_true ? '#43A047' : '#E53935';
            }
            return variant[activeIndex].questions[index].is_true ? '#43A047' : 'transparent';
        }
        return 'transparent';
    };

    if (variant === null) return null;

    return (
        <div className="container py-5 flex flex-col gap-5">
            <div className='flex items-center gap-2 justify-center'>
                {
                    variant.length == Object.keys(answered).length ? <div className='text-xl font-bold text-center text-blue-600'>{getTranslation('result') + trueCount + '/' + variant.length}</div> :
                        <div className='flex gap-2'><Time onTimeEnd={handleTimeEnd} />
                            {timeEnded && (
                                <div className='text-xl font-bold text-center text-blue-600'>{getTranslation('result') + trueCount + '/' + variant.length}</div>
                            )}</div>
                }
            </div>

            <div className='flex flex-col gap-5'>
                <div className="flex flex-wrap gap-1 items-center justify-center">
                    {variant.map((_, index) => (
                        <button
                            style={{
                                background: checkButton(index),
                                color: checkButton(index) === 'white' ? '#1e3a8a' : 'white'
                            }}
                            key={index}
                            className={`w-10 py-2 border rounded-sm btn border-blue-900 text-blue-900 ${index === activeIndex ? 'scale-110' : ''}`}
                            onClick={() => handlePaginationClick(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <div className='flex items-center gap-2 justify-between'>
                    <button className="btn bg-white rounded-sm border-blue-900 text-blue-900" onClick={handlePrev}>
                        <MdKeyboardDoubleArrowLeft size={20} />
                    </button>
                    <button className="btn bg-white rounded-sm border-blue-900 text-blue-900" onClick={handleNext}>
                        <MdKeyboardDoubleArrowRight size={20} />
                    </button>
                </div>
                <h2 className="text-xl font-bold">{getTranslationValue(variant[activeIndex], "name")}</h2>
                {
                    variant[activeIndex].image && <div className='w-full  md:h-[400px]'>
                        <img
                            src={variant[activeIndex].image}
                            alt={variant[activeIndex].image}
                            className='object-contain w-full h-full'
                        />
                    </div>
                }

                <div className="flex flex-col gap-2 md:w-1/3 sm:w-1/2 w-full">
                    {variant[activeIndex].questions.map((answer, index) => (
                        <button
                            disabled={isAnswered(activeIndex) || timeEnded}
                            onClick={() => checkAnswers(answer, index, activeIndex)}
                            key={index}
                            className={`btn rounded-sm border-blue-900 text-blue-900 `}
                            style={{
                                background: color(index, activeIndex),
                                border: '1px solid #000',
                                color: isAnswered(activeIndex) || timeEnded ? '#000' : '#1e3a8a'
                            }}
                        >
                            {getTranslationValue(answer, "question")}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SliderComponent;
