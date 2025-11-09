import { useState } from "react"


export default function RandomColor(){
    const [color, setColor] = useState<string>('#000000');
    const[typeOfColor, setTypeOfColor] = useState<string>('HEX');


    function randomGenerate(n  : number ) : number{
        return Math.floor(Math.random() * n);
    } 


    function generateHex(){
        const HexArray : (number| string)[] = [ 0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

        let  hexColor : string= '#';

        for (let i=0; i<6 ; i++){
            hexColor += HexArray[randomGenerate(HexArray.length)];
            
        };  
        console.log(hexColor);
        setColor(hexColor);

    }

    function generateRgb(){

        const r = randomGenerate(256);
        const g = randomGenerate(256);
        const b = randomGenerate(256);
        setColor(`rgb(${r},${g},${b})`);
    }

    return (
        <div>
            <div className="container" style={{display: 'flex',
                        flexDirection:'row',
                        justifyContent: 'space-around'
            }}>
                <button className="border-2 rounded-lg border-solid border-blue-900 mb-2 p-3 shadow-teal-400" onClick={() => {setTypeOfColor('hex')}}> create Hex color </button>
                <button className="border-2 rounded-lg border-solid border-blue-900 mb-2 p-3 shadow-teal-400" onClick={typeOfColor === 'hex' ? generateHex : generateRgb}>generate random color </button>
                <button className="border-2 rounded-lg border-solid border-blue-900 mb-2 p-3 shadow-teal-400" onClick={() => {setTypeOfColor('rgb')}}> create RGB color </button>
            </div>
            <div style={{
                width:'100vw',
                height: '100vh',
                backgroundColor: color,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                color:'#fff',
                fontSize:'60px'
                }}>    
                <h1>
                    color type: {typeOfColor}
                </h1>
                <h3>
                     color value : {color}
                </h3>
            </div>
        </div>
    )
}