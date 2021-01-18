import React from 'react'
import MyContext from './MyContext';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    switch (car) {
      case 'red':
        this.setState({
          redCar: side
        });
        break;
      case 'yellow':
        this.setState({
          yellowCar: side
        });
        break;
      case 'blue':
        this.setState({
          blueCar: side
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { children } = this.props;
    return (
      <MyContext.Provider value={{ ...this.state, moveCar: this.moveCar }}>
        {children}
      </MyContext.Provider>
    );
  }
}

export default Provider;