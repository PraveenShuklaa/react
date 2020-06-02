import React from 'react';
import ListRender from './ListRender'

export default function List() {
    const avenger=[
        {
            id:1,
            name:'Iron Man',
            skill:'Angular',
            age:40
        },
        {
            id:2,
            name:'Captain America',
            skill:'React',
            age:250
        },
        {
            id:3,
            name:'Hulk',
            skill:'Vue',
            age:150
        }
    ]
const avengersList = avenger.map((avg)=><ListRender props={avg}/>)
    return (
        <div>
            <h2>List Rendering</h2>
            {avengersList}
        </div>
    )
}
