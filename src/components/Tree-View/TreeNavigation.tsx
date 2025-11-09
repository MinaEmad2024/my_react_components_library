import './index.css'
import MenuList from './menuList'
import type {MenuItemData} from './data' 


// interface Child{
//     id: number;
//     name: string;
//     children: Child[]
// };

// interface Item {
//     id : number;
//     name: string;
//     children: Child[]

// };

interface TreeNavigationProps {
    data : MenuItemData[]
};


export default function TreeNavigation( {data}: TreeNavigationProps){

    return (
        <div className='tree-view-container'> 
            <MenuList list={data}/> 
        </div>
        )
};