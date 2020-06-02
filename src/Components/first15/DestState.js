import React, { Component } from 'react'

export default class DestState extends Component {

    constructor() {
        super()
    
        this.state = {
             Fname : 'Destructuring',
             Sname : 'State'
        }
    }
    
    render() {
        const {Fname,Sname}=this.state;
        return (
            <div>
                <h3>Hello {Fname} {Sname}</h3>
            </div>
        )
    }
}
