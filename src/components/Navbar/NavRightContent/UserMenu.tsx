import {
  FaUser,
  FaSignInAlt,
  FaEllipsisV,
  FaBookmark,
  FaQuestionCircle,
  FaMoon,
  FaCog,
  FaGlobeAmericas,
} from "react-icons/fa";
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { User, signOut } from "firebase/auth";
import { auth } from "@/src/firebase/clientApp";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  console.log(user?.email);
  return (
    <Menu>
      <MenuButton
        ml={user ? 4 : 0}
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        {user ? (
          <Avatar
            size="sm"
            name="Ryan Florence"
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
        ) : (
          <FaEllipsisV className="text-2xl text-black" />
        )}
      </MenuButton>
      <MenuList>
        {user && (
          <>
            <MenuItem
              py={"10px"}
              fontSize={"16px"}
              fontWeight={"500"}
              _hover={{ bg: "rgba(22, 24, 35, .03)" }}
            >
              <FaUser className="mr-2" /> Perfil
            </MenuItem>
            <MenuItem
              py={"10px"}
              fontSize={"16px"}
              fontWeight={"500"}
              _hover={{ bg: "rgba(22, 24, 35, .03)" }}
            >
              <Flex alignItems={"center"}>
                <FaBookmark className="mr-2" /> Favoritos
              </Flex>
            </MenuItem>
            <MenuItem
              py={"10px"}
              fontSize={"16px"}
              fontWeight={"500"}
              _hover={{ bg: "rgba(22, 24, 35, .03)" }}
            >
              <Flex alignItems={"center"}>
                <FaCog className="mr-2" /> Ajustes
              </Flex>
            </MenuItem>
          </>
        )}
        <MenuItem
          py={"10px"}
          fontSize={"16px"}
          fontWeight={"500"}
          _hover={{ bg: "rgba(22, 24, 35, .03)" }}
        >
          <Flex alignItems={"center"}>
            <FaGlobeAmericas className="mr-2" /> Español
          </Flex>
        </MenuItem>
        <MenuItem
          py={"10px"}
          fontSize={"16px"}
          fontWeight={"500"}
          _hover={{ bg: "rgba(22, 24, 35, .03)" }}
        >
          <Flex alignItems={"center"}>
            <FaQuestionCircle className="mr-2" /> Comentarios y ayuda
          </Flex>
        </MenuItem>
        <MenuItem
          py={"10px"}
          fontSize={"16px"}
          fontWeight={"500"}
          _hover={{ bg: "rgba(22, 24, 35, .03)" }}
        >
          <Flex alignItems={"center"}>
            <FaMoon className="mr-2" /> Modo Oscuro
          </Flex>
        </MenuItem>

        {user && (
          <>
            <MenuDivider />
            <MenuItem
              py={"10px"}
              fontSize={"16px"}
              fontWeight={"500"}
              _hover={{ bg: "rgba(22, 24, 35, .03)" }}
              onClick={() => signOut(auth)}
            >
              <Flex alignItems={"center"}>
                <FaSignInAlt className="mr-2" /> Salir
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
