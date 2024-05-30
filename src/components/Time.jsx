import React, { useState, useEffect } from 'react';
import { useCustomContext } from '../context/TestContext';

function Time({ onTimeEnd }) {
    const {getTranslation} = useCustomContext();
    const [time, setTime] = useState({ minutes: 25, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => {
                const { minutes, seconds } = prevTime;

                if (seconds > 0) {
                    return { minutes, seconds: seconds - 1 };
                }

                if (minutes > 0) {
                    return { minutes: minutes - 1, seconds: 59 };
                }

                clearInterval(timer);
                onTimeEnd();

                return prevTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [onTimeEnd]);

    const { minutes, seconds } = time;

    return (
        <div>
            {
                minutes === 0 && seconds === 0 ? <div className='text-2xl font-bold text-center text-red-600'>{getTranslation('time_end')}</div> :
                    <div className='flex justify-center items-center gap-2'>
                        <div className='text-2xl font-bold'>{String(minutes).padStart(2, '0')}</div>
                        <div className='text-2xl font-bold'>:</div>
                        <div className='text-2xl font-bold'>{String(seconds).padStart(2, '0')}</div>
                    </div>
            }
        </div>
    );
}

export default Time;
