import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

    const [timeInSeconds, setTimeInSeconds] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    // padStart -> verifica se não tem 2 caracteres e preenche com 0
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    useEffect(() => {
        if(active && timeInSeconds > 0) {
            setTimeout(() => {
                setTimeInSeconds(timeInSeconds - 1);
            }, 1000);
        }
    }, [active, timeInSeconds]);

    function startCountdown() {
        setActive(true);
    }

    return (

        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                Iniciar um ciclo
            </button>
        </div>
    );
}