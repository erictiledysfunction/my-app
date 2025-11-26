"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./SignupPage.css"

export function SignupPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("User")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")   // ✅ ADDED
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");  // reset success

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost/myapi/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: username,
          password: password,
          role: role
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      // -------------------------------------
      // ✅ SUCCESS MESSAGE (no alert)
      // -------------------------------------
      setSuccess("Signup successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
      // -------------------------------------

    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">SIGN UP</h1>
        <form onSubmit={handleSignup}>
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
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

          {error && <p className="error-message">{error}</p>}

          {/* ✅ SUCCESS MESSAGE INSIDE THE BOX */}
          {success && (
            <p style={{ color: "green", marginTop: "10px", fontSize: "14px" }}>
              {success}
            </p>
          )}

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <p className="auth-link"> 
            Already have an account?{" "}
            <a href="." onClick={() => navigate("/login")}>
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
