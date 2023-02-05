import * as C from "./styles"
import { useFormContext } from "react-hook-form"

interface IFormInputs {
  task: string
  minutesAmount: number
}

export function NewCycleForm() {
  const {
    register,
    formState: { errors }
  } = useFormContext<IFormInputs>()

  return (
    <C.FormContainer>
      <C.TaskLabel htmlFor="">
        <C.TaskSpan>Nome da Tarefa</C.TaskSpan>
        <C.TaskInput
          id="task"
          type="text"
          list="task-suggestions"
          {...register("task", { required: true })}
        />
        <datalist id="task-suggestions">
          <option value="projeto0" />
          <option value="projeto1" />
          <option value="projeto2" />
          <option value="projeto3" />
        </datalist>

        <span className="error">{errors && errors?.task?.message}</span>
      </C.TaskLabel>

      <C.TaskLabel htmlFor="">
        <C.TaskSpan>Tempo</C.TaskSpan>
        <C.TaskInput
          id="minutesAmount"
          step={5}
          min={5}
          max={120}
          type="number"
          {...register("minutesAmount", { valueAsNumber: true })}
        />
      </C.TaskLabel>
    </C.FormContainer>
  )
}
