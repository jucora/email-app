import React from 'react';
import PropType from 'prop-types';
// import Api from '../../utils/api';

export default class RegistrationUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const { email, role, password, passwordConfirmation } = this.state;

    e.preventDefault();
    // Api.newUser(email, role, password, passwordConfirmation)
    //   .then((response) => {
    //     if (response.data.errors) {
    //       this.setState({ errors: response.data.errors });
    //     }
    //     if (response.data.user) {
    //       localStorage.setItem('token', JSON.stringify(response.data.jwt));
    //       handleSuccessfulAuth(response.data);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Registration error', error);
    //   });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <div className="newForm">
        <form onSubmit={this.handleSubmit}>
          <h2>Add User</h2>
          {errors.map((error) => (
            <h2 key={error} className="error">
              {error}
            </h2>
          ))}
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name Here"
            value={name}
            onChange={this.handleChange}
            required
          />
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email here"
            value={email}
            onChange={this.handleChange}
            required
          />
          <label for="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone here"
            value={phone}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

RegistrationUser.propTypes = {
  handleSuccessfulAuth: PropType.func,
};
