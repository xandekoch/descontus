import React, { createContext, useContext, useEffect, useState } from 'react';
import { decodeToken } from "react-jwt";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({userId: null, isAdmin: false });

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('session') || null);
    if (isValidSession(session)) {
      authenticate(session);
    } else {
      logout();
    }
  }, []);

  const authenticate = (session) => {
    if (isValidSession(session)) {
      setIsAuthenticated(true);
      setUser({userId: session.user._id, isAdmin: session.user.isAdmin });
      localStorage.setItem('session', JSON.stringify(session));
    } else {
      logout();
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser({userId: null, isAdmin: false });
    localStorage.removeItem('session');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
  }
  return context;
};

export const isValidSession = (session) => {
  try {
    if(!session) return false;

    const decodedToken = decodeToken(session.token);
    const exp = decodedToken.exp;

    if (decodedToken) {
      if (exp < (new Date().getTime() + 1) / 1000) return false;
      return true;
    }

    return false;
  } catch (error) {
    console.error('Erro ao validar sessão:', error);
    return false;
  }
};

export const getAccessToken = () => {
  const sessionString = localStorage.getItem('session');
  if (sessionString) {
    const session = JSON.parse(sessionString);
    return session.token;
  } else {
    console.error('Sessão não encontrado')
  }
};