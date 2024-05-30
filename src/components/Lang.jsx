import React from 'react'
import { useCustomContext } from '../context/TestContext';

function Lang() {
    const { lang, changeLang } = useCustomContext();
    
    return (
        <div className="w-min">
            <select onChange={(e) => changeLang(e.target.value)} defaultValue={lang} className="select select-bordered text-lg text-blue-900 border-blue-900 !outline-blue-900">
                <option value='uz'>UZ</option>
                <option value='ru'>RU</option>
            </select>
        </div>
    )
}

export default Lang