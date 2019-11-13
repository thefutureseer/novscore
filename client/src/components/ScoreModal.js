import React, {Component} from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addBook } from '../actions/bookActions';
import uuid from 'uuid';

class ScoreModal extends Component {
 state = {
   modal: false,
   name: ''
 }

 toggle = () => {
   this.setState({
     modal: !this.state.modal
   });
 }

 onChange = (e) => {
   this.setState({ [e.target.name ]: e.target.value });
 }

 onSubmit= e => {
   e.preventDefault();

   const newBook = {
     id: uuid(),
     name: this.state.name
   }

//Add book via add book action
   this.props.addBook(newBook);

//Close modal
   this.toggle();
 };

 render () {
   return (
     <div>
       <Button 
            color="dark"
            style={{marginButton: '2rem'}}
            onClick={this.toggle}>
              Add (not score but) Second Option
       </Button>
       <Modal 
         isOpen={this.state.modal}
         toggle={this.toggle} >
        <ModalHeader toggle={this.toggle} >
          Add Info
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="book">
                Option aside from everybodys score:
              </Label>
              <Input 
                type="text"
                name="name"
                id="book"
                placeholder="Player Name"
                onChange={this.onChange}
                
                />
                {/* <Input 
                type="text"
                name="course"
                id="book"
                placeholder="Add to COURSE list"
                // onChange={this.onChange}
                /> */}
                
              <Button
                color="dark"
                style={{marginTop: '2rem'}}
                block >
                Add A Seperate option
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
       </Modal>
     
     </div>
   );
 }
}

const mapStateToProps = state => ({
  book: state.book
})

export default connect(mapStateToProps, { addBook })(ScoreModal);