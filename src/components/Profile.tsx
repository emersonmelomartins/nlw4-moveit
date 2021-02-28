import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/emersonmelomartins.png" alt="Emerson Melo"/>
            <div>
                <strong>Emerson Melo Martins</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Arrow"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}