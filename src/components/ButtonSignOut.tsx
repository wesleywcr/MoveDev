import { useSession, signOut } from 'next-auth/client'
import styles from '../styles/components/ButtonSignOut.module.css'

export default function ButtonSignOut() {
  const [session, loading] = useSession()
  return (
    <>
      {session && <>
        <button
          className={styles.buttonSingOut}
          onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}>
          SAIR
            </button>
      </>}
    </>
  )
}