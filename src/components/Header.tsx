import { GrHome } from "react-icons/gr"
import { PiGithubLogoFill } from "react-icons/pi"
import { Link } from "react-router-dom"
export default function Header(){

    return <div className="header relative">
        <Link className="h-15 w-15 absolute left-10 p-0 m-0 " to='/' >
            <span>
              <GrHome/> 
            </span> 
        </Link>
        <div className="absolute left-15 top-5 mt-1 h-10 w-10">
            Home 
        </div>
        <h1 className="pl-10">Mina Emad React Components PlayBook </h1>
        <div className="absolute right-10 top-5 mt-2 h-10 w-10">
            <a href="https://github.com/MinaEmad2024/my_react_components_library"><PiGithubLogoFill /></a>
        </div>
        <div className="absolute right-23 top-5 mt-1 h-10 w-10">
            GitHub 
        </div>
    </div>
}