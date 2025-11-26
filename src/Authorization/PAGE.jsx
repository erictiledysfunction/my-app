"use client"

import { useState } from "react"
import { LoginPage } from "../Authorization/LoginPage";
import { SignupPage } from "../Authorization/SignUpPage";
import { ForgotPasswordPage }  from "../Authorization/ForgotPasswordPage"

export function Home() {
  const [currentPage, setCurrentPage] = useState("login")

  return (
    <div>
      {currentPage === "login" && (
        <LoginPage onSignupClick={() => setCurrentPage("signup")} onForgotClick={() => setCurrentPage("forgot")} />
      )}
      {currentPage === "signup" && <SignupPage onLoginClick={() => setCurrentPage("login")} />}
      {currentPage === "forgot" && <ForgotPasswordPage onBackClick={() => setCurrentPage("login")} />}
    </div>
  )
}
