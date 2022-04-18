import React from "react";
import { Container, Grid } from "shared/common/style";
import HeaderLeft from "./components/header-left";
import HeaderRight from "./components/header-right";
import { Body, Wrapper } from "./style";
import { SCROLL_UP } from "constaints/consts";

const Header = () => {
  return (
    <Body scrollDirection={SCROLL_UP}>
      <Container>
        <Wrapper>
          <Grid justify="space-between">
            <div className="header_left">
              <HeaderLeft />
            </div>
            <div className="header_right">
              <HeaderRight />
            </div>
          </Grid>
        </Wrapper>
      </Container>
    </Body>
  );
};

export default Header;
