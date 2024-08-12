import { Box, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return (
        <Box align='center' m='3'>
            <Text fontSize='4xl'>
                404 
            </Text>
            <Text fontSize='4xl'>
                Creo que andas perdido
            </Text>
            <Button variant="solid" colorScheme="purple" m='1'>
                <Link to='/'>Volver al Home</Link>
            </Button>
        </Box>
    )
}