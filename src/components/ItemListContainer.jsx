import { useEffect, useState } from "react";
import { Item } from "./item";
import { SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom"


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
		return(<h1>Loading...</h1>)
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
