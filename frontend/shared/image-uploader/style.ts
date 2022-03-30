import styled from "styled-components";
import { Theme } from "theme/theme";

const UploaderBody = styled.div`
  & div.upload__image-wrapper {
    width: 100%;
    height: auto;
    min-height: 300px;
    border: 2px dashed #ccc;
    padding: 10px;

    & button.upload-btn.active {
      display: block;
      width: 100%;
      height: 300px;
      position: relative;
      cursor: pointer;
      background-color: #fff;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    & button.upload-btn.in-active {
      display: none;
    }
  }

  & div.image-item {
    height: 290;
    width: 100%;
    display: flex;

    & img {
      max-height: 290px;
      max-width: 290px;
      width: auto;
      border-radius: 3px;
    }

    & button {
      margin-left: 10px;
      padding: 10px;
      border: none;
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 5px;
      cursor: pointer;
    }

    & button.remove-btn {
      color: ${Theme.colors.danger};
      border-color: ${Theme.colors.danger};
    }

    & button.update-btn {
      color: ${Theme.colors.black};
      border-color: ${Theme.colors.black};
    }
  }
`;

export { UploaderBody };
