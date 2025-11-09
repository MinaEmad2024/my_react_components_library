import { useEffect, useState } from 'react'
import './Tic.css'


export default function TicTacToe(){

    const [boxes, setBoxes ] = useState<string[]>(Array.from({length: 9}, () => ''));
    const [next , setNext ] = useState<boolean>(false);
    const [status, setStatus ] = useState<string>('');


    function handleRestart(){
        setBoxes(Array.from({length: 9}, () => ''))
    }; 



    function getWiner(boxes: string[]){

        const winningState = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8],
        ]

        for(let i=0; i< winningState.length; i++ ){
            const[x,y,z] = winningState[i];
            if (
                boxes[x]
                && boxes[x] === boxes[y] 
                && boxes[x] === boxes[z]
            ){
                return boxes[x]
            }
        };
        return null;
    }

    useEffect(() => {
        if(!getWiner(boxes) && boxes.every(item => item !== '')){
            setStatus('It is a Draw ')
        }else if(getWiner(boxes)){
            setStatus(` The winner is ${getWiner(boxes)}`)
        }else{
            setStatus( `This is ${next ? 'x': 'o'} turn`)
        }

    }, [boxes, next])
 
    function handleClick(index:number){
        const copyBosex = [...boxes];

        if(getWiner(copyBosex) || boxes[index] !== ''){
            return
        }else{
            if(next){
                setNext(!next)
                copyBosex[index] = '0'
                setBoxes(copyBosex)
            }else{
                setNext(!next)
                copyBosex[index] = 'X'
                setBoxes(copyBosex)
            };
        };
    }



    return <div className='container'>
            <div>
                <button className='row' onClick={() => handleClick(0)}>{boxes[0]}</button>
                <button className='row' onClick={() => handleClick(1)}>{boxes[1]}</button>
                <button className='row' onClick={() => handleClick(2)}>{boxes[2]}</button>
            </div>
            <div>
                <button className='row' onClick={() => handleClick(3)}>{boxes[3]}</button>
                <button className='row' onClick={() => handleClick(4)}>{boxes[4]}</button>
                <button className='row' onClick={() => handleClick(5)}>{boxes[5]}</button>
            </div>
            <div>
                <button className='row' onClick={() => handleClick(6)}>{boxes[6]}</button>
                <button className='row'onClick={() => handleClick(7)}>{boxes[7]}</button>
                <button className='row' onClick={() => handleClick(8)}>{boxes[8]}</button>
            </div>
            <div>
                <h1>{status}</h1>
                <button onClick={handleRestart}>restart the game</button>
            </div>
         </div>
}