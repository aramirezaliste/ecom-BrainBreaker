import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { CartWidget } from "./CartWidget";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import '../styles/NavBar.css'


export const NavBar = () => {
	const [categories, setCategories] = useState([])
	const [width, setWidth] = useState(window.innerWidth)

	const handleResize = () => {
		setWidth(window.innerWidth)
	}
	window.addEventListener('resize', handleResize)

	const fetchProducts = useCallback( async () => {
			try {
				const response = await fetch('https://fakestoreapi.com/products/categories')
				if (response.ok) {
					const data = await response.json()
					setCategories(data)
				} else {
					if (response.status === 404) throw new Error("404, Not found")
					if (response.status === 500) throw new Error("500, Internal server error")
					//Otro error en el servidor
					throw new Error(response.status)
				}
			} catch (err) {
				console.log(err);
			}
		})

	useEffect(() => {
		fetchProducts()
	}, [fetchProducts]);

	if (width < 730) {
		return (
			<>
				<Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" p={3} bg="purple.100" >
					<Menu >
						<MenuButton as={Button} size='sm' px='2' >
							<HamburgerIcon />
						</MenuButton>
						<MenuList >
							{categories && categories.map((category) => {
								return (
									<MenuItem key={category}><Link className='nav-cat' to={`/categoria/${category}`} >{category}</Link></MenuItem>
								)
							})}
							<MenuItem><Link to={`/`}>All Articles</Link></MenuItem>
						</MenuList>
					</Menu>
					<Text as='cite' color={"black"} fontSize='2xl'><Link to='/'>Brain Breaker</Link></Text>
					<CartWidget />
				</Flex>
			</>
		);
	} else {
		return (
			<>
				<Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" p={3} bg="purple.100" >
					<Text as='cite' color={"black"} fontSize='2xl'><Link to='/'>Brain Breaker</Link></Text>
					{categories && categories.map((category) => {
						return (
							<Link className='nav-cat' to={`/categoria/${category}`} key={category}>{category}</Link>
						)
					})}
					<Link to={`/`}>All Articles</Link>
					<CartWidget />
				</Flex>
			</>
		);
	}
};
