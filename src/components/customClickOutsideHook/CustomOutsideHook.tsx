import { useEffect } from "react"
import type { RefObject } from "react";


export default function  useOutsideHook(ref :RefObject<HTMLElement | null>
    , handler: (event: Event) => void ){

    useEffect(() => {

        function listner(event:Event){
        if (!ref.current || ref.current.contains(event.target as Node)){
            return
            };

            handler(event);
        };

        document.addEventListener('mousedown', listner);
        document.addEventListener('touchStart', listner);
        
        return () => {
            document.removeEventListener('mousedown', listner);
            document.removeEventListener('touchstart', listner);
        }
    },
        [ref, handler]  
    )

}