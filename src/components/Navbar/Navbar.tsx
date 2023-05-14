import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import Search from "./Search";
import NavRightContent from "./NavRightContent/NavRightContent";
// import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Box
      bg="white"
      w="100%"
      color="black"
      px={4}
      borderBottom="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            IGME
            {/* <Image
              src="/images/logoTest.png"
              height={42}
              width={100}
              alt="logo"
            ></Image> */}
          </Box>
        </HStack>
        <Search />
        <NavRightContent user={user} />
      </Flex>
    </Box>
  );
};
export default Navbar;
