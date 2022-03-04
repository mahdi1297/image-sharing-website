import styled from "styled-components";
import { IButtonStyleModel } from "./Button.model";

const ButtonBody = styled.button<IButtonStyleModel>`
  border: none;
  cursor: pointer;
  border: 1px solid ${(p) => p.colorName};
  color: ${(p) => p.colorName};
  background: ${(p) => p.bgColor};
  padding: ${(p) => p.size};
  border-radius: 3px;

  &:hover {
    opacity: 80%;
  }
`;

export { ButtonBody };
