import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import MoreInfoPage from 'pages/MoreInfoPage';
import OnboardingPage from 'pages/OnboardingPage';
import TeampleHomePage from 'pages/TeampleHomePage';
import TeampleDetailPage from 'pages/TeampleDetailPage';
import TemplatePage from 'pages/TemplatePage';
import ProfilePage from 'pages/ProfilePage';
import FilePage from 'pages/FilePage';
import NotFoundPage from 'pages/NotFoundPage';
import InitialHomePage from './pages/InitialHomePage';
import Ing from 'pages/Ing';
import PrivateRouter from 'components/routers/privateRouter';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route
          path="/home"
          element={
            <PrivateRouter>
              <HomePage />
            </PrivateRouter>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/:teamid" element={<LoginPage />} />
        <Route
          path="/moreinfo"
          element={
            <PrivateRouter>
              <MoreInfoPage />
            </PrivateRouter>
          }
        />
        <Route
          path="/home/init"
          element={
            <PrivateRouter>
              <InitialHomePage />
            </PrivateRouter>
          }
        />
        <Route
          path="/teample-home/:teamid"
          element={
            <PrivateRouter>
              <TeampleHomePage />
            </PrivateRouter>
          }
        />
        <Route
          path="/teample-detail/:taskId"
          element={
            <PrivateRouter>
              <TeampleDetailPage />
            </PrivateRouter>
          }
        />
        <Route
          path="/template"
          element={
            <PrivateRouter>
              <TemplatePage />
            </PrivateRouter>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRouter>
              <ProfilePage />
            </PrivateRouter>
          }
        />
        <Route
          path="/file"
          element={
            <PrivateRouter>
              <FilePage />
            </PrivateRouter>
          }
        />
        <Route path="/oauth/kakao/success/ing" element={<Ing />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
