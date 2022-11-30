import { FC } from 'react';
import { SectionTitle } from '@components';

type UserProps = {};

export const User: FC<UserProps> = () => {
  return (
    <>
      <SectionTitle title="User" />
      <div>
        <h3>user</h3>
        <button>Change Password</button>
        <button>Log out</button>
        <button>Delete Account</button>
      </div>
    </>
  );
};
