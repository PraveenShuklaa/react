import React, { Component } from 'react';
import ChildComp from './ChildComp';

export default class ParentComp extends Component {
    constructor() {
        super()
    
        this.state = {
             parent : 'Parent'
        }
        //using this keyword in parent method needs bind(this)
        this.parent = this.parent.bind(this);
        this.parentparam = this.parentparam.bind(this);
    }

    parent(){
        alert(`Hello ${this.state.parent} `)
    }

    parentparam(child){
        alert(`Hello ${this.state.parent} to ${child}`)
    }

    
    render() {
        return (
            <div>
                <ChildComp parent= {this.parent} parentparam={this.parentparam}/>
            </div>
        )
    }
}
