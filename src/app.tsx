import { Sheet } from './components/ui/sheet'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'
import { EmptyGoals } from './components/empty-goals'
// import { EmptyGoals } from './components/empty-goals'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 1 minute
  })

  return (
    <Sheet>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Sheet>
  )
}
