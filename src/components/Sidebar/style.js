import styled from "styled-components";

export const Sidebar = styled.div`
  display: flex;
  height: 100%;
  width: 217px;
  position: absolute;
  left: 0;
  background-color: #16161a;
  overflow-x: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1330px) {
    display: none;
  }
`;
