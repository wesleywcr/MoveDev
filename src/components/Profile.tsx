import { useSession } from 'next-auth/client'
import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const [session, loading] = useSession();

  const { level } = useContext(ChallengeContext)
  return (
    <div className={styles.profileContainer}>
      {session &&
        <img src={session.user.image} alt="" />
      }
      <div>
        {session &&
          <strong>{session.user.name}</strong>
        }
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}