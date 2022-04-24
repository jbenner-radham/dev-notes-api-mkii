import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String8545939' } },
    two: { data: { email: 'String2957763' } },
  },
})

export type StandardScenario = typeof standard
