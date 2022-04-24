import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const notes = () => {
  return db.note.findMany()
}

export const note = ({ id }: Prisma.NoteWhereUniqueInput) => {
  return db.note.findUnique({
    where: { id },
  })
}

interface CreateNoteArgs {
  input: Prisma.NoteCreateInput
}

export const createNote = ({ input }: CreateNoteArgs) => {
  return db.note.create({
    data: input,
  })
}

interface UpdateNoteArgs extends Prisma.NoteWhereUniqueInput {
  input: Prisma.NoteUpdateInput
}

export const updateNote = ({ id, input }: UpdateNoteArgs) => {
  return db.note.update({
    data: input,
    where: { id },
  })
}

export const deleteNote = ({ id }: Prisma.NoteWhereUniqueInput) => {
  return db.note.delete({
    where: { id },
  })
}
