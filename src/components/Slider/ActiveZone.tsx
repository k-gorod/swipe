import React, { useRef } from 'react';
import { resData } from '../MovieSearchBlock';
import PosterImg from './Poster';
interface ActiveZoneProps {
    data: resData[],
    currentSlide: number,
    swipe:number
}

const ActiveZone: React.FC<ActiveZoneProps> = (props) => {
    const activeZoneRef = useRef<HTMLDivElement>(null);
    const arr: Array<JSX.Element> = [];
    for (let i = 0; i < props.data.length; i++) {
        arr.push(<PosterImg data={props.data[i]} active={props.currentSlide} thisNumb={i}  key={`${i}-post`} swipe={props.swipe}/>)
    }
    return (
        <div className='slider__activeZone' ref={activeZoneRef}>
            {arr}
        </div>
    )
}

export default ActiveZone;