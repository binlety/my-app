import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this._update = this._updateTime.bind(this);
  }

  render() {
    var time = this._formatTime(this.state.time);
    return (
      <h1>{ time[0] } : { time[1] } : { time[2] }</h1>
    )
  }

  componentDidMount() {
    this._interval = setInterval(this._update, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  _formatTime(time) {
    var time = [
      time.getHours(),
      time.getMinutes(),
      time.getSeconds(),
    ].map(num => num < 10 ? '0' + num : num);
    return time
  }

  _updateTime() {
    this.setState({ time: new Date(this.state.time.getTime() + 1000)});
  }
}
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
  