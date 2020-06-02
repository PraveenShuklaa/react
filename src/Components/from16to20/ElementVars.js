import React, { Component } from 'react'

export default class ElementVars extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             islogged : true
        }
    }
    
    render() {

        let msg;
            if(this.state.islogged){
                msg = <h3> Element Variables method Rendering  </h3>
            }else{
                msg = <h3> Hello Stranger </h3>
            }
        return (
            <div>{msg}</div>
        )
    }
}
