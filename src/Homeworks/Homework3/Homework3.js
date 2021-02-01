import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Progress,
  Row,
  Col,
  Form,
  FormGroup,
} from "reactstrap";
import "./Homework3.css";

class Homework3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      donetasks: [],
      max: 0,
      doneMax: 0,
      progVal: 0,
    };
  }
  render() {
    const addTask = (e) => {
      e.preventDefault();
      this.setState({ max: this.state.max + 1 });
      this.setState({ tasks: this.state.tasks.concat(e.target.task.value) });
      e.target.reset();
    };

    const addDoneTask = (index) => {
      this.setState({
        donetasks: this.state.donetasks.concat(this.state.tasks[index]),
      });
      this.setState({ doneMax: this.state.doneMax + 1 });
      this.state.tasks.splice(index, 1);
      this.setState({ tasks: this.state.tasks });
    };

    const deleteTask = (index) => {
      this.state.donetasks.splice(index, 1);
      this.setState({ donetasks: this.state.donetasks });
    };

    console.log(this.state.tasks);
    console.log((this.state.tasks.length * 100) / this.state.max);
    return (
      <div className="container-fluid pt-3 vh-100">
        <h2 className="text-center pb-3">ToDo App</h2>
        <div className="row justify-content-center">
          <div className="col-6">
            <Form onSubmit={addTask}>
              <FormGroup>
                <InputGroup>
                  <Input name="task" />
                  <InputGroupAddon addonType="prepend">
                    <Button type="submit">Add a plan</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Form>
          </div>
        </div>
        <Row className="justify-content-center mt-3">
          <Col sm="8">
            <Progress
              animated
              striped
              value={(this.state.doneMax * 100) / this.state.max}
              color="success"
            />
          </Col>
        </Row>
        <div className="row justify-content-between mt-5">
          <div className="col-5 border p-4">
            <h4 className="text-center border bg-danger">Tasks</h4>
            {this.state.tasks.map((item, index) => {
              return (
                <InputGroup key={index} className="mt-3">
                  <Input readOnly value={index + 1 + ". " + item} />
                  <InputGroupAddon addonType="prepend">
                    <Button
                      className="bg-success"
                      onClick={() => addDoneTask(index)}
                    >
                      Done
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              );
            })}
          </div>
          <div className="col-5 border p-4">
            <h4 className="text-center border bg-success">Done</h4>
            {this.state.donetasks.map((item, index) => {
              return (
                <InputGroup key={index} className="mt-3">
                  <Input readOnly value={index + 1 + ". " + item} />
                  <InputGroupAddon addonType="prepend">
                    <Button
                      className="bg-danger"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Homework3;
