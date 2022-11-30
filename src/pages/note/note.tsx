import { FC, useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { notesContext } from '@contexts';
import { DisplayNote, SectionTitle } from '@components';

type NoteProps = {};

export const Note: FC<NoteProps> = () => {
  const { getNote, removeNote } = useContext(notesContext);

  const { noteId } = useParams();

  const note = useMemo(() => noteId && getNote(noteId), [noteId, getNote]);

  const navigate = useNavigate();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteNote = useCallback(() => {
    note && removeNote(note);
    navigate('/');
  }, [note, removeNote]);

  const askForConfirmation = useCallback(() => setShowConfirmation(true), []);
  const hideConfirmation = useCallback(() => setShowConfirmation(false), []);

  const handleEditNote = useCallback(
    () => note && navigate('edit'),
    [note, navigate]
  );

  return (
    <>
      <SectionTitle title="Note" />
      {note ? (
        <>
          <DisplayNote note={note} />
          <div>
            <button onClick={askForConfirmation}>delete note</button>
            <button onClick={handleEditNote}>edit note</button>
            {showConfirmation && (
              <>
                <p>Are you sure you want to delete this note?</p>
                <div>
                  <button onClick={handleDeleteNote}>yes</button>
                  <button onClick={hideConfirmation}>no</button>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <p>The note was not found</p>
      )}
    </>
  );
};
