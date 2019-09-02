import React, { Component } from 'react';

import '../styles/AddProperty.css';

class AddProperty extends Component {
  this.handleAddProperty = this.handleAddProperty.bind(this);

  handleAddProperty = event => {
    event.preventDefault();
  }

  render() {
    <div className="AddProperty">
      <form onSubmit={this.handleAddProperty}></form>
        Add Property Page
    </div>;
  }
}

export default AddProperty;
