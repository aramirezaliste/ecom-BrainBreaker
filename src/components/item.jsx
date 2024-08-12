import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  ButtonGroup,
  Image,
  Button,
} from "@chakra-ui/react";

export const Item = ({ product }) => {
  const { id, title, price, category, description, image } = product;

  return (
    <Card w="50%" maxW="sm" h="50%">
      <CardBody >
        <Image src={image} alt={title} borderRadius="lg" w="50%" />
        <Stack mt="6" spacing="3" h='50%'>
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="purple.600" fontSize="2xl">
            {price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="purple">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="purple">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
