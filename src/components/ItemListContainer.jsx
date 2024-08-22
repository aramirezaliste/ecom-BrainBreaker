import { useCallback, useContext, useEffect, useState } from "react";
import { Item } from "./item";
import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsloading] = useState(true)

	const { categoryName } = useParams();

	const fetchProducts = useCallback(async () => {
		setIsloading(true)
		if (categoryName) {
			try {
				const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
				if (response.ok) {
					const data = await response.json()
					setProducts(data)
					setIsloading(false)
				} else {
					if (response.status === 404) throw new Error("404, Not found")
					if (response.status === 500) throw new Error("500, Internal server error")
					//Otro error en el servidor
					throw new Error(response.status)
				}

			} catch (err) {
				console.log(err);

			}

		} else {
			try {
				const response = await fetch(`https://fakestoreapi.com/products`)
				if (response.ok) {
					const data = await response.json()
					setProducts(data)
					setIsloading(false)
				} else {
					if (response.status === 404) throw new Error("404, Not found")
					if (response.status === 500) throw new Error("500, Internal server error")
					if (response.status === 500) throw new Error("500, Internal server error")
					//Otro error en el servidor
					throw new Error(response.status)
				}

			} catch (err) {
				console.log(err);
			}

		}
	}, [categoryName])

	useEffect(() => {
		fetchProducts()
	}, [fetchProducts]);

	if (isLoading) {
		return (
			<Flex align='center' justify='center' h='30em'>
				<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='purple.500' size='xl' />
			</Flex>
		)
	} else {
		return (
			<SimpleGrid columns={{ sm: 2, md: 3 }} spacing={1} mt='4em'>
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
