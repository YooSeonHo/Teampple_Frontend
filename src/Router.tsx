import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/:teamid" element={<LoginPage />} />
        <Route path="/moreinfo" element={<MoreInfoPage />} />
        <Route path="/home/init" element={<InitialHomePage />} />
        <Route path="/teample-home/:teamid" element={<TeampleHomePage />} />
        <Route path="/teample-detail/:taskId" element={<TeampleDetailPage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/file" element={<FilePage />} />
        <Route path="/oauth/kakao/success/ing" element={<Ing />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
