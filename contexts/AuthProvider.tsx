'use client'
import { createContext, useContext, useEffect, useState } from "react";

// Define context type
type AuthContextType = {
  email: string | null;
  login: (token: string) => void;
  logout: () => void;
};

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider Component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Load token from localStorage when app starts
    const storedToken = localStorage.getItem("udmddbhabdg73r83yr5y3");
    if (storedToken) {
      setEmail(storedToken);
    }
  }, []);

  const login = (newEmail: string) => {
    localStorage.setItem("udmddbhabdg73r83yr5y3", newEmail);
    setEmail(newEmail);
  };

  const logout = () => {
    localStorage.removeItem("udmddbhabdg73r83yr5y3");
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ email, login, logout }}>
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
