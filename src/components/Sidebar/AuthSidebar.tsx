import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/src/atoms/AuthModalApp";
import { User } from "firebase/auth";

type AuthSidebarProps = {
  user?: User | null;
};

const AuthSidebar: React.FC<AuthSidebarProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  // console.log(user?.email);

  return user ? (
    <div className="py-4 text-gray-700 font-semibold text-sm relative before:content-[''] before:absolute before:left-2 before:right-2 before:top-0 before:h-px before:bg-gray-300 before:transform-scale-y-0.5 ">
      <h2 className="lg:block hidden px-8 mb-8 font-semibold text-sm">
        Cuentas Seguidas
      </h2>
      <ul className="p-0 m-0">
        <li>cuenta 1</li>
        <li>cuenta 1</li>
        <li>cuenta 1</li>
        <li>cuenta 1</li>
        <li>cuenta 1</li>
        <li>cuenta 1</li>
      </ul>
    </div>
  ) : (
    <div className="lg:block hidden relative py-5 px-2 m-0 before:content-[''] before:absolute before:left-2 before:right-2 before:top-0 before:h-px before:bg-gray-300 before:transform-scale-y-0.5">
      <p data-e2e="nav-login-tip" className="text-gray-500 text-base leading-6">
        Inicia sesión para seguir a creadores, dar un me gusta a videos y ver
        comentarios.{" "}
      </p>
      <button
        onClick={() => setAuthModalState({ open: true, view: "login" })}
        type="button"
        data-e2e="nav-login-button"
        className="hover:bg-gray-200  border border-solid rounded-md text-pink-500 border-pink-500 bg-white min-w-min h-12 text-lg font-semibold flex items-center justify-center px-4 select-none cursor-pointer box-border mt-5 w-full"
      >
        Iniciar sesión
      </button>
    </div>
  );
};
export default AuthSidebar;
