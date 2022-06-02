import React from "react";
import "./styles/login.scss"
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode,
      user: this.props.user,
    };
  }
  toggleMode() {
    var newMode = this.state.mode === "login" ? "signup" : "login";
    this.setState({ mode: newMode });
    console.log("mode ",this.state.mode);
  }

  toggleUser(){
    var newUser = this.state.user === "barber" ? "client" : "barber";
    this.setState({ user: newUser });
    console.log(this.state.user);
  }
  render() {
    return (
      <div>
        <div
          className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`}
        ></div>
        <section className={`form-block form-block--is-${this.state.mode}`}>
          <header className="form-block__header">
            <h1>{this.state.mode === "login" ? "Welcome back Barber!" : "Sign up"}</h1>
            <div className="form-block__toggle-block">
              <span>
                {this.state.mode === "login" ? "Don't" : "Already"} have an
                account? Click here &#8594;
              </span>
              <input
                id="form-toggler"
                type="checkbox"
                onClick={this.toggleMode.bind(this)}
              />
              <label htmlFor="form-toggler"></label>
            </div>
          </header>
          <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
         
        </section>
      </div>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-block__input-wrapper">
          <div className="form-group form-group--login">
            <Input
              type={this.props.mode === "login" ? "email" : "text"}
              id={this.props.mode === "login" ? "email" : "username"}
              label={this.props.mode === "login" ? "Email" : "Username"}
              disabled={this.props.mode === "signup"}
            />
            <Input
              type="password"
              id="password"
              label="password"
              disabled={this.props.mode === "signup"}
            />
          </div>
          <div className="form-group form-group--signup">
            <Input
              type="text"
              id="fullname"
              label="full name"
              disabled={this.props.mode === "login"}
            />
            <Input
              type="email"
              id="email"
              label="email"
              disabled={this.props.mode === "login"}
            />
            <Input
              type="password"
              id="createpassword"
              label="password"
              disabled={this.props.mode === "login"}
            />
            <Input
              type="password"
              id="repeatpassword"
              label="repeat password"
              disabled={this.props.mode === "login"}
            />
          </div>
        </div>
        <button className="button button--primary full-width" type="submit">
          {this.props.mode === "login" ? "Log In" : "Sign Up"}
        </button>
      </form>
    );
  }
}

const Input = ({ id, type, label, disabled }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    disabled={disabled}
  />
);

export default LoginComponent;