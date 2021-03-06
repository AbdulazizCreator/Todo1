import React, { Component } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import AvGroup from "availity-reactstrap-validation/lib/AvGroup";
import { CustomInput, FormGroup, Label, Button } from "reactstrap";
import AvInput from "availity-reactstrap-validation/lib/AvInput";
import AvRadioGroup from "availity-reactstrap-validation/lib/AvRadioGroup";
import AvRadio from "availity-reactstrap-validation/lib/AvRadio";

class Availity extends Component {
  render() {
    return (
      <AvForm>
        <AvField label="Name" name="label" required />
        <AvGroup>
          <Label for="example">Rank</Label>
          <AvInput name="rank" id="example" required />
        </AvGroup>
        <AvRadioGroup
          name="radioExample"
          label="Radio Buttons!"
          required
          errorMessage="Pick one!"
          inline
        >
          <AvRadio></AvRadio>
          <AvRadio></AvRadio>
          <AvRadio disabled></AvRadio>
        </AvRadioGroup>
        <AvField
          type="select"
          name="select"
          label="Option"
          helpMessage="MULTIPLE"
          multiple
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </AvField>
        <FormGroup>
          <AvGroup check>
            <AvInput type="checkbox" name="checkbox" />
            <Label check for="checkbox">
              {" "}
              Check it out
            </Label>
          </AvGroup>

          <AvField
            type="checkbox"
            name="avFieldCheckbox"
            label="Check out this AvField checkbox"
            required
          />

          <AvInput
            tag={CustomInput}
            type="checkbox"
            name="customCheckbox"
            label="Check out this custom input checkbox"
            required
          />

          <AvField
            tag={CustomInput}
            type="checkbox"
            name="customCheckbox1"
            label="Check out this custom input checkbox from AvField"
            required
          />
        </FormGroup>

        <FormGroup>
          <Button>Submit</Button>
        </FormGroup>
      </AvForm>
    );
  }
}

export default Availity;

// import React from "react";
// import { AvForm, AvField } from "availity-reactstrap-validation";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// export default class Example extends React.Component {
//   render() {
//     const modalError = this.state.error ? "not" : ""; // This is just for the modal
//     return (
//       <div>
//         <AvForm
//           onValidSubmit={this.handleValidSubmit}
//           onInvalidSubmit={this.handleInvalidSubmit}
//         >
//           <AvField name="email" label="Email Address" type="email" required />
//           <Button color="primary">Submit</Button>
//         </AvForm>

//         {/* below this is just for show, it's not needed unless you want a modal upon form submission */}
//         <Modal isOpen={this.state.email !== false} toggle={this.closeModal}>
//           <ModalHeader toggle={this.closeModal}>
//             Form is {modalError} valid!
//           </ModalHeader>
//           <ModalBody>
//             You have {modalError} successfully filled out the form and submitted
//             it. Your email ({this.state.email}) is {modalError} valid!
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.closeModal}>
//               Ok, got it!
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }

//   constructor(props) {
//     super(props);

//     this.handleValidSubmit = this.handleValidSubmit.bind(this);
//     this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//     this.state = { email: false };
//   }

//   handleValidSubmit(event, values) {
//     this.setState({ email: values.email });
//   }

//   handleInvalidSubmit(event, errors, values) {
//     this.setState({ email: values.email, error: true });
//   }

//   closeModal() {
//     this.setState({ email: false, error: false });
//   }
// }
