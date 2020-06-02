import React, { Component } from 'react'

export default class Count1 extends Component {

    constructor() {
        super()
    
        this.state = {
             count:100
        }
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        },()=>console.log(this.state.count))
    }
    

    render() {
        return (
            <div>
                <h3>count -{this.state.count}</h3>
                <button onClick={()=>this.decrement()}>Decrement</button>
            </div>
        )
    }
}
