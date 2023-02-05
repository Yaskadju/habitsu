import { NewCycleForm } from "./components/NewCycleForm"
import * as C from "./styles"

import { useForm, SubmitHandler, FormProvider } from "react-hook-form"

import zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod/src"
import { useContext, useState } from "react"
import { CyclesContext } from "../../contexts/CyclesContext"

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, { message: "Informe a tarefa" }),
  minutesAmount: zod.number().min(5).max(120)
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { createNewCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0
    }
  })

  const { watch, handleSubmit, reset } = newCycleForm

  const cycle = watch("task")

  function handleCreateNewTask(data: NewCycleFormData) {
    console.log("entrou")
    console.log(data)

    createNewCycle(data)
    reset()
  }

  return (
    <C.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewTask)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <C.ButtonInput type="submit">Criar Task</C.ButtonInput>
      </form>
    </C.HomeContainer>
  )
}
