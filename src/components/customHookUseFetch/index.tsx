import './index.css'
import useFetch from "./CustomHook"


export default function CustomHook(){

    const [ loading, error, data ] = useFetch(

        'https://dummyjson.com/products',
        {}
    );

    return <div className='container'>

        <h1> Custom Hook to fetch data from external API </h1>
        {
            loading? <div>please wait data is loading </div>: null
        }
        {
            error? <div>an error occured : {error}</div>: null
        }
        {
        data && data && data.length
        ? data.map((item) => {
            return <div key={item.id}>
                <p>{item.title}</p>
            </div>
        })
         : null  
        }
        
    </div>
}
