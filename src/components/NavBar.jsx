import { Flex, Text } from "@chakra-ui/react";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={3}
        bg="purple.100"
      >
        <Text as='cite' color={"black"} fontSize='2xl'>Brain Breaker</Text>
        <Text>Puzzles</Text>
        <Text>Maquetas</Text>
        <CartWidget/>
      </Flex>
    </>
  );
};
