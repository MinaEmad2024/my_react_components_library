import path from "path";
import { Link } from "react-router-dom"

export default function SideBar(){

    const links = [
        {label:'accordion', path:'/accordion'},
        {label:'randomColor', path:'/randomColor'},
        {label:'ratingStar', path:'/ratingStar'},
        {label:'imageSlider', path:'/imageSlider'},
        {label:'infiniteload', path:'/infiniteload'},
        {label:'treenavigation', path:'/treenavigation'},
        {label:'qr-code-generator', path:'/qr-code-generator'},
        {label:'dark-mode', path:'dark-mode'},
        {label:'progress-bar', path:'progress-bar'},
        {label:'custom-tabs', path:'custom-tabs'},
        {label:'modal-component', path:'modal-component'},
        {label: 'github-profile-finder', path: 'github-profile-finder'},
        {label: 'auto-complete-search', path: 'auto-complete-search'},
        {label: 'tic-tac-toe', path: 'tic-tac-toe'},
        {label: 'custom-flags', path: 'custom-flags'},
        {label: 'custom-hooks', path: 'custom-hooks'},
        {label: 'click-outside', path:'click-outside'},
        {label: 'window-size', path: 'window-size'},
        {label: 'scroll-to-top', path:'scroll-to-top'},
        {label: 'scroll-to-section', path:'scroll-to-section'}
    ];
    
    const renderedLinks = links.map((link) => {

        return(
            <Link key={link.label} to={link.path} >{link.label}</Link>
        )
    })



    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col gap-2">
            {renderedLinks}
        </div>
    )
}