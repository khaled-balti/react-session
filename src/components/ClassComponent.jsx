import React, { Component } from 'react';;

class App extends Component {
  state = {
    message: 'Welcome to React Class Component!',
    counter: 0,
  };

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default App;
