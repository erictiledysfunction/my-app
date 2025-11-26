"use client"

import "./RoleSelect.css"

export function RoleSelect({ value, onChange }) {
  return (
    <div className="role-select-wrapper">
      <label className="role-select-label">Role</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="role-select-field">
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>
    </div>
  )
}
