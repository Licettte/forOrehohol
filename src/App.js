import './App.css';
import Calculator from "./components/Calculator";
import Input from "antd/es/input/Input";
import {useEffect, useState} from "react";
import Triangle from './img/triangle.svg';
function App() {
    const [width, setWidth] = useState(0)
    const [offset, setOffset] = useState(0)
    const [indent, setIndent] = useState(0)
    const [maxCut, setMaxCut] = useState(null);

    const calculate = () => {
        setMaxCut(width + offset)

    }
    useEffect(() => {
        calculate()
    }, [offset && width]);


    return (
        <div className="App">
            <div className='triangle'> 3333333333333<img src={Triangle} alt=""/></div>

            <Calculator min={0} max={maxCut} value={7} step={1}/>
            <p>ширина</p>
            <input onChange={(e) => setWidth(e.target.value)} value={width}/>
            <p>смещение</p>
            <input onChange={(e) => setOffset(e.target.value)} value={offset}/>
            <p>отступ</p>
            <input onChange={(e) => setIndent(e.target.value)} value={indent}/>
        </div>
    );
}

export default App;
