import { useState, useEffect } from "react";
import axios from "axios";
import Products_lista from "./components/Products_lista";

function Products() {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        async function api_fetcher() {
            try {
                let response = await axios.get("https://fakestoreapi.com/products")
                setData(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        api_fetcher()
    }, [])
    return (
        <>
        <h2>Lista de produtos</h2>
        <Products_lista products={data} is_loading={loading}/>
        </>
    )
}
export default Products
