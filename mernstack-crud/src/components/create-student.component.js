import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

export default class CreateStudent extends Component {
    constructor(props) {
        super(props)
            // setting up functions
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentGrade = this.onChangeStudentGrade.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

            // setting up state
        this.state = {
            name: '',
            email: '',
            grade: ''
        }
    }
    onChangeStudentName(e) {
        this.setState({ name: e.target.value})
    }
    onChangeStudentEmail(e) {
        this.setState({ email: e.target.value})
    }
    onChangeStudentGrade(e) {
        this.setState({ grade: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault()
        const studentObject = {
            name: this.state.name,
            email: this.state.email,
            grade: this.state.grade
        };
        axios.post('http://localhost:4000/students/create-student', studentObject)
            .then(res => console.log(res.data));
        this.setState({ name: '', email: '', grade: '' })
    }

    render() {
        return (
            <div>{/* className="form-wrapper" */}
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
                    </Form.Group>
                    <Form.Group controlId="Grade">
                        <Form.Label>Grade</Form.Label>
                        <Form.Control type="text" value={this.state.grade} onChange={this.onChangeStudentGrade} />
                    </Form.Group>
                    <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
                        Create Student
                    </Button>
                </Form>
            </div>
        );
    }
}