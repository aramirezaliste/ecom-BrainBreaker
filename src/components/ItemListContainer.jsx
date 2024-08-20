import { useContext, useEffect, useState } from "react";
import { Item } from "./item";
import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom"
import { CartContext } from "../context/CartContext";

export const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsloading] = useState(true)

	const { categoryName } = useParams();

	useEffect(() => {
		setIsloading(true)
			if (categoryName) {
				fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
					.then(res => res.json())
					.then(data => setProducts(data))
					.finally(setIsloading(false))
			} else {
				fetch("https://fakestoreapi.com/products")
					.then(res => res.json())
					.then(data => setProducts(data))
					.finally(setIsloading(false))
			}
		
	}, [categoryName]);

	if(isLoading){
		return (
			<Flex align='center' justify='center' h='30em'>
				<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='purple.500' size='xl' />
			</Flex>
		)
	}
	
	return (
		
		<SimpleGrid columns={{sm: 2, md: 3}} spacing={1}>
		{ products.map((product) => {
			return (
				<Item key={product.id} product={product} />
				)
			})
		}
		</SimpleGrid>
		)
};
