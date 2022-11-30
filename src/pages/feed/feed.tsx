import { FC, useContext } from 'react';
import { DisplayNote, SectionTitle } from '@components';
import { notesContext } from '@contexts';
import { Link } from 'react-router-dom';

type FeedProps = {};

export const Feed: FC<FeedProps> = () => {
  const { notes } = useContext(notesContext);
  return (
    <>
      <SectionTitle title="Feed" />
      {notes.length > 0 ? (
        <ol>
          {notes.map((note) => (
            <li key={note.id}>
              <DisplayNote note={note} />
            </li>
          ))}
        </ol>
      ) : (
        <>
          <p>No notes for now</p>
          <p>
            you can <Link to="/create">create</Link> new notes to show here
          </p>
        </>
      )}
    </>
  );
};
