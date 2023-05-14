import { Button, Center, Text } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

const AuthButtonApi: React.FC = () => {
  const [singInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Center
      display={"flex"}
      flexDirection={"column"}
      maxW={"md"}
      px={8}
      w={"full"}
    >
      <Button
        onClick={() => {
          singInWithGoogle();
        }}
        isLoading={loading}
        size="lg"
        w={"full"}
        maxW={"md"}
        variant={"outline"}
        leftIcon={<FcGoogle />}
        my={"12px"}
      >
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
      <div style={{ marginTop: "4px" }}>
        {error && (
          <Text
            ml={"3px"}
            fontSize="xs"
            lineHeight={"15px"}
            color={" rgb(255, 76, 58);"}
          >
            {error?.message}
          </Text>
        )}
      </div>
      {/* <Button
        size="lg"
        w={"full"}
        maxW={"md"}
        colorScheme={"messenger"}
        leftIcon={<SiMessenger />}
      >
        <Center>
          <Text>Send to Messenger</Text>
        </Center>
      </Button> */}
    </Center>
  );
};
export default AuthButtonApi;
