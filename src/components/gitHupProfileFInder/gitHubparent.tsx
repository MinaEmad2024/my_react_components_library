import { useEffect, useState } from "react"
import './gitHub.css'
import GitUser from "./gitHubUser";

interface Result {
    avatar_url: string;
    followers: number;
    following: number;
    public_repos: string;
    login: string
    name:string
    created_at:string    

}

export default function GitHubProfileFinder(){
    const [userName, setUserName ] = useState<string>('sangammukherjee');
    const [loading, setLoading ] = useState<boolean>(false);
    const [error, setError ] = useState<string |null>(null)
    const [userData, setUserData ] = useState<Result>()


    function handleSubmit(){
        fetchData();
    };

    async function fetchData() {
        

        try{
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const result : Result = await res.json()

        if(result ){
            
            setLoading(false);
            setUserData(result)
            setUserName('')
            console.log(result)   
        }

        }catch(e){
            if (e instanceof Error) {
                setError(e.message)
                setLoading(false)
        } else {
            // Handle cases where a non-Error was thrown
            setError('An unknown error occurred'); 
        }
        };
    }

    useEffect(() => {
        fetchData() 
    },[])

    if(loading){
        return <div>Please wait data is loading </div>
    }

    if (error){
        return <div>an error occured : {error}</div>
    }

    return <div className="container">
        <div className="wrapper">

            <input 
            type="text" 
            name="userName"
            placeholder="search by profile name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
                />
            <button onClick={handleSubmit}>
                search
            </button>
        </div>

        <div>
            {
                userData
                ? <GitUser user={userData} /> 
                :null
            }
        </div>
    </div>
}