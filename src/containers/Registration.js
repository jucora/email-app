import React from 'react';
import Api from '../utils/Api';

export default class RegistrationUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
      subscribe: false,
      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const { name, email, phone, subscribe } = this.state;

    e.preventDefault();
    Api.newUser(name, email, phone, subscribe)
      .then((response) => {
        if (response.data.errors) {
          this.setState({ errors: response.data.errors });
        }
        if (response) {
          console.log('creado');
        }
      })
      .catch((error) => {
        console.error('Registration error', error);
      });
  }

  handleChange(e) {
    if (e.target.name === 'subscribe') {
      this.setState({
        subscribe: this.state.subscribe === true ? false : true,
      });
      console.log(this.state.subscribe);
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  render() {
    const { name, email, phone, subscribe, errors } = this.state;
    return (
      <div className="newForm">
        <form onSubmit={this.handleSubmit}>
          <h2>Add User</h2>
          {errors.map((error) => (
            <h2 key={error} className="error">
              {error}
            </h2>
          ))}
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name Here"
            value={name}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email here"
            value={email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone here"
            value={phone}
            onChange={this.handleChange}
            required
          />

          <input
            id="cb"
            type="checkbox"
            name="subscribe"
            value={subscribe}
            onChange={this.handleChange}
          />
          <label htmlFor="cb">Do you want to receive emails from us?</label>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
