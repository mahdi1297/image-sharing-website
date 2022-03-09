import styled from "styled-components";
import { ButtonStyleModel } from "./model";

const ButtonBody = styled.button<ButtonStyleModel>`
  width: ${(p) => p.block && "100%"};
  border: none;
  cursor: pointer;
  border: 1px solid ${(p) => p.borderColor};
  color: ${(p) => p.colorName};
  background: ${(p) => p.bgColor};
  padding: ${(p) => p.size};
  border-radius: 5px;

  &:hover {
    opacity: 80%;
  }
`;

export { ButtonBody };
