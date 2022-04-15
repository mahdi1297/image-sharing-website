import styled from "styled-components";
import { Theme } from "theme/theme";
import { SCROLL_UP } from "constaints/consts";

const Body = styled.div<any>`
  width: 100%;
  display: none;
  box-shadow: 0 4px 12px #00000014, 0 0 1px #0100001a;
  position: fixed;
  top: ${(p) => (p.scrollDirection === SCROLL_UP ? "0" : "-80px")};
  transition: all 0.2s ease-in;
  left: 0;
  background: #fff;
  z-index: 9999;

  @media (min-width: 623px) {
    display: flex;
  }

  @media (max-width: 700px) {
    padding: 0 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;

  & div.header_right,
  & div.header_left {
    width: 50%;
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
`;

const Search = styled.div`
  width: 80%;
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
`;

const Menu = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;

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

export { Body, Wrapper, Search, Menu, Avatar, SudMenu };
