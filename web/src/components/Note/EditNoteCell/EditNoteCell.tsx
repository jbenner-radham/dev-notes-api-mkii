import type { EditNoteById } from 'types/graphql'
import CodeMirror from '@uiw/react-codemirror'
import { markdown } from '@codemirror/lang-markdown'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import { useForm } from '@redwoodjs/forms'

import NoteForm from 'src/components/Note/NoteForm'

export const QUERY = gql`
  query EditNoteById($id: Int!) {
    note: note(id: $id) {
      id
      name
      description
      source
      createdAt
      updatedAt
    }
  }
`
const UPDATE_NOTE_MUTATION = gql`
  mutation UpdateNoteMutation($id: Int!, $input: UpdateNoteInput!) {
    updateNote(id: $id, input: $input) {
      id
      name
      description
      source
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ note }: CellSuccessProps<EditNoteById>) => {
  const { setValue } = useForm()

  const [updateNote, { loading, error }] = useMutation(UPDATE_NOTE_MUTATION, {
    onCompleted: () => {
      toast.success('Note updated')
      navigate(routes.notes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateNote({ variables: { id, input } })
  }

  const sourceTextarea = null

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Edit Note {note.id}
          </h2>
        </header>
        <div className="rw-segment-main">
          <NoteForm
            note={note}
            onSave={onSave}
            error={error}
            loading={loading}
          />
        </div>
      </div>
      {/* <div className="rw-segment">
        <header
          className="rw-segment-header"
          style={{ marginBottom: '.75rem' }}
        >
          <h2 className="rw-heading rw-heading-secondary">Editor</h2>
        </header>
        <CodeMirror
          height="400px"
          value={note.source}
          extensions={[markdown()]}
          onChange={(value, viewUpdate) => {
            // sourceTextarea ??= document.getElementById('source')
            // sourceTextarea.value = value
            setValue('source', value)
            console.log('value:', value)
          }}
        />
      </div> */}
    </>
  )
}
