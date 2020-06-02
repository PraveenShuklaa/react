import React, { Component } from 'react'

export class PropsC extends Component {
    render() {
        return (
            <div>
                hello {this.props.name}
            </div>
        )
    }
}

export default PropsC
