import styled from "styled-components";
import { ButtonStyleModel } from "./model";

const ButtonBody = styled.button<ButtonStyleModel>`
  width: ${(p) => p.block && "100%"};
  border: none;
  cursor: pointer;
  color: ${(p) => p.colorName};
  background: ${(p) => p.bgColor};
  padding: ${(p) => p.size};
  border-radius: 5px;
  border: 1px solid ${(p) => (p.borderColor ? p.borderColor : "none")} !important;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 80%;
  }

  & svg {
    margin-right: 5px;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 50%;
  }
`;

export { ButtonBody };
