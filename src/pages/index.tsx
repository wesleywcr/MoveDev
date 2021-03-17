import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/pages/Login.module.css'

export default function Home() {
  const [session, loading] = useSession()

  return (
    <div className={styles.container}>
      <Link href="/home">
        <a >Home</a>
      </Link>


      {!session && <>
        VC não está logado <br />
        <button onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000/Home' })}>Sign in</button>
      </>}
      {session && <>
        Vc está logado {session.user.name} <br />
        <button className={styles.buttonSingOut} onClick={() => signOut()}>Sign out</button>
      </>}

    </div>
  )
}



