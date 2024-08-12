import { Box, Image, Text, Flex, Badge, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
	const { id, title, price, category, description, image } = product;

	return (
		<Box align='center' m='3'>
			<Box borderWidth='1px' borderRadius='lg' overflow='hidden' align='center' minH='35em'>
				<Flex direction='column' align='center' wrap='wrap'>
				<Image pt='10' boxSize='20em' objectFit='contain' src={image} alt={title} />
				<Badge mt='3' borderRadius='full' px='2' colorScheme='purple'>
					<Link to={`/categoria/${category}`}>{category}</Link>
				</Badge>
				</Flex>
				<Box p='6'>
					<Flex direction='column'>
						<Text as='cite'>{title}</Text>
						<Text fontSize='2xl' as='abbr' p='2'>US ${price}</Text>
					</Flex>
					<Button variant="solid" colorScheme="purple" m='1'>
						Añadir al Carrito
					</Button>
					<Button variant="solid" colorScheme="purple" m='1'>
						<Link to={`/detalle/${id}`} > Detalle </Link>
					</Button>
				</Box>
			</Box>
		</Box>



	);
};
