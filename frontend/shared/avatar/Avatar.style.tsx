import styled from "styled-components";
import { AvatarModel } from "./Avatar.model";

const AvatarBody = styled.div<AvatarModel>`
  & div.ph_user-image {
    width: 40px;
    height: 100%;
    padding: 10px;

    & img {
      border-radius: ${(p) => (p.radius ? p.radius : "50%")};
      width: ${(p) => (p.width ? p.width : "30px")};
      height: ${(p) => (p.width ? p.width : "30px")};
    }
  }
`;

export { AvatarBody };
