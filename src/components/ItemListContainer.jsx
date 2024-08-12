import { useEffect, useState } from "react";
import { Item } from "./item";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsloading] = useState(false)
	
	const params = useParams();
	console.log(params)

  useEffect(() => {
		setIsloading(true)
		fetch("https://fakestoreapi.com/products")
			.then(res => res.json())
			.then(data => setProducts(data))
			.finally(setIsloading(false))
  }, []);



  return (
    <Flex gap='4' align='center' flexWrap='wrap' display='center'>
     { isLoading? <p>Loading...</p> : products.map((product) => {
			return ( 
					<Item key={product.id} product={product}/>
			)
	})}
    </Flex>
  );
};
