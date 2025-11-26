import { History } from "./ADMIN/History"
import { Inventory } from "./ADMIN/Inventory"
import { Dashboard } from "./ADMIN/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LoginPage } from "./Authorization/LoginPage"
import { SignupPage } from "./Authorization/SignupPage"
import { ForgotPasswordPage } from "./Authorization/ForgotPasswordPage"
import { ProtectedRoute } from "./Authorization/ProtectedRoute"
import { AuthProvider } from "./Authorization/AuthContext"
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Inventory"
            element={
              <ProtectedRoute>
                <Inventory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/History"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
