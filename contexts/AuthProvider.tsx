'use client'
import { createContext, useContext, useEffect, useState } from "react";

// Define context type
type AuthContextType = {
  email: string | null;
  userStatus: string | null;
  login: (token: string, status: string) => void;
  logout: () => void;
};

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider Component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState<string | null>('Bug');
  const [userStatus, setUserStatus] = useState<string | null>('Bug');

  useEffect(() => {
    // Load token from localStorage when app starts
    const storedToken = localStorage.getItem("udmddbhabdg73r83yr5y3");
    if (storedToken) {
      setEmail(storedToken);
    }else{
      setEmail(null);
    }

    // Load token from localStorage when app starts
    const storedStatus = localStorage.getItem("userStatus");
    if (storedStatus) {
      setUserStatus(storedStatus);
    }else{
      setUserStatus(null);
    }
  }, []);

  const login = (newEmail: string, newStatus: string) => {
    localStorage.setItem("udmddbhabdg73r83yr5y3", newEmail);
    setEmail(newEmail);

    localStorage.setItem("userStatus", newStatus);
    setUserStatus(newStatus);
  };

  const logout = () => {
    localStorage.removeItem("udmddbhabdg73r83yr5y3");
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ email, login, logout, userStatus }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
