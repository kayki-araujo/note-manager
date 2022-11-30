import { ComponentProps, FC, useCallback, useContext } from 'react';
import { NoteForm, SectionTitle } from '@components';
import { notesContext } from '@contexts';
import { createId } from '@utils';
import { useNavigate } from 'react-router-dom';

type CreateProps = {};

export const Create: FC<CreateProps> = () => {
  const { addNote } = useContext(notesContext);

  const navigate = useNavigate();

  const handleNoteCreation = useCallback<
    NonNullable<ComponentProps<typeof NoteForm>['onSubmit']>
  >((fields) => {
    const id = createId();
    addNote({
      id,
      author: 'user',
      creationDate: new Date(),
      ...fields,
    });
    navigate(`/note/${id}`);
  }, []);

  return (
    <>
      <SectionTitle title="Create" />
      <NoteForm mode="create" onSubmit={handleNoteCreation} />
    </>
  );
};
