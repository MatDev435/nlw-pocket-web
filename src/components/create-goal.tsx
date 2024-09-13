import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from './ui/sheet'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createGoal } from '@/http/create-goal'
import { useQueryClient } from '@tanstack/react-query'

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type CreateGoalForm = z.infer<typeof createGoalForm>

export function CreateGoal() {
  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateGoalForm>({
      resolver: zodResolver(createGoalForm),
    })

  const queryClient = useQueryClient()

  async function handleCreateGoal(data: CreateGoalForm) {
    await createGoal({
      title: data.title,
      desiredWeeklyFrequency: data.desiredWeeklyFrequency,
    })

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })

    reset()
  }

  return (
    <SheetContent>
      <div className="flex flex-1 flex-col gap-6 h-full">
        <SheetHeader>
          <SheetTitle className="text-2xl">Cadastrar meta</SheetTitle>

          <SheetDescription className="text-sm">
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex flex-1 flex-col justify-between"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-base" htmlFor="title">
                Qual a atividade?
              </Label>

              <Input
                autoFocus
                placeholder="Praticar exercícios, meditar etc"
                id="title"
                className="text-lg p-3"
                {...register('title')}
              />

              {formState.errors.title && (
                <p className="text-red-400 text-sm">
                  {formState.errors.title.message}
                </p>
              )}
            </div>

            <div className="flex gap-4 flex-col">
              <Label htmlFor="title" className="text-base">
                Quantas vezes na semana?
              </Label>

              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                defaultValue={3}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
                      <Label
                        htmlFor="1"
                        className="cursor-pointer flex items-center justify-between 
                    text-lg p-4"
                      >
                        <RadioGroupItem value="1" id="1" />
                        <span>1x na semana</span>
                        <span className="text-xl">🥱</span>
                      </Label>

                      <Label
                        htmlFor="2"
                        className="cursor-pointer flex items-center justify-between text-lg p-4"
                      >
                        <RadioGroupItem value="2" id="2" />
                        <span>2x na semana</span>
                        <span className="text-xl">🙂</span>
                      </Label>

                      <Label
                        htmlFor="3"
                        className="cursor-pointer flex items-center justify-between text-lg p-4"
                      >
                        <RadioGroupItem value="3" id="3" />
                        <span>3x na semana</span>
                        <span className="text-xl">😎</span>
                      </Label>

                      <Label
                        htmlFor="4"
                        className="cursor-pointer flex items-center justify-between text-lg p-4"
                      >
                        <RadioGroupItem value="4" id="4" />
                        <span>4x na semana</span>
                        <span className="text-xl">😜</span>
                      </Label>

                      <Label
                        htmlFor="5"
                        className="cursor-pointer flex items-center justify-between text-lg p-4"
                      >
                        <RadioGroupItem value="5" id="5" />
                        <span>5x na semana</span>
                        <span className="text-xl">🤨</span>
                      </Label>

                      <Label
                        htmlFor="6"
                        className="cursor-pointer flex items-center justify-between text-lg p-4"
                      >
                        <RadioGroupItem value="6" id="6" />
                        <span>6x na semana</span>
                        <span className="text-xl">🤯</span>
                      </Label>

                      <Label
                        htmlFor="7"
                        className="cursor-pointer flex items-center justify-between text-lg p-4"
                      >
                        <RadioGroupItem value="7" id="7" />
                        <span>7x na semana</span>
                        <span className="text-xl">🔥</span>
                      </Label>
                    </RadioGroup>
                  )
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <SheetClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="flex-1 text-xl"
              >
                Fechar
              </Button>
            </SheetClose>

            <Button className="flex-1 text-xl">Salvar</Button>
          </div>
        </form>
      </div>
    </SheetContent>
  )
}
