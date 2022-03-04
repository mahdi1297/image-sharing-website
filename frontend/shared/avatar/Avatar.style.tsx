import styled from "styled-components";

const AvatarBody = styled.div`
  & div.ph_user-image {
    width: 40px;
    height: 100%;
    padding: 10px;

    & img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
  }
`;

export { AvatarBody };
