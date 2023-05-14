import { authModalState } from "@/src/atoms/AuthModalApp";
import { Button, Input, Link, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/src/firebase/errors";

type LoginProps = {};
const InitialForm = {
  email: "",
  password: "",
};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState(InitialForm);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(error);
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3} w={"full"}>
        <Input
          fontSize={"16px"}
          onChange={handleChange}
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
          placeholder="Email"
          required
          autoComplete="true"
        />
        <Input
          fontSize={"16px"}
          onChange={handleChange}
          name="password"
          type="password"
          bg={"rgba(22, 24, 35, 0.06)"}
          color={"rgb(22, 24, 35)"}
          size="lg"
          borderColor="rgba(22, 24, 35, 0.12)"
          _focus={{
            outline: "none",
            border: "1px solid ",
            borderColor: "rgba(255, 255, 255, 0.06)",
          }}
          focusBorderColor="rgba(22, 24, 35, 0.12)"
          variant="outline"
          placeholder="Contraseña"
          required
          autoComplete="true"
        />
        <div style={{ marginTop: "4px" }}>
          {error && (
            <Text
              ml={"3px"}
              fontSize="xs"
              lineHeight={"15px"}
              color={" rgb(255, 76, 58);"}
            >
              {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
            </Text>
          )}
        </div>
        <div style={{ marginTop: "4px" }}>
          <Text
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: "resetPassword",
              }))
            }
            ml={"3px"}
            fontWeight={"600"}
            fontSize="xs"
            lineHeight={"15px"}
            color={" rgba(22, 24, 35, 0.75)"}
            cursor={"pointer"}
          >
            ¿Olvidaste la contraseña?
          </Text>
        </div>
        <Button
          size="lg"
          w={"full"}
          maxW={"md"}
          variant={"outline"}
          type="submit"
          isDisabled={loginForm.email && loginForm.password ? false : true}
          isLoading={loading}
        >
          Ingresar
        </Button>
        <Stack alignItems={"center"} pt={6}>
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
      </Stack>
    </form>
  );
};
export default Login;
