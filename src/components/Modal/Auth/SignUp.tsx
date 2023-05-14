import { authModalState } from "@/src/atoms/AuthModalApp";
import { auth } from "@/src/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/src/firebase/errors";
import { Button, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

interface InitialForm {
  email: string;
  password: string;
  confirmPassword: string;
}
const InitialForm = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [singUpForm, setSingUpForm] = useState(InitialForm);
  const [errorAuth, setErrorAuth] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSingUpForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errorAuth) setErrorAuth(""); // reset error
    if (singUpForm.password !== singUpForm.confirmPassword) {
      setErrorAuth("Contraseña no autenticado");
      return;
    }
    console.log(error);
    createUserWithEmailAndPassword(singUpForm.email, singUpForm.password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
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
        <Input
          fontSize={"16px"}
          onChange={handleChange}
          name="confirmPassword"
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
          placeholder="Confirmar Contraseña"
          required
          autoComplete="true"
        />
        <div style={{ marginTop: "4px" }}>
          {(errorAuth || error) && (
            <Text
              ml={"3px"}
              fontSize="xs"
              lineHeight={"15px"}
              color={" rgb(255, 76, 58);"}
            >
              {errorAuth ||
                FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
            </Text>
          )}
        </div>
        <Button
          size="lg"
          w={"full"}
          maxW={"md"}
          variant={"outline"}
          type="submit"
          isLoading={loading}
          isDisabled={
            singUpForm.email &&
            singUpForm.password &&
            singUpForm.confirmPassword
              ? false
              : true
          }
        >
          Registrarse
        </Button>
        <Stack alignItems={"center"} pt={6}>
          <Text
            fontSize="14px"
            fontWeight="bold"
            display="flex"
            align={"center"}
          >
            ¿Ya tienes una cuenta?{" "}
            <span
              onClick={() =>
                setAuthModalState((prev) => ({
                  ...prev,
                  view: "login",
                }))
              }
              className="text-sm leading-6  inline-block text-red-500 ml-1 bold align-middle cursor-pointer"
            >
              Iniciar sesión
            </span>
          </Text>
        </Stack>
      </Stack>
    </form>
  );
};
export default SignUp;
