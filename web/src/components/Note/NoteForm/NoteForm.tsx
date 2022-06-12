import {
  Form,
  FormError,
  FieldError,
  Label,
  TextAreaField,
  TextField,
  Submit,
  useForm,
} from '@redwoodjs/forms'

const NoteForm = (props) => {
  const { setValue } = useForm()

  const onSubmit = (data) => {
    props.onSave(data, props?.note?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.note?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.note?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="source"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Source
        </Label>

        <TextAreaField
          name="source"
          defaultValue={props.note?.source}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="source" className="rw-field-error" />

        <button
          type="button"
          onClick={() => {
            console.log('CLICK!')
            setValue('source', 'value set by click')
          }}
        >
          Set Value
        </button>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NoteForm
