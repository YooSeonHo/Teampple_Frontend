import styled from 'styled-components';

export const ListBox = styled.div`
  width: 61.042vw;
  height: 75vh;
  display: flex;
  flex-direction: column;

  .fileHeader {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #707070;
    display: flex;
    margin-top: 1.85185vh;
    height: 4.8148vh;
  }

  .fileName {
    width: 20.833vw;
  }

  .fileLoc {
    width: 10.4167vw;
  }

  .fileOwner {
    width: 10.4167vw;
  }

  .fileSize {
    width: 5.2083vw;
  }

  .fileDate {
    width: 10.4167vw;
  }

  .fileList {
    display: flex;
    flex-direction: column;
  }
`;

export const File = styled.div`
  display: flex;
  width: 61.042vw;
  height: 6.6667vh;

  :hover {
    background-color: #eaf2ff;
    cursor: grab;
  }

  .name {
    width: 19.583vw;
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #707070;
    max-width: 19.583vw;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1.25vw;
  }

  .loc {
    width: 10.41667vw;
    font-weight: 500;
    font-size: 0.8333vw;
    line-height: 100%;
    color: #a7a7a7;
    max-width: 10.41667vw;
    margin-top: auto;
    margin-bottom: auto;
  }

  .owner,
  .date {
    font-weight: 400;
    font-size: 0.8333vw;
    line-height: 100%;
    color: #a7a7a7;
    width: 10.41667vw;
    max-width: 10.41667vw;
    margin-top: auto;
    margin-bottom: auto;
  }

  .size {
    width: 5.2083vw;
    max-width: 5.2083vw;
    font-weight: 400;
    font-size: 0.8333vw;
    line-height: 100%;
    color: #a7a7a7;
    margin-top: auto;
    margin-bottom: auto;
  }

  .icon {
    height: 16px;
    width: 15px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 1.51042vw;
  }

  .icon:hover {
    cursor: grab;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 87.5vw;
`;