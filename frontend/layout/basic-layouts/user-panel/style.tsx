import styled from "styled-components";
import { Theme } from "theme/theme";

const UserPanelBody = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;

  & h1 {
    display: block;
    padding: 10px;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    font-size: 25px;
    color: ${Theme.colors.black};
  }

  & div.sidebar {
    width: 100%;
    overflow-y: auto;
    border-bottom: 1px solid ${Theme.colors.gray};
    margin-bottom: 40px;

    & div.avatar {
      margin-bottom: 15px;

      & div {
        padding: 0;

        & a {
          color: ${Theme.colors.black} !important;
        }
      }
    }

    & h2 {
      color: ${Theme.colors.black};
      font-size: 16px;
    }

    & ul {
      width: 100%;

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
      }

      & a.active {
        border-left: 3px solid ${Theme.colors.main};
        background: #f7f7f7;
      }
    }
  }

  & main {
    width: 100%;
    height: auto;
  }

  @media (min-width: 623px) {
    margin-top: 100px;
  }

  @media (min-width: 788px) {
    padding: 0;

    & h1 {
      display: none;
    }

    & div.sidebar {
      width: 20%;
    }

    & main {
      width: 75%;
    }
  }
`;

export { UserPanelBody };
