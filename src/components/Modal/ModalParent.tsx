
import { useState } from 'react'
import Modal from './Modal'


export default function ModalParent(){

    const [ active , setActive ] = useState<boolean>(false)

    function handleOpenModal(){
        setActive(!active)
    }

    function handleCloseModal(){
        setActive(false)
    }   

    return  <div className='text-center'> 
        <button onClick={handleOpenModal}>Show Modal </button>
        {active && <Modal onClose={handleCloseModal}/> }
        </div>
}