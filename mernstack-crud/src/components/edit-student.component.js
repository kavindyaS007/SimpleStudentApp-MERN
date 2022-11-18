import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class EditStudent extends Component {
    constructor(props) {
        super(props)
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentGrade = this.onChangeStudentGrade.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // State
        this.state = {
            name: '',
            email: '',
            grade: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    email: res.data.email,
                    grade: res.data.grade
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeStudentName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeStudentEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeStudentGrade(e) {
        this.setState({ grade: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const studentObject = {
            name: this.state.name,
            email: this.state.email,
            grade: this.state.grade
        };
        axios.put('http://localhost:4000/students/update-student/' + this.props.match.params.id, studentObject)
            .then((res) => {
                console.log(res.data)
                console.log('Student successfully updated')
            }).catch((error) => {
                console.log(error)
            })
        //Redirect to student list
        this.props.history.push('/student-list')
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
                        Update Student
                    </Button>
                </Form>
            </div>
        );
    }
}