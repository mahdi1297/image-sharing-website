import React from "react";
import { AlignCenter, Container, Grid, Justify } from "shared/common/style";
import { Body, Wrapper } from "./Header.style";
import HeaderLeft from "./Header.left";
import HeaderRight from "./Header.Right";

const Header = () => {
  return (
    <Body>
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
