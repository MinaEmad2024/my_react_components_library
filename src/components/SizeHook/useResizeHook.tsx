import { useEffect, useState } from "react";


export default function WindowSize(){

    const [windowSize, setWindowSize ] = useState({
        width: 0,
        height: 0
    });
    
    function handleSize(){
        setWindowSize(
        {
            width: window.innerWidth,
            height: window.innerHeight
        });

    };

    useEffect(() => {

        handleSize();
        // console.log(windowSize)

        window.addEventListener('resize', handleSize);

        return () => { 
            window.removeEventListener('resize', handleSize)
        }
    }, []);

    return windowSize;
}