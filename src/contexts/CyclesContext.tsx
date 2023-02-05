import { createContext, ReactNode, useEffect, useReducer } from "react"
import { addNewCycleAction } from "../reducers/cycles/actions"
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer"

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CycleContextType {
  cycles: Cycle[]
  createNewCycle: (data: CreateCycleData) => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CycleContextType)

export function TaskContextProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: []
    },
    () => {
      const storedStateAsJSON = localStorage.getItem("@ignite-time:tasks-state-1.0.0")

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    }
  )

  const { cycles } = cyclesState

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem("@ignite-time:tasks-state-1.0.0", stateJSON)
  }, [cyclesState])

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    dispatch(addNewCycleAction(newCycle))
  }

  return (
    <CyclesContext.Provider value={{ cycles, createNewCycle }}>{children}</CyclesContext.Provider>
  )
}
