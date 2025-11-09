import './index.css'
import { useState, useEffect } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

interface ImageItem{
    id: string,
    download_url:string
}

interface ImageSliderProps {
    url: string,
    limit: number,
    page: number
}


export default function ImageSlider({url, limit, page }: ImageSliderProps){

    const [images, setImages] = useState<ImageItem[]>([])
    const [error, setError] = useState<null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [imageIndex , setImageIndex ] = useState<number>(0)


    function handlePrevious(){
        setImageIndex(imageIndex === 0 ? images.length -1: imageIndex -1)
    }

    function handleNext(){
        setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1 )
    }  


    async function fetchData(url: string){

        try{
            setLoading(true)
            const response  = await fetch(`${url}page=${page}&limit=${limit}`);
            const data : ImageItem[] = await response.json();

            if(data){
                setImages(data);
                console.log(data);
                setLoading(false);
            }
        }catch(e : unknown){
            if (e instanceof Error){
                setError(e.message );
            }else{
                console.log('unknown Error occured')
            };
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== "") fetchData(url);
    }, [url])



    if (loading ){
        return <div>data is loading Please wait </div>
    }
    if (error !== null ){
        return <div>error occured{error}</div>
    }

    return <div className='image-slider-container'>

        <BsArrowLeftCircleFill className='slider-arrow slider-arrow-left' onClick={handlePrevious} />
        {
            images && images.length 
            ? images.map((imageItem, index) => {
                    return <img src={imageItem.download_url} alt={imageItem.download_url} key={imageItem.id}
                     className={imageIndex === index? 'slider-image': 'slider-image slider-hide'}/> })
            : null
        }
        <BsArrowRightCircleFill  className='slider-arrow  slider-arrow-right' onClick={handleNext} />
        <span className='slider-indicator'> {
            images && images.length 
            ? images.map((_, index) => {
                return <button key={index} 
                                className={imageIndex === index ? 'slider-image-button' : 'slider-image-button update-image-button'}
                                onClick={() => setImageIndex(index)}>
                                
                        </button>
            })
            :null
            }
        </span>

    </div>
}