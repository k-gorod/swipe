import React from 'react';
import './index.scss'
interface OptProps {
    value: number;
    pos: number,
    height: number
    z: number,
    closeSelect: ()=>void,
    changeActive: (value:number)=>void,
    disable:boolean
}
const Opt: React.FC<OptProps> = (props) => {
    const click = () => {
        if(!props.disable)props.changeActive(props.value);
        props.closeSelect()
    }
    const style = {
        height: props.height,
        zIndex: props.z,
        transform: `translateY(${props.pos*110}%)`,
        color: props.disable?'rgba(0, 0, 0, 0.2)':'  rgb(57, 170, 51)'
    }
    return (
        <div style={style} className='select__opt' onClick={click}>
            {props.value}
        </div>
    )
}

export default Opt;