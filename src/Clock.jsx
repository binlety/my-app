import React from 'react'

class Clock extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { time: this.props.time };
    this._update = this._updateTime.bind(this);
  }

  componentDidMount() {
    this._interval = setInterval(this._update, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  _formatTime(time) {
    var [ hours, minutes, seconds ] = [
      time.getHours(),
      time.getMinutes(),
      time.getSeconds(),
    ].map(num => num < 10 ? '0' + num : num);
  }

  _updateTime() {
    this.setState({ time: new Date(this.state.time.getTime() + 1000)});
  }

  render() {
    var time = this._formatTime(this.state.time);
    return (
      <h1>{ time.hours } : { time.minutes } : { time.seconds }</h1>
    )
  }
  
}

export default Clock