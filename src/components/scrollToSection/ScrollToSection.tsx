import { useRef } from "react"

export default function ScrollToSection (){

    const ref = useRef<HTMLDivElement | null>(null)

    const data = [
        {
            name: 'First Item',
            style: {
                width: '100%',
                height:'600px',
                background: 'red'
            }
        },
        {
            name: 'Second Item',
            style: {
                width: '100%',
                height:'600px',
                background: 'yellow'
            }
        },
        {
            name: 'Third Item',
            style: {
                width: '100%',
                height:'600px',
                background: 'blue'
            }
        },
        {
            name: 'Forth Item',
            style: {
                width: '100%',
                height:'600px',
                background: 'green'
            }
        }
    ]

    function handleScroll(){
        const pos = ref.current?.getBoundingClientRect().top

        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        })
    }
    
    return <div className="text-center">
        <h1>Scroll to a specific section </h1>
        <button className='mb-5' onClick={handleScroll}> scroll to the third section </button>
        {
            data.map((item, index) => {
                return <div  key={index}>
                    <h2 ref={index === 2 ? ref : null} className="pb-5 border-solid border-5 text-center">{item.name}</h2>
                    <div style={item.style}></div>
                </div>
            })
        }

    </div>
}