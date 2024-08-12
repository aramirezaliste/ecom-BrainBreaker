import { Flex, Text } from "@chakra-ui/react";
import { CartWidget } from "./CartWidget";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
		fetch("https://fakestoreapi.com/products/categories")
			.then(res => res.json())
			.then(data => setCategories(data))

  }, []);


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

        {categories && categories.map((category) => {
          return (
            <Text key={category}>{category}</Text>
          )
        })}
        <CartWidget/>
      </Flex>
    </>
  );
};
