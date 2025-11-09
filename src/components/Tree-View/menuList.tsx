import MenuItem from "./menuITem"
import type {MenuItemData} from './data' 
import './index.css'

// interface Child{
//     id: number;
//     name: string;
//     children: Child[]};

// interface Item {
//     id : number;
//     name: string;
//     children: Child[];

// }; 

interface MenuListProps{
    list: MenuItemData[] 
}

export default function MenuList({list}: MenuListProps){

    return (
        <ul className="menu-list-container">
                    {list.map((item, index) => {
                        return <MenuItem  key={index} item={item} />  
                            }
                        )
                    }
        </ul>)
}

