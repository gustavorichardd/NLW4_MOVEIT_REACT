import { createContext, useState, ReactNode } from 'react'

import challenges from '../../challenges.json'

interface ChallengeProps {
  type: 'body' | 'eye',
  description: string,
  amount: number
}


interface ChallengesContextData {
  level: number,
  currentExp: number,
  experienceToNextLevel: number,
  challengesCompleted: number,
  activeChallenge: ChallengeProps,
  startNewChallange: () => void
  resetChallenge: () => void,
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallange() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExp,
        experienceToNextLevel,
        challengesCompleted,
        startNewChallange,
        activeChallenge,
        resetChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}