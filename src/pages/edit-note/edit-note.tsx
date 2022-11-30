import { NoteForm, SectionTitle } from '@components';
import { notesContext } from '@contexts';
import { ComponentProps, FC, useCallback, useContext, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type EditNoteProps = {};

export const EditNote: FC<EditNoteProps> = () => {
  const { getNote, editNote } = useContext(notesContext);

  const { noteId } = useParams();

  const note = useMemo(() => noteId && getNote(noteId), [noteId, getNote]);

  const navigate = useNavigate();

  const handleEdit = useCallback<
    NonNullable<ComponentProps<typeof NoteForm>['onSubmit']>
  >((fields) => {
    note && editNote({ ...note, ...fields });
    navigate(`/note/${noteId}`);
  }, []);

  return (
    <>
      <SectionTitle title="Edit Note" />
      {note ? (
        <NoteForm mode="edit" values={note} onSubmit={handleEdit} />
      ) : (
        <p>Note not found</p>
      )}
    </>
  );
};
