import React, { Component } from 'react';
import './Forms.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
  city: '',
  gender: '',
  nameError: '',
  emailError: '',
  passwordError: '',
  cityError: '',
  genderError: '',
};

class Forms extends Component {
  state = initialState;

  constructor(props: any) {
    super(props);
  }

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validateForm = () => {
    let nameError = '';
    let emailError = '';
    let passwordError = '';
    let cityError = '';
    let genderError = '';

    if (this.state.name == '') {
      nameError = 'Invalid Name';
    }

    if (this.state.password == '') {
      passwordError = 'Invalid Password';
    }

    if (!this.state.email.includes('@')) {
      emailError = 'Invalid Email';
    }

    if (this.state.city == '') {
      cityError = 'Invalid City';
    }

    if (this.state.gender == '') {
      genderError = 'Invalid Gender';
    }

    if (nameError || emailError || passwordError || cityError || genderError) {
      this.setState({
        nameError: nameError,
        emailError: emailError,
        passwordError: passwordError,
        cityError: cityError,
        genderError: genderError,
      });

      return false;
    }
    return true;
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    const valid = this.validateForm();
    if (valid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter name"
            />
          </div>
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.nameError}</div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.passwordError}</div>

          <div className="form-group ">
            <label>Email address</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter email"
            />
          </div>
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</div>

          <div className="form-group ">
            <label>City</label>
            <select name="city" className="form-control" value={this.state.city} onChange={this.handleChange}>
              <option value="">Select City</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mysore">Mysore</option>
            </select>
          </div>

          <div style={{ fontSize: 12, color: 'red' }}>{this.state.cityError}</div>

          <div>
            <div>
              <label>Gender</label>
            </div>

            <div className="form-check checkBox">
              <input type="radio" className="form-check-input" name="gender" value="male" onChange={this.handleChange} />
              Male
            </div>

            <div className="form-check checkBox" style={{ marginLeft: '20px' }}>
              <input type="radio" className="form-check-input" name="gender" value="female" onChange={this.handleChange} />
              Female
            </div>

            <div style={{ fontSize: 12, color: 'red' }}>{this.state.genderError}</div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Forms;
