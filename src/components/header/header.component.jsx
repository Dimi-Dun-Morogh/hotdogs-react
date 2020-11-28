import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { toggleModal } from '../../redux/hotdogs/hotdogs.actions';
import './header.styles.css';

const Header = ({ showModal }) => (
  <header>
    <div className="logo">
      <img src="https://ocj.com/wp-content/uploads/2016/12/hotdogBig.png" alt="hotdog" />
      <span>crud</span>
    </div>
    <span>
      <CustomButton onClick={() => showModal(true)}>add hotdog</CustomButton>
    </span>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  showModal: (bool) => dispatch(toggleModal(bool)),
});

export default connect(null, mapDispatchToProps)(Header);
