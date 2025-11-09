import './gitHub.css'

interface User {
    avatar_url: string;
    followers: number;
    following: number;
    public_repos: string;
    login: string
    name:string
    created_at:string    
}

interface GitUserProps {
    user : User
}



export default function GitUser({user}: GitUserProps){


    const { avatar_url, created_at, followers, following, public_repos, name, login } = user;

    const createdDate =new Date(created_at)

    return <div className='user'>
        <div>
            <img className='avatar' src={avatar_url} alt="User"/>
        </div>
        <div>
            <a href={`https://github.com/${login}`}>{name || login}</a>
            <p>
                user joined on 
                {` ${createdDate.getDate()}
                   ${createdDate.toLocaleString('en-us', {month:'short'})} 
                   ${createdDate.getFullYear()}
                    `}
            </p>
        </div>
        <div>
            <p>public reposs</p>
            <p>{public_repos}</p>
        </div>
        <div>
            <p>followers</p>
            <p>{followers}</p>
        </div>
        <div>
            <p>following</p>
            <p>{following}</p>
        </div>
    </div>

}   