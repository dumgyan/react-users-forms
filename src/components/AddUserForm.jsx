import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button} from "react-bootstrap";



class AddUserForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      gen: "",
    }
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    })
  }
  render() {
    return (
      <container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="name">Name</Form.Label>
            <Form.Control className="input" type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="name">Email address</Form.Label>
            <Form.Control className="input" type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="name">Gen</Form.Label>
            <Form.Control className="input" type="number" placeholder="Enter Gen" name="gen" value={this.state.gen} onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </container>
    );
  }
}

export default AddUserForm ;
