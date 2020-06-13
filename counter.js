import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  //constructor() {
  // super();
  //  this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (id) => {
    console.log(id);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.handleIncrement({ id: 1 })}
        >
          Increment
        </button>
        {/*<ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
          </ul>*/}
      </div>
    );
  }
  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
  getBadgeclasses() {
    let badge = "badge m-2 badge-";
    badge += this.state.count === 0 ? "warning" : "primary";
    return badge;
  }
}

export default Counter;
