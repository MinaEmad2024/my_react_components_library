import './modal.css'

interface ModalProps {
    onClose: () => void
}


export default function Modal({onClose}: ModalProps){

    return <div className="modal">
        <div className='content'>
                <div className="header" >
                    <h2>Header</h2>
                    <span className="close-modal" onClick={onClose}>&times;</span>

                </div>
                <div className="body"><p>Body</p></div>
                <div className="footer">Footer</div>
        </div>
    </div>
}






