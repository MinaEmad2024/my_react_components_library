import { useState, useEffect } from "react"
import './index.css'
interface ProductItem {
    thumbnail: string,
    title: string
}


interface Product {
    products : ProductItem[]
}
// interface InfiniteLoadProps {
//     id:number 
// }





export default function InfiniteLoad(){
    const [loading, setLoading ] = useState<boolean>(false);
    const [error , setError ] = useState<null>(null);
    const [products , setProducts ] =  useState<ProductItem[]>([]);
    const [moreProducts , setMoreProducts ] = useState<boolean>(false);
    const [count , setCount ] = useState<number>(0)
    
    function handleClick(){
        setCount(count + 1)
    }

    async function fetchData() {

        try{
        
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data : Product = await response.json()

            if(data && data.products && data.products.length ){
                setLoading(false);
                setProducts((prevData) => [...prevData, ...data.products])
            }
        
        }catch(e){
            setError(e.message)
            setLoading(false)
        
        }
    }

    useEffect(() => {
        fetchData()
    }, [count])

    useEffect(() => {
        if(products && products.length === 100 ){setMoreProducts(true)}
    }, [products])

    if(loading){
        return <div>data is loading , please wait</div>
    }

    if(error !== null ){
        return <div>an error occured while loading  </div>
    }


    return <div className="infinie-load-container">
        <div className="infinite-load-products">
            {
                products && products.length 
                ? products.map(item => {
                    return <div className="infinte-load-product">
                        <img src={  item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                })
                : null
            }
        </div>
            <div className="infinite-load-button">
                <button disabled={moreProducts} onClick={handleClick}>load more content</button>
                {
                    moreProducts? <div>there are no more products</div>:null
                }
            </div>
    </div>
}