import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/emersonmelomartins.png" alt="Emerson Melo"/>
            <div>
                <strong>Emerson Melo Martins</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Arrow"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}