import React, { Fragment } from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';

class Properties extends React.Component {
  render() {
    return (
      <div>
        <PropertyCard />
      </div>
    );
  }
}

export default Properties;
