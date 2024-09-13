import { api } from '@/lib/axios'

export async function completeGoal(goalId: string) {
  await api.post(
    '/completions',
    { goalId },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}
