import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error(response.statusText);
                    
                }
                const json = await response.json()
                setIsLoading(false)
                setData(json)
            }catch(err){
                setError('No se pudo recibir la data')
                //console.log(err.message)
            }
            
        }
        
        fetchData()
    }, [url])

    return { data, isLoading, error }

}