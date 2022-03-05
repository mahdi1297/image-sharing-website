import styled from "styled-components";

const Body = styled.div`
  margin-top: 30px;
  width: 100%;
  height: auto;
`;

const Head = styled.div`
  width: 100%;
  display: flex;

  & > div.images_main-image {
    width: 65%;
    height: auto;
  }

  & button {
    margin-left: 10px;
    display: flex;
    align-items: center;
  }

  & > div.images_ph-images {
    width: 35%;
    height: 500px;
    overflow-y: scroll;

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

export { Body, Head };
