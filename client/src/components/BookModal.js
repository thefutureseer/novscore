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

class BookModal extends Component {
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
              Add Book comming sooon!
       </Button>
       <Modal 
         isOpen={this.state.modal}
         toggle={this.toggle} >
        <ModalHeader toggle={this.toggle} >
          Add to Book list Comming soon!
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="book">
                Book
              </Label>
              <Input 
                type="text"
                name="name"
                id="book"
                placeholder="Add to book list"
                onChange={this.onChange}
                />
              <Button
                color="dark"
                style={{marginTop: '2rem'}}
                block >
                Add Book +2
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

export default connect(mapStateToProps, { addBook })(BookModal);