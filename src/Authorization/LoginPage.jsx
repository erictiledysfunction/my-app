"use client"
import { Link } from "react-router-dom";

import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"

export function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("User")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("http://localhost/myapi/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "Login failed")
        return
      }

      localStorage.setItem("authToken", data.token)
      localStorage.setItem("userRole", data.user.role);

// ⭐ REDIRECT CORRECT PAGE
      if (data.user.role === "Admin") {
        navigate("/");
        } else {
                navigate("/ClientPage");
}
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">LOG IN</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="ex. admin@gmail.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option>User</option>
              <option>Admin</option>
            </select>
          </div>

          <a href="." className="forgot-link" onClick={() => navigate("/forgot-password")}>
            Forgot Password?
          </a>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="auth-link">
            Don't have an account?{" "}
           <Link to="/signup" className="auth-link">
            Sign up
          </Link>


          </p>
        </form>
      </div>
    </div>
  )
}
