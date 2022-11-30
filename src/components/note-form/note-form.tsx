import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useCallback,
  useId,
  useState,
} from 'react';
import { NoteFormFields } from '@types';

type NoteFormProps = {
  mode: 'edit' | 'create';
  onSubmit?: (fields: NoteFormFields) => unknown;
  values?: Partial<NoteFormFields>;
};

export const NoteForm: FC<NoteFormProps> = ({ mode, onSubmit, values }) => {
  const titleInputId = useId();
  const [titleInput, setTitleInput] = useState(values?.title ?? '');
  const onTitleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => setTitleInput(e.target.value),
    []
  );

  const contentInputId = useId();
  const [contentInput, setContentInput] = useState(values?.content ?? '');
  const onContentInputChange = useCallback<
    ChangeEventHandler<HTMLTextAreaElement>
  >((e) => setContentInput(e.target.value), []);

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      onSubmit?.({ title: titleInput, content: contentInput });
    },
    [onSubmit, titleInput, contentInput]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={titleInputId}>Title</label>
        <input
          id={titleInputId}
          value={titleInput}
          onChange={onTitleInputChange}
        />
      </div>
      <div>
        <label htmlFor={contentInputId}>Content</label>
        <textarea
          id={contentInputId}
          value={contentInput}
          onChange={onContentInputChange}
        />
      </div>
      <button type="submit">{mode}</button>
    </form>
  );
};
