import styled from "styled-components";

const Body = styled.div`
    width: 100%;
    box-shadow: 1px 3px 7px #e0e0e0;
  `,
  Wrapper = styled.div`
    width: 100%;
    height: 70px;

    & div.header_right,
    & div.header_left {
      width: 50%;
      height: 100%;
    }

    & div.header_left {
      a {
        height: 70px;
        width: 80px;
        display: flex;
        align-items: center;
      }
      a:hover {
        opacity: 50%;
      }
    }

    & div.header_right {
      border: 1px solid black;
    }
  `,
  Search = styled.div`
    width: 80%;
    height: 70px;
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
  `;

export { Body, Wrapper, Search };
