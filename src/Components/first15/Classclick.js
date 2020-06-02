import React, { Component } from 'react'

export default class Classclick extends Component {
    clickhandler =()=> console.log('Class Clicked');
    render() {
        return (
            <div>
                <br/>
                <button onClick={this.clickhandler}>Class Event</button>
            </div>
        )
    }
}
