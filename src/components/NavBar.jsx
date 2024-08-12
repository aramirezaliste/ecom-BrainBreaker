import { Flex, Text } from "@chakra-ui/react";
import { CartWidget } from "./CartWidget";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const NavBar = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/categories")
			.then(res => res.json())
			.then(data => setCategories(data))

	}, []);


	return (
		<>
			<Flex
				as="nav"
				align="center"
				justify="space-between"
				wrap="wrap"
				w="100%"
				p={3}
				bg="purple.100"
			>
				<Text as='cite' color={"black"} fontSize='2xl'><Link to='/'>Brain Breaker</Link></Text>

				{categories && categories.map((category) => {
					return (
						<Link to={`/categoria/${category}`} key={category}>{category}</Link>
					)
				})}
				<CartWidget />
			</Flex>
		</>
	);
};
