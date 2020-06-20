import styled from "styled-components";

export const DisputeList = styled.div`
  position: absolute;
  width: 76.53%;
  height: calc(100% - 69px);
  left: 30px;
  top: 208px;
  background-color: #16161a;

  .btn {
    height: 25px;
    width: 45px;
    margin: 5px;
    background-color: transparent;
    border-radius: 2px;
    padding: 4px 6px;
    border: none;
    outline: none;
    cursor: pointer;

    &:disabled {
      cursor: default;
      opacity: 0.4;
    }

    &::before {
      position: relative;
      filter: brightness(0) invert(1);
    }
  }
`;

export const Pager = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 50px;
`;

export const Previous = styled.button`
  &::before {
    content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAcwAAAHMBY8FD/gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABoSURBVDiNrZO5DYBADARH1EEXdEYVZERUR3KdLAkBzx23FrbkxNKM5A9JOAksQAGmW92EV0BnbiHBA96B0Rb04E+BAzcFLlwVROCXAJgjsCQG/kZqCylDTFljyiGlnHJDEnumi6T6zgdnvi8pb+xXxwAAAABJRU5ErkJggg==");
  }
`;

export const Next = styled.button`
  &::before {
    content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAfQAAAH0Bx0gPAAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABzSURBVDiNtdPJCYBADEDRzzRmE3ZgEV6tRHHpzELiIQrBZRajA7lk4EE2RIQjgApYgdbmY8EJaADZo3sDBKAvQa4JRYZc5D6pyJiDPMuKTCkkXp8icwxJd1mRxSC1/Q94328luJroGqNrkdyrzAfHVHzOG+8CKlLk+LO+AAAAAElFTkSuQmCC");
  }
`;

export const Alert = styled.h3`
  justify-content: center;
  display: grid;
  background-color: #eb2a4436;
  padding: 29px 0;
  border-radius: 4px;
  color: #fff;
  box-shadow: 3px 4px 15px -7px #00000070;
`;
