import React from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(({ data }) => this.setState({ properties: data }));
  }

  render() {
    return (
      <div className="properties">
        {this.state.properties.map(property => (
          <div key={property._id} className="col">
            <PropertyCard
              key={property._id}
              price={property.price}
              title={property.title}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              type={property.type}
              email={property.email}
              city={property.city}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Properties;
