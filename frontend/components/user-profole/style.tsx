import styled from "styled-components";
import {Theme} from "theme/theme";

const ProfileHeadStyle = styled.div`
  width: 100%;
  height: auto;
  margin-top: 60px;
  padding-bottom: 30px;

  & p a {
    display: none;
  }
`;

const HeadInfoStyle = styled.ul`
  & img {
    border: 2px solid ${Theme.colors.main};
    border-radius: 1em;
    padding: 2px;
  }

  & div.ph_user-image {
    padding: 0;
  }

  & ul {
    margin-left: 60px;
    display: flex;
    align-items: center;

    & li {
      margin-right: 19px;
      display: flex;
      flex-direction: column;

      & strong,
      div {
        text-align: center;
      }

      & div {
        font-size: 13px;
        color: ${Theme.colors.gray};
        margin-top: 10px;
        border: 1px solid #fff;
      }
    }
  }
`;

const UserDataStyle = styled.div`
  margin-top: 20px;
  width: 100%;

  & div.user-data {
    & p {
      color: ${Theme.colors.gray};
      font-size: 14px;
    }
  }

  & div.user-ctas {
    margin-top: 25px;

    & button {
      border: none;
    }

    & button:last-child {
      margin-left: 20px;
      background: linear-gradient(
        to left,
        ${Theme.colors.main},
        ${Theme.colors.danger}
      ) !important;
      color: #fff !important;
      border: none;
    }
  }
`;

export {ProfileHeadStyle, HeadInfoStyle, UserDataStyle};
