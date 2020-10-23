import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import './BoxGame.css'

class BoxGame extends Component {
    static defaultProps = {
        numBoxes: 18
    }
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        const boxes = Array.from({length: this.props.numBoxes }).map(
            () => (<ColorBox />)
        )
        return(
            <div className="BoxGame">
                {boxes}
            </div>
        )
    }
}

export default BoxGame;