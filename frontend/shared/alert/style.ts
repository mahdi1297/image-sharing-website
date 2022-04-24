import styled from "styled-components";

type StyleProps = {
  bgColor: string;
  textColor: string;
  borderColor: string;
};

const Body = styled.div<StyleProps>`
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 30px;
  color: ${(p) => p.textColor};
  background-color: ${(p) => p.bgColor};
  border-left: 6px solid ${(p) => p.borderColor};
  box-shadow: 1px 5px 3px #eee;
`;

export { Body };
