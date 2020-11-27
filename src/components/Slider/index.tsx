import React, { useState } from 'react';
import { resData } from '../MovieSearchBlock';
import './index.scss';
import ActiveZone from './ActiveZone';
import CustomSelect from '../CustomSelect';
import { globalFunctions } from '../../constants';

interface SliderProps {
    data: resData[]
}
const Silder: React.FC<SliderProps> = (props) => {
    const data = props.data;
    const [activeSlide, setActiveSlide] = useState(0);
    const [swipeStart,setSwipeStart] = useState(0);
    const [swipeNumber, setSwipeNumber] = useState(0)
    const toDefault = () => {
        setSwipeStart(0)
        setSwipeNumber(0)
    }
    const rightArrowClick = () => {
        toDefault();
        if(activeSlide<9){
            setActiveSlide(activeSlide+1)
        }else{
            setActiveSlide(0)   
        }
    }
    const leftArrowClick = () => {
        toDefault();
        if(activeSlide>0){
            setActiveSlide(activeSlide-1)
        }else{
            setActiveSlide(9)   
        }
        
    }
    const moveToSlide = (number: number) => {
        setActiveSlide(number);
    }
    globalFunctions.moveToSlide = moveToSlide;
    const mouseDown = (e: any) => {
        setSwipeStart(e.type==="touchstart"?e.touches[0].clientX:e.clientX)
    }
    const mouseUp = () => {
        if(swipeNumber>100){
            rightArrowClick();
        }
        if(swipeNumber<-100){
            leftArrowClick();
        }else{
            toDefault();
        }
       
    }
    const mouseMove = (e: any) => {
        if(swipeStart){
            setSwipeNumber(swipeStart-(e.type==="touchmove"?e.touches[0].clientX:e.clientX))
        }
    }
    const arr = data.map((e,i)=>{return (i+1)});
    
    return (
        
        
        <div className='topBlock__slider slider' onTouchStart={mouseDown} onTouchEnd={mouseUp} onTouchMove={mouseMove}  onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mouseMove} >
            <div className='slider__counter'>
                <CustomSelect options={arr} height={18} currenValue={(activeSlide)}/>
            </div>
            <svg className="slider__arrowLeft" viewBox="0 0 5 9" onClick={leftArrowClick}>
                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
            </svg>
            <ActiveZone data={data} currentSlide={activeSlide} swipe={swipeNumber}/>
            <svg className="slider__arrowRight" viewBox="0 0 5 9" onClick={rightArrowClick}>
                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
            </svg>
        </div>
    )
}
export default Silder;