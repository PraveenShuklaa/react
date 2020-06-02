import React from 'react'

export default function ListRender({props}) {
    return (
        <h3>{props.id}. I like {props.name} age is {props.age} knows {props.skill}</h3>
    )
}
