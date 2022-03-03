import styled from "styled-components";
import { IGrid } from "./Style.mode";

const Wrapper = styled.div`
    width: 100%;
    heigth: auto;
  `,
  Container = styled.div`
    width: 90%;
    heigth: 100%;
    margin: auto;
  `,
  Center = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  AlignCenter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  `,
  Justify = styled.div<any>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${(p) => p.justify || "center"};
  `,
  Grid = styled.div<IGrid>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${(p) => p.direction || "row"};
    justify-content: ${(p) => p.justify || "center"};
    align-items: ${(p) => p.align || "center"};
  `;

export { Wrapper, Container, Center, AlignCenter, Justify, Grid };
