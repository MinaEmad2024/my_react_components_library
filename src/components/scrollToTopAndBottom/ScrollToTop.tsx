import { useRef } from "react";
import useFetch from "../customHookUseFetch/CustomHook"


export default function ScrollToBottom(){
    const [ loading, error, data ] = useFetch(
                'https://dummyjson.com/products',
        {}
    );
    const ref = useRef<HTMLDivElement | null>(null);

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            left:0,
            behavior: 'smooth'
        })
    }


    function scrollToBottom(){
        ref.current?.scrollIntoView({  // the ? mark to remove the typescript error 'ref value may be null'
            behavior: 'smooth'
        })
    }

    return <div className="text-center">
        <h1>Scroll to top and bottom component</h1>
        <button className="pb-4" onClick={scrollToBottom}> scroll to bottom</button>
        {
            loading?<div>please wait data is loading </div>:null
        }
        {
            error? `an error occured ${error}`: null    
        }
        {
        data && data && data.length 
        ? data.map((item) => {return <div key={item.id}>
            <p>{item.title}</p>
        </div> })
        : null
        }
        <button onClick={scrollToTop}>scroll to top</button>
        <h3 ref={ref} className="pt-5">the bottom most element</h3>
    </div>
}
