import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/lets-start-illustration.svg'
import { Plus } from 'lucide-react'
import { SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="in.orbit" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
        Cadastrar meta
      </p>

      <SheetTrigger asChild>
        <Button className="gap-2 text-xl">
          <Plus className="size-4" /> Cadastrar meta
        </Button>
      </SheetTrigger>
    </div>
  )
}
