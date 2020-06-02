import React from 'react';
import ListRender from './ListRender';

export default function ListKeys() {
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
    const avengersList = avenger.map((avenger)=><ListRender key={avenger.id} props={avenger}/>)
    return (
        <div>
            <h2>List and Keys (unique)</h2>
            {avengersList}
        </div>
    )
}





