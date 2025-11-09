import { useEffect, useState } from "react";
import  type Item from "./Api";

interface FetchResult {
    products: Item[]
}

export default function useFetch(url: string, options={}): [boolean, string | null, Item[]]{

    const [loading, setLoading ] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData ] = useState<Item[]>([]);



    async function fetchData(){

        setLoading(true);

            try{

                const response =  await fetch(url, {...options });
                const result: FetchResult = await response.json();
                
                setData(result.products);
                setLoading(false);

            }catch(e){

                setError((e as Error).message);
                setLoading(false);
                }
        }

        useEffect(() => {
        fetchData() 
        }, []);
        
        return [loading, error, data]
}