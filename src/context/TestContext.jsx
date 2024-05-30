import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const TestContext = createContext(null);

const ContextProvider = ({ children }) => {
    // https://oqdevpy.pythonanywhere.com/api/v1/random-test/?token=wRukw0fIIM
    const [active, setActive] = useState(true);
    const URL = 'http://89.104.68.209:8012/api/v1'

    //variants
    const [variants, setVariants] = useState(null);
    const fetchVariants = async () => {
        const res = await fetch(`${URL}/test-variant/`);
        const data = await res.json();
        setVariants(data);
    }

    const [variant, setVariant] = useState(null);
    const fetchVariant = async (index) => {
        const res = await fetch(`${URL}/test/?page=${index}&token=${localStorage.getItem('quizToken')}`);
        const data = await res.json();
        setVariant(data);
    }

    // random tests 

    const [randomTests, setRandomTests] = useState(null);
    const fetchRandomTests = async () => {
        const res = await fetch(`${URL}/random-test/?token=${localStorage.getItem('quizToken')}`);
        const data = await res.json();
        setRandomTests(data);
    }

    // lang
    const [lang, setLang] = useState(localStorage.getItem('lang') || 'uz');
    const changeLang = (lang) => {
        setLang(lang);
        localStorage.setItem('lang', lang);
    }

    // get translation
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        const fetchTranslations = async () => {
            try {
                const response = await fetch('/translations.json');
                const data = await response.json();
                setTranslations(data);
            } catch (error) {
                console.error("Error fetching translations:", error);
            }
        };

        fetchTranslations();
    }, []);
    const getTranslation = (key) => {
        return translations[key] ? translations[key][lang] : key;
    };

    const getTranslationValue = (item, key) => {
        return lang == 'uz' ? item[key + '_uz'] : item[key + '_ru']
    }



    return (
        <TestContext.Provider
            value={{
                active,
                setActive,
                variants,
                fetchVariants,
                fetchVariant,
                variant,
                randomTests,
                fetchRandomTests,
                lang,
                changeLang,
                getTranslation,
                getTranslationValue
            }}
        >
            {children}
        </TestContext.Provider>
    )
}

const useCustomContext = () => useContext(TestContext)

export { ContextProvider, useCustomContext }
