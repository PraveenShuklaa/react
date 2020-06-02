import React, { Component } from 'react'

export default class EventBind extends Component {
   
    constructor() {
        super()
    
        this.state = {
             msg:'Before Event Bind change'
        }

        // Bind Event Handler in class constructor  --- Official reactjs.org site method
        this.bindChange=this.bindChange.bind(this);
    }
    bindChange () {
        this.setState({
            msg:'After Constructor Bind Change'
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <button onClick={this.bindChange}>Bind render Change</button>
            </div>
        )
    }

    

}
