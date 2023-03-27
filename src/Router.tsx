import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import OnboardingPage from 'pages/OnboardingPage';
import TeampleHomePage from 'pages/TeampleHomePage';
import TeampleDetailPage from 'pages/TeampleDetailPage';
import TemplatePage from 'pages/TemplatePage';
import ProfilePage from 'pages/ProfilePage';
import FilePage from 'pages/FilePage';
import NotFoundPage from 'pages/NotFoundPage';
import Ing from 'pages/Ing';
import PrivateRouter from 'components/routers/privateRouter';
import RefreshRouter from 'components/routers/RefreshRouter';

const Router = () => {
  return (
    <Routes>
      <Route element={<RefreshRouter />}>
        <Route
          path="/home"
          element={
            <PrivateRouter>
              <HomePage />
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
      </Route>

      <Route path="/" element={<OnboardingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/:teamid" element={<LoginPage />} />
      <Route path="/oauth/kakao/success/ing" element={<Ing />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
