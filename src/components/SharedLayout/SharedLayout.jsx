import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
