// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import _ from 'lodash';
// import { Input } from 'react-bootstrap';
import TestModal from './TestModal';

// Simple example of a React "dumb" component
export default class HelloWorldWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    updateName: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'handleChange');
    _.bindAll(this, 'openModal');
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    const { name } = this.props;
    return (
      <div className="container">
        <h3>
          Hello, {name}!
        </h3>
        <hr/>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                value={name}
                onChange={this.handleChange}
                id="first_name"
              />
            <label htmlFor="first_name"
                   className="active">
              Say hello to:
            </label>
            </div>
          </div>
        </form>
        <TestModal />
        <p>
          <a className="waves-effect waves-light btn modal-trigger" href="#">
            Modal Class Trigger
          </a>
        </p>
        <p>
          <a className="waves-effect waves-light btn"
             onClick={this.openModal}>
            Programmatically Launch Modal
          </a>
        </p>
      </div>
    );
  }

  openModal() {
    $('#modal1').openModal();
  }
}
