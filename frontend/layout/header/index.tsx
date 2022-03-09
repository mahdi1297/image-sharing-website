import React from "react";
import { Container, Grid } from "shared/common/style";
import { Body, Wrapper } from "./style";
import useScrollDirection from "hooks/useScrollDirection";
import HeaderLeft from "./components/Headerleft";
import HeaderRight from "./components/HeaderRight";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <Body scrollDirection={scrollDirection}>
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
