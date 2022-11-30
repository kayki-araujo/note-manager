import { FC } from 'react';
import { Note } from '@types';
import { Link } from 'react-router-dom';

type DisplayNoteProps = {
  note: Note;
};

export const DisplayNote: FC<DisplayNoteProps> = ({
  note: { author, content, creationDate, title, editionDate, id },
}) => {
  return (
    <div>
      <h3>
        <Link to={`/note/${id}`}>{title}</Link>
      </h3>
      <p>{content}</p>
      <p>
        <i>
          author: {author} :: created: {creationDate.toLocaleDateString()}
          {editionDate && ` :: edited: ${editionDate.toLocaleDateString()}`}
        </i>
      </p>
    </div>
  );
};
