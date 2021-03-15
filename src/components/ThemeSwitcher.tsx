import { useEffect, useState } from 'react'
import Switch from "react-switch";
import { useMediaQuery } from "react-responsive";

import styles from '../styles/components/ThemeStwither.module.css'

const DARK_CLASS = "dark";

export function ThemeStwither() {
  const systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)"
  },
    undefined,
    prefersDark => {
      setIsDark(prefersDark);
    }
  )
  const [isDark, setIsDark] = useState(systemPrefersDark);

  const handleDark = nextChecked => {
    setIsDark(nextChecked);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS)
    } else {
      document.documentElement.classList.remove(DARK_CLASS)
    }
  }, [isDark]);
  return (
    <div className={styles.container}>
      <Switch
        className="DarkToggle"
        checked={isDark}
        onChange={handleDark}

        offColor="#949599"
        offHandleColor="#949599"
        onColor="#15111a"
        onHandleColor="#15111a"

        checkedHandleIcon={<span>☀️</span>}
        uncheckedHandleIcon={<span>🌙</span>}

      />
    </div>
  )
}