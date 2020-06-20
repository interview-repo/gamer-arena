import styled from "styled-components";
import { 
  Row,
  GameIcon,
  MatchUser,
  Creator,
  Date,
  Status
} from "./components/DisputesItem/style";
import { DisputeList } from "./container/DisputesList/style";
import { Header, Title } from "./components/DisputeHeader/style";
import { Search } from "./components/SearchBox/style";

export const Content = styled.div`
  height: calc(100% - 69px);
  width: 100%;
  display: flex;
  position: absolute;
  top: 69px;
  left: 0px;
`;

export const Dispute = styled.div`
  display: flex;
  position: absolute;
  overflow-y: scroll;
  z-index: 1;
  left: 217px;
  height: 100%;
  width: calc(100% - 217px);
  background-color: #16161a;

  &::after {
    content: "";
    background-image: url(./assets/bg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.65;
    height: 40%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  @media screen and (max-width: 1330px) {
    left: 0;
    width: 100%;

    &::after{
      height: 28%;
    }

    ${Header}{
      left: 10%;
      width: calc(100% - 75px);
    }

    ${Search}{
      right: 0px;
    }

    ${DisputeList}{
      left: 10%;
    }
  }

  @media screen and (max-width: 929px) {
    
    ${Header}{
      left: 5%;
    }

    ${DisputeList}{
      width: calc(90% - 10px);
      left: 5%;

      ${Row}{
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;


        >div{
          width: 80%;

           &:not(:last-child) {
            margin-right: 0px;

            &:after {
              
              right: -10px;
              top: 65%;
              height: 1px;
              width: 100%;

            }
          }
        }

        ${GameIcon}{margin-right: 20%;}
        ${MatchUser}{
            display: block;
            width: 80%;
            margin-top: 25px;

            >strong{ display: block;}
            >span{ display: block;}
        }
        ${Creator}{display:flex;}
        ${Date}{display:flex;}
        ${Status}{display:flex;}

      }
    }

  }
`;
