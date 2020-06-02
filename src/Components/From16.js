import React from 'react';
import ConditionalRender from './from16to20/ConditionalRender';
import List from './from16to20/List';
import ListKeys from './from16to20/ListKeys';
import IndexAntipattern from './from16to20/IndexAntipattern';
import StylesinReact from './from16to20/StylesinReact'

export default function From16() {
    return (
        <div>
            <ConditionalRender/>
            <List/>
            <ListKeys/>
            <IndexAntipattern/>
            <StylesinReact/>
        </div>
    )
}
