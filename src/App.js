import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props ){
    super(props);
    this.state = {
      inputVal : '',
      todo : ['eat','sleep', 'code']
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange (event){
    this.setState({inputVal: event.target.value});  
  }
  
  handleClick(){
    if(this.state.inputVal && this.state.inputVal !== this.state.todo[this.state.todo.length-1])
    this.setState({todo:[...this.state.todo, this.state.inputVal]});
    
  }
  
  render() {
    const todos = this.state.todo.map((todo,i)=><li key={i}>{todo}</li>)
    return (
      <div className="main">
        <div>
          <input  type='text' value={this.state.inputVal} onChange={this.handleChange}/>
          <button onClick={this.handleClick}> submit</button>
        </div>
        <div className='todo'>
          <h1> My Todos : </h1>
          <ul>
            {todos}
          </ul>
        </div>
      </div>
    );
  }
}

export default App ;
