import { FaStar } from "react-icons/fa";
import { useState } from "react";
import './index.css';

interface RatingStarProps {
  noOfStars?: number;
}

export default function RatingStar( {noOfStars = 5}: RatingStarProps){
    const [rating, setRating]  = useState<number>(0);
    const [hover, setHover] = useState<number>(0);


    function handleClicK(index : number){
        // console.log(index)
        setRating(index)
    }


    function handleMouseLeave(){
        // console.log(index)
        setHover(rating)
    }

    function handleMouseMove(index : number){
        // console.log(index)
        setHover(index)
    }



    return <div className="flex flex-row text-center">{
    [...Array(noOfStars)].map(
        (_,index) => {
            return <FaStar
                    key={index}
                    className={index <= (hover || rating)? 'active' : 'inactive'}
                    onClick={() => handleClicK(index)}
                    onMouseMove={() => handleMouseMove(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={60}
            />
        }
     )}
    </div>
}   