import React, { Component } from 'react'

export default class ShortCircuit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             islogged : true
        }
    }

    render() {
        return (
            this.state.islogged &&  <h3> Short Circuit method Rendering  </h3> || <h3> Hello Stranger </h3>
        )
    }
}
