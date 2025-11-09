import './index.css'
import useLocalStorage from './useLocalStorage'


export default function DarkMode(){

    const [theme, setTheme ] = useLocalStorage('theme','dark')


    function handleToggleTheme( ){
        setTheme(theme === 'light'? 'dark' : 'light');
}

    return (
        <div className='light-dark-mode' data-theme={theme}>
                <div className='container'>
                    <p>Hello World</p>
                    <button type='button' onClick={handleToggleTheme}>
                        change theme  
                    </button>
                </div>
        </div>)
}

















    // implementation for same effect with the use of the custom hook

    // import { useEffect, useState } from 'react';

    // const [ value , setValue ] = useState<string>('light')


    // useEffect(() => {
    //     localStorage.setItem('theme', JSON.stringify(value));
    // }, [value]);
    // setValue(value === 'light'? 'dark' : 'light')
