import styled from "styled-components";
import { Theme } from "theme/theme";

const Body = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
`;

const Card = styled.div`
  & > div.mItem {
    position: relative;
    border-radius: 5px;
    margin-bottom: 30px;

    & > img {
      border-radius: 5px;
      margin-bottom: 10px;
    }

    & span {
      margin-tio: 20px;
      margin-right: 10px;

      & span.grid_meta {
        font-size: 14px;
        margin-left: 5px;
        margin-top: 2px;
        color: ${Theme.colors.black};
      }

      & svg:hover {
        color: ${Theme.colors.main};
        cursor: pointer;
      }
    }

    & div.mItem-meta {
      width: 100%;
      height: 50px;
    }
  }

  & > div.mItem:hover div.ph_user {
    display: flex;
  }

  & div.ph_user {
    width: 100%;
    height: 70px;
    background: linear-gradient(179deg, black, transparent);
    position: absolute;
    display: none;

    & p {
      margin: 0;
      padding: 0;
      padding-bottom: 3px;
      padding-left: 5px;

      & a {
        font-size: 13px;
        color: #fff;
      }
    }
  }
`;

export { Body, Card };
