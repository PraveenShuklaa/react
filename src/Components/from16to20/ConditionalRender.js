import React, { Component } from 'react';
import IfRender from './IfRender';
import ElementVars from './ElementVars';
import TernConOp from './TernConOp';
import ShortCircuit from './ShortCircuit'

export default class ConditionalRender extends Component {
    render() {
        return (
            //4 Methods of Conditional Rendering as:-
            //  1.If-else condition 
            //  2.Element Variables
            //  3.Ternary Conditional Operator
            //  4.Short Circuit
            <div>
                <h2>Conditional Rendering Methods</h2>
                <IfRender/>
                <ElementVars/>
                <TernConOp/>
                <ShortCircuit/>
            </div>
        )
    }
}
