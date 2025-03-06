"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"

type Props = {
  label?: string
  name: string
  type: string
  value?: string
  placeholder?: string
  className?: string
  width?: string
}

const FormInput = ({ label, name, type, value, placeholder, className, width }: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const isPassword = type === "password"
  const inputType = isPassword ? (showPassword ? "text" : "password") : type

  return (
    <div className={`grid ${width ? width : "w-80"} items-center gap-1.5 py-2 ${className && className}`}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <div className="relative">
        <Input type={inputType} name={name} id={name} placeholder={placeholder ? placeholder : ""} />
        {isPassword && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  )
}

export default FormInput

