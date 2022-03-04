import { IHeaderRoutes, ISubmenuRoutes } from "./Header.model";

export const routes: IHeaderRoutes[] = [
  { id: 3, name: "Login/Register", path: "" },
  { id: 2, name: "Blog", path: "/blog" },
  { id: 1, name: "Categories", path: "/categories" },
];

export const submenuRoutes: ISubmenuRoutes[] = [
  { id: 1, name: "Profile", path: "/user/panel" },
  { id: 2, name: "Submit photo", path: "/user/profile/submit-photo" },
  { id: 3, name: "Submit photo", path: "/user/profile/submit-photo" },
  { id: 4, name: "Account settings", path: "/user/panel/submit-photo" },
  { id: 5, name: "Logout", path: "/user/panel/submit-photo" },
];
