import React from 'react';
import { connect } from 'react-redux';
import Header from './components/header/header.component';
import './App.css';
import Hotdogs from './components/hotdogs/hotdogs.component';

import { setHotdogs } from './redux/hotdogs/hotdogs.actions';
import Modal from './components/modal/modal.component';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchHotDogs();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Modal />
        <Hotdogs />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchHotDogs: () => dispatch(setHotdogs),
});

export default connect(null, mapDispatchToProps)(App);
