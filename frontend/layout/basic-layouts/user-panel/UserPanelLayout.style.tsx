import styled from "styled-components";
import { Theme } from "theme/theme";

const UserPanelBody = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  & div.sidebar {
    width: 25%;
    height: 100vh;
    overflow-y: auto;

    & h2 {
      color: ${Theme.colors.main};
      font-size: 18px;
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
          font-size: 18px;
        }
      }

      & a:hover {
        background: linear-gradient(
          to right,
          ${Theme.colors.main},
          transparent
        );

        & span,
        svg {
          color: #fff;
        }
      }
    }
  }

  & main {
    width: 75%;
    height: auto;
  }
`;

export { UserPanelBody };
