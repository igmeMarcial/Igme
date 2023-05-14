import { authModalState } from "@/src/atoms/AuthModalApp";

import {
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import AuthButtonApi from "./AuthButtonApi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";
import ResetPassword from "./ResetPassword";
type AuthModalAppProps = {};

const AuthModalApp: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  const handleClick = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  useEffect(() => {
    if (user) handleClick();
  }, [user]);
  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={modalState.open}
        onClose={handleClick}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontWeight={"bold"}
            py={"28px"}
            fontSize="3xl"
            textAlign="center"
          >
            {modalState.view === "login" && "Iniciar sesión en Igme"}
            {modalState.view === "signup" && "Registrarse en Igme"}
            {modalState.view === "resetPassword" && "Restablecer contraseña"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={5}
          >
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              {modalState.view === "login" || modalState.view === "signup" ? (
                <>
                  <AuthButtonApi />
                  <div className="py-4 px-8 w-full flex row justify-start items-center">
                    <hr className="mb-4 mt-4 border border-solid border-gray-100 border-t-2 rounded-lg w-9/12" />
                    <span className="font-normal ml-2 mr-2 text-gray-400">
                      or
                    </span>
                    <hr className="mb-4 mt-4 border border-solid border-gray-100 border-t-2 rounded-lg w-9/12" />
                  </div>
                  <AuthInputs />
                </>
              ) : (
                <ResetPassword />
              )}
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModalApp;
