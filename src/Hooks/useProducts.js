const { useEffect } = require("react")
const { useState } = require("react")


const useProducts = () =>{
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
            fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return [products];
} 

export default useProducts;
