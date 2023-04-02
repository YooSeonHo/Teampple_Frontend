import styled from 'styled-components';

export const TemplateBoxContainer = styled.div`
  width: 87.5vw;
  margin-top: 5.37037vh;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  width: 63vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Template = styled.div`
  width: 19.375vw;
  margin-right: 1.4583vw;
  margin-bottom: 2.6851vh;
  display: grid;
  grid-template-rows: 8fr 2fr;
  :hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 19.375vw;
  height: 18.518vh;
  margin: auto;
`;

export const Desc = styled.div`
  font-weight: 500;
  font-size: 0.9375vw;
  line-height: 100%;
  color: #505050;
  width: 19.375vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.11vh;
`;