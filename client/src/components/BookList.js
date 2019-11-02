import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getBooks, deleteBook } from '../actions/bookActions';
import PropTypes from 'prop-types';

class BookList extends Component {

  
  componentDidMount() {
    this.props.getBooks();
  }

  onDeleteClick = id => {
    this.props.deleteBook(id);
  };

  render() {
    const { books } = this.props.book;
    return (
      <Container>
          <ListGroup>
            <TransitionGroup className="book-list">
              {books.map(({ _id, name}) => (
               <CSSTransition key={_id} timeout={500} classNames="fade">
                 <ListGroupItem>
                   <div className="remove-btn">
                     <Button 
                        className="remove-btn" 
                        color="danger" 
                        size="sm" 
                        onClick={this.onDeleteClick.bind(this, _id)}> 
                         &times; 
                     </Button>
                   </div>
                   <div className="list">
                     {name}
                   </div>
                 </ListGroupItem>
               </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
      </Container>
    );
  }
}

BookList.propTypes = {
  getBooks: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  book: state.book
});

export default connect( mapStateToProps, {getBooks, deleteBook})(BookList);