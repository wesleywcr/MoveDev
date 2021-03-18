import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/pages/Login.module.css'

export default function Home() {
  const [session, loading] = useSession()

  return (
    <div className={styles.containerLogin}>
      <img src='simbolo.svg' alt="" />

      <div>
        {!session && <>
          <span><img src='logo-full.svg' alt="Logo" /></span>
          <h1> Bem vindo</h1>
          <p>Faça o login com seu Github para começar </p>
          <button
            className={styles.buttonSingIn}
            onClick={() =>
              signIn('github', { callbackUrl: 'http://localhost:3000/Home' })}>
            <span><img src='icons/github.svg' alt="" /></span>
            LOGIN</button>
        </>}

        {session && <>
          <p>{session.user.name} Deseja sair ?</p>
          <button
            className={styles.buttonSingOut}
            onClick={() => signOut()}>
            SAIR
            </button>
        </>}
      </div>

    </div>
  )
}



