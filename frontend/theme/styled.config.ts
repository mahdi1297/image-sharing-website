import "styled-components";

// and extend them!
declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            main: string;
            black: string;
            gray: string;
            danger: string;
            success: string;
        };
    }
}
