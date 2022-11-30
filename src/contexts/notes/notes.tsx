import { createContext, FC, useCallback, useState } from 'react';
import { Note, SingleChildrenProp } from '@types';
import { createId } from '@utils';

type NotesContext = ReturnType<typeof useNotes>;

const mockNotes: Note[] = Array.from(Array(10), (_, i) => ({
  id: createId(),
  title: `Note ${i + 1}`,
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque praesentium illum aperiam provident, suscipit qui.',
  author: `${Math.random() > 1 / 2 ? 'John' : 'Bob'} ${i + 1}`,
  creationDate: new Date(),
}));

const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>(mockNotes);

  const addNote = useCallback(
    (note: Note) => {
      setNotes([...notes, note]);
    },
    [notes]
  );

  const removeNote = useCallback(
    (note: Note) => {
      setNotes(notes.filter(({ id }) => id !== note.id));
    },
    [notes]
  );

  const getNote = useCallback(
    (noteId: Note['id']) => notes.find(({ id }) => id === noteId),
    [notes]
  );

  const editNote = useCallback(
    (editedNote: Note) =>
      setNotes(
        notes.map((oldNote) =>
          editedNote.id === oldNote.id
            ? { ...editedNote, editionDate: new Date() }
            : oldNote
        )
      ),
    [notes]
  );

  return {
    notes,
    addNote,
    removeNote,
    getNote,
    editNote,
  };
};

export const notesContext = createContext<NotesContext>({} as NotesContext);

export const NotesProvider: FC<SingleChildrenProp> = ({ children }) => {
  const notesState = useNotes();
  return (
    <notesContext.Provider value={notesState}>{children}</notesContext.Provider>
  );
};
