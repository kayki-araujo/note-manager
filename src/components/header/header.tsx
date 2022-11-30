import { FC } from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <h1>Note manager</h1>
      <nav>
        <Link to="/">Feed</Link>
        <Link to="/create">Create</Link>
        <Link to="/user">User</Link>
      </nav>
    </header>
  );
};
