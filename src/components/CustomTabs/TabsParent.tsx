import CustomTabs from "./Tabs";


export default function TabsParent(){

    const Tabs = [
    {
        label: 'tab 1',
        content: '1'
    },
        {
        label: 'tab 2',
        content:'2'
    },
        {
        label: 'tab 3',
        content: '3'
    }

]
    
    function handleTabChange(index: number) {
    console.log(index)
}

    return <div> <CustomTabs tabs={Tabs} onChange={handleTabChange}/> </div>

}

