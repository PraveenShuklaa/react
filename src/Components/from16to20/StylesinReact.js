import React from 'react'
import CssStylesheets from './CssStylesheets';

export default function StylesinReact() {
    return (
        //CSS can be applied to React as:-
        // 1.   CSS Stylesheets
        //  2.  Inline Styling
        //  3.  CSS Modules
        //  4.  CSS in JS Libraries
        <div>
            <h2>Styling in React</h2>
            <CssStylesheets primary={true}/>
        </div>
    )
}
