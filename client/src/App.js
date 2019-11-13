import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import BookList from './components/BookList';
import BookModal from './components/BookModal';
import ScoreModal from './components/ScoreModal';
import { Container } from 'reactstrap';

import { Provider }  from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
 render() {
  return (
    <Provider store={store}>
    <div className="App">
     <AppNavbar />
     <Container>
      <BookModal /> 
      <ScoreModal />
      <BookList />
     </Container>
    </div>
    </Provider>
  );
 }
}
export default App;
