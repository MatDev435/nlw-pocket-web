import { Sheet } from './components/ui/sheet'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
// import { EmptyGoals } from './components/empty-goals'

export function App() {
  return (
    <Sheet>
      {/* <EmptyGoals /> */}

      <Summary />

      <CreateGoal />
    </Sheet>
  )
}
