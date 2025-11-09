import { createContext } from "react"


interface Flags {
    showAccordion : boolean,
    showRandomColor: boolean,
    showDarkMode: boolean,
}


// Define the type for the context value
interface CustomFlagsContextType {
    loading: boolean;
    enabledFlags: Flags | null;
    error: Error | null;
}


// const customFlagsContext = createContext({});
export const customFlagsContext = createContext<CustomFlagsContextType>({
    loading: false,
    enabledFlags: null,
    error : null,
});


