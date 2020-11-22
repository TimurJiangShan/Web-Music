import React, { Component } from 'react';


class Counter extends Component {
  constructor(){
    super();
  }
  state = {
    count: 0,
    tags: ['tag1','tag2','tag3',],
  };

  format(){
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count
  }

  handleIncrement = product => {
    this.setState({ count: this.state.count + 1 })
  }

  render() { 
    let classes = this.getBadgeClasses();

    return ( 
      <React.Fragment>
        <span className={classes}>{this.format()}</span> 
        <button onClick={() => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => {
            return <li key={tag}>{ tag }</li>
          })}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }
}
 
export default Counter;