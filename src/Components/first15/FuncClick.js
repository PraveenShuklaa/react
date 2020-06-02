import React from 'react'

export default function FuncClick() {
    const clickhandler =()=> console.log('Function Clicked');
    return (
        <div>
            <button onClick={clickhandler}>Function Event</button>
        </div>
    )
}
