import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModalApp from "../../Modal/Auth/AuthModalApp";
import { User, signOut } from "firebase/auth";
import { auth } from "@/src/firebase/clientApp";
import IconsUser from "./IconsUser";
import UserMenu from "./UserMenu";

type NavRightContentProps = {
  user?: User | null;
};

const NavRightContent: React.FC<NavRightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModalApp />
      <Flex alignItems={"center"}>
        {user ? <IconsUser /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default NavRightContent;
