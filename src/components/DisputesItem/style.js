import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #1c1c21;
  height: 123px;
  border-radius: 6px;
  margin-bottom: 14px;

  > div {
    display: block;
    position: relative;
    color: #fff;
    height: 40%;

    &:not(:last-child) {
      margin-right: 30px;

      &:after {
        content: "";
        border: 1px solid #ffffff2b;
        position: absolute;
        right: -10px;
        top: -10px;
        height: 150%;
      }
    }
  }

  @media screen and (max-width: 929px) {
    flex-direction: column;
    height: 400px;
    justify-content: space-evenly;
    align-items: center;

    > div {
      width: 65%;
      justify-content: space-between;
    }
  }
`;

export const GameIcon = styled.img`
  float: left;
  margin: 0px 25px 0 25px;
`;

export const MatchUser = styled.div`
  width: 40%;

  > strong {
    display: block;
    margin: 5px 0 5px;
    text-transform: capitalize;

    b {
      position: relative;
      top: -2px;

      &:nth-child(1) {
        margin-right: 15px;
      }
      &:nth-child(3) {
        margin-left: 10px;
      }
    }

    img {
      position: relative;
    }
  }
  > span {
    display: block;
    font-size: 13px;
    margin-top: 5px;

    span {
      display: inline-block;
      margin-right: 20px;
    }
  }
`;

export const Creator = styled.div`
  width: 20%;

  > span {
    display: block;
    font-size: 13px;
    margin-top: 5px;
    color: #828283;
  }
  > strong {
    display: block;
    margin: 5px 0 5px;
    text-transform: capitalize;
  }
`;

export const Date = styled.div`
  width: 15%;

  > span {
    display: block;
    font-size: 13px;
    margin-top: 5px;
    color: #828283;
  }
  > strong {
    display: block;
    margin: 5px 0 5px;
    text-transform: capitalize;
  }
`;

export const Status = styled.div`
  width: 20%;
  color: ${(props) =>
    props.status === "declined"
      ? "#EB2C44"
      : props.status === "pending"
      ? "#EEB502"
      : "#00C202"} !important;

  > span {
    display: block;
    font-size: 13px;
    margin-top: 5px;
    color: #828283;
  }
  > strong {
    display: block;
    margin: 5px 0 5px;
    text-transform: capitalize;
  }
`;
