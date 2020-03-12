import React from 'react';
import { render } from '@testing-library/react';


class Data extends React.Component{

    constructor(){
        super();
        this.state={
            count:0
        }


    }
    countIncrement=()=>{
        this.setState({count:this.state.count+1});

    }
    countDecrement=()=>{
        this.setState({count:this.state.count-1});
    }
    render()
    {
        return(
            <div>
               
                <button onClick={this.countIncrement}>Click Me To Increment </button>
                <button onClick={this.countDecrement}>Click Me To Decrement </button>
                <h2> {this.state.count} </h2>
            </div>



        )
    }    
} 
export default Data;