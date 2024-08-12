import { Box, Image, Text, Flex, Badge, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ItemDetail = () => {
    const [detail, setDetail] = useState([]);
    const [isLoading, setIsloading] = useState(true)

    const { id } = useParams();

    const { title, price, category, description, image } = detail;

    useEffect(() => {
        setIsloading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data))
            .finally(setIsloading(false))
    }, [id]);


    if (isLoading) {
        return (<h1>Loading...</h1>)
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
                    <Button variant="solid" colorScheme="purple">
                        Añadir al Carrito
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}