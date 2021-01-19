import React from 'react';

import MyContext from './MyContext';

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
      signalColor: 'red',
    }

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(signalColor) {
    this.setState({
      signalColor,
    });
  }

  moveCar(car, side) {
    switch (car) {
      case 'red':
        this.setState({
          redCar: side
        });
        break;
      case 'blue':
        this.setState({
          blueCar: side
        });
        break;
      case 'yellow':
        this.setState({
          yellowCar: side
        });
        break;
      default:
        break;
    }
  }
  render() {
    const { children } = this.props;
    return (
      <MyContext.Provider value={
        {
          ...this.state,
          moveCar: this.moveCar,
          changeSignal: this.changeSignal
        }      
      }>
        {children}
      </MyContext.Provider>
    );
  }
}

export default Provider;
