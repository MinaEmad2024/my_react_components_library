import { useState } from "react";
import data  from "../data";

interface DataItem {
    id : number,
    question : string,
    answer : string,
}


export default function Accordion (){

   const [selected, setSelected] = useState<number|null>(null);
   const [multi, setMulti]  = useState<boolean>(false);
   const [multiArray, setMultiArray] = useState<number[]>([]);
    
   function handleMultiSelect() : void{
    setMulti(!multi);
   };

    function handleSelect(id : number)  : void{
        setSelected(selected === id ? null : id);
    };

    function handleMultiArray(id : number): void{
        const copy  = [...multiArray];
        if(copy.indexOf(id) === -1)copy.push(id)
        else copy.splice(copy.indexOf(id), 1);
        setMultiArray(copy);
        console.log(multiArray);
    };

    return (
            <div className="acc-wrapper"> <h1>Accordion component</h1>
                <div className="accordian">
                <button onClick={handleMultiSelect}>Multi selection</button>
                    {
                        data && data.length > 0 ?
                        data.map((item : DataItem) => {
                            return(
                                <div key={item.id} className="acc-item" onClick={multi ? () => handleMultiArray(item.id) :() => handleSelect(item.id)}>
                                    {item.question}
                                    <div className="acc-title"><span>+</span></div>
                                    {selected === item.id || multiArray.indexOf(item.id) !== -1 ?
                                    <h3 className="acc-content">{item.answer}</h3>
                                    : null}
                                </div>
                        )})
                        :<div>No data found</div>

                    }
                </div>
            </div>
    )
}