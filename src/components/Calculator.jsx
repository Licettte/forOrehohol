import React, {useEffect, useRef, useState} from 'react';
import {Button, InputNumber, Slider} from 'antd';
import Input from "antd/es/input/Input";
import './calc.css'
const Calculator = ({min, max,value,step}) => {

    // const [width, setWidth] = useState(0)
    // const [offset, setOffset] = useState(0)
    // const [maxCut, setMaxCut] = useState(null);

    const [sliderRange, setSliderRange] = useState(0)
    const [inputValue, setInputValue] = useState(0)
    const sliderRef=useRef()

    const handleSliderInput=()=>{
        const range = max-min;
        const distance = sliderRef.current.value-min;
        const percentage=(distance/range)*100;
        setSliderRange(percentage)
        setInputValue(sliderRef.current.value)
    }
    useEffect(() => {
        handleSliderInput()
    }, [sliderRef]);

    const handleNumberInput=(e)=>{
const newValue = parseInt(e.target.value)
        if(newValue<min){
            setInputValue(min)
            setSliderRange(0)
        }

        else if(newValue>max){
            setInputValue(max)
            setSliderRange(100)
        }

        else{
            setInputValue(newValue)
            const range = max-min;
            const distance = newValue-min;
            const percentage=(distance/range)*100;
            setSliderRange(percentage)


        }

    }
    return (
        <div className="range-slider">
            <div className='slider-values'>
                <small>{min}</small>


                <input type="number" className='number-input'
                      onInput={handleNumberInput}
                       value={inputValue}
                       min={min}
                       max={max}
                       step={step}
                />

                <small>{max}</small>

            </div>
            <div className='slider-container'>
                <input
                    list="tickmarks"

                    type="range"
                    onInput={handleSliderInput}
                    value={inputValue}
                    className='slider'
                    min={min}
                    max={max}
                    ref={sliderRef}
                    step={step}

                />
                <datalist id="tickmarks" className='card'>
                    <option value="0 to 20">0</option>
                    <option>20</option>
                    <option>40</option>
                    <option>60</option>
                    <option>80</option>
                    <option>100</option>
                </datalist>
                <div className='slider-thumb'
                     style={{left: `calc${sliderRange}%-0.5em`}}

                ></div>
                <div className='progress'
                     style={{width: `${sliderRange}%`}}

                ></div>
            </div>
        </div>
    );
};

export default Calculator;
