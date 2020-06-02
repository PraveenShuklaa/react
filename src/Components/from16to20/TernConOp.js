import React, { Component } from 'react'

export default class TernConOp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             islogged : true
        }
    }
    
    render() {
        return (
            this.state.islogged ? 
                <h3> Ternary Conditional Operator method Rendering  </h3> :  <h3> Hello Stranger </h3>
        )
    }
}
