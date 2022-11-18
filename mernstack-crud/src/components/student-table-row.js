import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "../css/style.css";
import axios from 'axios';

export default class StudentTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    deleteStudent() {
        axios.delete('http://localhost:4000/students/delete-student/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted !')
                window.location.reload();
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.grade}</td>
                <td>
                    {/* <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link> */}
                    <Button className="action-btn" href={"/edit-student/" + this.props.obj._id} size="sm" variant="warning">
                        Edit
                    </Button>
                    <Button onClick={this.deleteStudent} className="action-btn" size="sm" variant="danger">
                        Delete
                    </Button>
                </td>
            </tr>
        )
    }
}