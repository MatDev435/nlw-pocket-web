import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getPendingGoals } from '@/http/get-pending-goals'
import { completeGoal } from '@/http/complete-goal'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60, // 1 minute
  })

  if (!data) {
    return null
  }

  async function handleCompleteGoal(goalId: string) {
    await completeGoal(goalId)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {data.map(goal => {
        return (
          <Button
            key={goal.id}
            variant="outline"
            className="text-zinc-300 text-sm flex items-center gap-2
            disabled:opacity-50 disabled:cursor-default"
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            onClick={() => handleCompleteGoal(goal.id)}
          >
            <Plus className="size-4 text-zinc-600" /> {goal.title}
          </Button>
        )
      })}
    </div>
  )
}
