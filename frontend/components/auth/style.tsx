import styled from "styled-components";
import { Theme } from "theme/theme";

const Body = styled.div`
  width: 400px;
  height: auto;
  margin: auto;

  & div.header {
    display: flex;

    & div {
      cursor: pointer;
      margin-right: 10px;
      font-weight: 700;
      color: ${Theme.colors.gray};
      font-size: 20px;
    }

    & div.active {
      color: ${Theme.colors.black};
    }
  }

  & main {
    margin-top: 30px;
    padding: 10px;
    border-radius: 10px;

    & button {
      margin-top: 20px;
    }
  }
`;

export { Body };
