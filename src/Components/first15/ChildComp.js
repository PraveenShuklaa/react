import React, { Component } from 'react'

export default class ChildComp extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.parent}>Method as Props</button>
                <button onClick={()=>this.props.parentparam('Captain America')}>Method as Props passing parameter using arrow function</button>
            </div>
        )
    }
}
