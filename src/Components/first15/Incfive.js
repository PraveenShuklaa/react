import React, { Component } from 'react'

export default class Incfive extends Component {

    constructor(props) {
        super(props)
    
        this.state = { count:0 }
    }
    increment() {
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }

    incfive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    

    render() {
        return (
            <div>
                <h3>count - {this.state.count}</h3>
                <button onClick={()=>this.incfive()}>Increment</button>
            </div>
        )
    }
}
