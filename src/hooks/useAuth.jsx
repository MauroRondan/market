import React, { createContext, useContext, useState } from 'react';

// Creamos un contexto para manejar la autenticación
const AuthContext = createContext();

// Proveedor de autenticación que envuelve la aplicación
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(''); // Estado del usuario autenticado

    // Función para iniciar sesión
    const login = (userData) => {
        // Aquí podrías hacer una llamada a un servidor para autenticar al usuario
        setUser(userData);
    };

    // Función para cerrar sesión
    const logout = () => {
        // Aquí podrías realizar cualquier limpieza necesaria al cerrar sesión
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext);
