import React, { Component } from 'react'

export default class StateC extends Component {
    
    constructor() {
        super()
        this.state = {
             msg:'Hello User'
        }
    }
    change=()=> this.setState({
        msg:'Hello Hulk'
    },()=>console.log(this.state.msg));

    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <button onClick={()=>this.change()}>Submit</button>
            </div>
        )
    }
}
