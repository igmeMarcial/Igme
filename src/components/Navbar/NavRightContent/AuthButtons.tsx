import { authModalState } from "@/src/atoms/AuthModalApp";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";

type AuthButtonsProps = {};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
        mr={4}
        width={{ base: "100px", md: "110px" }}
        height={"36px"}
        fontSize={"14px"}
        lineHeight={"22px"}
      >
        Registrarse
      </Button>
      <Button
        onClick={() => setAuthModalState({ open: true, view: "login" })}
        // width={{ base: "120px", md: "110px" }}
        variant={"solid"}
        mr={4}
        height={"36px"}
        bg={"rgba(254, 44, 85, 1)"}
        color={"white"}
        fontSize={"14px"}
        lineHeight={"22px"}
        _hover={{ bg: "rgba(254, 44, 85, 1)", color: "#fff" }}
      >
        Iniciar Sesión
      </Button>
    </>
  );
};
export default AuthButtons;
