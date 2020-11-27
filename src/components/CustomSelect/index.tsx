import React from 'react';
import { globalFunctions } from '../../constants';
import './index.scss'
import Opt from './Opt';

interface SelectProps {
    options: number[],
    height: number,
    currenValue: number,
}

class CustomSelect extends React.Component<SelectProps>{
    state = {
        active: false,
        currentValue: 1
    }
    selectClick = () => {
        this.setState({
            active:true
        })
    }
    closeSelect = () => {
        if(this.state.active){
            this.setState({
                active:false
            })
        }
    }
    changeActive(value: number){
        globalFunctions.moveToSlide(value-1)
    }
    componentDidMount(){
        globalFunctions.closeSelect = this.closeSelect;
        
    }
    render(){
        const optsArr: number[] = this.props.options;
        const options: JSX.Element[] = [];
        for (let i = 0; i < optsArr.length; i++) {
            options.push(<Opt   
                key = {"opt-"+i} 
                z={(this.props.currenValue+1)===optsArr[i]?2:1} 
                pos={this.state.active?i:0} 
                value={optsArr[i]} 
                height={this.props.height} 
                closeSelect={this.closeSelect}
                changeActive={this.changeActive}
                disable={false}/>
            )
        }
        return (
            <div className='select'> 
                <div className='select__wrp' onClick={this.selectClick}  style={{zIndex: this.state.active?0:optsArr.length+1}}>
                </div>
                {options}
            </div>
        )
    }
    
}

export default CustomSelect;