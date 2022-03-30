import styled from "styled-components";

let boxShadowColor = "#a65fec6e";

const SelectBody = styled.div`
  margin-bottom: 18px;

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

  & div.select__control {
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
    min-height: 48px;
    height: auto;
    line-height: 21px;

    & div.select__multi-value {
      font-size: 17px;
      margin: 5px;
      border: 1px solid rgb(207, 214, 228);
      background: 1px solid rgb(207, 214, 228);
    }
  }

  & div.select__control--is-focused {
    box-shadow: 1px 1px 8px ${boxShadowColor}!important;
  }
`;

export { SelectBody };
