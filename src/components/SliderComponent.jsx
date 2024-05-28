import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const SliderComponent = ({ variant }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? variant.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === variant.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePaginationClick = (index) => {
        setActiveIndex(index);
    };

    const checkAnswers = (item) => {
        setIsDisabled(true);
        console.log(item);
    }

    if (variant === null) return null;

    return (
        <div className="container py-5 flex flex-col gap-5">
            <div className='flex flex-col gap-5'>
                <h2 className="text-xl font-bold">{variant[activeIndex].name_ru}</h2>
                <div className='w-full h-[400px]'>
                    {
                        variant[activeIndex].image && (<img
                            src={variant[activeIndex].image}
                            alt={variant[activeIndex].image}
                            className='object-contain w-full h-full'
                        />)
                    }
                </div>

                {/* shu yerda ishlayabman */}
                <div className="flex flex-col gap-2 md:w-1/3 sm:w-1/2 w-full">
                    {
                        variant[activeIndex].questions.map((answer, index) => (
                            <button
                                disabled={isDisabled}
                                onClick={() => checkAnswers(answer, index)}
                                key={index} className={`disabled:btn-error  btn rounded-sm border-blue-900 text-blue-900`}>
                                {answer.question_ru}
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className='flex items-center gap-2 justify-between'>
                <button className="btn rounded-sm border-blue-900 text-blue-900" onClick={handlePrev}>
                    <MdKeyboardDoubleArrowLeft size={20} />
                </button>
                <button className="btn rounded-sm border-blue-900 text-blue-900" onClick={handleNext}>
                    <MdKeyboardDoubleArrowRight size={20} />
                </button>
            </div>

            <div className="flex flex-wrap gap-1 items-center justify-center">
                {variant.map((_, index) => (
                    <button
                        key={index}
                        className={`w-10 py-2 border rounded-sm btn border-blue-900 text-blue-900 ${index === activeIndex ? 'scale-110' : ''}`}
                        onClick={() => handlePaginationClick(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SliderComponent;