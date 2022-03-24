import styled from "styled-components";
import { InputShareStyleModel } from "./model";

let boxShadowColor = "#a65fec6e";

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const FormWrapper = styled.div<InputShareStyleModel>`
  width: ${(p) => (p.size === "lg" ? "100%" : "50%")};
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;

  &:nth-child(odd) {
    padding-right: 10px;
  }

  &:nth-child(even) {
    padding-left: 10px;
  }

  & div.label {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 4px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  & input {
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(207, 214, 228);
    border-radius: 5px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    max-width: 100%;
    outline: 0px;
    padding: 0px 16px;
    width: 100%;
    font-size: 14px;
    height: 48px;
    line-height: 21px;
  }

  & input:focus {
    box-shadow: 1px 1px 8px ${boxShadowColor};
  }

  @media (max-width: 700px) {
    // width: 100%;
  }
`;

export { Body, FormWrapper };
