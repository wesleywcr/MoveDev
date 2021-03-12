
import { useState } from 'react'
import styles from '../styles/components/ThemeStwither.module.css'

export function ThemeStwither() {
  [] = useState()
  return (
    <div className={styles.ThemeStwither}>
      <input type="checkbox" />
      <label htmlFor="switch">Toggle</label>
    </div>
  )
}