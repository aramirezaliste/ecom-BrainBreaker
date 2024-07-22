import { IconButton, Icon, Box } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";

export const CartWidget = () => {

    const newItemsOnCart = true

    const CircleIcon = (props) => (
        <Icon viewBox='0 0 200 200' color={ newItemsOnCart ? "red" : "purple.200"} {...props}>
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
      )


  return (
    <>
    <Box>
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="purple"
        aria-label="Done"
        fontSize="20px"
        icon={<MdOutlineShoppingCart />}
      />
        <CircleIcon position="relative" top="-15px" left="-24%"/>
    </Box>
    </>
  );
};
