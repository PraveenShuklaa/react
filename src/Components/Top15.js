import React from 'react'

import Greet from './first15/Greet';
import Welcome from './first15/Welcome';
import PropsC from './first15/PropsC';
import PropF from './first15/PropsF';
import Children from './first15/Children';
import StateC from './first15/StateC';
import Counter from './first15/Counter';
import Count1 from './first15/count1';
import Incfive from './first15/Incfive';
import DestProps from './first15/DestProps';
import DestState from './first15/DestState';
import FuncClick from './first15/FuncClick';
import Classclick from './first15/Classclick';
import EventBind from './first15/EventBind';
import Ebconst from './first15/Ebconst';
import ParentComp from './first15/ParentComp'

export default function Top15() {
    return (
        <div>
            <Greet/>
            <br/>
            <Welcome/>
            <br/>
            <PropsC name='hulk'/>
            <br/>
            <PropF name='Ironman'/>
            <Children>
                <p>Hello Children</p>
            </Children>
            <StateC/>
            <Counter/>
            <Count1/>
            <Incfive/>
            <DestProps Fname='Destructuring' Sname='Props'/>
            <DestState/>
            <FuncClick/>
            <Classclick/>
            <EventBind/>
            <Ebconst/>
            <br/>
            <ParentComp/>
        </div>
    )
}
