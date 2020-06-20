import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  justify-content: center;
  min-height: 130px;
  padding-top: 30px;
`;
export const Circle = styled.div`
  margin: 40px auto;
  position: relative;
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: -14px 0px 0px rgba(255, 255, 255, 1);
  border-radius: 50%;
  -webkit-animation: circle_classic 1s ease-in-out infinite alternate;
  -moz-animation: circle_classic 1s ease-in-out infinite alternate;
  animation: circle_classic 1s ease-in-out infinite alternate;

  @-webkit-keyframes circle_classic {
    0% {
      opacity: 0.1;
      -webkit-transform: rotate(0deg) scale(0.5);
    }
    100% {
      opacity: 1;
      -webkit-transform: rotate(360deg) scale(1.2);
    }
  }
  @-moz-keyframes circle_classic {
    0% {
      opacity: 0.1;
      -moz-transform: rotate(0deg) scale(0.5);
    }
    100% {
      opacity: 1;
      -moz-transform: rotate(360deg) scale(1.2);
    }
  }
  @keyframes circle_classic {
    0% {
      opacity: 0.1;
      transform: rotate(0deg) scale(0.5);
    }
    100% {
      opacity: 1;
      transform: rotate(360deg) scale(1.2);
    }
  }
`;

export const Eye = styled.div`
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  box-shadow: 30px 0px 0px 0px rgba(255, 255, 255, 0.8);
  position: relative;
  margin: 36px 26px;

  &:after {
    background-color: #59488b;
    width: 10px;
    height: 10px;
    box-shadow: 30px 0px 0px 0px #59488b;
    border-radius: 50%;
    left: 9px;
    top: 8px;
    position: absolute;
    content: "";
    -webkit-animation: eyeball 2s linear infinite alternate;
    -moz-animation: eyeball 2s linear infinite alternate;
    animation: eyeball 2s linear infinite alternate;
  }
  @-webkit-keyframes eyeball {
    0% {
      left: 9px;
    }
    100% {
      left: 1px;
    }
  }
  @-moz-keyframes eyeball {
    0% {
      left: 9px;
    }
    100% {
      left: 1px;
    }
  }
  @keyframes eyeball {
    0% {
      left: 9px;
    }
    100% {
      left: 1px;
    }
  }
`;
