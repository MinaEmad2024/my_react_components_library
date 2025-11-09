import WindowSize  from "./useResizeHook"

export default function SizeHook(){

    const size = WindowSize();
    const {width, height }= size;

    return <div className="text-center">
        <h1 className="mb-50">Usesize is a react hook to return the width and the height of the current page</h1>
                                <h2>width: {width}</h2>
                                <h2>height:  {height}</h2>
    </div>
}