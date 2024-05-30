import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify"; 

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const URL = 'http://89.104.68.209:8012/api/v1'
    const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('quizToken')? true : false);
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

    const handleSubmit = async (e, fn) => {
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
                window.localStorage.setItem('quizToken', data.token);
                setIsLoggedin(true);
                setFormData({
                    phone: '',
                    password: ''
                });
                fn('/');
                toast.success('Hush kelibsiz.');
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
    const logout = () => {
        window.localStorage.clear();
        setIsLoggedin(false);
        toast.warning('Profildan chiqib ketdingiz.');
    }


    return (
        <AuthContext.Provider value={{
            isLoggedin,
            loading,
            formData,
            handleChange,
            handleSubmit,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};