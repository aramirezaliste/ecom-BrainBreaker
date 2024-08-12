import { Box, Image, Text, Flex, Badge, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

export const ItemDetail = () => {
    const [detail, setDetail] = useState([]);
    const [isLoading, setIsloading] = useState(false)
    const [count, setCount] = useState(1)

    const { id } = useParams();

    const { title, price, category, description, image } = detail;

    useEffect(() => {
        setIsloading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data))
            .finally(setIsloading(false))
    }, [id]);

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }


    if (isLoading) {
        return (
            <Flex align='center' justify='center' h='30em'>
                <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='purple.500' size='xl' />
            </Flex>
        )
    }

    return (
        <Box align='center' m='3'>
            <Box maxW='50em' borderWidth='1px' borderRadius='lg' overflow='hidden' align='center'>
                <Flex direction='column' align='center' wrap='wrap'>
                    <Image pt='10' boxSize='20em' objectFit='contain' src={image} alt={title} />
                    <Text as='b'>{title}</Text>
                    <Badge mt='2' borderRadius='full' px='2' colorScheme='purple'>
                        <Link to={`/categoria/${category}`}>{category}</Link>
                    </Badge>
                </Flex>
                <Box p='6'>
                    <Flex direction='column'>
                        <Text as='cite'>{description}</Text>
                        <Text fontSize='2xl' as='abbr' m='2'>US ${price}</Text>
                    </Flex>
                    <Flex align='center' justify='center'>
                        <Button size='sm' variant="solid" colorScheme="purple" mx='1' onClick={decreaseCount}>
                            -
                        </Button>
                        <Box w='2em' h='2em' borderWidth='1px' borderRadius='lg' overflow='hidden' pt='1'>
                        <Text color='purple.700'> {count}</Text>
                        </Box>
                        <Button size='sm' variant="solid" colorScheme="purple" ml='1' mr='3' onClick={increaseCount}>
                            +
                        </Button>
                        <Button variant="solid" colorScheme="purple">
                            Añadir al Carrito
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}