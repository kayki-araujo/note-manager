import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components';

type MainLayoutProps = {};

export const MainLayout: FC<MainLayoutProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
