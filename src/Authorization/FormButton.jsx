"use client"

import "./FormButton.css"

export function FormButton({ type = "button", disabled = false, children, onClick }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className="form-button">
      {children}
    </button>
  )
}
