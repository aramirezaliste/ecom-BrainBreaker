import React, { useContext } from "react"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import { CartContext } from "../context/CartContext"
import '../styles/CartDrawer.css'
import { CartDrawerTable } from "./CartDrawerTable"

export function CartDrawer({ isOpen, onClose, btnRef }) {

    const { cart } = useContext(CartContext)

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='xl'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Carrito</DrawerHeader>

                    <DrawerBody>
                        <TableContainer m='1'>
                            <Table size='sm' variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>PRODUCTO</Th>
                                        <Th p='1' >CANT.</Th>
                                        <Th p='2' isNumeric>PRECIO UNI.</Th>
                                        <Th p='2' isNumeric>SUBTOTAL</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        cart.sort((a, b)=> a.id - b.id ).map((product) => {
                                            return (
                                                <CartDrawerTable product={product}/>
                                                )
                                        })
                                    }
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                        <Button colorScheme='purple'>Finalizar compra</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}