import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
      minutes: number;
      seconds: number;
      hasFinished: boolean;
      isActive: boolean;
      startCountdown: () => void;
      resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [timeInSeconds, setTimeInSeconds] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { startNewChallenge } = useContext(ChallengesContext);

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  useEffect(() => {
    if (isActive && timeInSeconds > 0) {
      countdownTimeout = setTimeout(() => {
        setTimeInSeconds(timeInSeconds - 1);
      }, 1000);
    } else if (isActive && timeInSeconds === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, timeInSeconds]);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    setIsActive(false);
    clearTimeout(countdownTimeout);
    setTimeInSeconds(.1 * 60);
    setHasFinished(false);
  }

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}>{children}</CountdownContext.Provider>
  );
}
