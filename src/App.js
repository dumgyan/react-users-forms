import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Users from "./components/Users";
import AddUserForm from "./components/AddUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Rabbi Kojo",
          email: "rabbi@email.com",
          gen: 23,
          id: "r1",
        },
        {
          name: "Ahmed Zaky",
          email: "ahmed@email.com",
          gen: 13,
          id: "r2",
        },
        {
          name: "Sabaha",
          email: "saba @email.com",
          gen: 23,
          id: "r3",
        },
      ],
    };
  }
  addNewUser  = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter(user => user.id !== id);
    this.setState({
      users: undeletedUsers
    })
  }
  EditUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })

  }
  render() {
    return (
      <div className="page">
        <h1 className="text-center">STUDENTS RECORDS KEEPER</h1>
        <hr/>
        <Container fluid style={{margin: "2rem"}} >
          <Row>
            <Col md="4">
              <h4>Add Users</h4>
              <br/>
              <AddUserForm  addUser={this.addNewUser}/>
            </Col>
            <Col>
            <h4>All Codetrain Users</h4>
            <br/>
              <Users usersData = {this.state.users} deleteUser = {this.deleteUser} EditUser={this.EditUser}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
