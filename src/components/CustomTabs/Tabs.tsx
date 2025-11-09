import { useState } from "react"
import './tabs.css'


interface CustomTabProps {
    label:string,
    content:string
}

interface TabsProps {
    tabs : CustomTabProps[],
    onChange : (index:number) => void
}


export default function CustomTabs({ tabs, onChange } : TabsProps){

    const [tabIndex, setTabIndex ] = useState<number>(0)

    function handleClick(index: number){
        setTabIndex(index)
        onChange(tabIndex)
    };


    const renderedTabs = tabs.map(( tab ,index ) => {

        return <div  key={index} >
            <div  onClick={() => handleClick(index)}>
                <div className= {`tab-item ${ tabIndex=== index ? 'active' : ''}`}>
                    <div className="label">
                        {tab.label}
                    </div>
                </div>
            </div>
        </div>
    })

    return <div> 
            <div className="wrapper">
                <div className="header">
                        { renderedTabs }
                </div>
            </div>
        <div className="content" style={{color: "red"}}>    
            { tabs[tabIndex] && tabs[tabIndex].content }
        </div>
    </div>
}