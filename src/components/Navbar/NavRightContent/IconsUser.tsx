import { Box, Button, Flex, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { FiBell, FiMessageSquare } from "react-icons/fi";

type IconsUserProps = {};

const IconsUser: React.FC<IconsUserProps> = () => {
  return (
    <Flex>
      <Button
        height={"36px"}
        display={{ base: "none", sm: "flex" }}
        fontSize="sm"
        color={"rgba(22, 24, 35, 1)"}
        onClick={() => {}}
        width={{ base: "100px", md: "110px" }}
        leftIcon={<AddIcon />}
        bg={"rgba(255, 255, 255, 1)"}
        border={"1px solid rgba(22, 24, 35, 0.12)"}
      >
        Cargar
      </Button>
      <Flex>
        <div className="ml-4 flex justify-center items-center">
          <Icon as={FiMessageSquare} boxSize={7} color="black" />
        </div>
        <div className="ml-4 flex justify-center items-center">
          <Icon as={FiBell} boxSize={7} color="black" />
        </div>
      </Flex>
    </Flex>
  );
};
export default IconsUser;
