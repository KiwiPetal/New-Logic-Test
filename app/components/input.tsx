"use client"

import { useState } from "react";

interface vars {
  title: string;
  type: "text" | "email" | "tel" | "number";
  placeholder?: string;
  required?: boolean;
}
export default function Input({ type, title, placeholder, required = false }: vars) {
  const [value, setValue] = useState("")
  const [isValid, setIsValid] = useState(true);
  const validate = (testValue: string) => {
    if (required && testValue == "")
      return false;
    switch (type) {
      case "text": {
        return true;
      }
      case "email": {
        const emailPattern = /^[\w-\.]+@([\w-)]+\.)+[\w-]{2,4}$/;
        return emailPattern.test(testValue);
      }
      case "tel": {
        const phonePattern = /^\+420\d{9}$/;
        return phonePattern.test(testValue.replace(/\s+/g, ""));
      }
      case "number": {
        const numberPattern = /^[\d\s]+$/;
        return numberPattern.test(testValue);
      }
    }
  }
  const inputHandler = (input: string) => {
    const test = validate(input);
    setIsValid(test);
    console.log(input)
    setValue(input);
  }
  return (
    <div className="relative w-full">
      <input required={required} placeholder={placeholder} value={value} onChange={(e) => inputHandler(e.target.value)} className={`rounded-md border border-black/15 p-md w-full focus:outline-none focus:border-active transition-colors peer ${!isValid && "border-error focus:border-error"}`} />
      <label className={`absolute left-md top-md text-gray-600 pointer-events-none peer-focus:text-xs peer-focus:top-xs transition-all ${(value !== "" || placeholder != undefined) && "text-xs top-xs"}`}>
        {title}{required && (<span className="text-error">*</span>)}
      </label>
      {!isValid && (
        <img src="/error.svg" className="absolute right-md top-md" />
      )}
    </div>
  )
}
