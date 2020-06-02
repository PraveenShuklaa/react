import React, { Component } from 'react'

export default class DestProps extends Component {

    render() {
        const {Fname,Sname}=this.props;
        return (
            <div>
                <h3>Hello {Fname} {Sname}</h3>
            </div>
        )
    }
}
