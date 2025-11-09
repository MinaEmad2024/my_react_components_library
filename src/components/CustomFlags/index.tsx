import { useContext } from "react"
import Accordion from "../accordion"
import RandomColor from "../randomColor"
import DarkMode from "../darkMode/DarkMode"
import CustomFlags from "./context/"
import { customFlagsContext } from './context/CustomFlagsContext'; 

// Define the interface used by the context again locally for clarity/safety
interface Flags {
    showAccordion : boolean,
    showRandomColor: boolean,
    showDarkMode: boolean,
}



export default function FeatureFlags(){

    const componentsToReneder = [
        {
            key: 'showAccordion' as FlagKeys,
            component: <Accordion />
        },
        {
            key: 'showRandomColor' as FlagKeys,
            component: <RandomColor />
        },
        {
            key: 'showDarkMode' as FlagKeys,
            component: <DarkMode />
        },
    ];

    type FlagKeys = keyof Flags; 



    // 2. Refine the helper function to be type-safe
    function checkEnabledFlags(key: FlagKeys):boolean{
        // Use a type guard: Check if enabledFlags is not null BEFORE accessing it
        if (enabledFlags && enabledFlags[key] !== undefined) {
            return enabledFlags[key];
        }
        // Return false if flags aren't loaded or the key is invalid
        return false;
    };

    const {loading, enabledFlags} = useContext(customFlagsContext);


    if (loading){
        return<div>Loading Data please wait </div>
    }
    return <div>
        <CustomFlags>
          Custom Flags
          {
            componentsToReneder.map((componentItem) => (
                checkEnabledFlags(componentItem.key) 
                ?componentItem.component
                :null
            ))
          }
        </CustomFlags>
        </div>
}

