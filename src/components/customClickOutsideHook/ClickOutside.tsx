import { useState, useRef } from "react"
import useOutsideHook from "./CustomOutsideHook";


export default function ClickOutside(){
    const [showComponent, setShowComponent ] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null);

    useOutsideHook(ref, () => {setShowComponent(false)})

    function handleClick(){
         setShowComponent(true);
    }
    return <div ref={ref} className="text-center">
        {
            showComponent
            ? <div className="border-2 border-solid border-black">
                <h1> Custom Hook to check the events outside the Components</h1>
                <p>please click outside the component to close the modal </p>
             </div>
            : <button onClick={handleClick}> click Here to show the component </button>
        }    
    </div>
}