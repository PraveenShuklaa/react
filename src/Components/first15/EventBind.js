import React, { Component } from 'react'

export default class EventBind extends Component {
   
    constructor() {
        super()
    
        this.state = {
             msg:'Before Change'
        }
    }
    // Bind Event Handler in render method 
    bindChange () {
        this.setState({
            msg:'After render Bind Change'
        })
        /*console.log(this) // undefined      */
    }

    // Arrow function in render Method
    renderArrow () {
        this.setState({
            msg:'After render Arrow Change'
        })
    }

    //// Arrow function as class property
    classsArrow =()=> this.setState({ msg:'After Class Arrow Change' });

    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <button onClick={this.bindChange.bind(this)}>Bind render Change</button>
                <button onClick={()=>this.renderArrow()}>Arrow render Change</button>
                <button onClick={this.classsArrow}>Arrow class Change</button>
            </div>
        )
    }

    

}
