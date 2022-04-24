import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.NoteCreateArgs>({
  note: {
    one: {
      data: {
        name: 'String',
        source: 'String',
        updatedAt: '2022-04-24T19:26:09Z',
      },
    },
    two: {
      data: {
        name: 'String',
        source: 'String',
        updatedAt: '2022-04-24T19:26:09Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
