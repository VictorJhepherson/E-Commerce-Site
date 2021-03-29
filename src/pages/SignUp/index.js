import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/loja-online.svg";

import { Form, Container } from "./styles";

import Api from "../../services/api";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        let json = await Api.signUp(email, password); 
        console.log(json);
        if(json.token) {
          this.props.history.push("/");
        } else {
          alert("Erro: " + json.error);
        }
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="E-Commerce" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastre-se</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default SignUp;