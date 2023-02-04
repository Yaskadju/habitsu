import { NewTaskForm } from "./components/NewTaskForm"
import * as C from "./styles"

import { useForm, SubmitHandler, FormProvider } from "react-hook-form"

import zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod/src"
import { useState } from "react"

const newTaskFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(5).max(120)
})

type NewTaskFormData = zod.infer<typeof newTaskFormValidationSchema>

export function Home() {
  const newTaskForm = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0
    }
  })

  const { watch, handleSubmit } = newTaskForm

  const task = watch("task")

  function handleCreateNewTask(data: NewTaskFormData) {
    console.log("entrou")
    console.log(data)
  }

  return (
    <C.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewTask)}>
        <FormProvider {...newTaskForm}>
          <NewTaskForm />
        </FormProvider>
        <C.ButtonInput type="submit">Criar Task</C.ButtonInput>
      </form>
    </C.HomeContainer>
  )
}
