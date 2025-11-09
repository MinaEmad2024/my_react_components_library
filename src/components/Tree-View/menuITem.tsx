import { useState } from "react"
import MenuList from "./menuList"
import { FaMinus, FaPlus } from "react-icons/fa"
import type {MenuItemData} from './data' 
import './index.css'

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

interface MenuItemProps{
    item: MenuItemData 
}

export default function  MenuItem({item}: MenuItemProps){
    const [currentChild, setCurrentChild ] = useState<Record<string, boolean |null >>({})


    function handleToggleChild(name: string){
        setCurrentChild({
            ...currentChild,
            [name]: !currentChild[name]
        });
    }

    
    return ( <li>
                <div
                 className="menu-item"  >
                    <p>{item.name}</p>
                    {
                        item && item.children && item.children.length
                        ? <span onClick={( ) =>  handleToggleChild(item.name)}>
                            {
                            currentChild[item.name]
                            ? <FaMinus />
                            : <FaPlus />
                             }
                           </span> 
                        : null
                    }
                </div>
                    {
                        item && item.children && item.children.length > 0 && currentChild[item.name]
                        ? <MenuList list={item.children} />
                        : null
                    }
        </li>
    )
}   