import { createContext, useContext, useEffect, useState } from 'react'

const TestContext = createContext(null);

const ContextProvider = ({ children }) => {
    const [active, setActive] = useState(true);
    const [loading, setLoading] = useState(true);
    const URL = 'http://89.104.68.209:8012/api/v1'

    //variants
    const [variants, setVariants] = useState(null);
    const fetchVariants = async () => {
        const res = await fetch(`${URL}/test-variant/`);
        const data = await res.json();
        setVariants(data);
        setLoading(false);
    }

    const [variant, setVariant] = useState(null);
    const fetchVariant = async (index) => {
        const res = await fetch(`${URL}/test/?page=${index}&token=${localStorage.getItem('quizToken')}`);
        const data = await res.json();
        setVariant(data);
        setLoading(false);
    }

    // random tests 

    const [randomTests, setRandomTests] = useState(null);
    const fetchRandomTests = async () => {
        const res = await fetch(`${URL}/random-test/?token=${localStorage.getItem('quizToken')}`);
        const data = await res.json();
        setRandomTests(data);
        setLoading(false);
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
                getTranslationValue,
                loading,
            }}
        >
            {children}
        </TestContext.Provider>
    )
}

const useCustomContext = () => useContext(TestContext)

export { ContextProvider, useCustomContext }
