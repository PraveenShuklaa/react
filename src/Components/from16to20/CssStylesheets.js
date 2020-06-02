import React from 'react';
import './Stylesheets.css';
import styles from './Style.module.css';
import Module from './Module';

export default function CssStylesheets(props) {
    
    let className = props.primary ? 'primary' : '';  
    let heading = {
        color : 'green',
        fontSize: '30px'
    }

    return (
        <div>
            <h3 className= {`${className} font`}> 1. CSS Stylesheets Styling</h3>
            <h3 style={heading}> 2. Inline Styling</h3>
            <h3 className={styles.success}> 3.  CSS Module Styling</h3>
            <Module/>
        </div>
    )
}
