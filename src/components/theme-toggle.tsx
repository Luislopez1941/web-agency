"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="btn btn-ghost theme-toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      title="Toggle theme"
    >
      <Sun className="sun-icon" />
      <Moon className="moon-icon" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
