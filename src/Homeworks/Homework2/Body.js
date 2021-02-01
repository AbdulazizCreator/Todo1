import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

// import EditModal from "./Use/EditModal";
// import EditData from './EditData'

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: [],
      display: false,
      var: 0
    };
  }

  render() {
    const sendData = (e, x, q) => {
      e.preventDefault();
      const data = {
        name: e.target.name.value,
        age: e.target.age.value,
        sex: e.target.sex.value,
      };
      this.setState({ datas: this.state.datas.concat(data) });
      e.target.reset();
    };
    console.log(this.state.datas);
    const deletePerson = (e) => {
      this.setState({
        datas: this.state.datas.filter(
          (item, index) => index !== parseInt(e.target.id)
        ),
      });
      console.log(this.state.datas);
      // console.log(typeof e.target.id);
    };
    const edit = (e) => {
      this.setState({ display: true });
      this.setState({ var: parseInt(e.target.id)})
    };
    const save = (e) => {
      e.preventDefault();
      this.setState({display: false});
      const temp = {
        name: e.target.name.value,
        age: e.target.age.value,
        sex: e.target.sex.value,
      }

      this.setState({datas: this.state.datas.map((item, index) => (index === -(parseInt(this.state.var)) - 1) ? item = temp: item=this.state.datas[index])})
      console.log(this.state.datas)
      console.log(-parseInt(this.state.var) - 1);
      console.log(temp)
    }
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <Form onSubmit={sendData}>
              <FormGroup>
                <Label for="name">Name: </Label>
                <Input type="text" name="name" id="name"></Input>
              </FormGroup>
              <FormGroup>
                <Label for="age">Age: </Label>
                <Input type="number" name="age" id="age"></Input>
              </FormGroup>
              <FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="sex" value="Male" />
                    Male
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="sex" value="Female" />
                    Female
                  </Label>
                </FormGroup>
              </FormGroup>
              <Button type="submit">Add Person</Button>
            </Form>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row">
            {this.state.datas.map((item, index) => (
              <div key={index} className="col-4">
                <div className="card">
                  <div className="card-header">Name: {item.name}</div>
                  <div className="card-body">Age: {item.age}</div>
                  <div className="card-footer">Sex: {item.sex }</div>
                  <div className="d-flex justify-content-between">
                    <Button
                      id={-index - 1}
                      onClick={edit}
                      className="btn btn-success"
                    >
                      Edit
                    </Button>
                    <div>
                      <Modal isOpen={this.state.display}>
                        <ModalHeader>
                          Ma'lumotlarni o'zgartirish oynasi
                        </ModalHeader>
                        <ModalBody>
                          <Form onSubmit={save}>
                            <FormGroup>
                              <Label for="name">Name: </Label>
                              <Input type="text" name="name" id="name"></Input>
                            </FormGroup>
                            <FormGroup>
                              <Label for="age">Age: </Label>
                              <Input type="number" name="age" id="age"></Input>
                            </FormGroup>
                            <FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <Input type="radio" name="sex" value="Male" />
                                  Male
                                </Label>
                              </FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="sex"
                                    value="Female"
                                  />
                                  Female
                                </Label>
                              </FormGroup>
                            </FormGroup>
                            <Button type="submit">Save</Button>
                          </Form>
                        </ModalBody>
                      </Modal>
                    </div>
                    <Button
                      id={index}
                      onClick={deletePerson}
                      className="btn btn-danger"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
