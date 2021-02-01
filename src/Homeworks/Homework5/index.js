import React, { Component } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      isOpen: false,
      sIndex: -1,
    };
  }

  componentDidMount() {
    axios.get("https://app-employ.herokuapp.com/api/employee").then((res) => {
      console.log(res);
      this.setState({ employees: res.data.object });
    });
  }

  render() {
    const deleteEmployee = (id) => {
      axios
        .delete("https://app-employ.herokuapp.com/api/employee/" + id)
        .then((res) => {
          axios
            .get("https://app-employ.herokuapp.com/api/employee")
            .then((res2) => {
              this.setState({ employees: res2.data.object });
            });
        });
    };

    const addEmployee = (events, values) => {
      axios
        .post("https://app-employ.herokuapp.com/api/employee", values)
        .then((res) => {
          axios
            .get("https://app-employ.herokuapp.com/api/employee")
            .then((res2) => {
              this.setState({ employees: res2.data.object });
            });
        });
      console.log("values", values);
    };

    const editEmployee = (events, values) => {
      axios
        .put(
          "https://app-employ.herokuapp.com/api/employee/" +
            this.state.employees[this.state.sIndex].id,
          values
        )
        .then((res) => {
          axios
            .get("https://app-employ.herokuapp.com/api/employee")
            .then((res2) => {
              this.setState({ employees: res2.data.object });
              setIsOpen();
            });
        });
    };

    const setIsOpen = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    return (
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <AvForm onValidSubmit={addEmployee}>
                  <AvField
                    name="firstName"
                    label="Employee firstname"
                    required
                    type="text"
                  />

                  <AvField
                    name="lastName"
                    label="Employee lastname"
                    required
                    type="text"
                  />

                  <AvField
                    name="age"
                    label="Employee age"
                    required
                    type="number"
                  />

                  <AvField
                    name="salary"
                    label="Employee salary"
                    required
                    type="number"
                  />
                  <AvField
                    name="position"
                    label="Employee position"
                    required
                    type="select"
                  >
                    <option value="Director">Director</option>
                    <option value="Director assistant">Director assist</option>
                    <option value="Driver">Driver</option>
                    <option value="Developer">Developer</option>
                  </AvField>
                  <Button className="btn btn-success d-block w-100">Add</Button>
                </AvForm>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.employees.map((item, index) => (
            <div key={item.id} className="col-4 mt-3">
              <div className="card">
                <div className="card-header">
                  {item.lastName} {item.firstName}
                </div>
                <div className="card-body">
                  <p>
                    Age: <b>{item.age}</b>
                  </p>
                  <p>
                    Salary: <b>{item.salary}</b>
                  </p>
                  <p>
                    Position: <b>{item.position}</b>
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <Button
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(item.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="btn btn-success"
                    onClick={() =>
                      this.setState({ sIndex: index }, setIsOpen())
                    }
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <Modal isOpen={this.state.isOpen}>
            <AvForm
              onValidSubmit={editEmployee}
              model={this.state.employees[this.state.sIndex]}
            >
              <ModalBody>
                <AvField
                  name="firstName"
                  label="Employee firstname"
                  required
                  type="text"
                />

                <AvField
                  name="lastName"
                  label="Employee lastname"
                  required
                  type="text"
                />

                <AvField
                  name="age"
                  label="Employee age"
                  required
                  type="number"
                />

                <AvField
                  name="salary"
                  label="Employee salary"
                  required
                  type="number"
                />
                <AvField
                  name="position"
                  label="Employee position"
                  required
                  type="select"
                >
                  <option value="Director">Director</option>
                  <option value="Director assistant">Director assist</option>
                  <option value="Driver">Driver</option>
                  <option value="Developer">Developer</option>
                </AvField>
              </ModalBody>
              <ModalFooter>
                <Button className="btn btn-success d-flex justify-content-end">
                  Save
                </Button>
                <Button onClick={setIsOpen}>Cancel</Button>
              </ModalFooter>
            </AvForm>
          </Modal>
        </div>
      </div>
    );
  }
}

export default index;
