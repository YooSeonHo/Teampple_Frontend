import React, { useEffect } from 'react';
import Page1 from './onBoarding/page1';
import Page2 from './onBoarding/page2';
import Page3 from './onBoarding/page3';
import Page4 from './onBoarding/page4';
import Page5 from './onBoarding/page5';
import Page6 from './onBoarding/page6';
import Page7 from './onBoarding/page7';
import Page8 from './onBoarding/page8';
import OnBoardingLayOut from 'components/layouts/onBoardingLayout';


const OnboardingPage = () => {


  return (
    <OnBoardingLayOut>
      <Page1/>
      <Page2 />
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      <Page8/>
    </OnBoardingLayOut>
  );
};

export default OnboardingPage;
