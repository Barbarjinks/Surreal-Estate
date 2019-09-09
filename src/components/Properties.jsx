import React from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';
import { Link } from 'react-router-dom';

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

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      axios.get(`http://localhost:3000/api/v1/PropertyListing${this.props.location.search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div className="properties">
        <div className="sidebar">
          <Link to={'/?query={"city": "Manchester"}'}>Manchester</Link>
          <Link to={'/?query={"city": "Leeds"}'}>Leeds</Link>
          <Link to={'/?query={"city": "Sheffield"}'}>Sheffield</Link>
          <Link to={'/?query={"city": "Liverpool"}'}>Liverpool</Link>
        </div>
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
