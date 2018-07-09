import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        <h3>This is the feature!</h3>
      </div>
    )
  }
}

export default requireAuth(Feature);