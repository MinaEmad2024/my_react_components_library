import { useEffect, useState } from "react";


// custom hook to store data in local storage
export default function useLocalStorage(key:string, defaultValue: string){


    const [value, setValue ] = useState<string>(() => {

        let currentValue : string;

        try{
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))

        }catch(e: unknown){
            console.log(e)
            currentValue = defaultValue
        }

        return currentValue
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const

}