import { useState } from "react"
import QRCode from "react-qr-code"
import './index.css'

export default function QrCodeGenerator(){
const [searchWord, setSearchWord ] = useState<string>('')
const [qrCode, setQrCode] = useState<string>('')


    function handleClick(){
        setQrCode(searchWord);
        setSearchWord('');
    }

    return (<div className="container">
        <div>
            <input
            onChange={(e) => setSearchWord(e.target.value)} type="text" value={searchWord}/>
            <div>
                <button
                disabled={searchWord && searchWord.trim() !==""? false : true }
                onClick={handleClick}>
                    click to generate qr code 
                </button>
            </div>
        </div>

        <QRCode 
        value={qrCode}
        size={400}
        />

         </div>)
}