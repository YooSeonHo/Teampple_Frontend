import styled from 'styled-components';

export const EditBox = styled.div`
  width: 50.625vw;
  height: 63.7vh;
  border: 2px solid #d5dbee;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin-top: 4.074vh;
  margin-left: auto;
  margin-right: auto;

  .profileImg {
    width: 11.458vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3.33vh;
    border-radius: 50%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  input {
    background-color: transparent;
    border: none;
    flex-wrap: nowrap;
  }

  input:focus {
    outline: none;
  }

  .profileInfo {
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.22vh;
  }

  .profileName {
    font-weight: 700;
    font-size: 1.468vw;
    line-height: 100%;
    text-align: center;
    height: 20px;
  }

  .profileEmail {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    text-align: center;
    color: #383838;
    margin-top: 1.85185vh;
    height: 20px;
  }

  .logout {
    font-weight: 500;
    font-size: 0.8333vw;
    line-height: 100%;
    text-align: center;
    color: #487aff;
    margin-top: 1.944vh;
  }

  .logout:hover {
    cursor: grab;
  }

  .schoolInfo {
    margin-top: 5.1852vh;
    display: flex;
    justify-content: center;
  }

  .infoBox {
    width: 19.375vw;
    height: 4.62963vh;
    background-color: rgba(237, 239, 246, 0.5);
    border-radius: 12px;
    display: flex;
    margin: 0px 12px;
    margin-top: 12px;
    :focus-within {
      border: solid 1px #487aff;
    }
  }

  .infoText {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #707070;
    margin-top: auto;
    margin-bottom: auto;
    width: 50px;
    margin-left: 0.8333vw;
    margin-right: 0.8333vw;
  }

  .name,
  .email,
  .school,
  .major,
  .grade {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #383838;
    margin-top: auto;
    margin-bottom: auto;
  }

  .editBtn {
    width: 5.9375vw;
    height: 3.704vh;
    margin-top: 3.7963vh;
    margin-left: auto;
    margin-right: auto;
  }

  .editBtn:hover {
    cursor: grab;
  }

  .inputContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 15px;
  }
`;

export const ExtraText = styled.div`
  width: 50.625vw;
  height: 10vh;
  font-weight: 500;
  font-size: 1.042vw;
  line-height: 100%;
  color: #383838;
  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
  .myPlan {
    margin-bottom: 2.5926vh;
  }

  .myPlan:hover,
  .delete:hover {
    cursor: grab;
  }
`;
