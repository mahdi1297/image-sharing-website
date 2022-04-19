import styled from "styled-components";
import { Theme } from "theme/theme";

const SudMenu = styled.div`
  width: 200px;
  height: auto;
  position: absolute;
  z-index: 99999;
  background: #fff;
  box-shadow: 1px 3px 7px #e0e0e0;
  border-radius: 10px;

  & ul {
    width: 100%;
    padding: 20px;

    & li {
      width: 100%;
      padding: 6px 0;

      & a {
        width: 100% !important;
        height: auto !important;
        padding: 0 !important;
        color: ${Theme.colors.black};
      }
    }
  }
`;

export { SudMenu };
