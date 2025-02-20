import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // ✅ Load user from localStorage safely & validate token
    const loadUser = () => {
        try {
            const storedUser = localStorage.getItem("user");
            const token = localStorage.getItem("token");

            if (storedUser && token) {
                setUser(JSON.parse(storedUser));
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error("Error loading user:", error);
            setUser(null);
        }
    };

    // ✅ Load user on mount & ensure reactivity
    useEffect(() => {
        loadUser();
    }, []);

    // ✅ Sync user across tabs/windows
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === "user" || event.key === "token") {
                loadUser();
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    // ✅ Login function (saves user & token + ensures UI updates)
    const login = (userData, token) => {
        if (userData && token) {
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("token", token);
            setUser(userData);
        }
    };

    // ✅ Logout function (clears user & token + ensures UI updates)
    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, refreshUser: loadUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// ✅ Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
