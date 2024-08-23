import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Box, Button, Flex, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { CartDrawerTable } from "./CartDrawerTable"

export const Checkout = () => {

    const { cart, totalPrice } = useContext(CartContext)

    return (
        <Box display='flex' flexDirection='column' mt='4.5em'>
            <Text fontSize='2xl' alignSelf='center'> Carrito</Text>
            <Flex m='10' justifyContent='space-between'>
                <TableContainer m='1' w='60%'>
                    <Table size='sm' variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>PRODUCTO</Th>
                                <Th p='2' >CANT.</Th>
                                <Th p='2' isNumeric>PRECIO UNI.</Th>
                                <Th p='2' isNumeric>SUBTOTAL</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                cart.sort((a, b) => a.id - b.id).map((product) => {
                                    return (
                                        <CartDrawerTable key={product.id} product={product} />
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
                <Flex w='30%' flexDirection='column' alignContent='center'>
                    <Flex justifyContent='space-around' m='5'>
                        <Text fontSize='2xl'>Total</Text > <Text fontSize='2xl'>US ${totalPrice.toFixed(2)}</Text>
                    </Flex>
                    <Text fontSize='2xl'>Costo de envío calculado en el siguiente paso.</Text>
                    <Button colorScheme="green" mt='4'>FINALIZAR COMPRA</Button>
                </Flex>
            </Flex>
        </Box>
    )
}