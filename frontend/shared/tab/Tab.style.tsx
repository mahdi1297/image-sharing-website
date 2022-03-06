import styled from "styled-components";
import { Theme } from "theme/theme";

const TabBody = styled.ul`
  width: 100%;
  height: 60px;
  box-shadow: 1px 3px 7px #e0e0e0;
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;

  & li {
    width: 100%;
    height: 100%;
    line-height: 55px;
    text-align: center;
    cursor: pointer;
  }

  & li.active {
    border-bottom: 2px solid ${Theme.colors.main};
  }

  & li:hover {
    background: ${Theme.colors.gray};
    color: ${Theme.colors.main};
  }
`;

export { TabBody };
