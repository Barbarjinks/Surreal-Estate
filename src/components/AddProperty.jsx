import React, { Component } from 'react';

import '../styles/AddProperty.css';

class AddProperty extends Component {
state = {
  fields: {
    title: '',
    type: 'Flat',
    city: 'Manchester',
    bathrooms: '',
    bedrooms: '',
    email: '',
    price: '',
  },
};

  handleAddProperty = event => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="AddProperty">
        <form onSubmit={this.handleAddProperty}>
          <button type="submit">
            Add Property
          </button>
          <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} />
          <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terrace">Terrace</option>
            <option value="End of terrace">End of Terrace</option>
            <option value="Bungalow">Bungalow</option>
          </select>
          <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
          <input name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} />
          <input name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} />
          <input name="email" value={this.state.fields.email} onChange={this.handleFieldChange} />
          <input name="price" value={this.state.fields.price} onChange={this.handleFieldChange} />
        </form>
        Add Property Page
      </div>
    );
  }
}

export default AddProperty;
