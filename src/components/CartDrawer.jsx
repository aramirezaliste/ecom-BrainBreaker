import React, { useContext } from "react"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Text } from "@chakra-ui/react"
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
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Todos tus productos</DrawerHeader>

                    <DrawerBody>
                        {
                            cart.map((e) => {
                                return (<Text fontSize='xs' key={e.id}> {e.count} {e.title} </Text>)
                            })
                        }
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