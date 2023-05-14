import { authModalState } from "@/src/atoms/AuthModalApp";
import { auth } from "@/src/firebase/clientApp";
import {
  Button,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await sendPasswordResetEmail(email);
    setSuccess(true);
  };
  return (
    <Stack
      spacing={4}
      w={"full"}
      maxW={"md"}
      bg={useColorModeValue("white", "gray.700")}
      rounded={"xl"}
      p={6}
      my={8}
    >
      <Text
        textAlign={"start"}
        fontWeight={600}
        fontSize={{ base: "xs", sm: "sm" }}
        color={useColorModeValue("gray.800", "gray.400")}
      >
        {!error && success
          ? "Verifica tu Email"
          : "Escribe tu dirección de correo electrónico"}
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack mb={12} spacing={6} w={"full"}>
          <Input
            fontSize={"16px"}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            type="email"
            bg={"rgba(22, 24, 35, 0.06)"}
            color={"rgb(22, 24, 35)"}
            size="lg"
            borderColor={"rgba(22, 24, 35, 0.12)"}
            _focus={{
              outline: "none",
              border: "1px solid ",
              borderColor: "rgba(255, 255, 255, 0.06)",
            }}
            focusBorderColor="rgba(22, 24, 35, 0.12)"
            variant="outline"
            placeholder="Dirección de correo electronico"
            required
            autoComplete="true"
          />
          <div style={{ marginTop: "4px" }}>
            <Text
              ml={"3px"}
              fontSize="xs"
              lineHeight={"15px"}
              color={" rgb(255, 76, 58);"}
            >
              {error?.message === "Firebase: Error (auth/user-not-found)." &&
                "El email no existe"}
            </Text>
          </div>
          <Button
            size="lg"
            w={"full"}
            maxW={"md"}
            variant={"outline"}
            type="submit"
            isDisabled={email ? false : true}
            isLoading={sending}
          >
            Send Reset Link
          </Button>
        </Stack>
        <Stack mt={8} alignItems={"center"} pt={6}>
          <Text
            fontSize="14px"
            fontWeight="bold"
            display="flex"
            align={"center"}
          >
            ¿No tienes cuenta?{" "}
            <span
              onClick={() =>
                setAuthModalState((prev) => ({
                  ...prev,
                  view: "signup",
                }))
              }
              className="text-sm leading-6  inline-block text-red-500 ml-1 bold align-middle cursor-pointer"
            >
              Registrarse
            </span>
          </Text>
        </Stack>
      </form>
    </Stack>
  );
};
export default ResetPassword;
