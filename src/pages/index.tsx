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

      <div>
        {!session && <>
          <h1> Bem-vindo</h1>
          <p>Faça o login com seu Github para começar </p>
          <button className={styles.buttonSingOut} onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000/Home' })}>LOGIN</button>
        </>}
        {session && <>
          <p>{session.user.name} Deseja sair ?</p>
          <button className={styles.buttonSingOut} onClick={() => signOut()}>SAIR</button>
        </>}
      </div>

    </div>
  )
}



