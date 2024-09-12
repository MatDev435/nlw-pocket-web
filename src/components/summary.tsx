import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { SheetTrigger } from './ui/sheet'
import { InOrbitIcon } from './ui/in-orbit-icon'
import { Progress } from './ui/progress'
import { Separator } from './ui/separator'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">5 a 10 de Agosto</span>
        </div>

        <SheetTrigger asChild>
          <Button className="gap-2 text-xl" size="sm">
            <Plus className="size-4" /> Cadastrar meta
          </Button>
        </SheetTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={50} />

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">16</span> metas nessa semana.
          </span>
          <span>50%</span>
        </div>

        <Separator />

        <div className="flex gap-3 flex-wrap">
          <Button
            variant="outline"
            className="text-zinc-300 text-sm flex items-center gap-2"
          >
            <Plus className="size-4 text-zinc-600" /> Meditar
          </Button>

          <Button
            variant="outline"
            className="text-zinc-300 text-sm flex items-center gap-2"
          >
            <Plus className="size-4 text-zinc-600" /> Meditar
          </Button>

          <Button
            variant="outline"
            className="text-zinc-300 text-sm flex items-center gap-2"
          >
            <Plus className="size-4 text-zinc-600" /> Meditar
          </Button>

          <Button
            variant="outline"
            className="text-zinc-300 text-sm flex items-center gap-2"
          >
            <Plus className="size-4 text-zinc-600" /> Meditar
          </Button>

          <Button
            variant="outline"
            className="text-zinc-300 text-sm flex items-center gap-2"
          >
            <Plus className="size-4 text-zinc-600" /> Meditar
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Domingo{' '}
            <span className="text-zinc-400 text-xs">(10 de Agosto)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou{' '}
                <span className="text-zinc-100">Acordar cedo</span> às{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
