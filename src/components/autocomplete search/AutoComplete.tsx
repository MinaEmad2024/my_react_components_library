import { useEffect, useState } from "react"
import AutoCompleteItem from './AutoCompleteItem'
interface Item {
    firstName: string;
}

interface Data {
    users: Item[];
}

export default function AutoCompleteSearch(){
    
    const [params, setParams ] = useState<string>('')
    const [loading, setLoading ] = useState<boolean>(false);
    const [error, setError ] = useState<string | null>(null);
    const [users, setUsers ] = useState<Item[]>([]);
    const [showUsers, setShowUsers ] = useState<boolean>(false)
    const [filteredUsers , setFilteredUsers] = useState<Item[]>([])

    function handleClick(name: string){
     setParams(name);
     setShowUsers(false);
     setFilteredUsers([]);
    }

    function handleChange(e : Event){
        const query: string = (e.target as HTMLInputElement).value.toLowerCase();
        setParams(query);
        if(query.length > 1){
            const filteredData  = 
                users && users.length 
                ? users.filter(user => user.firstName.toLocaleLowerCase().indexOf(query) > -1)
                : []
        console.log(filteredData)
        setFilteredUsers(filteredData);
        setShowUsers(true)
        } else {
        setShowUsers(false)
        }
    }

    // useEffect(() => {
    //     // This console.log will run *only* after `users` has been updated
    //     // and the component has re-rendered.
    //     if (users.length > 0) {
    //         console.log("Users state was updated:", users);
    //     }
    // }, [users]);

    async function fetchData() {
        setLoading(true);
        try{
           const res = await fetch('https://dummyjson.com/users');
           const result : Data = await res.json();

            if(result && result.users && result.users.length > 0 ){
                setLoading(false);
                // console.log(result.users);
                setUsers(result.users);
                // console.log(users);
            }
        }catch(e){
            setError((e as Error).message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(users)

    if(loading){
        return <div>data is loading please wait </div>
    };

    if(error){
      return <div> an error occured  {error} </div>  
    };

    return <div className="text-center">
            <input 
                type="text"
                placeholder="search"
                value={params}
                onChange={handleChange}
            />
            <div>
                {showUsers && <AutoCompleteItem handleClick={handleClick} users={filteredUsers}/> }
            </div>
        </div>
}


