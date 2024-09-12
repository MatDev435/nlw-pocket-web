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

export function CreateGoal() {
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

        <form className="flex flex-1 flex-col justify-between">
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
              />
            </div>

            <div className="flex gap-4 flex-col">
              <Label htmlFor="title" className="text-base">
                Quantas vezes na semana?
              </Label>

              <RadioGroup>
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
