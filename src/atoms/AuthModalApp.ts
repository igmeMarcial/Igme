import { atom } from "recoil";

export interface AuthModalApp {
  open: boolean;
  view: "login" | "signup" | "resetPassword";
}
const defaultModalState: AuthModalApp = {
  open: false,
  view: "login",
};
export const authModalState = atom<AuthModalApp>({
  key: "authModalState",
  default: defaultModalState,
});
