interface User {
    firstName: string;
}

interface Users {
    users: User[];
    handleClick: (name:string) => void
}


export default function Users({users, handleClick}: Users){


    return <div>
    { 
        users && users.length
        ? users.map((user) => {
            return <div key={user.firstName} onClick={() => handleClick(user.firstName)}>{user.firstName}</div>
         })
        :null 
    }
    </div>

}