"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./ForgotPasswordPage.css"

export function ForgotPasswordPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)

    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "Request failed")
        return
      }

      setSuccess("Check your email for password reset instructions")
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">FORGOT PASSWORD</h1>
        <form onSubmit={handleForgotPassword}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="ex. admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <p className="auth-link">
            <a href="." onClick={() => navigate("/login")}>
              Back to Login
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
