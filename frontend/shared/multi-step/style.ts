import styled from "styled-components";
import { Theme } from "theme/theme";

const TabHeads = styled.ul`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: no-wrap;

  & li {
    width: 100%;
    display: inline;
    text-align: center;

    & p {
      margin: 0;
      padding: 3px;
      display: inline;
      position: relative;
      z-index: 20;
      background: #fff;
      cursor: pointer;
    }

    & span {
      display: block;
      widht: 100%;
      height: 2px;
      background: #ccc;
      position: relative;
      top: 11px;
    }
  }

  & li.active {
    & span {
      background: ${Theme.colors.main} !important;
    }
  }
`;

const TabBody = styled.div`
  & > div {
    width: 100%;
    padding: 10px;
    margin-top: 30px;
  }

  & div.d-b {
    display: block;
  }
  & div.d-n {
    display: none;
  }
`;

export { TabHeads, TabBody };
