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
import LoginInvitedPage from 'pages/LoginInvitedPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-invited" element={<LoginInvitedPage />} />
        <Route path="/moreinfo" element={<MoreInfoPage />} />
        <Route path="/teample-home" element={<TeampleHomePage />} />
        <Route path="/teample-detail" element={<TeampleDetailPage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/file" element={<FilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
