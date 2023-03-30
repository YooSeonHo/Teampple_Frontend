import styled from 'styled-components';

export const MiniTemplateContainer = styled.div`
  position: relative;
  margin-left: 2.8vw;
  width: 84.7vw;
  height: 250px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 1.3vw;
  line-height: 100%;
  margin-bottom: 20px;
`;

export const TemplateBoxContainer = styled.div`
  overflow: hidden;
  height: 250px;
`;

export const TemplateBox = styled.div`
  display: flex;
`;

export const Template1 = styled.div`
  position: relative;
  width: 18.5vw;
  height: 190px;
  background: #fce44c;
  border-radius: 12px;
  margin-right: 2.604vw;
  display: grid;
  grid-template-rows: 8fr 2fr;
  &:hover {
    cursor: pointer;
  }
`;

export const Template2 = styled(Template1)`
  background: #487aff;
`;

export const Img1 = styled.img`
  width: 150px;
  margin: auto;
`;
export const Img2 = styled(Img1)``;

export const Img3 = styled(Img1)`
  width: 100px;
`;

export const Img4 = styled(Img1)`
  width: 120px;
`;

export const Desc1 = styled.div`
  font-weight: 500;
  font-size: 1.042vw;
  line-height: 100%;
  color: #707070;
  background: #fff8b7;
  border-radius: 0px 0px 12px 12px;
  /* width: 24.58vw; */
  width: 18.5vw;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 1.25vw;
`;

export const Desc2 = styled(Desc1)`
  background: #d4e4ff;
`;
