"use client"

import "./FormInput.css"

export function FormInput({ label, name, type = "text", placeholder, value, onChange, error }) {
  return (
    <div className="form-input-wrapper">
      <label className="form-input-label">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`form-input-field ${error ? "error" : ""}`}
      />
      {error && <p className="form-input-error">{error}</p>}
    </div>
  )
}
