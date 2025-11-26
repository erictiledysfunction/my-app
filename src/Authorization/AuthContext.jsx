"use client"

import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("authToken"))
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || "User")

  const login = (token, role) => {
    localStorage.setItem("authToken", token)
    localStorage.setItem("userRole", role)
    setIsAuthenticated(true)
    setUserRole(role)
  }

  const logout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("userRole")
    setIsAuthenticated(false)
    setUserRole("User")
  }

  return <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
