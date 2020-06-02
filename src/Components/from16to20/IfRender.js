import React, { Component } from 'react'

export default class IfRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            islogged : true
        }
    }
    
    render() {
        if(this.state.islogged){
            return (
                <h3> If-else method Rendering </h3>
            )
        }else{
            return (
                <h3> Hello Stranger </h3>
            )
        }
        
    }
}
