import styled from "styled-components";
import { Theme } from "theme/theme";

const TabBody = styled.ul`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(12, 18, 28, 0.12);
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;

  & li {
    margin-top: 12px;
    padding: 0 15px;
    height: 80%;
    line-height: 45px;
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
