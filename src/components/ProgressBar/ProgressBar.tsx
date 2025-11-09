import './index.css'
import { useState, useEffect } from 'react'

interface ProgressBarProps {
    url: string
}

interface Product {
    id: number;
    title: string;
}

interface Products {
    products : Product[]
}

export default function ProgressBar({url} : ProgressBarProps){

    const [loading, setLoading ] = useState<boolean>(false)
    const [error, setError ] = useState<string>('')
    const [data, setData] = useState<Product[]>([])
    const [scrollPercentage, setScrollPercentage ]  = useState<number>(0)

    async function fetchData(getUrl:string) {
        setLoading(true);
        try{
            const res = await fetch(getUrl);
            const result: Products = await res.json();
            // console.log(result);
            if (result && result.products && result.products.length > 0 ){
                setData(result.products);
                setLoading(false);
                console.log(data)
            }
        }catch(e){
            setError((e as Error).message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    function handleScrollPercentage(){
        // console.log(
        //     document.body.scrollTop,
        //     document.documentElement.scrollTop,
        //     document.documentElement.scrollHeight,
        //     document.documentElement.clientHeight,
        // )
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100 )
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', () => {} );
        };

    }, []);


    console.log(scrollPercentage);


    if (loading){
        return <div>data is loading , please wait </div>
    }

    if (error ){
        return <div>an error occured :{error} </div>
    }

    return <div className='text-center'>
        <div className='top-container'>
            <h1> Custom Scroll progress bar </h1>
            <div className='scroll-progress-tracking-component'>
                <div className='current-progress-bar'
                style={{width: `${scrollPercentage}%`}}>
                </div>
            </div>
        </div>
        {
            data && data.length > 0
            ? data.map((dataItem) => { return <div key={dataItem.id}>{dataItem.title}</div>})
            : null
        }
        
    </div>
}