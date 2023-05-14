import { authModalState } from "@/src/atoms/AuthModalApp";
import React from "react";
import { useRecoilValue } from "recoil";
import Login from "./Login";
import SignUp from "./SignUp";
import { Flex } from "@chakra-ui/react";

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex px={8} w={"full"} flexDirection={"column"}>
      {modalState.view == "login" && <Login />}
      {modalState.view == "signup" && <SignUp />}
    </Flex>
  );
};
export default AuthInputs;
