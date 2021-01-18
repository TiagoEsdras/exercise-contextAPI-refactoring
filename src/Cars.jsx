// src/Cars.jsx
import React from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';

import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

class Cars extends React.Component {

  render() {
    return (
      <MyContext.Consumer>
        {(value) => (
          <div>
            <div>
              <img
                className={value.redCar ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car"
              />
              <button
                onClick={() => value.moveCar('red', !value.redCar)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={value.blueCar ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car"
              />
              <button
                onClick={() => value.moveCar('blue', !value.blueCar)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={value.yellowCar ? 'car-right' : 'car-left'}
                src={carYellow}
                alt="yellow car"
              />
              <button
                onClick={() => value.moveCar('yellow', !value.yellowCar)}
                type="button"
              >
                Move
              </button>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};


export default Cars;
