import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

type SearchProps = {};

const Search: React.FC<SearchProps> = () => {
  return (
    <Flex display={{ base: "none", md: "flex" }}>
      <InputGroup width="330px">
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
        >
          <Search2Icon color="rgb(199, 201, 210)" />
        </InputLeftElement>
        <Input
          bg="rgba(22, 24, 35, .06)"
          placeholder="Buscar"
          fontSize="16px"
          lineHeight="22px"
          _hover={{
            bg: "rgba(22, 24, 35, .06)",
            border: "1px solid ",
            borderColor: "rgba(22, 24, 35, .06)",
          }}
          _focus={{
            outline: "none",
            border: "1px solid ",
            borderColor: "rgba(22, 24, 35, .06)",
          }}
          focusBorderColor="rgb(199, 201, 210)"
        />
      </InputGroup>
    </Flex>
  );
};
export default Search;
