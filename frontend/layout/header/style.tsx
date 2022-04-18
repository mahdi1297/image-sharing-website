import styled from "styled-components";
import { Theme } from "theme/theme";
import { SCROLL_UP } from "constaints/consts";

const Body = styled.div<any>`
  width: 100%;
  display: flex;

  box-shadow: 0 4px 12px #00000014, 0 0 1px #0100001a;
  position: fixed;
  top: ${(p) => (p.scrollDirection === SCROLL_UP ? "0" : "-80px")};
  transition: all 0.2s ease-in;
  left: 0;
  background: #fff;
  z-index: 9999;

  @media (max-width: 700px) {
    padding: 0 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;

  & div.avatar-area {
    display: none;
  }

  & div.header_right {
    width: 60px;
    height: 100%;
  }

  & div.header_left {
    width: 100%;
    height: 100%;
  }

  & div.header_left {
    a {
      height: 70px;
      width: 80px;
      display: flex;
      align-items: center;
    }

    a:hover {
      opacity: 50%;
    }
  }

  @media (min-width: 623px) {
    div.avatar-area {
      display: block;
    }

    & div.header_left,
    & div.header_right {
      width: 50%;
    }
  }
`;

const Search = styled.div`
  width: 100%;
  height: 70px;
  position: relative;

  & form {
    width: 100%;
    height: 100%;

    & input {
      width: 100%;
      height: 35px;
      border: none;
      background: #eee;
      border-radius: 10px;
      padding: 10px;
      font-size: 16px;
    }
  }

  & div.suggest-body {
    width: 100%;
    height: auto;
    max-height: 300px;
    scroll-y: clip;
    position: absolute;
    background: #fff;
    z-index: 999;
    box-shadow: 0 4px 12px #00000014, 0 0 1px #0100001a;
    border-radius: 5px;

    & ul {
      width: 100%;
      height: auto;
      max-height: 300px;
      padding: 10px;

      & li {
        display: block;

        & a {
          padding: 5px;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  & button {
    border: none !important;
    background: none !important;
    position: absolute;
    right: 0;
    margin-top: 3px;
  }

  @media (min-width: 623px) {
    width: 80%;
  }
`;

const Menu = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  display: none;

  & li {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;

    & a {
      color: #132d4b;
      padding-bottom: 5px;
      cursor: pointer;
    }

    & a:hover {
      border-bottom: 2px solid ${Theme.colors.main};
    }
  }

  @media (min-width: 623px) {
    display: flex;
  }
`;

const Avatar = styled.div`
  width: 70px;
  height: 100%;

  & img {
    border-radius: 100%;
    cursor: pointer;
  }
`;

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

const AuthBtn = styled.div`
  height: 100%;
  padding: 0 !important;

  display: flex;
  align-items: center;
  margin-right: 10px;

  & button {
    padding: 4px 3px;
    font-size: 14px;
    background: none;
    border: none;
    border-bottom: 1px solid ${Theme.colors.black};
    color: ${Theme.colors.black};
    width: 110px;
  }

  & button:hover {
    border-bottom: 1px solid ${Theme.colors.main};
    color: ${Theme.colors.main};
    box-shadow: 1px 3px 8px #ccc;
  }
`;

export { Body, Wrapper, Search, Menu, Avatar, SudMenu, AuthBtn };
