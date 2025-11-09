import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
export default function Root(){

    return <div>
                        <Header />
                <div className='conrainer mx-auto grid grid-cols-6 gap-4 mt-4'>
                        <SideBar />
                    <div className='col-span-5'>
                        <Outlet />
                    </div>
                </div>
            </div>
}