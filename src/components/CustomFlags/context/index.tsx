
import { useEffect, useState  } from "react";
import featureFlagCall from "../data";
import type {ReactNode}  from 'react'
import { customFlagsContext } from './CustomFlagsContext'; 

interface Flags {
    showAccordion: boolean;
    showRandomColor: boolean;
    showDarkMode: boolean;
}

interface CustomFlagsProps {
  children: ReactNode; // 'ReactNode' is the correct type for children
  // Add other props here if you had any
}


export default function CustomFlags({children} : CustomFlagsProps){

    const [loading, setLoading ] = useState<boolean>(false);
    const [enabledFlags, setEnabledFlags ] = useState<Flags | null>(null)
    const [error, setError] = useState<Error | null>(null);


    async function fetchData():Promise<void>{

        setLoading(true);
        setError(null); //clear previous errors

        try{
           const resposne  = (await featureFlagCall()) as Flags;
           //This tells TypeScript: "Treat the result of this asynchronous call as the Flags type."
           console.log(resposne);
            setEnabledFlags(resposne);
            setLoading(false);
        }catch(e){
            console.log(e);
            // throw new Error(e);
            setLoading(false);
            setError(e instanceof Error ? e : new Error("An unknown error occurred"));
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return <customFlagsContext.Provider value={{loading, enabledFlags, error}}>
                 {children}
            </customFlagsContext.Provider>          
};

// export { customFlagsContext };
