import React, {useState} from 'react'

const Calculator = () => {
    const [result, setResult] = useState("");
    const handleClick = (e:any) => {
        setResult(result.concat(e.target.name));
    }

    const handleClear = (e: any) => {
        setResult("");
    }

    const handleBackSpace = () =>{
        setResult(result.slice(0, result.length -1));
    }

    const handleCalculate = () =>{
        try{
            setResult(eval(result).toString())
        }catch(err){
            setResult("Err")
        }
    }

    return (
        <div className="container">
            <form action="">
                <input type="text" value={result} />
            </form>
            <div className="keypad">
                <button className='funtionKey' onClick={handleClear} id="clear">AC</button>
                <button className='funtionKey' onClick={handleBackSpace} id="backspace">C</button>
                <button className='highlight' name = "/" onClick={handleClick}>&divide;</button>
                <button name = "7" onClick={handleClick}>7</button>
                <button name = "8" onClick={handleClick}>8</button>
                <button name = "9" onClick={handleClick}>9</button>
                <button className='highlight' name = "*" onClick={handleClick}>&times;</button>
                <button name = "4" onClick={handleClick}>4</button>
                <button name = "5" onClick={handleClick}>5</button>
                <button name = "6" onClick={handleClick}>6</button>
                <button className='highlight' name = "-" onClick={handleClick}>&ndash;</button>
                <button name = "1" onClick={handleClick}>1</button>
                <button name = "2" onClick={handleClick}>2</button>
                <button name = "3" onClick={handleClick}>3</button>
                <button className='highlight' name = "+" onClick={handleClick}>+</button>
                <button name = "0" onClick={handleClick}>0</button>
                <button name = "." onClick={handleClick}>.</button>
                <button className='highlight' onClick={handleCalculate} id='equal'>=</button>
            </div>
        </div>
    )
}

export default Calculator