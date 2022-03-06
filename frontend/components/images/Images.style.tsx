import styled from "styled-components";
import { Theme } from "theme/theme";

const Body = styled.div`
  margin-top: 30px;
  width: 100%;
  height: auto;
`;

const Head = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div.images_main-image {
    width: 100%;
    height: auto;
  }

  & button {
    margin-left: 10px;
    display: flex;
    align-items: center;
  }

  & > div.images_ph-images {
    width: 35%;
    height: 100vh;
    overflow-y: scroll;

    & div.masonry {
      column-count: 2 !important;
    }

    & img,
    div {
      border-radius: 10px !important;
    }
  }

  & svg {
    margin-right: 5px;
  }

  section.main-image-container {
    padding: 30px 0;
    width: 100%;
    height: 530px;
    & img {
      height: 100%;
      width: auto;
      max-width: 100% !important;
    }
  }
`;

const MetaBody = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  display: block;
  margin-top: 50px;

  & button {
    margin-left: 0 !important;
    margin-right: 10px;
  }

  & div.meta-likes {
    margin-left: 20px !important;
  }

  & ul {
    margin-top: 20px;

    & li {
      display: flex;
      align-items: center;
      padding: 10px 0;

      & p {
        margin: 0;
        margin-left: 15px;
        font-size: 14px;
      }
    }
  }

  & ul.tags {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    & li {
      height: 30px;
      margin-right: 10px;
      margin-bottom: 10px;
      background: #eee;
      border-radius: 2px;

      & a {
        padding: 12px 5px;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        color: #767676;
        font-size: 14px;
        text-decoration: none;
        text-transform: capitalize;
        transition: all 0.1s ease-in-out 0s;
      }

      & a:hover {
        opacity: 60%;
      }
    }
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 60px;
`;

const Tab = styled.ul`
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

export { Body, Head, MetaBody, ContentWrapper, Tab };
