import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      black: string;
      gray: string;
      danger: string;
      success: string;
      warning: string;
    };
  }
}
