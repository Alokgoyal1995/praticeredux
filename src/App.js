import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
class App extends Component {
  // state = {
  //   age: 21
  // }
  // buttonUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age

  //   })
  // }

  // buttonDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age

  //   })
  // }

  render() {
    return (
      <div className="App">
        <div>Age : <span>{this.props.age}</span> </div>
        <button onClick={this.props.buttonUp} >age up</button>
        <button onClick={this.props.buttonDown}>age down</button>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispachToProps = (dispach) => {
  return {
    buttonUp: () => dispach({ type: 'AGE_UP' }),
    buttonDown: () => dispach({ type: 'AGE_DOWN' })

  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
