import {Component} from 'react'
//import Counter from './components/Counter'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <button className="button" onClick={this.onIncrement} type="button">
          Increase
        </button>
        <button className="button" onClick={this.onDecrement} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter

/*
  git config --global user.email naikc8468@gmail.com
    git config --global user.name Chetannaik-9535
     git remote add origin https://github.com/Chetannaik-9535/Debugging-Counter.git
*/