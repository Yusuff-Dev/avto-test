import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify';

const TestContext = createContext(null);

const ContextProvider = ({ children }) => {
    // https://oqdevpy.pythonanywhere.com/api/v1/random-test/?token=wRukw0fIIM
    const [active, setActive] = useState(true);
    const URL = 'http://89.104.68.209:8012/api/v1'
    const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('quizToken') || false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    });

    const { phone, password } = formData;

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${URL}/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('quizToken', data.token);
                setIsLoggedin(true);
                toast.success('Hush kelibsiz');
                setFormData({
                    name: '',
                    email: ''
                });
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    // logout functions
    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedin(false);
    }

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

    return (
        <TestContext.Provider
            value={{
                handleSubmit,
                handleChange,
                phone,
                password,
                isLoggedin,
                loading,
                handleLogout,
                active,
                setActive,
                variants,
                fetchVariants,
                fetchVariant,
                variant
            }}
        >
            {children}
        </TestContext.Provider>
    )
}

const useCustomContext = () => useContext(TestContext)

export { ContextProvider, useCustomContext }
