import styled from "styled-components";
import { Theme } from "theme/theme";

const UserPanelBody = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  & div.sidebar {
    width: 20%;
    height: 100vh;
    overflow-y: auto;

    & h2 {
      color: ${Theme.colors.black};
      font-size: 16px;
    }

    & ul {
      width: 90%;

      & li:last-child {
        margin-top: 20px;
        border-top: 1px solid ${Theme.colors.gray};
      }

      & a {
        padding: 10px 3px;
        width: 100%;
        heigth: 100%;
        display: flex;
        align-items: center;

        & span {
          margin-left: 10px;
          color: ${Theme.colors.black};
          font-size: 14px;
        }
      }

      & a:hover {
        border-left: 3px solid ${Theme.colors.main};
        background: #eee;

        & span,
        svg {
          // color: #fff;
        }
      }

      & a.active {
        border-left: 3px solid ${Theme.colors.main};
        background: #f7f7f7;
      }
    }
  }

  & main {
    width: 75%;
    height: auto;
  }
`;

export { UserPanelBody };
