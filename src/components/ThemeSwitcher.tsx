
import { useState } from 'react'
import Toggle from "react-toggle";

import styles from '../styles/components/ThemeStwither.module.css'

export function ThemeStwither() {
  const [isDark, setIsDark] = useState(true)
  return (
    <div className={styles.ThemeStwither}>
      <Toggle
        className="DarkToggle"
        checked={isDark}
        onChange={event => setIsDark(event.target.checked)}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode"
      />
    </div>
  )
}