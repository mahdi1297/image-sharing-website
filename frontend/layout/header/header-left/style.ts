import styled from "styled-components";

const Search = styled.div`
  width: 100%;
  height: 70px;
  position: relative;

  & form {
    width: 100%;
    height: 100%;

    & input {
      width: 100%;
      height: 35px;
      border: none;
      background: #eee;
      border-radius: 10px;
      padding: 10px;
      font-size: 16px;
    }
  }

  & div.suggest-body {
    width: 100%;
    height: auto;
    max-height: 300px;
    scroll-y: clip;
    position: absolute;
    background: #fff;
    z-index: 999;
    box-shadow: 0 4px 12px #00000014, 0 0 1px #0100001a;
    border-radius: 5px;

    & ul {
      width: 100%;
      height: auto;
      max-height: 300px;
      padding: 10px;

      & li {
        display: block;

        & a {
          padding: 5px;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  & button {
    border: none !important;
    background: none !important;
    position: absolute;
    right: 0;
    margin-top: 3px;
  }

  @media (min-width: 623px) {
    width: 80%;
  }
`;

const Avatar = styled.div`
  width: 70px;
  height: 100%;

  & img {
    border-radius: 100%;
    cursor: pointer;
  }
`;

export { Search, Avatar };
