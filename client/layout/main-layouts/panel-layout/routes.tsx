import {
  Camera,
  CheckSquare,
  IconProps,
  LogOut,
  Settings,
} from "react-feather";

interface Route {
  id: number;
  title: string;
  path: string;
  icon: IconProps;
}

export const routes: Route[] = [
  {
    id: 1,
    title: "User account",
    path: "/user-panel",
    icon: <Settings />,
  },
  {
    id: 2,
    title: "Submit a shot",
    path: "/user-panel/submit-shot",
    icon: <CheckSquare />,
  },
  { id: 3, title: "Shots", path: "/user-panel/shots", icon: <Camera /> },
  { id: 4, title: "Logout", path: "/", icon: <LogOut /> },
];
