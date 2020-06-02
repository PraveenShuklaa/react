import React from 'react'

export default function IndexAntipattern() {
    const avenger=['Iron Man', 'Spider Man', 'Ant Man'];
const avengerlist = avenger.map((props)=><h3>{props}</h3>)
    return (
        <div>
            <h2>Index as Key Anti-Pattern</h2>
            {avengerlist}
        </div>
    )
}
