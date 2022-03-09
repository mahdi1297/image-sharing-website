import styled from "styled-components";

const Body = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999999;
  background: #fff;
  display: block;

  & ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;

    & li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      & img {
        border-radius: 50%;
      }
    }
  }

  @media (min-width: 623px) {
    display: none;
  }
`;

export { Body };
