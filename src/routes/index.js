import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('pages/home'));
const LorePage = lazy(() => import('pages/lore'));
const RoadmapPage = lazy(() => import('pages/roadmap'));
const TeamPage = lazy(() => import('pages/team'));
const ErrorPage = lazy(() => import('pages/error'));

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/lore' element={<LorePage />} />
        <Route path='/roadmap' element={<RoadmapPage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route component={ErrorPage} />
      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        autoDismiss={true}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        icon={true}
        theme={'colored'}
        pauseOnHover={false}
        rtl={false}
      />
    </>
  );
};

export default AppRoutes;
