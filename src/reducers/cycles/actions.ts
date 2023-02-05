import { Cycle } from "./reducer"

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE"
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle
    }
  }
}
