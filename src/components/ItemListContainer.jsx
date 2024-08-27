import { useEffect, useState } from "react";
import { Item } from "./item";
import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

export const ItemListContainer = () => {
	const [url, setUrl] = useState(null)
	const { categoryName } = useParams();

	useEffect(() => {
		if (categoryName) {
			setUrl(`https://fakestoreapi.com/products/category/${categoryName}`)
		} else {
			setUrl('https://fakestoreapi.com/products')
		}
	}, [categoryName])

	const { data: products, isLoading } = useFetch(url)

	if (isLoading) {
		return (
			<Flex align='center' justify='center' h='30em'>
				<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='purple.500' size='xl' />
			</Flex>
		)
	} else {
		return (
			<SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={1} mt='4.5em'>
				{products.map((product) => {
					return (
						<Item key={product.id} product={product} />
					)
				})
				}
			</SimpleGrid>
		)
	}

};
