import styled from "styled-components";
import { IGrid } from "./Style.mode";

const Wrapper = styled.div`
  width: 100%;
  heigth: auto;
`;
const Container = styled.div`
  width: 100%;
  heigth: 100%;
  margin: auto;
  @media (min-width: 700px) {
    width: 90%;
  }
`;
const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AlignCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Justify = styled.div<any>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(p) => p.justify || "center"};
`;

/**
 * Style flex container
 * @prop {string} direction The flex direction.
 * @prop {string} justify The flex justify-content.
 * @prop {string} align The flex align-items.
 */
const Grid = styled.div<IGrid>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(p) => p.direction || "row"};
  justify-content: ${(p) => p.justify || "center"};
  align-items: ${(p) => p.align || "center"};
`;

export { Wrapper, Container, Center, AlignCenter, Justify, Grid };
