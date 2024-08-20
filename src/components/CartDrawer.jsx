import React, { useContext } from "react"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { CartContext } from "../context/CartContext"

export function CartDrawer({ isOpen, onClose, btnRef }) {
    const { cart } = useContext(CartContext)
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='lg'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Carrito</DrawerHeader>

                    <DrawerBody>
                        <TableContainer>
                            <Table size='md'>
                                <Thead>
                                    <Tr>
                                        <Th>PRODUCTO</Th>
                                        <Th>CANT.</Th>
                                        <Th isNumeric>PRECIO UNI.</Th>
                                        <Th isNumeric>SUBTOTAL</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        cart.map((e) => {
                                            return (
                                            <Tr fontSize='ms' key={e.id}>
                                                <Td>{e.title.slice(0, 30) + '...'}</Td>
                                                <Td>{e.count}</Td>
                                                <Td isNumeric>US ${e.price}</Td>
                                                <Td isNumeric>US ${e.price * e.count}</Td>
                                            </Tr>)
                                        })
                                    }
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme='purple'>Finalizar compra</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}