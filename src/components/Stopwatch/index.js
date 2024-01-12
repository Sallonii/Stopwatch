// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  formatTime = seconds => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    // if the value of the minutes is less than 9(single digit) then the 0 will be attached in front of it to form a double-digit

    const stringifiedSeconds =
      remainingSeconds > 9 ? remainingSeconds : `0${remainingSeconds}`
    // if the value of the seconds is less than 9(single digit) then the 0 will be attached in front of it to form a double-digit

    // here returning the formatted time (25:00)
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    this.setState({seconds: 0})
    clearInterval(this.timerId)
  }

  render() {
    const {seconds} = this.state

    return (
      <div className="bg">
        <div className="content-container">
          <h1>Stopwatch</h1>
          <div className="card-container">
            <div className="timer-text-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <p>Timer</p>
            </div>
            <h1>{this.formatTime(seconds)}</h1>
            <div>
              <button
                type="button"
                className="btn green"
                onClick={this.onStart}
              >
                Start
              </button>
              <button type="button" className="btn red" onClick={this.onStop}>
                Stop
              </button>
              <button
                type="button"
                className="btn orange"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
