import styled from 'styled-components';
import React from 'react';
import logo from '../../components/images/logo.png';
import { Link } from 'react-router-dom';


const HeaderBox = styled.div`
    width: 100%;
    height: 72px;
    background-color: #ffffff;
    display: flex;
    font-weight: 600;
    font-size: 24px;
    line-height: 72px;
    white-space: nowrap;
    position: relative;
    z-index: 998;
    justify-content : space-between;
`;

const Logo = styled.div`

    margin-left : 374px;
    margin-top : auto;
    margin-bottom : auto;
    
    .logo{
        margin : auto;
        height: 44px;
        width: 154.48px;
        
    }
    img{
        max-width: 100%;
        max-height: 100%;
    }
    `;
    
    const Contents = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
    color: #383838;
    margin-right : 392px;
    margin-top : auto;
    margin-bottom : auto;
    display : flex;

    .aboutUs,
    .plan {
        margin-right : 28px;
    }

    .aboutUs:hover,
    .plan:hover,
    .login:hover{
        cursor : grab;
        border-bottom : 1px solid black;
    }
`;



const OnBoardingHeader = () => {


  return (
    <HeaderBox>
        <Logo>
            <Link to='/' style={{textDecoration : 'none'}}>
                <div className='logo'>
                    <img src={logo}/>
                </div>
            </Link>
        </Logo>
            <Contents>
                <div className='aboutUs'>ABOUT US</div>
                <div className='plan'>PLAN</div>
                <Link to='/logn' style={{textDecoration : 'none', color: '#383838'}}>
                    <div className='login'>LOGIN</div>
                </Link>
            </Contents>
    </HeaderBox>
  );
};

export default OnBoardingHeader;
