import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
    
        this.state = {
             username:'',
             comments:'',
             course:'React'
        }
    }
    form={
        textAlign: 'center',
        border: '1px solid black',
        padding: '10px',
        display:'inline-block',
        marginBottom:'10px'
    }

    username=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    comments=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    course=(event)=>{
        this.setState({
            course:event.target.value
        })
    }
    submit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.course}`)
        event.preventDefault();
    }
    
    render() {
        let {username,comments,course}=this.state;
        return (
            <div>
                <form style={this.form} onSubmit={this.submit}>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' value={username} onChange={this.username}/><br/><br/>
                    <label htmlFor='comments'>Comments: </label>
                    <textarea value={comments} onChange={this.comments}/> <br/><br/>
                    <label htmlFor='course'>Course: </label>
                    <select value={course} onChange={this.course}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select><br/><br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
