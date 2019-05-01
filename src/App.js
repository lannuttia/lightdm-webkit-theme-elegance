import React from 'react';

class App extends React.Component {
  state = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }

  updateWindowDimensions = () => {
    this.setState(state => ({
      ...state,
      width: window.outerWidth,
      height: window.outerHeight
    }))
  }

  _onMouseMove = (e) => {
    this.setState(state => ({
      ...state,
      x: e.screenX,
      y: e.screenY
    }));
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  render() {
    return (
      <div
        onMouseMove={this._onMouseMove}
        style={{
          width: this.state.width,
          height: this.state.height
        }}
      >
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
